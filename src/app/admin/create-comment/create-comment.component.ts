import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
  providers: [DatePipe]
})
export class CreateCommentComponent implements OnInit {
  myDate:any = new Date();

  constructor( private datePipe: DatePipe,public home : HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  commentForme : FormGroup = new FormGroup(
   {
     //if the database values not take null then i have to send all the atributes here
     commentText   : new FormControl('',[Validators.required ]) ,
     commentDate: new FormControl(this.myDate) ,
     userId: new FormControl ('',[Validators.required ]),
     videoId: new FormControl ('',[Validators.required ])
    }
 )

 ngOnInit(): void {
 }
 save(){
   this.home.createComment(this.commentForme.value)
 }

}

