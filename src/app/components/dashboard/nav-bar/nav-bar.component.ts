import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  faBars = faBars;
  faSignOutAlt = faSignOutAlt;

  @Input() public display!: boolean;
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  displaySideBar = () => this.eventEmitter.emit();

}
