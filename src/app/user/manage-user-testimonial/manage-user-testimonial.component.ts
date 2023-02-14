import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-manage-user-testimonial',
  templateUrl: './manage-user-testimonial.component.html',
  styleUrls: ['./manage-user-testimonial.component.css']
})
export class ManageUserTestimonialComponent implements OnInit {

  testimonialId:number=0;
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any>
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>


  constructor(private dialog : MatDialog ,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getTestimonialByUserId(Number(this.getTokenUserid()))
    this.home.getAllHome();


  }
  UpdateTestimonial : FormGroup = new FormGroup(
    {

      testimonialId :new FormControl() ,
      testimonialText: new FormControl() ,
      testimonialImage: new FormControl() ,
      userId : new FormControl(Number(this.getTokenUserid())),
      user : new FormControl(),

    }
  )
  Testimonial:any = {} ;
  openUpdateDialog(TestimonialId2:any,TestimonialText2:any,TestimonialImage2:any) //i send the old course info
  {
    this.Testimonial ={
      testimonialId:TestimonialId2,
      testimonialText :TestimonialText2 ,
      testimonialImage :TestimonialImage2 ,
    }

    console.log("Testimonial Image ===================="+TestimonialImage2);
    this.UpdateTestimonial.controls['testimonialId'].setValue(TestimonialId2);//the user can't chang the is because i didn't put it in the dialog
    this.UpdateTestimonial.controls['testimonialImage'].setValue(TestimonialImage2);
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog
  }
  updateTestimonial(){
    this.home.updateTestimonial(this.UpdateTestimonial.value)
  }
 

  getTokenUserid(): number {
    let cus: any = localStorage.getItem('user');
    let obj = JSON.parse(cus);

    return obj.primarysid;
  }


  openDeleteDialog(testimonialId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteTestimonial(testimonialId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }
}
