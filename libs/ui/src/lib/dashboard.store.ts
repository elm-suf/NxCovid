import { Injectable } from '@angular/core';
import { ResultsFragment } from '@nx-covid/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardStore {
  countryNames$ = new BehaviorSubject<string[]>(null);
  selectedCountries$ = new BehaviorSubject<string[]>(null);
  results$ = new BehaviorSubject<ResultsFragment[]>(null);
}
