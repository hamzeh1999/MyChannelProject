import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-contact-us',
  templateUrl: './create-contact-us.component.html',
  styleUrls: ['./create-contact-us.component.css']
})
export class CreateContactUsComponent implements OnInit {

  constructor(private home : HomeService) {}
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
 }
 save(){
   this.home.createContactUs(this.contactUsForme.value)
 }
}
