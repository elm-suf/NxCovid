import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import {
  CountriesResultsGQL,
  CountryNamesGQL,
  ResultsFragment
} from '../generated/generated';
import { fromCountryToName } from '../helpers/mapppers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    readonly countryNamesGQL: CountryNamesGQL,
    readonly resultsGQL: CountriesResultsGQL
  ) {}

  getCountryNames(): Observable<string[]> {
    return this.countryNamesGQL
      .watch()
      .valueChanges.pipe(pluck('data', 'countries'), map(fromCountryToName));
  }

  getResults(selectedCountries: string[]): Observable<ResultsFragment[]> {
    return this.resultsGQL.watch({ selectedCountries }).valueChanges.pipe(
      map(res => res.data.countries),
      tap(console.table)
    );
  }
}
