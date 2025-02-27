import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  imports: [TuiRoot,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'AngularFlaskComprehensive';
}