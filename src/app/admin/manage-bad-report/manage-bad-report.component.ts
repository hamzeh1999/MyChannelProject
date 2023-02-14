import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateBadReportComponent } from '../create-bad-report/create-bad-report.component';

@Component({
  selector: 'app-manage-bad-report',
  templateUrl: './manage-bad-report.component.html',
  styleUrls: ['./manage-bad-report.component.css']
})
export class ManageBadReportComponent implements OnInit {
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callReportDialoge')callReportDialoge!:TemplateRef<any> 

  constructor(private dialog : MatDialog ,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllReport();
    this.home.getAllchannelforReport();
    this.home.getAllHome();
    

  }
  openCreatDialog(){
    
    this.dialog.open(CreateBadReportComponent); //to open the dialog in it 
  }

  sendReportForm:FormGroup=new FormGroup(
    {
      reportText:new FormControl(this.home.dataReportText),
      to:new FormControl(this.home.dataEmail),

      from:new FormControl('hamzehgabashna@gmail.com'),            
      password:new FormControl('gabashna54321g') });




  bad:any = {} ;
  openReportDialoge(channelId2:number){
     this.home.getEmailByChannelId(channelId2);
   //console.log("chanelId============"+channelId2);
   //console.log("chanelId============"+this.home.dataReportText)
   //console.log("chanelId============"+this.home.dataEmail)
   this.home.spinner.show();
   if(this.home.dataReportText!=null && this.home.dataEmail!=null)
   {this.dialog.open(this.callReportDialoge);    
   this.home.spinner.hide();
   this.bad ={
    reportText :this.home.dataReportText,
    to:this.home.dataEmail,
    from:new FormControl('hamzehgabashna@gmail.com'),  
    password:new FormControl('gabashna54321g'),
  }

}

}
  



sendReport()
{
this.home.sendEmail(this.sendReportForm.value);
}





  UpdateReport : FormGroup = new FormGroup(
    {
      
      reportId :new FormControl() ,
      reportText : new FormControl() ,
      channelId: new FormControl() ,
     
      

    }
  )
  channelId:number=0;
  report:any = {} ;
  openUpdateDialog(ReportId2:any,ReportText2:any,ChannelId2:any) //i send the old course info
  {
    this.report ={
      reportId:ReportId2,
      reportText :ReportText2 ,
      channelId :ChannelId2 ,
    }
    this.UpdateReport.controls['reportId'].setValue(ReportId2);
    this.dialog.open(this.callUpdatedialoge); 

  }
  updateReport(){
    this.home.updateReport(this.UpdateReport.value)
  }

  openDeleteDialog(reportId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteReport(reportId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }
  InputValue(ev : any){
    this.channelId = ev.target.value ;
  }
 
getBadReportOnChannel(){
  
  this.home.Getbadreport(this.channelId);
}
  
  // InputValue(ev : any){
  //   this.ReportId = ev.target.value ;
  // }


}
