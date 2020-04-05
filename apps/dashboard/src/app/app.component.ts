import { Component } from '@angular/core';
import { AllCountriesGQL } from '@nx-covid/api';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'nx-covid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allCountriesResult: any;

  constructor(readonly allCountries: AllCountriesGQL) {
    this.allCountriesResult = this.allCountries
      .watch()
      .valueChanges.pipe(pluck('data'));
  }
  title = 'dashboard';
}
