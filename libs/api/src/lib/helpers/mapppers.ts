import { Country } from '@nx-covid/api';
import { ApolloQueryResult } from 'apollo-client';
import { CountriesResultsQuery, ResultsFragment } from '../generated/generated';

export function fromCountryToName(countries: Country[]): string[] {
  return countries.map(el => el.name);
}

export function mapToResultsFragment(
  res: ApolloQueryResult<CountriesResultsQuery>
): ResultsFragment[] {
  return res.data.countries;
}
