import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor( private home : HomeService) {

  }
  categoryForme : FormGroup = new FormGroup(
   {
     //if the database values not take null then i have to send all the atributes here
     categoryName : new FormControl('',[Validators.required ]) ,
     categoryDescription: new FormControl('',[Validators.required ]) ,
     categoryImage : new FormControl ()
     // "categoryId": 1,
     // "categoryName": "sport",
     // "categoryImage": null,
     // "categoryDescription": null,
     // "channels": null
   }
 )

 ngOnInit(): void {
 }
 save(){
   this.home.createCategory(this.categoryForme.value)
 }
 uploadFile(file:any){
   if (file.length==0){
     return;
   }
   let fileupload = <File>file[0];
   //the end of the path  of file[0] will be 'angular.png'
   const fromData = new FormData();
   fromData.append('file',fileupload,fileupload.name);
   this.home.uploadImageCategory(fromData);



 }

}
