import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from './home.service';
import jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  display_Userimage :any ;
  User_Image:any;
  data: any =[];
  datagetchannel: any =[];
 userid:number =0 ;
  constructor(public spinner :NgxSpinnerService,public router:Router, private http :HttpClient,private toaster:ToastrService) { }
   
  submit(email:any, password:any){
   var body ={
     pemail:email.value.toString(),
     pPass:password.value.toString()}
   const headerDir={
     'Content-Type':'application/json',
     'Accept':'application/json' }
   const requestOptions={
     headers:new HttpHeaders(headerDir)}
     this.spinner.show();
   debugger;
   this.http.post('https://localhost:44380/api/user/Login/',body,requestOptions)
   .subscribe((res:any)=>{
     console.log(res);
    // res=res.toString()
     const responce ={
       token:res.toString()
     }
     localStorage.setItem('token', responce.token);
      let data:any= jwt_decode(responce.token);

      localStorage.setItem('user',JSON.stringify({...data}))
     if(data.role=='admin')
     this.router.navigate(['admin/dashboard'])
     else if (data.role=='user')
     this.router.navigate(['user/dashboard'])
     
     this.userid = data.primarysid;
    //  localStorage.setItem('userid',userid.value);
     console.log(this.userid);
     this.spinner.hide();
   },err=>{
     window.alert("Your password Or Email are wrong ")
     this.router.navigate(['security/login']);
     this.toaster.error('Bad Internet Connection');
     this.spinner.hide();
   })
 }
 uploadImage(file:FormData){
  debugger;
  this.http.post('https://localhost:44380/api/user/UploadImg',file).subscribe((res:any)=>{
    if ( res)
    {
      console.log(res)
    }
    this.User_Image = res.userImage ;
    console.log(res.userImage)
  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toaster.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toaster.error(err.status);}
  )
}
createUser(data : any){
  //showspinner
  this.spinner.show() ;
  debugger;
  data.userImage = this.User_Image;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.post('https://localhost:44380/api/user', data).subscribe((res)=>{
    

    
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toaster.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toaster.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toaster.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )
}
////////////////////////////////Register///////////////////////////////////////
uploadprofilePicture(file:FormData){
  
  this.http.post('https://localhost:44380/api/user/UploadImg' ,file).subscribe(
    (data: any) => {
  this.display_Userimage=data.userImage;
  debugger
  if(data){
  console.log(data);}
  }, err => {
  })
  }
  display_file:any
  // uploadAttachment(file:FormData){

  //   this.http.post('https://localhost:44352/api/User/UploadAttachments' ,file).subscribe(
  //     (data: any) => {
  //   this.display_file=data.atachfile;
  //   debugger
  //   if(data){
  //   console.log(data);}
  //   }, err => {
  //   })
  //   }
    checkusername(data:any)
    { 
      this.http.post('https://localhost:44380/api/user' , data).subscribe(
        (res)=>{
          this.router.navigate(['security/login'])
        },
        (error) => console.log(error))
    }

    signup(data:any)
    {
      data.userImage = this.display_Userimage;
      if(this.display_file == undefined)
      data.atachfile = null;
      else
      data.atachfile = this.display_file;
       console.log(data)
       debugger;
      this.http.post('https://localhost:44380/api/user' , data).subscribe(
        (res)=>{
          if(res==0)
          {
            this.toaster.error("username and national ID already exists ")
          }
          else if(res == 1)
          {
            this.toaster.error("username already exists")
          }
          else if(res == 2)
          {
            this.toaster.error("national ID already exists ")
          }
          else if(res == 3)
          {
            this.toaster.success("Welcome")
          this.router.navigate(['security/login'])
          }
        },
        (error) => console.log(error))
    }
}
