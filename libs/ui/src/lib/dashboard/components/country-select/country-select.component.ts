import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nx-covid-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {
  @Input() countryNames: string[];
  @Input() slectedCountries: string[];
  @Output() selectCountries = new EventEmitter<string>();
  @Output() deSelectCountry = new EventEmitter<string>();

  filteredOptions$ = new BehaviorSubject<string[]>(null);
  value: string;

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions$ = new BehaviorSubject(this.countryNames);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countryNames.filter(optionValue =>
      optionValue.toLowerCase().includes(filterValue)
    );
  }

  onModelChange(value) {
    this.filteredOptions$.next(this.filter(value));
  }

  onSelectedChange($event: string) {
    console.log('onSelectedChange', $event);
    this.value = '';
    if ($event.length) this.selectCountries.emit($event);
  }

  onDeselectedChange($event: string) {
    console.log('deselect', $event);
    this.deSelectCountry.emit($event);
  }
}
