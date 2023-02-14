import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import jsPDF from 'jspdf';
import { Chart,registerables } from 'node_modules/chart.js';
import { HomeService } from 'src/app/Service/home.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(public home:HomeService,public dialog:MatDialog) {}
  
  SearchForm : FormGroup = new FormGroup(
    {
    
      pdate_from: new FormControl() ,
      pdate_to: new FormControl() ,
      
    });
  
  Searching(){
    this.home.searchingNumberOfUserByDate(this.SearchForm.value);
  }

  zainPdf() {
    let pdf = new jsPDF('l','pt','a3',true)
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("sample.pdf")
      }
    })
  }
  ngOnInit(): void {
 
}

chart(){
  console.log("in chart function is:"+this.home.num);

  if(this.SearchForm.controls['pdate_to'].value==null || this.SearchForm.controls['pdate_from'].value==null )
  window.alert("Enter the End & Start date");
  else
  var myChart = new Chart('mychart', {
    type: 'bar',
    data: {
      labels: [this.SearchForm.controls['pdate_from'].value+" TO "+this.SearchForm.controls['pdate_to'].value],
      datasets: [
        
        {
          label: '# of Register Users',
          data: [this.home.num],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
refresh(){
  window.location.reload();
}
}
