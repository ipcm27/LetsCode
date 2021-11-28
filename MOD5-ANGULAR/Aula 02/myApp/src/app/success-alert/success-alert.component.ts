import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})

imports: [
  
  FormsModule
  ]
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  username: string = '';

  ngOnInit(): void {}
}
