import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../Service/home.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
declare const myTest: any;
@Component({
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.css'],
  providers: [DatePipe]
})
export class VideosCardComponent implements OnInit {
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 

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
  counter:any;
  constructor(private router : Router ,public home:HomeService,private dialog : MatDialog ,private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }
  commentForme : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here
      commentText   : new FormControl('',[Validators.required ]) ,
      commentDate: new FormControl(this.myDate) ,
      userId: new FormControl (Number(this.getTokenUserid())),
      videoId: new FormControl ('',[Validators.required ])
     }
  )

  // videoLikeId:number|undefined;

addLike()
{

  this.likeForme.controls['videoId'].setValue(this.videoId);
  this.likeForme.controls['like_'].setValue("true");
  this.likeForme.controls['dislike'].setValue("false");
 
 
  this.home.createLike(this.likeForme.value);
  

  
  

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

  ngOnInit(): void {
    
    this.home.getAllLike();
   
  }

  getTokenUserid(): number {
    let cus: any = localStorage.getItem('user');
    if(cus==null)
    return 1;
    let obj = JSON.parse(cus);

    return obj.primarysid==null?1:obj.primarysid;
  }
 
  addComment(){
    this.commentForme.controls['videoId'].setValue(this.videoId);
  this.home.createComment(this.commentForme.value)

}

openDialogComment(){
  this.dialog.open(this.callUpdatedialoge); 
}
viewComments(videoId:number){
 // let video= this.commentForme.controls['videoId'].get(this.videoId);
  console.log("========videoId ====="+videoId);
  this.home.getCommentById(videoId)
}
viewLikes(){
 
  this.home.getAllLike();
}

}
