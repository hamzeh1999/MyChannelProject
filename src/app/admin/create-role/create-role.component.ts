import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  constructor(private home : HomeService) { }

  RoleForme : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here
     
      position_ : new FormControl ('',[Validators.required ])
     
    }
  )

  ngOnInit(): void {
  }
  save(){
    this.home.createRole(this.RoleForme.value)
  }
  

}

