import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardStore {
  countryNames$ = new BehaviorSubject<string[]>(null);
  selectedCountries = new BehaviorSubject<string[]>(null);
}
