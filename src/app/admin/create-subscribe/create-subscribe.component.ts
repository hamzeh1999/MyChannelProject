import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-subscribe',
  templateUrl: './create-subscribe.component.html',
  styleUrls: ['./create-subscribe.component.css']
})
export class CreateSubscribeComponent implements OnInit {

  constructor(private home : HomeService) { }

  SubscribeForme : FormGroup = new FormGroup(
    {
      //if the database values not take null then i have to send all the atributes here

      incomes: new FormControl('',[Validators.required ]) ,
      subscribeChannel : new FormControl ('',[Validators.required ]),
      channelId : new FormControl() ,
      channel: new FormControl() ,
      userId : new FormControl (),
      user : new FormControl (),

    }
  )

  ngOnInit(): void {
  }
  save(){
    this.home.createSubscribe(this.SubscribeForme.value)
  }
}
