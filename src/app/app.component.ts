import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loginService:LoginService){

  }
  title = 'angularLogin';
  public loggedIn=false;
  ngOnInit():void{
    this.loggedIn=this.loginService.isLoggedIn();
  }
  logoutUser(){
    this.loginService.logout();
    location.reload();
  }
}
