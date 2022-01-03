import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Larissa';

  username: string = '';
  showPassword = false;
  log: Array<Date> = [];

  checkUsername() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }

  onToggleDetails() {
    this.showPassword = !this.showPassword;
    this.log.push(new Date());
  }
}
