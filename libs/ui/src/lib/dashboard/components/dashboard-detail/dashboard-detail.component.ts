import { Component, Input, OnInit } from '@angular/core';
import { ResultsFragment } from '@nx-covid/api';

@Component({
  selector: 'nx-covid-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {
  @Input() results: ResultsFragment[];

  constructor() {}

  ngOnInit(): void {}
}
