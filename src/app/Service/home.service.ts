import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  channelIdForUser:any = {};
  datagetuser:any = {};
  commentbyid:any = {};
  datauserchannel:any = {};
  dataChannelByCategory:any = {};
  dataChannelByChannel:any={};
  datagetchannel: any={};
NumOfRegisterUsers: any={};
flag:boolean=false;
channelIdVal:number | undefined;
categoryIdVal:number | undefined;
userImageVal:string | undefined;
//////Report Variable/////////////////////////////////////
dataEmail:string | undefined;
dataReportText:string | undefined;
arrayEmailText:any=[];
///////////////////////////////////////////
dataReport: any=[];
dataSearchByName: any={};
dataSearchUserDate:any={};
LikeCount:any={};
DislikeCount:any={};
datachannelforrep: any=[];
message:string='Welcom';
dataCategory: any=[];
dataVideoChannel:any=[];
dataChannel: any=[];
dataVideo: any=[];
dataComment: any=[];
dataTestimonial: any=[];
dataTestimonialByUser:any=[];
dataAboutUs: any=[];
data: any =[];
dataAllHome: any =[];
display_image :any ;
AboustUsIds: any = {}
dataUserRole: any =[];

display_imageCategory :any ;
display_image_channel:any;
display_imageHomeLogo:any;
 display_imageAbout :any ;
 display_Video:any;
display_imageUser :any ;
display_imageHome :any ;
idCategories: any = {};
////chart
num:any;
numberOfLikes:any=[];
  home: any;



  constructor(private http : HttpClient ,public  spinner : NgxSpinnerService , private toastr :ToastrService ) {


  }

  ////////////////////////////////////////about us/////////////////////////////////////////////

  getAllAboutUs(){
    //showspinner
    this.spinner.show() ;

    //hit api
    //get is resived the url of your api and some optional things if you want to send them
    this.http.get('https://localhost:44380/api/aboutus').subscribe((res)=>{

      this.dataAboutUs=res;
      console.log(this.dataAboutUs)
      //hide spinner
      this.spinner.hide();
      //toastr
      this.toastr.success('Data retrived :)');

    },err =>{
      this.spinner.hide();
      // this.toastr.error ('somting went wrong !!');
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      //two ubove are used to now the exact errors happends
    }//i call the data from the coursecarde ts
    )


  }
  createAboutUs(data : any){
    //showspinner
    this.spinner.show() ;
    debugger;
    data.aboutUs_Image = this.display_imageAbout;
    //hit api
    //get is resived the url of your api and some optional things if you want to send them
    this.http.post('https://localhost:44380/api/AboutUs', data).subscribe((res)=>{
      debugger;


      //hide spinner
      this.spinner.hide();
      //toastr
      this.toastr.success('Data retrived :)');

    },err =>{
      this.spinner.hide();
      // this.toastr.error ('somting went wrong !!');
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      //two ubove are used to now the exact errors happends
    }//i call the data from the coursecarde ts
    );
    window.location.reload();

  }


