import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-liking',
  templateUrl: './create-liking.component.html',
  styleUrls: ['./create-liking.component.css']
})
export class CreateLikingComponent implements OnInit {

  constructor(private home : HomeService) {}
  likeForme : FormGroup = new FormGroup(
   {
     //if the database values not take null then i have to send all the atributes here
    //  likingId: new FormControl(),
     like_:  new FormControl(),
     dislike: new FormControl(),
     likeCount:  new FormControl(),
     userId:  new FormControl(),
     videoId:  new FormControl(),
     
    
    }
 )

 ngOnInit(): void {
 }
 save(){
   this.home.createLike(this.likeForme.value)
 }

}
