import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardSandbox } from '../../../dashboard.sandbox';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nx-covid-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  view: any[] = [360, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(readonly sandbox: DashboardSandbox) {}

  onSelect(event) {
    console.log(event);
  }
  onGeolocate($event) {
    console.log($event);
  }
  ngOnInit(): void {}
}
