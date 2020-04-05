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
  date?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Int']>;
  deaths?: Maybe<Scalars['Int']>;
  recovered?: Maybe<Scalars['Int']>;
  growthRate?: Maybe<Scalars['Float']>;
};


export type ResultDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type CountryFragmentFragment = (
  { __typename?: 'Country' }
  & Pick<Country, 'name'>
  & { results?: Maybe<Array<Maybe<(
    { __typename?: 'Result' }
    & Pick<Result, 'date' | 'confirmed' | 'deaths' | 'recovered' | 'growthRate'>
  )>>> }
);

export type AllCountriesQueryVariables = {};


export type AllCountriesQuery = (
  { __typename?: 'Query' }
  & { countries?: Maybe<Array<Maybe<(
    { __typename?: 'Country' }
    & CountryFragmentFragment
  )>>> }
);

export const CountryFragmentFragmentDoc = gql`
    fragment countryFragment on Country {
  name
  results {
    date
    confirmed
    deaths
    recovered
    growthRate
  }
}
    `;
export const AllCountriesDocument = gql`
    query allCountries {
  countries {
    ...countryFragment
  }
}
    ${CountryFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AllCountriesGQL extends Apollo.Query<AllCountriesQuery, AllCountriesQueryVariables> {
    document = AllCountriesDocument;
    
  }