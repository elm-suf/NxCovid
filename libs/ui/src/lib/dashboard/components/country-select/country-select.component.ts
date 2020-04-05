import { Component, OnInit } from '@angular/core';
import { Country, CountryNamesGQL } from '@nx-covid/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-covid-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {
  countryNamesResult: Observable<Country[]>;

  constructor(readonly countryNames: CountryNamesGQL) {
    this.countryNamesResult = this.countryNames
      .watch()
      .valueChanges.pipe(map(res => res.data.countries));
  }

  onSelectedChange($event) {
    console.log($event);
  }
  ngOnInit(): void {}
}
