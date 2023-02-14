import { Component, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Service/home.service';
import { CreateCategoryComponent } from '../create-category/create-category.component';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  categoryId:number=0;
  @ViewChild('callUpdatedialoge')callUpdatedialoge!:TemplateRef<any> 
  @ViewChild('callDeleteDialoge')callDeleteDialoge!:TemplateRef<any>

  constructor(private dialog : MatDialog ,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllCategory();
    this.home.getAllHome();
  }
  openCreatDialog(){
    this.dialog.open(CreateCategoryComponent) //to open the dialog in it 

  }
  UpdateCategory : FormGroup = new FormGroup(
    {
      
      categoryId :new FormControl() ,
      categoryName : new FormControl() ,
      categoryImage: new FormControl() ,
      categoryDescription : new FormControl() ,
      channels : new FormControl()
      

    }
  )
  category:any = {} ;
  openUpdateDialog(categoryId2:any,categoryName2:any,categoryDescription2:any,categoryImage2:any) //i send the old course info
  {
    this.category ={
      categoryId:categoryId2,
      categoryName :categoryName2 ,
      categoryImage :categoryImage2 ,
      categoryDescription: categoryDescription2 ,
      // channels:channels2
    }
    console.log("category Image ===================="+categoryImage2);
    this.UpdateCategory.controls['categoryId'].setValue(categoryId2);//the user can't chang the is because i didn't put it in the dialog
    this.UpdateCategory.controls['categoryImage'].setValue(categoryImage2);
    //two above to save the old courses without change if i don't do the change on thim
    this.dialog.open(this.callUpdatedialoge); // to open the dialog

  }
  updateCategory(){
    this.home.updateCategory(this.UpdateCategory.value)
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
  InputValue(ev : any){
    this.categoryId = ev.target.value ;
  }
  // getById(){
  //   // const categoryObj ={
  //   //   categoryid: this.categoryId.toString()
  //   // }
  //   this.home.getById(this.categoryId);
  // }
  openDeleteDialog(categoryId : any){
    const dialogRef = this.dialog.open(this.callDeleteDialoge);

    dialogRef.afterClosed().subscribe((res)=>{

      if(res!==undefined)

      {

        if(res == "yes")

        this.home.deleteCategory(categoryId);

        else if(res == "no")

        console.log("Thank you");

      }

    })
  }

  

}
