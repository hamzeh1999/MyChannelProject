import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from'ngx-toastr' ;
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptor } from 'src/Interceptor/token.interceptor';
import { CategoryComponent } from './category/category.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { VideosComponent } from './videos/videos.component';
import { VideosCardComponent } from './videos-card/videos-card.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { CommentComponent } from './comment/comment.component';
import { ReplayCommentComponent } from './replay-comment/replay-comment.component';
import { SafePipe } from './safe.pipe';
import { ChannelsPageComponent } from './channels-page/channels-page.component';
import { UserHomeComponent } from './user-home/user-home.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    TestimonialComponent,
    CategoryComponent,
    ChannelComponent,
    ChannelCardComponent,
    VideosComponent,
    SafePipe,
    VideosCardComponent,
    MyChartComponent,
    CommentComponent,
    ReplayCommentComponent,
    ChannelsPageComponent,
    UserHomeComponent,
    
    
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgxSpinnerModule ,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 2000,
       positionClass :'toastr-bottom-center' ,
       preventDuplicates:true 
    }),
    MatDialogModule
    
    

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
