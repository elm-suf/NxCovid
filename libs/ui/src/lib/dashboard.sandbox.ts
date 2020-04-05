import { Injectable, OnDestroy } from '@angular/core';
import {
  CountriesResultsGQL,
  CountryNamesGQL,
  ResultsFragment
} from '@nx-covid/api';
import { Observable } from 'rxjs';
import { filter, map, pluck, switchMap, tap } from 'rxjs/operators';
import { DashboardStore } from './dashboard.store';
import { fromCountryToName } from './helpers/mapppers';

@Injectable({ providedIn: 'root' })
export class DashboardSandbox implements OnDestroy {
  constructor(
    readonly countryNamesGQL: CountryNamesGQL,
    readonly resultsGQL: CountriesResultsGQL,
    readonly store: DashboardStore
  ) {
    this.countryNamesGQL
      .watch()
      .valueChanges.pipe(
        pluck('data', 'countries'),
        map(fromCountryToName),
        tap(console.log)
      )
      .subscribe(data => this.store.countryNames$.next(data));

    this.store.selectedCountries$
      .pipe(
        filter(it => it !== null && it.length !== 0),
        switchMap(
          (selectedCountries: string[]) =>
            this.resultsGQL.watch({ selectedCountries }).valueChanges
        ),
        map(res => res.data.countries),
        tap(res => console.log('new data', res))
      )
      .subscribe(data => this.store.results$.next(data));
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
