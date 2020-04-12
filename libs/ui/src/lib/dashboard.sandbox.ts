import { Injectable, OnDestroy } from '@angular/core';
import { ApiService, ResultsFragment } from '@nx-covid/api';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { DashboardStore } from './dashboard.store';
import { mapToPieData, NgxData } from './helpers/mappers';

@Injectable({ providedIn: 'root' })
export class DashboardSandbox implements OnDestroy {
  constructor(readonly api: ApiService, readonly store: DashboardStore) {
    this.api
      .getCountryNames()
      .subscribe(data => this.store.countryNames$.next(data));

    this.store.selectedCountries$
      .pipe(
        filter(it => it !== null && it.length !== 0),
        switchMap((selectedCountries: string[]) =>
          this.api.getResults(selectedCountries)
        )
      )
      .subscribe(data => this.store.results$.next(data));
  }

  get pieGridData$(): Observable<NgxData[]> {
    return this.store.results$.pipe(
      filter(data => data != null),
      map(mapToPieData)
    );
  }

  get countryNames$(): Observable<string[]> {
    return this.store.countryNames$.asObservable();
  }

  get selectedCountries(): Observable<string[]> {
    return this.store.selectedCountries$.asObservable();
  }

  get results$(): Observable<ResultsFragment[]> {
    return this.store.results$.asObservable();
  }

  selectCountries(countryNames: string[]) {
    this.store.selectedCountries$.next(countryNames);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy not implemented.');
  }
}
