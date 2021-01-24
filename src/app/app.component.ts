import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  autore = 'Giovanni';
  somma (num1 : number , num2 : number) : number {
    return num1 + num2;
  }


}
