import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/Service/auth.service';
import { HomeService } from 'src/app/Service/home.service';
import { CreateUserChannelComponent } from '../create-user-channel/create-user-channel.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-user-channel',
  templateUrl: './manage-user-channel.component.html',
  styleUrls: ['./manage-user-channel.component.css'],
  providers: [DatePipe]
})
export class ManageUserChannelComponent implements OnInit {
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  myDate:any = new Date();
  count:number=0;
  constructor(private dialog : MatDialog ,public home:HomeService,private datePipe: DatePipe ,private auth:AuthService) { 
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-M-d');
  }

 
  ngOnInit(): void {
    this.home.getAllCategory();
    this.home.getAllUser();
    this.home.getChannelByUserID(Number(this.getTokenUserid()) )
    this.home.getAllHome();

    
  }
 





  openCreatDialog(){
   
   
    if(this.home.channelIdVal!=null)
    window.alert("You are Already have Channel");
    else
    this.dialog.open(CreateUserChannelComponent);
   
  }
   UpdateChannel : FormGroup = new FormGroup(
    {
      channelId:new FormControl() ,
      channelName :new FormControl() ,
      channelDate : new FormControl(this.myDate) ,
      channelDescription: new FormControl() ,
      userId: new FormControl (this.auth.userid),
      categoryId:new FormControl(),
      channelImage:new FormControl()
    }
  )
  openUpdateDialog(channelId2:any,channelName2:any,channelDescription2:any, userId2:any ,categoryId2:any,channelImage2:any) //i send the old course info
  {
    this.channel ={
      channelId:channelId2,
      channelName:channelName2,
      channelDescription :channelDescription2 ,
      userId: userId2,
      categoryId: categoryId2 ,
      channelImage:channelImage2
    }
    this.UpdateChannel.controls['channelImage'].setValue(channelImage2);//the user can't chang the is because i didn't put it in the dialog

    this.UpdateChannel.controls['channelId'].setValue(channelId2);//the user can't chang the is because i didn't put it in the dialog
    this.UpdateChannel.controls['userId'].setValue(userId2);
    this.UpdateChannel.controls['categoryId'].setValue(categoryId2);//the user can't chang the is because i didn't put it in the dialog

    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  

  

  channel:any = {} ;
  
  updatechannel(){
    this.home.updatechannel(this.UpdateChannel.value)
  }
  openDeleteDialog(channelId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteChannel(channelId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
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

 


