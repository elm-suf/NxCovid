import { Component } from '@angular/core';
import { ApiService } from 'libs/api/src/lib/services/api.service';

@Component({
  selector: 'nx-covid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(readonly service: ApiService) {
    this.service.getAll();
  }

  title = 'dashboard';
}
