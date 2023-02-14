import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { HomeService } from 'src/app/Service/home.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('',[Validators.required,Validators.email]);
password=new FormControl('',[Validators.required,Validators.minLength(8)]);
hide=false;
hide1=false;
constructor(private router:Router,private spinner:NgxSpinnerService,private dialog : MatDialog , public auth: AuthService) { }
 ngOnInit(): void {
  }
  submit(){
    console.log(this.email.value);
    console.log(this.password.value);
    // this.router.navigate(['home']); 
    
    this.auth.submit(this.email,this.password);
    
  }
  goToRegister(){
    this.spinner.show();
    this.router.navigate(['security/register'])
    this.spinner.hide();
  }
  showError()
  {
    this.hide1=!this.hide1;
    console.log("showErrorEmail======"+this.hide1);
    return this.hide1;
  }
  showError2()
  {this.hide=!this.hide;
    console.log("showError2Password======"+this.hide);
    return this.hide;
    
  }
  openCreatDialog(){
    this.dialog.open(RegisterComponent) //to open the dialog in it

  }
  submit2(){
    
      localStorage.setItem('email', this.email.value);
      localStorage.setItem('password', this.password.value);
   
      localStorage.getItem('email');
      localStorage.getItem('password');
      localStorage.getItem('nameid');
      console.log(localStorage.getItem('nameid'));
   


  }
 



}
