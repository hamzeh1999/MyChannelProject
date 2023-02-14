import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../Service/home.service';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
  providers: [DatePipe]

  
})
export class ChannelComponent implements OnInit {

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

  constructor(public home:HomeService,private router:Router) { }

  ngOnInit(): void {

   // this.home.GetUserById(this.userId);
    this.home.getAllUser();
  }
  takeCategoryId(categoryId:number){
  this.home.getChannelByCategoeyID(categoryId)
  }

  

  

      getAllVideoByChannelId(channelId:number)
      {
        console.log("channelId:"+channelId);
        this.home.subsecibechannelcounter(channelId)

        this.home.getAllVideosById(channelId)
        this.home.getChannelById(channelId);
        this.router.navigate(['Video']);
    
      }
    

}
