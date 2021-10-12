import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number = 26.20540;
  RecieverName: string = "";
  RecieverDate: string = "";
  amount: string = "";
  miles: string = "";

  onInputName(value: string) {
  this.RecieverName = value;
  }

  onInputDate(value: string) {
    this.RecieverDate = value;
  }

  onInputAmount(value: string) {
    this.amount = value;
  }

  onInputMiles(value: string) {
    this.miles = value;
  }
}
