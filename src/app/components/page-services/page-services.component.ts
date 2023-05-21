import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-page-services',
  templateUrl: './page-services.component.html',
  styleUrls: ['./page-services.component.scss']
})
export class PageServicesComponent {

  stepOne=true;
  stepTwo=false;
  stepThree=false;
  stepFour=false;
  stepFive=false;

  @HostListener('window:scroll')
  onScroll():void {
    const valueScroll=window.scrollY
    if(valueScroll>150){
      this.stepTwo=true
    }
    if(valueScroll>250){
      this.stepThree=true
    }
    if(valueScroll>280){
      this.stepFour=true
    }
    if(valueScroll>300){
      this.stepFive=true
    }
  }
}
