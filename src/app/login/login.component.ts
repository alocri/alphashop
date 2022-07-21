import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Nicola";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

gestAuth =(): void => {
  console.log(this.userId);
}

}
