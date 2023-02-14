import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateUserVideoComponent } from '../create-user-video/create-user-video.component';

@Component({
  selector: 'app-manage-video',
  templateUrl: './manage-video.component.html',
  styleUrls: ['./manage-video.component.css'],
  providers: [DatePipe]

})
export class ManageVideoComponent implements OnInit {
  myDate:any = new Date();
  channelId:number=0;
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any>
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  constructor(private datePipe: DatePipe,private dialog : MatDialog ,public home:HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

   }

   
  ngOnInit() : void {
   this.home.getChannelByUserID(Number(this.getTokenUserid()));
   this.home.getAllHome();

  

  }
openCreatDialog(){
    this.dialog.open(CreateUserVideoComponent) //to open the dialog in it

  }
  UpdateVideoForm : FormGroup = new FormGroup(
    {

      videoId: new FormControl(),
      videoPath: new FormControl(),
      videoName: new FormControl(),
      releaseDate: new FormControl(this.myDate),
      videoDescription:new FormControl(),
      channelId:new FormControl(),


    }
  )
  video:any = {} ;
  openUpdateDialog(videoId2:any,videoPath2:any,videoName2:any,
    videoDescription2:any,channel2:any) //i send the old course info
  {
    this.video ={
      videoId:videoId2,
      videoPath :videoPath2 ,
      videoName :videoName2 ,
      releaseDate: new FormControl(this.myDate),
      videoDescription:videoDescription2,
      channelId:channel2,

    }
    //console.log("category Image ===================="+categoryImage2);
    this.UpdateVideoForm.controls['videoId'].setValue(videoId2);//the user can't chang the is because i didn't put it in the dialog
    this.UpdateVideoForm.controls['videoPath'].setValue(videoPath2);
    
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  updateVideo(){
    this.home.updateVideo(this.UpdateVideoForm.value)
  }

  uploadFile(file:any){
    if (file.length==0){
      return;
    }
    let fileupload = <File>file[0];
    //the end of the path  of file[0] will be 'angular.png'
    const fromData = new FormData();
    fromData.append('file',fileupload,fileupload.name);
    this.home.uploadVideo(fromData);



  }

  getTokenUserid(): number {
    let cus: any = localStorage.getItem('user');
    let obj = JSON.parse(cus);

    return obj.primarysid;
  }

  openDeleteDialog(videoId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteVideo(videoId);

        else if(res=="no")

        console.log("Thank you");

      }

    })
  }


}
