import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css'],
  providers: [DatePipe]
})
export class CreateChannelComponent implements OnInit {
  myDate:any = new Date();
  constructor( private datePipe: DatePipe,public  home : HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
  channelForme : FormGroup = new FormGroup(
   {
     //if the database values not take null then i have to send all the atributes here
     channelName : new FormControl('',[Validators.required ]) ,
     channelDate: new FormControl(this.myDate) ,
     channelDescription : new FormControl (),
     userId: new FormControl ('',[Validators.required ]),
     categoryId: new FormControl ('',[Validators.required ]),
     channelImage:new FormControl()
    }
 )

 ngOnInit(): void {
  this.home.getAllCategory();
  this.home.getAllUser();
 }
 save(){
   this.home.createChannel(this.channelForme.value)
 }
 

 uploadFile(file:any){
  if (file.length==0){
    return;
  }
  let fileupload = <File>file[0];
  
  //the end of the path  of file[0] will be 'angular.png'
  const fromData = new FormData();
  fromData.append('file',fileupload,fileupload.name);
  this.home.uploadImageChannel(fromData);
}

}
