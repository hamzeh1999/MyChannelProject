import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateAboutUsComponent } from '../create-about-us/create-about-us.component';


@Component({
  selector: 'app-manage-about-us',
  templateUrl: './manage-about-us.component.html',
  styleUrls: ['./manage-about-us.component.css']
})
export class ManageAboutUsComponent implements OnInit {
  aboutUsId:number=0;
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any>
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>

  constructor(private dialog : MatDialog ,public home:HomeService) { }
  ngOnInit(): void {
    this.home.getAllAboutUs();
    this.home.getAllHome();
   }
  openCreatDialog(){
    this.dialog.open(CreateAboutUsComponent) //to open the dialog in it

  }
  UpdateAboutUs : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here
      aboutUsId : new FormControl() ,
      aboutUs_Text: new FormControl() ,
      aboutUs_Image : new FormControl (),
      aboutUs_Text1:new FormControl (),
      aboutUs_Text2:new FormControl (),
      aboutUs_Text3:new FormControl ()


    }
  )
  AboutUs:any = {} ;
  openUpdateDialog(aboutUsId2:any,aboutUs_Text2:any,aboutUsImage2:any,aboutUs_Text12:any,aboutUs_Text22:any,aboutUs_Text23:any) //i send the old course info
  {
    this.AboutUs ={
      aboutUsId:aboutUsId2,
      aboutUs_Text :aboutUs_Text2 ,
      aboutUs_Image :aboutUsImage2 ,
      aboutUs_Text1:aboutUs_Text12,
      aboutUs_Text2:aboutUs_Text22,
      aboutUs_Text3:aboutUs_Text23
    }
   
    this.UpdateAboutUs.controls['aboutUsId'].setValue(aboutUsId2);//the user can't chang the is because i didn't put it in the dialog
    this.UpdateAboutUs.controls['aboutUs_Image'].setValue(aboutUsImage2);
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }

  updateAboutUs(){
    this.home.updateAboutUs(this.UpdateAboutUs.value)
  }
  uploadFile(file:any){
    if (file.length==0){
      return;
    }
    let fileupload = <File>file[0];
    
    //the end of the path  of file[0] will be 'angular.png'
    const fromData = new FormData();
    fromData.append('file',fileupload,fileupload.name);
    this.home.uploadImageAboutUs(fromData);



  }
  InputValue(ev : any){
    this.aboutUsId = ev.target.value ;
  }
  openDeleteDialog(aboutUsId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteAboutUs(aboutUsId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }
}
