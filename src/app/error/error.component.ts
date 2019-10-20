import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

errorMessage = 'An error occured please contact me @ naoufal18@gmail.com';

  constructor() { }

  ngOnInit() {
  }

}
