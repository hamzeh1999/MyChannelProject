
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from '../Service/home.service';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.css',
  '../../assets/assestsVideo/css/bootstrap.min.css',
  '../../assets/assestsVideo/css/dashboard.css',
  '../../assets/assestsVideo/css/style.css',
  '../../assets/assestsVideo/css/popuo-box.css'
]
})
export class ChannelCardComponent implements OnInit {
  @Input() channelName: string|undefined
  @Input() channelImage : string|undefined
  @Input() channelDate : string |undefined
  @Input() userId : number=0
  @Input() channelId : number|undefined
  @Input() categoryId : number|undefined
  @Input() channelDescription: string|undefined

  @Input() userName : string|undefined
  @Input() subscribes : string|undefined
  @Input() category : string|undefined
  @Input() user : string|undefined
  
  @Input() badReports : string|undefined

  @Input() videos : string|undefined

 
  constructor(public home:HomeService ) {

    
   }

  ngOnInit(): void {
    this.home.GetUserById(this.userId);
    this.home.getAllUser();
  }

}
