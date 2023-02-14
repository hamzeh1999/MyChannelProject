import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Service/home.service';
import {  EventEmitter, Input,  Output } from '@angular/core';
import { ChannelComponent } from '../channel/channel.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:any =[];
  @Input() categoryId : number=0 //because i call it down thire
  @Input() categoryName : string|undefined
  @Input() categoryImage : string|undefined
  @Input() categoryDescription: string|undefined
  @Input() channels: string|undefined
  constructor(public home: HomeService,private router:Router) { }

  ngOnInit(): void {
    this.home.getAllCategory();
  }
  getAllChannelByCategoryId(categoryId:number)
  {
    console.log("categoryId:"+categoryId);

    if(Number(this.getTokenUserid())==1)
    window.alert("You are not Rigister User");
   else if(Number(this.getTokenUserid())==null)
   window.alert("You are not Rigister User");
   else
    {this.home.getChannelByCategoeyID(categoryId)
    this.router.navigate(['Channels']);}

  }
  getTokenUserid(): number {
    let cus: any = localStorage.getItem('user');
    if(cus==null)
    return 1;
    let obj = JSON.parse(cus);

    return obj.primarysid==null?1:obj.primarysid;
  }


}
