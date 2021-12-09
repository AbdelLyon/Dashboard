import { Component, Input } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  public faPowerOff = faPowerOff;


  @Input() display!: boolean;


  constructor() { console.log(this.display); }
}
