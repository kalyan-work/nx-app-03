import { Component } from '@angular/core';
import { getFoo } from "../../../../libs/common-utils/src/";

@Component({
  selector: 'accounts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `accounts-app ${getFoo()}`;
}
