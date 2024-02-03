import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('rotateFadeHide', [
      state('visible', style({ opacity: 1, transform: 'rotate(0deg)' })),
      state('hidden', style({ opacity: 0, transform: 'rotate(360deg)' })),
      transition('visible => hidden', [
        animate('2s ease-out', style({ opacity: 0 })),
        animate('2s', style({ transform: 'rotate(720deg)' })),
      ]),
    ]),
  ], 
})
export class HomeComponent {
  buttonPosition: ButtonPosition = { top: '63%', left: '50%' };
  clickedcount: number = 1;
  image:boolean=false
  performAnimation: boolean = false;
  buttonhide: boolean=true;
  yesimag: boolean=false;
  msg:string='Will you go out with me?'
  windowWidth: number = window.innerWidth;
  windowHeight: number = window.innerHeight;
  toggleAnimation() {
    this.performAnimation = !this.performAnimation;
  
    // Update the button position dynamically
    this.buttonPosition = {
      top: `48%`,
      left: `37%`
    };
    if(this.windowWidth<450){
      this.buttonPosition = {
        top: `42%`,
        left: `10%`
      };
    }
    if(this.clickedcount!=1){
    this.clickedcount = this.clickedcount + 1;
    }
    else{
      console.log(this.clickedcount)
      this.clickedcount = 1
      this.image=true
      setTimeout(() => {
        this.buttonhide=false
        this.image=false
      }, 1000);
    }
  }
  toggleyes(){
    this.yesimag=true
    this.msg='Pick a date <3 IG:prasanna_chandrasekar'
    this.buttonhide=false
  }
 
}
interface ButtonPosition {
  top: string;
  left: string;
}
