import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from '../Service/home.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [DatePipe]

})
export class VideosComponent implements OnInit {
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any>
  
  @ViewChild('callUpdateCommentdialoge')callUpdateCommentdialoge!:TemplateRef<any>

  @ViewChild('callReplayUpdatedialoge')callReplayUpdatedialoge!:TemplateRef<any>
  
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  
  @ViewChild('callBadReportdialoge')callBadReportdialoge!:TemplateRef<any>

  

  

  

  myDate:any = new Date();
  @Input() videoId: number=0;
  @Input() videoPath : string|undefined
  @Input() videoName : string |undefined

  @Input() releaseDate : string|undefined
  @Input() videoDescription : string|undefined


  @Input() channelId : number|undefined
  @Input() categoryId : number|undefined

  @Input() comments : string|undefined
  @Input() likings : string|undefined
  @Input() channel : string|undefined
  @Input() category : string|undefined


  @Input() commentId: number=0;
  @Input() commenttext : string|undefined
  @Input() commentdate : string|undefined

  @Input() username : string|undefined
  @Input() userImage : string|undefined
  counter:any;
  constructor(private router : Router ,public home:HomeService,private dialog : MatDialog ,private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }  
   ngOnInit(): void {
    this.home.getAllSubscribe();

    //this.home.getAllLike();
    }

///////////////////Bad Report/////////////////////////////////////////////

badReportForme : FormGroup = new FormGroup(
  {
    
    ReportText : new FormControl(),
    channelId: new FormControl(),
  }
)
createBadReport(channelId:number){
  this.badReportForme.controls['channelId'].setValue(channelId);

  this.dialog.open(this.callBadReportdialoge);

  this.save();
}

save()
{
  this.home.createReport(this.badReportForme.value)

}

