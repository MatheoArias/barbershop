import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  stateNave=false
  onChangeStateNav(){
    this.stateNave=!this.stateNave
  }

  OnClick(){
    this.stateNave=false
  }

}
