import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateContactUsComponent } from '../create-contact-us/create-contact-us.component';

@Component({
  selector: 'app-manage-contact-us',
  templateUrl: './manage-contact-us.component.html',
  styleUrls: ['./manage-contact-us.component.css']
})
export class ManageContactUsComponent implements OnInit {

  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>

  
  constructor(private dialog : MatDialog ,public home:HomeService) {
   }

  ngOnInit(): void {
    this.home.getAllContactUs();
    this.home.getAllHome();
  }
  openCreateDialog(){
    this.dialog.open(CreateContactUsComponent) //to open the dialog in it
   }

   UpdateContactUS : FormGroup = new FormGroup(
    {
      
      contactUsId:new FormControl() ,
      subject :new FormControl() ,
      message : new FormControl() ,
      mapAddress: new FormControl() ,
      email : new FormControl(),
     

    }
  )
  contactUs:any = {} ;
  openUpdateDialog(contactUsId2:any,subject2:any,message2:any,mapAddress2:any,email2:any) //i send the old course info
  {
    this.contactUs ={
      contactUsId:contactUsId2,
      subject:subject2,
      message :message2 ,
      mapAddress :mapAddress2 ,
      email:email2
    }
    this.UpdateContactUS.controls['contactUsId'].setValue(contactUsId2);//the user can't chang the is because i didn't put it in the dialog
   
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  UpdateContact(){
    this.home.UpdateContactUS(this.UpdateContactUS.value)
  }
  openDeleteDialog(contactUsId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteContactUs(contactUsId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }
}
