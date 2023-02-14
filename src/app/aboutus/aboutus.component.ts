import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../Service/home.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  aboutUs:any =[];
  @Input() aboutUsId : number=0 //because i call it down thire
  @Input() aboutUs_Text : string|undefined
  @Input() aboutUs_Image : string|undefined
  @Input() homes: string|undefined


  constructor(public home : HomeService) { }

  ngOnInit(): void {
    this.home.getAllAboutUs();
  }

}
