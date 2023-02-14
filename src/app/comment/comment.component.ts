import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../Service/home.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [DatePipe]

})
export class CommentComponent implements OnInit {
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  myDate:any = new Date();
  @Input() commentId: number=0;
  @Input() commenttext : string|undefined
  @Input() commentdate : string|undefined
  
  @Input() username : string|undefined
  @Input() userImage : string|undefined


  constructor(private dialog : MatDialog,public home :HomeService,private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

   }

  ngOnInit(): void {
  }


  ReplycommentForme : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here
      replayCommentText   : new FormControl('',[Validators.required ]) ,
      replayCommentDate: new FormControl(this.myDate) ,
      userId: new FormControl (Number(this.getTokenUserid())),
      commentId: new FormControl ()
     }
  )

  openDialogReplyComment()
  {
    this.dialog.open(this.callUpdatedialoge); 

  }
  getTokenUserid(): number {
    let cus: any = localStorage.getItem('user');
    if(cus==null)
    return 1;
    let obj = JSON.parse(cus);

    return obj.primarysid==null?1:obj.primarysid;
  }

  addReplyComment(){
    this.ReplycommentForme.controls['commentId'].setValue(this.commentId);
  this.home.createReplayComment(this.ReplycommentForme.value)

}

}
