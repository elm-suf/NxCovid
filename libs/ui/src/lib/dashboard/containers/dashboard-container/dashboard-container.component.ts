import { Component, OnInit } from '@angular/core';
import { DashboardSandbox } from '../../../dashboard.sandbox';

@Component({
  selector: 'nx-covid-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  constructor(readonly sandbox: DashboardSandbox) {}

  ngOnInit(): void {}
}
