import { Component, OnInit } from '@angular/core';
import { Country } from '@nx-covid/api';
import { Observable } from 'rxjs';
import { DashboardSandbox } from '../../../dashboard.sandbox';

@Component({
  selector: 'nx-covid-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {
  countryNamesResult: Observable<Country[]>;

  constructor(readonly sandbox: DashboardSandbox) {}

  onSelectedChange($event) {
    console.log($event);
  }
  ngOnInit(): void {}
}
