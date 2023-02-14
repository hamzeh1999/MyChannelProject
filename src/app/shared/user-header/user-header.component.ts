import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private router :Router, public home:HomeService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.router.navigate(['security/login']);
    localStorage.clear();
  }
}
