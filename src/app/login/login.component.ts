import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Nicola";
  password: string = "";

  autenticato: boolean = true;
  consentito: boolean = false;
  errMsg: string = "Spiacente, la userid e/o la password sono errati!"
  okMsg: string = "accesso consentito";
  constructor() { }

  ngOnInit(): void {
  }

gestAuth =(): void => {
  console.log(this.userId);

  if(this.userId === "Nicola" && this.password === "123_stella"){
    this.autenticato = true;
    this.consentito = true;
  }
  else{
    this.autenticato = false;
    this.consentito = false;
  }
}

}
