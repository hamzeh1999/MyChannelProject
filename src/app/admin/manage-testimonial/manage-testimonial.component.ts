import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateTestimonialComponent } from '../create-testimonial/create-testimonial.component';

@Component({
  selector: 'app-manage-testimonial',
  templateUrl: './manage-testimonial.component.html',
  styleUrls: ['./manage-testimonial.component.css']
})
export class ManageTestimonialComponent implements OnInit {
  testimonialId:number=0;
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any>
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>


  constructor(private dialog : MatDialog ,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllTestimonial();
    this.home.getAllHome();

  }
  openCreatDialog(){
    this.dialog.open(CreateTestimonialComponent) //to open the dialog in it

  }
  UpdateTestimonial : FormGroup = new FormGroup(
    {

      testimonialId :new FormControl() ,
      testimonialText: new FormControl() ,
      testimonialImage: new FormControl() ,
      userId : new FormControl(),
      user : new FormControl(),

    })
    adminTestimonial : FormGroup = new FormGroup(
      {
  
        testimonialId :new FormControl() ,
        testimonialText: new FormControl() ,
        testimonialImage: new FormControl() ,
        userId : new FormControl(),
        user : new FormControl(),
  
      });
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

  InputValue(ev : any){
    this.testimonialId = ev.target.value ;
  }
  getById(){
    // const categoryObj ={
    //   categoryid: this.categoryId.toString()
    // }
    this.home.getByIdTestimonial(this.testimonialId);
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
  // openShow(TestimonialId2:any,TestimonialText2:any,TestimonialImage2:any,userId2:any)
  // {
  //   this.adminTestimonial.controls['testimonialId'].setValue(TestimonialId2);
  //   this.adminTestimonial.controls['testimonialText'].setValue(TestimonialText2);
  //   this.adminTestimonial.controls['testimonialImage'].setValue(TestimonialImage2);
  //   this.adminTestimonial.controls['userId'].setValue(userId2);
  //    this.home.showAdminTestimonial(this.adminTestimonial.value)
  // }
}


