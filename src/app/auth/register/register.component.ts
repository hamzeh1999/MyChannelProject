// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/Service/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   RegisterForm : FormGroup=new FormGroup({
   
//     userName :new FormControl('',[Validators.required]),
//     userImage : new FormControl('',[Validators.required ]),
//     userAge:new FormControl('',[Validators.required]),
//     addressUser : new FormControl('',[Validators.required ]),
//     registerDate:new FormControl('',[Validators.required]),
//     email : new FormControl('',[Validators.required ]),
//     password_:new FormControl('',[Validators.required]),
//     roleId:new FormControl(2),
//     comments:new FormControl(),
//     channels:new FormControl(),
//     likings: new FormControl(),
//     notifications:new FormControl(),
//     replyComments:new FormControl(),
//     subscribes: new FormControl(),
//     testimonials:new FormControl(),
//     role:new FormControl()
//     })

//   constructor(public auth :AuthService , private http:HttpClient) { }
//   Cities : any = [{}]
//   selectedDay: number = 0;
//   RadioSelect:any;
//   isShown: boolean = false;
//   ngOnInit(): void {
//   }


  
//   createUser(){
//     this.auth.signup(this.RegisterForm.value)
//   }
//   save(){


//   }
//   // uploadFile(files:any) {
//   //   if (files.length === 0) {
//   //   return;
//   //   }
//   //   let fileToUpload = <File>files[0];
//   //   const formData = new FormData();
//   //   formData.append('file1', fileToUpload, fileToUpload.name);
//   //   this.auth.uploadAttachment(formData);
//   //   }
//     checkusername()
//     {
//       this.auth.checkusername(this.RegisterForm.controls["userName"].value)
//     }
//     uploadImage(files:any) {
//       if (files.length === 0) {
//       return;
//       }
//       let fileToUpload = <File>files[0];
//       const formData = new FormData();
//       formData.append('file', fileToUpload, fileToUpload.name);
//       this.auth.uploadprofilePicture(formData);
//       }
//   //event handler for the select element's change event
 
//   RadioChangeHandler (event: any) {
//     //update the ui
//     this.RadioSelect = event.target.value;
//     console.log(this.RadioSelect);
//     if(this.RadioSelect == "false")// That Means Donator
//     {
//       this.isShown = false;
//       this.RegisterForm.controls['roleId'].setValue(Number(4))
//       this.RegisterForm.controls['comments'].setValue(null)
//       this.RegisterForm.controls['channels'].setValue(null)
//       this.RegisterForm.controls['likings'].setValue(null)
//       this.RegisterForm.controls['notifications'].setValue(null)
//       this.RegisterForm.controls['replyComments'].setValue(null)
//       this.RegisterForm.controls['subscribes'].setValue(null)
//       this.RegisterForm.controls['testimonials'].setValue(null)
//       this.RegisterForm.controls['role'].setValue(null)
//     }
//     else
//     {
//       // That Means Beneficiaries
//       this.isShown = true;
//       this.RegisterForm.controls['roleId'].setValue(Number(5))

//     }
//     console.log(this.RegisterForm.value)
//   }

// }
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { HomeService } from 'src/app/Service/home.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DatePipe]

})
export class RegisterComponent implements OnInit {
  myDate:any = new Date();
  constructor(private router:Router,private datePipe: DatePipe,public home:HomeService,private auth:AuthService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

   }
  registerForm:FormGroup = new FormGroup(
    {
      userName : new FormControl('',[Validators.required ]) ,
      userImage : new FormControl (),
      userAge:new FormControl (),
      registerDate:new FormControl (this.myDate),
      addressUser:new FormControl (),
      email:new FormControl('',[Validators.required ]) ,
      password_:new FormControl('',[Validators.required ]) ,
      roleId:new FormControl (2),
  })




  ngOnInit(): void {
  }
  submit(){
    console.log(this.registerForm.value);
    this.auth.createUser(this.registerForm.value);
    this.router.navigate(['security/login'])


  }
  goToLogin(){
    this.router.navigate(['security/login']);
  }


uploadFile(file:any){
  if (file.length==0){
    return;
  }
  let fileupload = <File>file[0];
  //the end of the path  of file[0] will be 'angular.png'
  const fromData = new FormData();
  fromData.append('file',fileupload,fileupload.name);
  console.log("form Date==================================="+fromData);
  this.home.uploadImageUser(fromData);


}

submit2(){

  

  localStorage.getItem('email');
  localStorage.getItem('password');
  localStorage.getItem('nameid');
  console.log(localStorage.getItem('nameid'));



}

}
