import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CHANNELS';
  name='ahlam jaradat';
  email='a@'
  constructor(){
    setTimeout(()=>{
      this.title='Angular Project'
    },3000);

  }
  handelInput(){
    alert('the value in change!');
  }
  Clear(){
    this.name="";
  }







  
}
