import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [CommonModule, GraphQLModule, HttpClientModule]
})
export class ApiModule {}
