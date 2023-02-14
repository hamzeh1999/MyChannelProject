import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateReplyCommentComponent } from '../create-reply-comment/create-reply-comment.component';

@Component({
  selector: 'app-manage-reply-comment',
  templateUrl: './manage-reply-comment.component.html',
  styleUrls: ['./manage-reply-comment.component.css'],
  providers: [DatePipe]

})
export class ManageReplyCommentComponent implements OnInit {
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  myDate:any = new Date();
  
  constructor(private dialog : MatDialog ,private datePipe: DatePipe,public home:HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-M-d');
   }

  ngOnInit(): void {
    this.home.getAllReplayComment();
    this.home.getAllHome();
  }
  openCreatDialog(){
    this.dialog.open(CreateReplyCommentComponent) //to open the dialog in it
   }

   UpdateReplaycomment : FormGroup = new FormGroup(
    {
      
     replayCommentId: new FormControl(),
     replayCommentText: new FormControl(),
     replayCommentDate: new FormControl(this.myDate),
     userId: new FormControl(),
     commentId: new FormControl(),
     

    }
  )
  replayComment:any = {} ;
  openUpdateDialog(commentId2:any,replayCommentId2:any,userId2:any,replayCommentText2:any) //i send the old course info
  {
    this.replayComment ={
      replayCommentId:replayCommentId2,
      replayCommentText:replayCommentText2,
      replayCommentDate :new FormControl(this.myDate),
      userId :userId2,
      commentId:commentId2  
    }
    this.UpdateReplaycomment.controls['replayCommentId'].setValue(replayCommentId2);//the user can't chang the is because i didn't put it in the dialog
   
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  updateReplayComment(){
    this.home.updateReplayComment(this.UpdateReplaycomment.value)
  }
  openDeleteDialog(replayCommentId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteReplayComment(replayCommentId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }

}
