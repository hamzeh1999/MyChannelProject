import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, ControlContainer } from '@angular/forms';

import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  userId:number=0;
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any>
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>

  myDate:any = new Date();


  constructor(private datePipe: DatePipe,private dialog : MatDialog,private router :Router, public home:HomeService) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }

  ngOnInit(): void {
    this.home.GetUserById(Number(this.getTokenUserid()));

  }
  logout(){
    this.router.navigate(['security/login']);
    localStorage.clear();
  }
  // goToMyProfile()
  // {

  // }
    UpdateUserForm : FormGroup = new FormGroup(
      {

        userId :new FormControl() ,
        userName : new FormControl() ,
        userImage: new FormControl() ,
        userAge : new FormControl() ,
        registerDate:new FormControl (this.myDate),
        email:new FormControl(),
        password_:new FormControl(),
        addressUser:new FormControl() ,
        roleId:new FormControl(2),


      }
    )

    user:any = {} ;
    openUpdateDialog(userId2:any,userName2:any,userImage2:any,
      userAge2:any,email2:any,password_2:any,addressUser2:any,roleId2:any) //i send the old course info
    {
      this.user ={
        userId:userId2,
        userName :userName2 ,
        userImage :userImage2 ,
        userAge: userAge2 ,
        email:email2,
        password_:password_2,
        addressUser:addressUser2,
        registerDate:new FormControl (this.myDate),
        roleId:roleId2

      }
      //console.log("category Image ===================="+categoryImage2);
      this.UpdateUserForm.controls['userId'].setValue(userId2);//the user can't chang the is because i didn't put it in the dialog
      this.UpdateUserForm.controls['userImage'].setValue(userImage2);
      //two above to save the old courses without change if i don't do the change on thim
      this.dialog.open(this.callUpdatedialoge); // to open the dialog

    }


    editMprofile(){
      this.home.updateUser(this.UpdateUserForm.value);
    }


    updateUser(){
      this.home.updateUser(this.UpdateUserForm.value)
    }

    uploadFile(file:any){
      if (file.length==0){
        return;
      }
      let fileupload = <File>file[0];
      //the end of the path  of file[0] will be 'angular.png'
      const fromData = new FormData();
      fromData.append('file',fileupload,fileupload.name);
      this.home.uploadImageUser(fromData);
    }
    InputValue(ev : any){
      this.userId = ev.target.value ;
    }


    openDeleteDialog(userId : any){
      const dialogRef = this.dialog.open(this.callDeleteDialoge);

      dialogRef.afterClosed().subscribe((res)=>{

        if(res!==undefined)

        {

          if(res == "yes")

          this.home.deleteUser(userId);

          else if(res=="no")

          console.log("Thank you");

        }

      })
    }

    getTokenUserid(): number {
      let cus: any = localStorage.getItem('user');
      let obj = JSON.parse(cus);

      return obj.primarysid;
    }
}
