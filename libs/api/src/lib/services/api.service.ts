import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  getAll() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            # time series data
            results(countries: ["US", "Canada"], date: { lt: "3/10/2020" }) {
              country {
                name
              }
              date
              confirmed
              deaths
              recovered
              growthRate
            }

            # by country
            country(name: "US") {
              name
              mostRecent {
                date(format: "yyyy-MM-dd")
                confirmed
              }
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        console.log('getAll', result);
      });
  }
}
