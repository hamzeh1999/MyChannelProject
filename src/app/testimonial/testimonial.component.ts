import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from '../Service/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  @ViewChild('callCreatedialoge') callCreatedialoge!:TemplateRef<any>

  Testimonial:any =[];
  @Input() testimonialId : number=0 //because i call it down thire
  @Input() testimonialImage : string|undefined
  @Input() testimonialText : string|undefined
  @Input() userId: number=0
  @Input() user: string|undefined


constructor(private router:Router , public home :HomeService,private dialog:MatDialog) { }

TestimonialForme : FormGroup = new FormGroup(
  {
    //if the database values not take null then i have to send all the atributes here
    testimonialText: new FormControl('',[Validators.required]) ,
    testimonialImage : new FormControl (),
    userId:new FormControl(Number(this.getTokenUserid())),


  }
)

 ngOnInit(): void {

  this.home.getAllUser();

  this.home.getAllTestimonial();
  this.home.GetUserById(Number(this.getTokenUserid()))

  }

  // getTokenUserImg(): string {
  //   let cus: any = localStorage.getItem('userImage');
  //   if(cus==null)
  //   return " ";
  //   let obj = JSON.parse(cus);

  //   return obj["userImage"];
  // }
 

  getTokenUserid(): number {
    let cus: any = localStorage.getItem('user');
    if(cus==null)
    return 1;
    let obj = JSON.parse(cus);

    return obj.primarysid==null?1:obj.primarysid;
  }
 

  openDialogTestimonial(){
  if(Number(this.getTokenUserid())==1)
   window.alert("You are not Rigister User");
  else if(Number(this.getTokenUserid())==null)
  window.alert("You are not Rigister User");
  else
  this.dialog.open(this.callCreatedialoge);
 
  
  }
  createTestimonial(){
    this.home.createTestimonial(this.TestimonialForme.value);
  }


}
