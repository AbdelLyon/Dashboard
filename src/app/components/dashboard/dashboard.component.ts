import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public display: boolean = true;

  constructor() { }

  displaySideBar = () => setTimeout(() => this.display = !this.display, 200);

  onActionEvent = () => this.displaySideBar();
}