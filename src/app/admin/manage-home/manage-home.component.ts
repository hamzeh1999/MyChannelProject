import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateHomeComponent } from '../create-home/create-home.component';


@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit {

  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  myDate:any = new Date();
  
  constructor(private dialog : MatDialog ,public home:HomeService) {
    
   }

  ngOnInit(): void {
    this.home.getAllHome();
  }
  openCreatDialog(){
    this.dialog.open(CreateHomeComponent) //to open the dialog in it
   }

   UpdateHomeForm : FormGroup = new FormGroup(
    {
      homeId:new FormControl,
      logo : new FormControl() ,
      phoneNumber : new FormControl (),
      websiteName: new FormControl (),
      backgroundImage: new FormControl (),
      address: new FormControl (),
      aboutUsId: new FormControl (),
      contactUsId: new FormControl (),
      socialmedia: new FormControl (),
      description_: new FormControl (),

    }
  )
  homeWebsite:any = {} ;
  openUpdateDialog(homeId2:any,logo2:any,phoneNumber2:any,websiteName2:any,backgroundImage2:any,
    address2:any,aboutusId2:any,contactusId2:any,socialMedia2:any, description_2:any) //i send the old course info
  {
    this.homeWebsite ={
      homeId:homeId2,
      logo:logo2,
      phoneNumber :phoneNumber2 ,
      websiteName :websiteName2 ,
      backgroundImage: backgroundImage2 ,
      address: address2 ,
      aboutUsId :aboutusId2 ,
      contactUsId :contactusId2 ,
      socialmedia: socialMedia2 ,
      description_: description_2 ,
    }
    this.UpdateHomeForm.controls['homeId'].setValue(homeId2);//the user can't chang the is because i didn't put it in the dialog
    this.UpdateHomeForm.controls['logo'].setValue(logo2);
    this.UpdateHomeForm.controls['backgroundImage'].setValue(backgroundImage2);
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  updateHome(){
    this.home.UpdateHome(this.UpdateHomeForm.value)
  }
  openDeleteDialog(homeId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteHome(homeId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }
  uploadFile(file1:any){
    if (file1.length==0){
      return;
    }
    let fileupload = <File>file1[0];
    //the end of the path  of file[0] will be 'angular.png'
    const fromData = new FormData();
    fromData.append('file1',fileupload,fileupload.name);
    this.home.uploadImageHome(fromData);
  }
  
  
  
  uploadFileLogo(file:any){
    if (file.length==0){
      return;
    }
    let fileupload = <File>file[0];
    //the end of the path  of file[0] will be 'angular.png'
    const fromData = new FormData();
    fromData.append('file',fileupload,fileupload.name);
    this.home.uploadImageHomeLogo(fromData);
  }

}
