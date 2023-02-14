import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-reply-comment',
  templateUrl: './create-reply-comment.component.html',
  styleUrls: ['./create-reply-comment.component.css'],
  providers: [DatePipe]
})
export class CreateReplyCommentComponent implements OnInit {

  myDate:any = new Date();

  constructor( private datePipe: DatePipe,private home : HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ReplayCommentForme : FormGroup = new FormGroup(
   {
     //if the database values not take null then i have to send all the atributes here
    // replayCommentId: 1,
     replayCommentText: new FormControl(),
     replayCommentDate: new FormControl(this.myDate),
     userId: new FormControl('',[Validators.required ]),
     commentId: new FormControl('',[Validators.required ]),
    }
 )

 ngOnInit(): void {
 }
 save(){
   this.home.createReplayComment(this.ReplayCommentForme.value)
 }

}
