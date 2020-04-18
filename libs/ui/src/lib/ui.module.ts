import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbAutocompleteModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule
} from '@nebular/theme';
import { ApiModule } from '@nx-covid/api';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from '../../../../apps/dashboard/src/environments/environment';
import { CountrySelectComponent } from './dashboard/components/country-select/country-select.component';
import { DashboardDetailComponent } from './dashboard/components/dashboard-detail/dashboard-detail.component';
import { DashboardContainerComponent } from './dashboard/containers/dashboard-container/dashboard-container.component';
import { MapComponent } from './dashboard/components/map/map.component';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ApiModule,
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbAutocompleteModule,
    NbIconModule,
    NbEvaIconsModule,
    NbFormFieldModule,
    NbLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.MAP_BOX_TOKEN
    })
  ],
  declarations: [
    DashboardContainerComponent,
    CountrySelectComponent,
    DashboardDetailComponent,
    MapComponent
  ],
  exports: [DashboardContainerComponent]
})
export class UiModule {}
