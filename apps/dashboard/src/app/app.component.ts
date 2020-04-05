import { Component } from '@angular/core';
import { Country, CountryNamesGQL } from '@nx-covid/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-covid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countryNamesResult: Observable<Country[]>;
  title = 'dashboard';

  constructor(readonly countryNames: CountryNamesGQL) {
    this.countryNamesResult = this.countryNames
      .watch()
      .valueChanges.pipe(map(res => res.data.countries));
  }

  onSelectedChange($event) {
    console.log($event);
  }
}
