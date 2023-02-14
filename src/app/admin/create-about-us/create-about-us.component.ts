import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-about-us',
  templateUrl: './create-about-us.component.html',
  styleUrls: ['./create-about-us.component.css']
})
export class CreateAboutUsComponent implements OnInit {

  constructor(private home : HomeService) { }

  AboutUsForme : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here
      aboutUs_Text : new FormControl('',[Validators.required ]) ,
      aboutUs_Image : new FormControl (),
      aboutUs_Text1:new FormControl (),
      aboutUs_Text2:new FormControl (),
      aboutUs_Text3:new FormControl ()
    }
  )

  ngOnInit(): void {
  }
  save(){
    this.home.createAboutUs(this.AboutUsForme.value)
  }
  uploadFile(file:any){
    if (file.length==0){
      return;
    }
    let fileupload = <File>file[0];
    //the end of the path  of file[0] will be 'angular.png'
    const fromData = new FormData();
    fromData.append('file',fileupload,fileupload.name);
    this.home.uploadImageAboutUs(fromData);



  }

}
