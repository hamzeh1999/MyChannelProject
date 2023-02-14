import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {

  constructor(private home : HomeService) {}
  homeForme : FormGroup = new FormGroup(
   {
     //if the database values not take null then i have to send all the atributes here
     logo : new FormControl() ,
     phoneNumber : new FormControl (),
     websiteName: new FormControl (),
     backgroundImage: new FormControl (),
     address: new FormControl (),
     aboutusId: new FormControl (),
     contactusId: new FormControl (),
     socialMedia: new FormControl (),
     description_: new FormControl (),
    
    }
 )
 uploadFile(file1:any){
  if (file1.length==0){
    return;
  }
  let fileupload = <File>file1[0];
  //the end of the path  of file[0] will be 'angular.png'
  const fromData = new FormData();
  fromData.append('file',fileupload,fileupload.name);
  this.home.uploadImageHome(fromData);
}
uploadFileLogo(file:any){
  if (file.length==0){
    return;
  }
  let fileupload = <File>file[0];
  //the end of the path  of file[0] will be 'angular.png'
  const fromData = new FormData();
  fromData.append('file',fileupload,fileupload.name);
  this.home.uploadImageHomeLogo(fromData);
}

 ngOnInit(): void {
 }
 save(){
   this.home.createHome(this.homeForme.value)
 }
}
