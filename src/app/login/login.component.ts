import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials={
    "username":"",
    "password":"",
  }


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.doLogin(this.credentials).subscribe(
      response=>{
     console.log(response);
     this.loginService.login(response)
     window.location.href="/dashboard"
    },
    error=>{
      console.log(error);
    })
    console.log("submit");
  }

}
