import { Component } from '@angular/core';
import { animate, style, trigger, state, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('toggleClick', [
      state('true', style({
        left: '100px'
      })),
      state ('false', style({
        left: '0px'
      })),
      transition('true => false', animate('500ms linear')),
      transition('false => true', animate('500ms linear')),
    ])
  ],
  styles: ['div {height: 100px; width: 100px; position: relative;}']
})
export class AppComponent {
  title = 'angular';
  public margin:number = 0;
  public bgColor:string = "red";
  public isClick: string = 'false';
  toggleIsCorrect() {
    this.isClick = this.isClick === 'true' ? 'false' : 'true';
  }
  click() {
    animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")
  }
  mOver() {
    this.bgColor = "blueviolet";
  }
  mLeave() {
    this.bgColor = "blue"
  }
}