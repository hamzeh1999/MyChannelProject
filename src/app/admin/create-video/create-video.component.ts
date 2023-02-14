import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.css'],
  providers: [DatePipe]
})
export class CreateVideoComponent implements OnInit {
  myDate:any = new Date();
  constructor( private datePipe: DatePipe,public home : HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }

  videoForme : FormGroup = new FormGroup(
   {
    //"videoId": 1,
        videoPath: new FormControl(),
        videoName: new FormControl(),
        releaseDate: new FormControl(this.myDate),
        videoDescription:new FormControl(),
        channelId:new FormControl(),
        categoryId:new FormControl(),


   }
 )
 ngOnInit(): void {
  //  this.home.getAllCategory();
  //  this.home.getAllChannel();
  console.log("---------------------------------"+this.myDate);

}
 save(){
   this.home.createVideo(this.videoForme.value)
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
   this.home.uploadVideo(fromData);


 }

}
