import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url="http://localhost:8080"
  constructor(private http: HttpClient) {
  }
    doLogin(credentials:any){
       return this.http.put(`${this.url}/users/login`,credentials, {responseType: 'text'});
       

    }

  //for login
  login(username: string){
    localStorage.setItem("user",username)
    return true;
  }

  //to check login
  isLoggedIn(){
    let user=localStorage.getItem("user");
    if(user==undefined || user==='' || user==null)
    return false;
    else return true;
  }

  //to logout
  logout(){
    localStorage.removeItem("user");
    return true;
  }

}
