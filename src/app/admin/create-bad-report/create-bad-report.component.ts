import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-bad-report',
  templateUrl: './create-bad-report.component.html',
  styleUrls: ['./create-bad-report.component.css']
})
export class CreateBadReportComponent implements OnInit {

  constructor( public home : HomeService) { }

  ngOnInit(): void {
    // getAllchannelforReport();
    this.home.getAllchannelforReport();
  }

  badReportForme : FormGroup = new FormGroup(
    {
      
      ReportText : new FormControl(),
      channelId: new FormControl(),
    }
  )

  save(){
    this.home.createReport(this.badReportForme.value)
  }
  

}
