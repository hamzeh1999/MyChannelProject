import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllHome();
  }

}
