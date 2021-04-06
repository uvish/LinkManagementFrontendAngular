import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  credentials={
    "username":"",
    "password":"",
  }
  constructor(private registerService:RegisterService,private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
 
  onSubmit(){

    if(this.credentials["username"] === '' || this.credentials["password"] ==='')
    {this.openSnackBar("Fields can't be empty","Ok")}
    else{
    this.registerService.register(this.credentials).subscribe(
      response=>{
        console.log(response);
            this.openSnackBar(response,"Ok");
      },
      error=>{
         console.log(error)
         this.openSnackBar(error,"Ok");
      } 
    )
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }

}
