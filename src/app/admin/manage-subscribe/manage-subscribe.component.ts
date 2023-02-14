import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateSubscribeComponent } from '../create-subscribe/create-subscribe.component';

@Component({
  selector: 'app-manage-subscribe',
  templateUrl: './manage-subscribe.component.html',
  styleUrls: ['./manage-subscribe.component.css']
})
export class ManageSubscribeComponent implements OnInit {
  subscribeId:number=0;
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any>
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  constructor(private dialog : MatDialog ,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllSubscribe();
    this.home.getAllHome();
  }

  openCreatDialog(){
    this.dialog.open(CreateSubscribeComponent) //to open the dialog in it

  }
  UpdateSubscribe : FormGroup = new FormGroup(
    {

      subscribeId :new FormControl() ,
      incomes : new FormControl() ,
      subscribeChannel: new FormControl() ,
      channelId : new FormControl() ,
      channel : new FormControl(),
      userId : new FormControl() ,
      user : new FormControl()



    }
  )

  Sub:any = {} ;
  openUpdateDialog(subscribeId2:any,incomes2:any,subscribeChannel2:any) //i send the old course info
  {
    this.Sub ={
      subscribeId:subscribeId2,
      incomes :incomes2 ,
      subscribeChannel :subscribeChannel2 ,
    }
    console.log("incomes ===================="+incomes2);
    this.UpdateSubscribe.controls['subscribeId'].setValue(subscribeId2);//the user can't chang the is because i didn't put it in the dialog
    this.UpdateSubscribe.controls['incomes'].setValue(incomes2);
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  updateSubscribe(){
    this.home.updateSubscribe(this.UpdateSubscribe.value)
  }

  InputValue(ev : any){
    this.subscribeId = ev.target.value ;
  }

  openDeleteDialog(subscribeId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteSubscribe(subscribeId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }

}
