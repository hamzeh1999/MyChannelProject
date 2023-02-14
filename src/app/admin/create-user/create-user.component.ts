import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';
import { DatePipe } from '@angular/common';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [DatePipe]


})
export class CreateUserComponent implements OnInit {
  myDate:any = new Date();
  constructor( private datePipe: DatePipe,public home : HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }

  userForme : FormGroup = new FormGroup(
   {
     //if the database values not take null then i have to send all the atributes here
     userName : new FormControl('',[Validators.required ]) ,
     userImage : new FormControl (),
     userAge:new FormControl (),
     registerDate:new FormControl (this.myDate),
     addressUser:new FormControl (),
     email:new FormControl('',[Validators.required ]) ,
     password_:new FormControl('',[Validators.required ]) ,
     roleId:new FormControl (),
      // comments: new FormControl() ,
      // channels: new FormControl() ,
      // likings: new FormControl() ,
      // notifications: new FormControl() ,
      // replyComments: new FormControl() ,
      // subscribes: new FormControl() ,
      // testimonials: new FormControl() ,
      // role: new FormControl() 
   }
 )
 ngOnInit(): void {
  console.log("---------------------------------"+this.myDate);
    this.home.getAllRoleforUser(); 
}
 save(){
   this.home.createUser(this.userForme.value)
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


}
