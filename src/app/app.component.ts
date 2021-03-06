import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo2';
  autore = 'Giovanni';
  contatore = 0;
  url : string = null;
  imageHeight = 100;

  users = {
    name : 'Mr Darcy',
    gender : 'F',
    city : 'Treviso'
  }

  somma (num1 : number , num2 : number) : number {
    return num1 + num2;
  }
  increment () : void {
    this.contatore = this.contatore + 1;
  }
  decrement () : void {
    this.contatore = this.contatore - 1;
  }
  loadImage() : void {
    this.url = 'data:image/png;base64,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';
  }

  unloadImage() : void {
    this.url = null;
  }
  clickOnImage() : void {
    alert('ciao');
  }

  onKeyUp(pdataDiNascita:string) : void {
    this.autore = pdataDiNascita;

  }
  incrementImage (){
    this.imageHeight = this.imageHeight + 10;
  }
  decrementImage () : void {
    this.imageHeight = this.imageHeight - 10;
  }

}