  ////////////////////Subscribe/////////////////////////////////////////////  
  subscribeForm : FormGroup = new FormGroup(
    {

      
      incomes : new FormControl() ,
      subscribeChannel: new FormControl() ,
      channelId : new FormControl() ,
      channel : new FormControl(),
      userId : new FormControl(Number(this.getTokenUserid())) ,
      user : new FormControl()
      
     
    }
  )
//flag=true;
createSubscribe(channelId:number)
{
//   for(let i=0;i<this.home.dataSubscribe.length;i++)
//   if(this.home.dataSubscribe[i]["channelId"]==channelId && this.home.dataSubscribe[i]["userId"]==Number(this.getTokenUserid()))
//   window.alert("You are Already make Subscribe on this Channel");
// else
// {
  console.log("Channel Id in subscribe :"+channelId);
 this.subscribeForm.controls['subscribeChannel'].setValue("yes");
  this.subscribeForm.controls['channelId'].setValue(channelId);
  this.subscribeForm.controls['incomes'].setValue(100);
  this.home.createSubscribe(this.subscribeForm.value);
  //this.flag=false;
// }

}

getTokenUserid(): number {
  let cus: any = localStorage.getItem('user');
  if(cus==null)
  return 1;
  let obj = JSON.parse(cus);

  return obj.primarysid==null?1:obj.primarysid;
}

//////////////////////Commnet///////////////////////////////

commentForme : FormGroup = new FormGroup(
  {
    //if the database values not take null then i have to send all the atributes here
    commentText   : new FormControl('',[Validators.required ]) ,
    commentDate: new FormControl(this.myDate) ,
    userId: new FormControl (Number(this.getTokenUserid())),
    videoId: new FormControl ('',[Validators.required ])
   }
)

addComment(){
  //this.commentForme.controls['videoId'].setValue(this.videoId);
this.home.createComment(this.commentForme.value)

}

openDialogComment(videoId:number){
  console.log("videoId:"+videoId);
  this.commentForme.controls['videoId'].setValue(videoId);
this.dialog.open(this.callUpdatedialoge);
}
viewComments(videoId:number){
// let video= this.commentForme.controls['videoId'].get(this.videoId);
console.log("========videoId ====="+videoId);
this.home.getCommentById(videoId)
}



Updatecomment : FormGroup = new FormGroup(
  {
    
    commentId:new FormControl() ,
    commentText :new FormControl() ,
    commentDate : new FormControl(this.myDate) ,
    userId: new FormControl(Number(this.getTokenUserid())) ,
    videoId : new FormControl(),
   

  }
)

openDeleteDialog(commentId : any){
  const dialogRef = this.dialog.open(this.callDeleteDialoge);

  dialogRef.afterClosed().subscribe((res)=>{

    if(res!==undefined)

    {

      if(res == "yes")

      this.home.deleteComment(commentId);

      else if(res == "no")

      console.log("Thank you");

    }

  })
}


comment:any = {} ;
callupdateCommentdialoge(commentId2:any,commentText2:any,videoId2:number) //i send the old course info
{
  this.comment ={
    commentId:commentId2,
    commentText:commentText2,
    videoId:videoId2,
  }
  this.Updatecomment.controls['commentId'].setValue(commentId2);//the user can't chang the is because i didn't put it in the dialog
  this.Updatecomment.controls['videoId'].setValue(videoId2);//the user can't chang the is because i didn't put it in the dialog

  //two above to save the old courses without change if i don't do the change on thim
  this.dialog.open(this.callUpdateCommentdialoge); // to open the dialog

}

updateComment(){
  this.home.updateComment(this.Updatecomment.value)
}
//////////////////////////Like/////////////////////////////////
viewLikes(){

  this.home.getAllLike();
  }
  addDisLike(){

    console.log("videoId"+this.likeForme.get('videoId'));
    console.log("Like"+this.likeForme.get('like_'));
    console.log("dislike"+this.likeForme.get('dislike'));
    console.log("userId"+this.likeForme.get('userId'));
    
    this.likeForme.controls['videoId'].setValue(this.videoId);
    this.likeForme.controls['like_'].setValue("false");
    this.likeForme.controls['dislike'].setValue("true");
    this.likeForme.controls['likeCount'].setValue(4);
    
    this.home.createLike(this.likeForme.value);
    
    }
    likeForme : FormGroup = new FormGroup(
  {
    //if the database values not take null then i have to send all the atributes here
   //  likingId: new FormControl(),
    like_:  new FormControl(),
    dislike: new FormControl(),
    likeCount:  new FormControl(),
    userId:  new FormControl(Number(this.getTokenUserid())),
    videoId:  new FormControl(),
   }
)
addLike()
{




  
this.likeForme.controls['videoId'].setValue(this.videoId);
this.likeForme.controls['like_'].setValue("true");
this.likeForme.controls['dislike'].setValue("false");
this.home.createLike(this.likeForme.value);


}
//////////////////////ReplayComment/////////////////////
ReplycommentForme : FormGroup = new FormGroup(
  {
    //if the database values not take null then i have to send all the atributes here
    replayCommentText   : new FormControl('',[Validators.required ]) ,
    replayCommentDate: new FormControl(this.myDate) ,
    userId: new FormControl (Number(this.getTokenUserid())),
    commentId: new FormControl ()
   }
)

openDialogReplyComment(commentId:number)
{
  this.ReplycommentForme.controls['commentId'].setValue(commentId);
  console.log(">>>>>>>>>>>>>>>>>>>>>>commnat id in replay func : "+commentId);

  this.dialog.open(this.callReplayUpdatedialoge);

}

viewReplayComments(commentId:number){
  // let video= this.commentForme.controls['videoId'].get(this.videoId);
  console.log("========videoId ====="+commentId);
  this.home.getReplayCommentById(commentId)
  }

addReplyComment(){
this.home.createReplayComment(this.ReplycommentForme.value)

}

openDeleteReplayDialog(ReplaycommentId : any){
  const dialogRef = this.dialog.open(this.callDeleteDialoge);

  dialogRef.afterClosed().subscribe((res)=>{

    if(res!==undefined)

    {

      if(res == "yes")

      this.home.deleteReplayComment(ReplaycommentId);

      else if(res == "no")

      console.log("Thank you");

    }

  })
}

Replaycomment:any = {} ;
callReplayCUpdatedialoge(ReplaycommentId2:any,commentText2:any,videoId2:number) //i send the old course info
{
  this.Replaycomment ={
    ReplaycommentId:ReplaycommentId2,
    commentText:commentText2,
    videoId:videoId2,
  }
  this.Updatecomment.controls['commentId'].setValue(ReplaycommentId2);//the user can't chang the is because i didn't put it in the dialog
  this.Updatecomment.controls['videoId'].setValue(videoId2);//the user can't chang the is because i didn't put it in the dialog

  //two above to save the old courses without change if i don't do the change on thim
  this.dialog.open(this.callReplayUpdatedialoge); // to open the dialog

}

}
