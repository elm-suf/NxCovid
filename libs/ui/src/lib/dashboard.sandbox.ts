import { Injectable, OnDestroy } from '@angular/core';
import { CountryNamesGQL } from '@nx-covid/api';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { DashboardStore } from './dashboard.store';
import { fromCountryToName } from './helpers/mapppers';

@Injectable({ providedIn: 'root' })
export class DashboardSandbox implements OnDestroy {
  constructor(
    readonly countryNamesGQL: CountryNamesGQL,
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
  }

  get countryNames(): Observable<string[]> {
    return this.store.countryNames$.asObservable();
  }

  get selectedCountries(): Observable<string[]> {
    return this.store.selectedCountries.asObservable();
  }

  selectCountries(countryNames: string[]) {
    this.store.selectedCountries.next(countryNames);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy not implemented.');
  }
}
