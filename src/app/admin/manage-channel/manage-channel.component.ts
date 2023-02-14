import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateChannelComponent } from '../create-channel/create-channel.component';


@Component({
  selector: 'app-manage-channel',
  templateUrl: './manage-channel.component.html',
  styleUrls: ['./manage-channel.component.css'],
  providers: [DatePipe]
})
export class ManageChannelComponent implements OnInit {
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  myDate:any = new Date();
  secondaryTable: any;
  
  constructor(private dialog : MatDialog ,private datePipe: DatePipe,public home:HomeService) {
    this.myDate = this.datePipe.transform(this.myDate,'yyyy-MM-dd');
   }

  ngOnInit(): void {
    this.home.getAllChannel();
    this.home.getAllCategory();
    this.home.getAllUser();
    this.home.getAllHome();
    
    this.secondaryTable=this.home.data;
  }
  openCreatDialog(){
    this.dialog.open(CreateChannelComponent) //to open the dialog in it
   }

   UpdateChannel : FormGroup = new FormGroup(
    {
      channelId:new FormControl() ,
      channelName :new FormControl() ,
      channelDate : new FormControl(this.myDate) ,
      channelDescription: new FormControl() ,
      userId : new FormControl(),
      categoryId:new FormControl(),
      channelImage:new FormControl(),

    }
  )
  channel:any = {} ;
  openUpdateDialog(channelId2:any,channelName2:any,channelDescription2:any,userId2:any,categoryId2:any,channelImage2:any) //i send the old course info
  {
    this.channel ={
      channelId:channelId2,
      channelName:channelName2,
      channelDescription :channelDescription2 ,
      userId :userId2 ,
      categoryId: categoryId2 ,
      channelImage:channelImage2
    }
    this.UpdateChannel.controls['channelImage'].setValue(channelImage2);
    this.UpdateChannel.controls['channelId'].setValue(channelId2);//the user can't chang the is because i didn't put it in the dialog
    this.UpdateChannel.controls['userId'].setValue(userId2);
    this.UpdateChannel.controls['categoryId'].setValue(categoryId2);
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
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


  addToAnotherTable(id:number){
    this.secondaryTable.push(id);
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
