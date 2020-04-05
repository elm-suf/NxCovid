import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { ApiModule } from '@nx-covid/api';
import { CountrySelectComponent } from './dashboard/components/country-select/country-select.component';
import { DashboardContainerComponent } from './dashboard/containers/dashboard-container/dashboard-container.component';
import { DashboardDetailComponent } from './dashboard/components/dashboard-detail/dashboard-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ApiModule,
    NbCardModule,
    NbSelectModule
  ],
  declarations: [DashboardContainerComponent, CountrySelectComponent, DashboardDetailComponent],
  exports: [DashboardContainerComponent]
})
export class UiModule {}
