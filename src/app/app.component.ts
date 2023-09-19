import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  changeValue(event: any) {
    console.log(event.target.name);
    if (event.target.name == 'increement') {
      this.value = this.value + 1;
    } else if (event.target.name == 'decreement') {
      if (this.value > 0) {
        this.value = this.value - 1;
      }
    }
  }
  title = 'counter_application';
  value = 0;
  plus = '+1';
  minus = '-1';
}
