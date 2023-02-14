import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Service/home.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-create-user-channel',
  templateUrl: './create-user-channel.component.html',
  styleUrls: ['./create-user-channel.component.css'],
  providers: [DatePipe]
})
export class CreateUserChannelComponent implements OnInit {
  myDate:any = new Date();
  constructor(private datePipe: DatePipe ,public home : HomeService , private auth :AuthService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }
   channelForme : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here
      channelName : new FormControl('',[Validators.required ]) ,
      channelDate: new FormControl(this.myDate) ,
      channelDescription : new FormControl (),
      userId: new FormControl (Number(this.getTokenUserid())),
      categoryId: new FormControl ('',[Validators.required ]),
      channelImage:new FormControl ()
     }
  )

  ngOnInit(): void {
    this.home.getAllCategory();
  }
  save(){
    this.home.createChannel(this.channelForme.value)
  }

  getTokenUserid(): number {
    let cus: any = localStorage.getItem('user');
    let obj = JSON.parse(cus);

    return obj.primarysid;
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
