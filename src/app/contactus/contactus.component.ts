import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../Service/home.service';




@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
 
})


export class ContactusComponent implements OnInit {
  constructor(public home : HomeService) { }
 
 
  

  contactUsForme : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here
      subject : new FormControl('',[Validators.required ]) ,
      message : new FormControl ('',[Validators.required ]),
      mapAddress: new FormControl (),
      email: new FormControl ('',[Validators.required ])
     }
  )
  ngOnInit(): void {
    this.home.getAllHome();
    this.home.getAllContactUs();
  }
  save(){
    this.home.createContactUs(this.contactUsForme.value)
  }
 
}

