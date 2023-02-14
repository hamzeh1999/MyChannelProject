import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateRoleComponent } from '../create-role/create-role.component';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.css']
})
export class ManageRoleComponent implements OnInit {

  roleId:number=0;
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any> 
  constructor(private dialog : MatDialog ,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllRole();
    this.home.getAllHome();
  }
  openCreatDialog(){
    this.dialog.open(CreateRoleComponent) //to open the dialog in it 

  }
  UpdateRole : FormGroup = new FormGroup(
    {
      
      roleId :new FormControl() ,
      position_ : new FormControl() ,
     
      

    }
  )
  role:any = {} ;
  openUpdateDialog(roleId2:any,position2:any) //i send the old course info
  {
    this.role ={
      roleId:roleId2,
      position_ :position2 ,
      
      
    }
    console.log("Position ===================="+position2);
    this.UpdateRole.controls['roleId'].setValue(roleId2);//the user can't chang the is because i didn't put it in the dialog
    
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  updateRole(){
    this.home.updateRole(this.UpdateRole.value)
  }
  openDeleteDialog(roleId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteRole(roleId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }
  
  
}