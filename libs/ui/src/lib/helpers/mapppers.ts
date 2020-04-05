import { Country } from '@nx-covid/api';

export function fromCountryToName(countries: Country[]): string[] {
  return countries.map(el => el.name);
}
