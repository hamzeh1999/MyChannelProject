import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-testimonial',
  templateUrl: './create-testimonial.component.html',
  styleUrls: ['./create-testimonial.component.css']
})
export class CreateTestimonialComponent implements OnInit {

  constructor(private home : HomeService) { }
  TestimonialForme : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here
      testimonialText: new FormControl('',[Validators.required ]) ,
      testimonialImage : new FormControl ()

    }
  )

  ngOnInit(): void {
  }

  save(){
    this.home.createTestimonial(this.TestimonialForme.value)
  }
  uploadFile(file:any){
    if (file.length==0){
      return;
    }
    let fileupload = <File>file[0];
    //the end of the path  of file[0] will be 'angular.png'
    const fromData = new FormData();
    fromData.append('file',fileupload,fileupload.name);
    this.home.uploadImageTestimonial(fromData);



  }
}
