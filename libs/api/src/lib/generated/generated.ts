import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Country = {
   __typename?: 'Country';
  name?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Result>>>;
  mostRecent?: Maybe<Result>;
};

/** eq - equal to, gt - greater than, lt - less than */
export type DateInput = {
  eq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  results?: Maybe<Array<Maybe<Result>>>;
  result?: Maybe<Result>;
  countries?: Maybe<Array<Maybe<Country>>>;
  country?: Maybe<Country>;
};


export type QueryResultsArgs = {
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<DateInput>;
};


export type QueryResultArgs = {
  country: Scalars['String'];
  date?: Maybe<Scalars['String']>;
};


export type QueryCountriesArgs = {
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCountryArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Result = {
   __typename?: 'Result';
  country?: Maybe<Country>;
  /** format date with date-fns. Help - https://date-fns.org/v2.11.0/docs/format */
  date?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Int']>;
  deaths?: Maybe<Scalars['Int']>;
  recovered?: Maybe<Scalars['Int']>;
  growthRate?: Maybe<Scalars['Float']>;
};


export type ResultDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type CountryNamesQueryVariables = {};


export type CountryNamesQuery = (
  { __typename?: 'Query' }
  & { countries?: Maybe<Array<Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'name'>
  )>>> }
);

export type CountriesResultsQueryVariables = {
  selectedCountries?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CountriesResultsQuery = (
  { __typename?: 'Query' }
  & { countries?: Maybe<Array<Maybe<(
    { __typename?: 'Country' }
    & ResultsFragment
  )>>> }
);

export type ResultsFragment = (
  { __typename?: 'Country' }
  & Pick<Country, 'name'>
  & { series?: Maybe<Array<Maybe<(
    { __typename?: 'Result' }
    & { name: Result['date'], value: Result['confirmed'] }
  )>>>, mostRecent?: Maybe<(
    { __typename?: 'Result' }
    & Pick<Result, 'date' | 'confirmed' | 'deaths' | 'recovered' | 'growthRate'>
  )> }
);

export const ResultsFragmentDoc = gql`
    fragment results on Country {
  name
  series: results {
    name: date
    value: confirmed
  }
  mostRecent {
    date
    confirmed
    deaths
    recovered
    growthRate
  }
}
    `;
export const CountryNamesDocument = gql`
    query countryNames {
  countries {
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CountryNamesGQL extends Apollo.Query<CountryNamesQuery, CountryNamesQueryVariables> {
    document = CountryNamesDocument;
    
  }
export const CountriesResultsDocument = gql`
    query countriesResults($selectedCountries: [String]) {
  countries(names: $selectedCountries) {
    ...results
  }
}
    ${ResultsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CountriesResultsGQL extends Apollo.Query<CountriesResultsQuery, CountriesResultsQueryVariables> {
    document = CountriesResultsDocument;
    
  }