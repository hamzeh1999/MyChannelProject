import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Chart,registerables } from 'node_modules/chart.js';
import { HomeService } from '../Service/home.service';
Chart.register(...registerables);

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css'],
})
export class MyChartComponent implements OnInit {
  constructor(public home:HomeService,public dialog:MatDialog) {}
  
  SearchForm : FormGroup = new FormGroup(
    {
    
      pdate_from: new FormControl() ,
      pdate_to: new FormControl() ,
      
    });
  
  Searching(){
    this.home.searchingNumberOfUserByDate(this.SearchForm.value);
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
