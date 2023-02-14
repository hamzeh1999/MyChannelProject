import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateCommentComponent } from '../create-comment/create-comment.component';

@Component({
  selector: 'app-manage-comment',
  templateUrl: './manage-comment.component.html',
  styleUrls: ['./manage-comment.component.css'],
  providers: [DatePipe]
})
export class ManageCommentComponent implements OnInit {
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  myDate:any = new Date();
  
  constructor(private dialog : MatDialog ,private datePipe: DatePipe,public home:HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-M-d');
   }

  ngOnInit(): void {
    this.home.getAllComment();
    this.home.getAllUser();
    this.home.getAllVideo();
    this.home.getAllHome();
  }
  openCreatDialog(){
    this.dialog.open(CreateCommentComponent) //to open the dialog in it
   }

   Updatecomment : FormGroup = new FormGroup(
    {
      
      commentId:new FormControl() ,
      commentText :new FormControl() ,
      commentDate : new FormControl(this.myDate) ,
      userId: new FormControl() ,
      videoId : new FormControl(),
     

    }
  )
  comment:any = {} ;
  openUpdateDialog(commentId2:any,commentText2:any,userId2:any,videId2:any) //i send the old course info
  {
    this.comment ={
      commentId:commentId2,
      commentText:commentText2,
      userId :userId2 ,
      videoId :videId2  
    }
    this.Updatecomment.controls['commentId'].setValue(commentId2);//the user can't chang the is because i didn't put it in the dialog
    this.Updatecomment.controls['userId'].setValue(userId2);//the user can't chang the is because i didn't put it in the dialog
    this.Updatecomment.controls['videoId'].setValue(videId2);//the user can't chang the is because i didn't put it in the dialog
   
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  updateComment(){
    this.home.updateComment(this.Updatecomment.value)
  }
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

}
