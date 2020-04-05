import { Component } from '@angular/core';
import { AllCountriesGQL, CountryFragment } from '@nx-covid/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-covid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allCountriesResult: Observable<CountryFragment[]>;

  constructor(readonly allCountries: AllCountriesGQL) {
    this.allCountriesResult = this.allCountries
      .watch()
      .valueChanges.pipe(map(res => res.data.countries));
  }
  title = 'dashboard';
}
