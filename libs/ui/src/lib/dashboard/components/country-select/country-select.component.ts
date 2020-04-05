import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '@nx-covid/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-covid-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {
  @Input() countryNames: Observable<Country[]>;
  @Output() selectCountries = new EventEmitter<string[]>();
  constructor() {}

  onSelectedChange($event) {
    this.selectCountries.emit($event);
  }
  ngOnInit(): void {}
}