uploadImageAboutUs(file:FormData){
  debugger;
  this.http.post('https://localhost:44380/api/aboutus/UploadImg',file).subscribe((res:any)=>{
    if ( res)
    {
      console.log(res)
    }
    this.display_imageAbout = res.aboutUs_Image ;
    console.log(res.aboutUs_Image)
  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    //this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);}

  );
  //window.location.reload();


}
updateAboutUs(body:any)
  {
    body.AboutUs_Image = this.display_imageAbout ; //to take the api image
    this.http.put('https://localhost:44380/api/aboutus', body).subscribe((res)=>
    {
      this.toastr.success("update successfuly")
    },err=>
      {
        this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      }

      );
      window.location.reload();
  }
  deleteAboutUs(aboutUsId:number)
  {
    this.http.delete('https://localhost:44380/api/aboutus/Delete/'+ aboutUsId).subscribe((res)=>

    {

      this.toastr.success("delete successfuly")

    },err=>

    {

      this.toastr.error(err.message);

    this.toastr.error(err.status);



    });
    window.location.reload();


  }





////////////////////////////////////category////////////////////////////////////////////////////////
getAllCategory(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/category').subscribe((res)=>{

    this.dataCategory=res;
    console.log(this.dataCategory)
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}
createCategory(data : any){
  //showspinner
  this.spinner.show() ;
  debugger;
  data.categoryImage = this.display_imageCategory;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.post('https://localhost:44380/api/category', data).subscribe((res)=>{
    debugger;


    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  );
  window.location.reload();

}
uploadImageCategory(file:FormData){
  debugger;
  this.http.post('https://localhost:44380/api/category/UploadImg',file).subscribe((res:any)=>{
    if ( res)
    {
      console.log(res)
    }
    this.display_imageCategory = res.categoryImage ;
    console.log(res.categoryImage)
  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    //this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);}

  );
  //window.location.reload();


}
updateCategory(body:any)
  {
    body.CategoryImage = this.display_imageCategory ; //to take the api image
    this.http.put('https://localhost:44380/api/category', body).subscribe((res)=>
    {
      this.toastr.success("update successfuly")
    },err=>
      {
        this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      }

      );
      window.location.reload();
  }
  deleteCategory(categoryId:number)
{
  this.http.delete('https://localhost:44380/api/Category/Delete/'+ categoryId).subscribe((res)=>

  {

    this.toastr.success("delete successfuly")

  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}



//////////////////////////////////////////Liking/////////////////////////////////////////////
getAllLike(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Liking').subscribe((res)=>{

    this.data=res;
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )
 
  
}
UpdateLike(body:any)
{

  //to take the api image

  this.http.put('https://localhost:44380/api/Likeing', body).subscribe((res)=>
  {
    this.toastr.success("update successfuly");
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    });
    window.location.reload();
}
 async createLike(data:any)
{
  
  this.spinner.show() ;
  this.numberOfLikes=await this.http.get('https://localhost:44380/api/Liking/likingvideocounter/'+data.videoId).toPromise();

  for (let like of Object.keys(this.numberOfLikes)) {
    var likeVal = this.numberOfLikes[like];
    console.log("like counter :"+likeVal["likecounter"]);
   
   data.likeCount=likeVal["likecounter"]+1;

  }

        console.log("data.likeCount  :"+data.likeCount);

  this.http.post('https://localhost:44380/api/Liking/', data).subscribe((res)=>{
    this.spinner.hide();
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    this.toastr.error(err.message);
    this.toastr.error(err.status);
  });
}
deleteLike(likeId:number)
{
  this.http.delete('https://localhost:44380/api/liking/Delete/'+ likeId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}
// LikesCounter(videoId:number)
// {
// this.numberOfLikes=this.http.get('https://localhost:44380/api/Liking/likingvideocounter/'+videoId).toPromise();
// for (let like of Object.keys(this.numberOfLikes)) {
//   var likeVal = this.numberOfLikes[like];
//   console.log("like counter :"+likeVal["likecounter"]);

// }}

DislikesCounter(videoId:number)
{
this.http.get('https://localhost:44380/api/Liking/dislikevideocounter'+videoId).subscribe((res)=>{
  this.DislikeCount=res;
      this.spinner.hide();
      
      this.toastr.success('Data Retrive');
    },err =>{
      this.spinner.hide();
      
      //this.toastr.error(err.message);
      this.toastr.error(err.status);});

}

  //////////////////////////////////////contact us////////////////////////////////////////////////////////////////
  dataContact:any=[];
  getAllContactUs(){
    //showspinner
    this.spinner.show() ;

    //hit api
    //get is resived the url of your api and some optional things if you want to send them
    this.http.get('https://localhost:44380/api/ContactUs').subscribe((res)=>{

      this.dataContact=res;
      console.log(this.data)
      //hide spinner
      this.spinner.hide();
      //toastr
      this.toastr.success('Data retrived :)');

    },err =>{
      this.spinner.hide();
      // this.toastr.error ('somting went wrong !!');
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      //two ubove are used to now the exact errors happends
    }//i call the data from the coursecarde ts
    )


  }
  createContactUs(data:any)
  {
    //showspinner
    this.spinner.show() ;
    debugger;
    //hit api
    //get is resived the url of your api and some optional things if you want to send them
    this.http.post('https://localhost:44380/api/ContactUs/', data).subscribe((res)=>{
      debugger;
      //hide spinner
      this.spinner.hide();
      //toastr
      this.toastr.success('Data retrived :)');

    },err =>{
      this.spinner.hide();
      // this.toastr.error ('somting went wrong !!');
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      //two ubove are used to now the exact errors happends
    });
    window.location.reload();
  }
  UpdateContactUS(body:any)
  {

    //to take the api image

    this.http.put('https://localhost:44380/api/ContactUs', body).subscribe((res)=>
    {
      this.toastr.success("update successfuly");
    },err=>
      {
        this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      });
      window.location.reload();
  }
  deleteContactUs(contactUsId:number)
{
  this.http.delete('https://localhost:44380/api/ContactUs/Delete/'+ contactUsId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}

////////////////////////////////////////home//////////////////////////////////////////////////////

getAllHome(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Home').subscribe((res)=>{

    this.dataAllHome=res;
    console.log("Data Home is :"+this.dataAllHome)
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}
createHome(data:any)
  {
    //showspinner
    this.spinner.show() ;
    debugger;
    data.Logo = this.display_imageHomeLogo;
    data.BackgroundImage=this.display_imageHome;
    

    //hit api
    //get is resived the url of your api and some optional things if you want to send them
    this.http.post('https://localhost:44380/api/Home/', data).subscribe((res)=>{
      debugger;
      //hide spinner
      this.spinner.hide();
      //toastr
      this.toastr.success('Data retrived :)');

    },err =>{
      this.spinner.hide();
      // this.toastr.error ('somting went wrong !!');
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      //two ubove are used to now the exact errors happends
    });
    window.location.reload();
  }
  uploadImageHome(file:FormData){
    debugger;
    this.http.post('https://localhost:44380/api/Home/UploadImg',file).subscribe((res:any)=>{
      if ( res)
      {
        console.log(res)
      }
      this.display_imageHome = res.backgroundImage; //////////////Note //Note
      console.log(res.Logo)
    },err =>{
      this.spinner.hide();
      // this.toastr.error ('somting went wrong !!');
     // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
    });
    //window.location.reload();
  }
  
  uploadImageHomeLogo(file:FormData){
    debugger;
    this.http.post('https://localhost:44380/api/Home/UploadImgLogo',file).subscribe((res:any)=>{
      if ( res)
      {
        console.log(res)
      }
      this.display_imageHomeLogo = res.logo; //////////////Note //Note
      console.log(res.Logo)
    },err =>{
      this.spinner.hide();
      // this.toastr.error ('somting went wrong !!');
     // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
    });
    //window.location.reload();
  }
  UpdateHome(body:any)
  {

    //to take the api image
    body.Logo = this.display_imageHomeLogo;
    body.BackgroundImage=this.display_imageHome;
    this.http.put('https://localhost:44380/api/Home', body).subscribe((res)=>
    {
      this.toastr.success("update successfuly");
    },err=>
      {
        this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      });
      window.location.reload();
  }
  deleteHome(homeId:number)
{
  this.http.delete('https://localhost:44380/api/Home/Delete/'+ homeId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}
/////////////////////////////////////////NOTIFICATION/////////////////////////////////////////////
// createNotification(data:any)
// {
//   //showspinner
//   this.spinner.show() ;
//   debugger;
//   //hit api
//   //get is resived the url of your api and some optional things if you want to send them
//   this.http.post('https://localhost:44380/api/notification/', data).subscribe((res)=>{
//     debugger;
//     //hide spinner
//     this.spinner.hide();
//     //toastr
//     this.toastr.success('Data retrived :)');

//   },err =>{
//     this.spinner.hide();
//     // this.toastr.error ('somting went wrong !!');
//     this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
//     this.toastr.error(err.status);
//     //two ubove are used to now the exact errors happends
//   });
//   window.location.reload();
// }
// updateNotification(body:any)
// {

//   //to take the api image

//   this.http.put('https://localhost:44380/api/notification/', body).subscribe((res)=>
//   {
//     this.toastr.success("update successfuly");
//   },err=>
//     {
//       this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
//     this.toastr.error(err.status);
//     });
//     window.location.reload();
// }
// deleteNotification(notificationId:number)
// {
//   this.http.delete('https://localhost:44380/api/Notification/Delete/'+ notificationId).subscribe((res)=>
//   {
//     this.toastr.success("delete successfuly");
//   },err=>

//   {

//     this.toastr.error(err.message);

//   this.toastr.error(err.status);



//   });
//   window.location.reload();


// }
// getAllNotification(){
//   //showspinner
//   this.spinner.show() ;

//   //hit api
//   //get is resived the url of your api and some optional things if you want to send them
//   this.http.get('https://localhost:44380/api/notification').subscribe((res)=>{

//     this.data=res;
//     console.log(this.data)
//     //hide spinner
//     this.spinner.hide();
//     //toastr
//     this.toastr.success('Data retrived :)');

//   },err =>{
//     this.spinner.hide();
//     // this.toastr.error ('somting went wrong !!');
//     this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
//     this.toastr.error(err.status);
//     //two ubove are used to now the exact errors happends
//   }//i call the data from the coursecarde ts
//   )


// }
// sendNotification(data:any){
//   //showspinner
//   this.spinner.show() ;
//   debugger;
//   //hit api
//   //get is resived the url of your api and some optional things if you want to send them
//   this.http.post('https://localhost:44380/api/notification/Email', data).subscribe((res)=>{
//     debugger;
//     //hide spinner
//     this.spinner.hide();
//     //toastr
//     this.toastr.success('Data retrived :)');

//   },err =>{
//     this.spinner.hide();
//     // this.toastr.error ('somting went wrong !!');
//     this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
//     this.toastr.error(err.status);
//     //two ubove are used to now the exact errors happends
//   });
//   window.location.reload();
// }

///////////////////{{////////////////////////SUBSCRIBE//////////////////////////////////////////////////
dataSubscribe:any=[{}];
  flagSubscribe: boolean = false;
getAllSubscribe(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/subscribe/').subscribe((res)=>{

    this.dataSubscribe=res;

    
    this.spinner.hide();
    
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )
//window.location.reload();

}


createSubscribe(data : any){
  
  this.spinner.show();
  console.log("channelID        ................... :"+data.channelId);
  for(let i=0;i<this.dataSubscribe.length;i++)
  if(this.dataSubscribe[i]["channelId"]==data.channelId && this.dataSubscribe[i]["userId"]==data.userId)
  {
    this.flagSubscribe=true;
    break;
  }
  
  if(this.flagSubscribe)
    {window.alert("You are Already make Subscribe on this Channel");
     this.spinner.hide();}

  else
  {this.http.post('https://localhost:44380/api/subscribe/', data).subscribe((res)=>{
  this.toastr.success(' You make your subscribe');
 this.subsecibechannelcounter(data.channelId);
 this.getAllSubscribe();
  this.spinner.hide();
    console.log("you are in post space ");


},err =>{
    
    this.toastr.error(err.message);
    this.toastr.error(err.status);
     }
  )}
}



  emailForm : FormGroup = new FormGroup(
    {
      to: new FormControl(),
    });
  arrEmail:any=[];
 sendNotification(channelId:number)
{
  this.getEmailSubscribeByChannelId(channelId);

  for(let i=0;i<this.arrayEmailSubscrbieText.length;i++)
    {
      console.log(this.arrayEmailSubscrbieText[i]["email"]);
      this.emailForm.controls['to'].setValue(this.arrayEmailSubscrbieText[i]["email"]);
      this.sendEmailSubscribe( this.emailForm.value)
    }

}

updateSubscribe(body:any)
  {
    this.http.put('https://localhost:44380/api/Subscribe', body).subscribe((res)=>
    {
      this.toastr.success("update successfuly")
    },err=>
      {
        this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      }

      );
      window.location.reload();
  }

  deleteSubscribe(subscribeId:number)
{
  this.http.delete('https://localhost:44380/api/Subscribe/Delete/'+ subscribeId).subscribe((res)=>

  {

    this.toastr.success("delete successfuly")

  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}
arrayEmailSubscrbieText:any=[];
dataEmailSubscribe:any=[];
 getEmailSubscribeByChannelId(channelId : number){
  
  this.spinner.show() ;

  this.http.get('https://localhost:44380/api/subscribe/getEmailByChannelId/'+channelId).subscribe((res)=>{

    this.arrayEmailSubscrbieText=res;
    for (let report of Object.keys(this.arrayEmailText)) {
      var reportVal = this.arrayEmailText[report];
      console.log("The email is in for in ts :"+reportVal["email"]);

      this.dataEmailSubscribe[report]=reportVal["email"];
    }
    this.spinner.hide();
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    this.toastr.error(err.message);
    this.toastr.error(err.status);
  }
  )

}

sendEmailSubscribe(emailTo:any)
{
 console.log(emailTo);
 this.http.post('https://localhost:44380/api/Subscribe/Email', emailTo).subscribe((res)=>
 {

   console.log("send Email in subscribe ");
 },err=>
   {
     this.toastr.error(err.message);
   this.toastr.error(err.status);
   });
  

}
subcounter:any={};
subsecibechannelcounter(channelId:number){
  
 // this.spinner.show() ;

  this.http.get('https://localhost:44380/api/subscribe/subsecibecounter/'+channelId).subscribe((res)=>{

    this.subcounter=res;
    // for (let report of Object.keys(this.arrayEmailText)) {
    //   var reportVal = this.arrayEmailText[report];
    //   console.log("The email is in for in ts :"+reportVal["email"]);

    //   this.dataEmailSubscribe[report]=reportVal["email"];
    // }
   // this.spinner.hide();
    this.toastr.success('Data retrived :)');

  },err =>{
   // this.spinner.hide();
    this.toastr.error(err.message);
    this.toastr.error(err.status);
  }
  )

}


/////////////////////////////////////////testimonial/////////////////////////////////////////////

getByIdTestimonial(id : number){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Testimonial/GetTestimonialByID/'+id).subscribe((res)=>{

    this.dataTestimonial=res;

  
  
    this.spinner.hide();
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )

}
dataTestimonialAdmin:any=[]; 

getAllTestimonial(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Testimonial/').subscribe((res)=>{

    this.dataTestimonial=res;
    for(let i=0;i<3;i++)
    {
      this.dataTestimonialAdmin[i]= this.dataTestimonial[i];
      console.log(this.dataTestimonialAdmin[i]);
    }
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}
createTestimonial(data : any){
  //showspinner
  this.spinner.show() ;
  debugger;
  data.testimonialImage = this.userImageVal;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.post('https://localhost:44380/api/Testimonial/', data).subscribe((res)=>{
    debugger;


    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )
  window.location.reload();
}
uploadImageTestimonial(file:FormData){
  debugger;
  this.http.post('https://localhost:44380/api/Testimonial/UploadImg/',file).subscribe((res:any)=>{
    if ( res)
    {
      console.log(res)
    }
    this.display_image = res.testimonialImage ;
    console.log(res.testimonialImage)
  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);}
  )
  
}

updateTestimonial(body:any)
{
  body.TestimonialImage = this.display_image ; //to take the api image
  this.http.put('https://localhost:44380/api/Testimonial/', body).subscribe((res)=>
  {
    this.toastr.success("update successfuly")
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    })
    window.location.reload();
}


deleteTestimonial(testimonialId:number)
{
  this.http.delete('https://localhost:44380/api/testimonial/Delete/'+ testimonialId).subscribe((res)=>

  {

    this.toastr.success("delete successfuly")

  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}

getTestimonialByUserId(userId : number){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Testimonial/getTestimonialByUserId/'+userId).subscribe((res)=>{

    this.dataTestimonialByUser=res;
    //hide spinner
    this.spinner.hide();
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )

}




///////////////////////////////////////////bad report/////////////////////////////////////////////
getAllReport(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/BadReport').subscribe((res)=>{

    this.data=res;
    console.log(this.data)
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}
createReport(data : any){
 
  this.spinner.show() ;

  this.http.post('https://localhost:44380/api/BadReport', data).subscribe((res)=>{
    debugger;


    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  );
  

}
updateReport(bady:any ) {
  //body.imageName = this.display_image ; //to take the api image
  this.http.put('https://localhost:44380/api/BadReport/', bady).subscribe((res)=>
  {
    this.toastr.success("update successfuly")
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    });
    window.location.reload();

}
deleteReport(reportId:number)
{
  this.http.delete('https://localhost:44380/api/BadReport/Delete/'+ reportId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}
getAllchannelforReport(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Channel').subscribe((res)=>{

    this.datachannelforrep=res;
  
    //hide spinner
    this.spinner.hide();
    //toastr
    //this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
   // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}

Getbadreport(channelId : number){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/badreport/Getbadreport/'+channelId).subscribe((res)=>{

    this.data=res;
    //hide spinner
    this.spinner.hide();
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )

}
getEmailByChannelId(channelId : number){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/BadReport/getEmailByChannelId/'+channelId).subscribe((res)=>{

    this.arrayEmailText=res;
   // console.log(this.arrayEmailText);
    for (let report of Object.keys(this.arrayEmailText)) {
      var reportVal = this.arrayEmailText[report];
     // console.log(reportVal["reportText"]);
      //localStorage.setItem("channelId",channelVal["channelId"]);
      this.dataEmail=reportVal["email"];
      this.dataReportText=reportVal["reportText"];
    }


//console.log("this.dataEmail="+this.dataEmail);
//console.log("this.dataReportText="+this.dataReportText);


    this.spinner.hide();
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )

}

sendEmail(body:any){
 
 
 console.log(body);
  this.http.post('https://localhost:44380/api/BadReport/Email', body).subscribe((res)=>
  {
    this.toastr.success("Email send");
    window.location.reload();
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    
    });
   
}


////////////////////////////////////////////////Role////////////////////////////////////////////////////////////////
getAllRole(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/role').subscribe((res)=>{

    this.data=res;
    console.log(this.data)
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}
createRole(data : any){
  //showspinner
  this.spinner.show() ;
  debugger;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.post('https://localhost:44380/api/role', data).subscribe((res)=>{
    debugger;


    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )
  window.location.reload();
}

updateRole(body:any)
{
   this.http.put('https://localhost:44380/api/role', body).subscribe((res)=>
  {
    this.toastr.success("update successfuly")
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    })
    window.location.reload();
}
deleteRole(roleId:number)
{
  this.http.delete('https://localhost:44380/api/role/Delete/'+roleId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}


///////////////////////////////////////////////Video///////////////////////////////////////////////////
createVideo(data:any)
{
  //showspinner
  this.spinner.show() ;
  data.videoPath = this.display_Video;
  
 

  this.http.post('https://localhost:44380/api/Video', data).subscribe((res)=>{
    
    this.spinner.hide();
    this.sendNotification(data.channelId);
    this.toastr.success('Data Create it ');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  });
  //window.location.reload();
}
uploadVideo(file:FormData){
 
  this.http.post('https://localhost:44380/api/video/UploadVideo',file).subscribe((res:any)=>{
    if ( res)
    {
      console.log(res)
    }
    this.display_Video = res.videoPath ; //////////////Note //Note
    console.log("video============================"+this.display_Video)
  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
   // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
  });
  //window.location.reload();
}

updateVideo(body:any)
{

  //to take the api image
  body.VideoPath = this.display_Video;
console.log("display video in update video method is : "+this.display_Video);
  this.http.put('https://localhost:44380/api/Video', body).subscribe((res)=>
  {
    this.toastr.success("update successfuly");
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    });
   window.location.reload();
}

deleteVideo(videoId:number)
{
  this.http.delete('https://localhost:44380/api/Video/Delete/'+ videoId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}
getAllVideo(){
 // this.spinner.show() ;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Video').subscribe((res)=>{

    this.dataVideo=res;
   
    //hide spinner
    this.spinner.hide();
    //toastr
    //this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
   // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
);
//window.location.reload();

}

getAllVideosById(channelId:number){
  this.spinner.show() ;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Video/GETALLVIDEOBYCHANNELID/'+channelId).subscribe((res)=>{

    this.dataVideoChannel=res;
   
    //hide spinner
    this.spinner.hide();
    // for (let like of Object.keys(this.dataVideoChannel)) 
    // {
    //        var likeVal = this.dataVideoChannel[like];
    //        console.log(like+" : "+likeVal["videoId"]);
    //        this.LikesCounter(likeVal["videoId"]);
    //     }
    

  },err =>{
    this.spinner.hide();
     //this.toastr.error ('somting went wrong in getAllVideosById !!');
    //this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
  //  this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}

//////////////////////////////////////////////User////////////////////////////////////////////////////
getAllRoleforUser(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Role').subscribe((res)=>{

    this.dataUserRole=res;
    console.log(this.dataUserRole)
    //hide spinner
    this.spinner.hide();
    //toastr
    //this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
   // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}
createUser(data : any){
  //showspinner
  this.spinner.show() ;
  debugger;
  data.userImage = this.display_image;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.post('https://localhost:44380/api/User/', data).subscribe((res)=>{
    debugger;  
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  });
  window.location.reload();
}
uploadImageUser(file:FormData){
  debugger;
  this.http.post('https://localhost:44380/api/User/UploadImg',file).subscribe((res:any)=>{
    if (res)
    {
      console.log(res)
    }
    this.display_image = res.userImage ;
    console.log(res.userImage)
  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
   // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
  });
  //window.location.reload();
}

updateUser(body:any)
{
  body.UserImage = this.display_image ; 
  //to take the api image
 
  this.http.put('https://localhost:44380/api/User/', body).subscribe((res)=>
  {
    this.toastr.success("update successfuly"); 
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    });
    window.location.reload();
}
deleteUser(userId:number)
{
  this.http.delete('https://localhost:44380/api/User/Delete/'+ userId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}
GetUserById(userId:number){
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/user/GetUserById/'+userId).subscribe((res)=>{

    this.datagetuser=res;
    for (let user of Object.keys(this.datagetuser)) {
      var userVal = this.datagetuser[user];
      console.log(userVal["userImage"]);
      this.userImageVal=userVal["userImage"]

    localStorage.setItem("userImage",userVal["userImage"]);
    }
    
    this.userImageVal=userVal["userImage"]

    this.spinner.hide();
    //toastr
    this.toastr.success('welcom:)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )

}
getAllUser(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/User').subscribe((res)=>{

    this.data=res;
    console.log(this.data);
    
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )


}

getNumOfRegisterUsers(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/user/NumOfRegisterUsers').subscribe((res)=>{

    this.NumOfRegisterUsers=res;
    console.log(this.NumOfRegisterUsers)
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  );

//window.location.reload();
}

searchingNumberOfUserByDate(DateFrom:any)
{
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),

  }
  console.log("pdate from::::::::::"+DateFrom.pdate_from);

  console.log("pdate to::::::::"+DateFrom.pdate_to);


if(DateFrom.pdate_from==null || DateFrom.pdate_to==null )
window.alert("Enter the End & Start date");
else
this.http.post('https://localhost:44380/api/user/SearschingNumberOFUserByDate',DateFrom,httpOptions).subscribe((res)=>{
  this.dataSearchUserDate=res;


  for (let like of Object.keys(this.dataSearchUserDate)) {
    var likeVal = this.dataSearchUserDate[like];
    //console.log("number of user: "+likeVal["numberOfUsers"]);
    this.num = likeVal["numberOfUsers"];
    console.log("number or user " + this.num)
  }



      this.spinner.hide();

      this.toastr.success('Data Retrive');}
      ,err =>{
      this.spinner.hide();

      this.toastr.error(err.message);
      this.toastr.error(err.status);});
     

      
}
/////////////////////////////////////////Channel/////////////////////////////////////////////////////////
getAllChannel(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Channel').subscribe((res)=>{

    this.dataChannel=res;
    console.log(this.data)

  

    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )
 
  
} 
createChannel(data:any)
  {
    //showspinner
    this.spinner.show() ;
    data.channelImage = this.display_image_channel;
    debugger;
    //hit api
    //get is resived the url of your api and some optional things if you want to send them
    this.http.post('https://localhost:44380/api/Channel/', data).subscribe((res)=>{
      debugger;  
      //hide spinner
      this.spinner.hide();
      //toastr
      this.toastr.success('Data retrived :)');

    },err =>{
      this.spinner.hide();
      // this.toastr.error ('somting went wrong !!');
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
      this.toastr.error(err.status);
      //two ubove are used to now the exact errors happends
    });
    window.location.reload();
  }
updatechannel(body:any)
  {
   
    //to take the api image
  body.ChannelImage = this.display_image_channel;

  this.http.put('https://localhost:44380/api/Channel', body).subscribe((res)=>
  {
    this.toastr.success("update successfuly");
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    });
    window.location.reload();
  }

deleteChannel(channelId:number)
{
  this.http.delete('https://localhost:44380/api/Channel/Delete/'+ channelId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
    // localStorage.removeItem("channelId");
    // sessionStorage.removeItem("channelId");

  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  window.location.reload();


}
getChannelByUserID (userId : number){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Channel/getChannelByUserID/'+userId).subscribe((res)=>{

    this.datauserchannel=res;
  this.channelIdForUser=this.datauserchannel.channelId   //hide spinner
    this.spinner.hide();
   // this.toastr.success("The channel Id:"+ this.datauserchannel);

    // Iterate over the property names:
    for (let channel of Object.keys(this.datauserchannel)) {
        var channelVal = this.datauserchannel[channel];
        console.log(channelVal["channelId"]);
        //localStorage.setItem("channelId",channelVal["channelId"]);
      }
      this.getAllVideosById(channelVal["channelId"]);
      this.channelIdVal=channelVal["channelId"];
      this.categoryIdVal=channelVal["categoryId"];


    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
   // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
   // this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )

}
SearchingChannel(SearchForm:any)
{
  const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),

}



  console.log("pchannelName============"+SearchForm.pchannelName);
     console.log("pcategoryName============"+SearchForm.pcategoryName);
     console.log("pdate_from============"+SearchForm.pdate_from);
     console.log("pdate_to============"+SearchForm.pdate_to);
  this.http.post('https://localhost:44380/api/channel/SearchingChannel/',SearchForm,httpOptions).subscribe((res)=>{

    this.dataChannel=res;
    //console.log("==================="+this.dataSearchByName);
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data Retrive');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )

}
uploadImageChannel(file:FormData){
  debugger;
  this.http.post('https://localhost:44380/api/Channel/UploadImg',file).subscribe((res:any)=>{
    if (res)
    {
      console.log(res)
    }
    this.display_image_channel = res.channelImage ;
    console.log(res.channelImage)
  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
   // this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
  });
  //window.location.reload();
}
getChannelByCategoeyID (categoryId : number){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/Channel/getChannelByCategoryId/'+categoryId).subscribe((res)=>{

    this.dataChannelByCategory=res;
    this.spinner.hide();
 


    this.toastr.success('Data Retrived :)');

  },err =>{
    this.spinner.hide();
     this.toastr.error ('somting went wrong !!');
    //this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )

}
takecategory(categoryId:number){
  localStorage.setItem("categoryId" , categoryId.toString());
}

getChannelById(channelId:number){
  this.spinner.show() ;

 this.http.get('https://localhost:44380/api/Channel/getChannelById/'+channelId).subscribe((res)=>{

    this.dataChannelByChannel=res;
    this.spinner.hide();
    this.toastr.success('Data Retrived :)');

  },err =>{
    this.spinner.hide();
     this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.status);
  }
  )

}


/////////////////////////////////////////////////////////Mixed//////////////
getAvalaibelChannel(userId:number)
{
  this.getChannelByUserID(userId);

  for (let channel of Object.keys(this.datauserchannel)) {
    var channelVal = this.datauserchannel[channel];
    console.log(channelVal["channelId"]);
    localStorage.setItem('channelId',channelVal["channelId"]); // setting




}
}


////////////////////////////////////////Comment/////////////////////////////
createComment(data:any)
{
  //showspinner
  this.spinner.show() ;
  debugger;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.post('https://localhost:44380/api/Comment/', data).subscribe((res)=>{
    //debugger;  
    this.getCommentById(data.videoId)

    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  });
  
}
updateComment(body:any)
{
 
  //to take the api image
 
  this.http.put('https://localhost:44380/api/Comment', body).subscribe((res)=>
  {
    this.getCommentById(body.videoId)
    this.toastr.success("update successfuly"); 
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    });
    
}
deleteComment(commentId:number)
{
  this.spinner.show();
  this.http.delete('https://localhost:44380/api/Comment/Delete/'+ commentId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
    this.spinner.hide();

  },err=>

  {
    this.spinner.hide();

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  


}
getAllComment(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/comment').subscribe((res)=>{

    this.dataComment=res;
    console.log(this.data)
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )
 
  
}
getCommentById(videolId:number){

 this.http.get('https://localhost:44380/api/comment/GETCOMMENTSBYID/'+videolId).subscribe((res)=>{

    this.commentbyid=res;
    this.toastr.success('Data Retrived :)');

  },err =>{
     this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.status);
  }
  )

}
////////////////////////////////////////ReplayComment///////////////////////////

createReplayComment(data:any)
{
  //showspinner
  this.spinner.show() ;
  debugger;
  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.post('https://localhost:44380/api/ReplayComment/', data).subscribe((res)=>{
    debugger;  
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  });
  
}
updateReplayComment(body:any)
{
 
  //to take the api image
 
  this.http.put('https://localhost:44380/api/ReplayComment', body).subscribe((res)=>
  {
    this.toastr.success("update successfuly"); 
  },err=>
    {
      this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    });
    
}
deleteReplayComment(ReplaycommentId:number)
{
  this.http.delete('https://localhost:44380/api/ReplayComment/Delete/'+ ReplaycommentId).subscribe((res)=>
  {
    this.toastr.success("delete successfuly");
  },err=>

  {

    this.toastr.error(err.message);

  this.toastr.error(err.status);



  });
  


}
getAllReplayComment(){
  //showspinner
  this.spinner.show() ;

  //hit api
  //get is resived the url of your api and some optional things if you want to send them
  this.http.get('https://localhost:44380/api/ReplayComment').subscribe((res)=>{

    this.data=res;
    console.log(this.data)
    //hide spinner
    this.spinner.hide();
    //toastr
    this.toastr.success('Data retrived :)');

  },err =>{
    this.spinner.hide();
    // this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.message);//send the css of thim by the code in the app.module.ts
    this.toastr.error(err.status);
    //two ubove are used to now the exact errors happends
  }//i call the data from the coursecarde ts
  )
 
  
}

replaycommentbyid:any=[{}]
getReplayCommentById(commnetId:number){
  this.spinner.show() ;

 this.http.get('https://localhost:44380/api/ReplayComment/GetReplayComment/'+commnetId).subscribe((res)=>{

    this.replaycommentbyid=res;
    this.spinner.hide();
    this.toastr.success('Data Retrived :)');

  },err =>{
    this.spinner.hide();
     this.toastr.error ('somting went wrong !!');
    this.toastr.error(err.status);
  }
  )

}


}
