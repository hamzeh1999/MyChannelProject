import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../admin/content/content.component';
import { ManageAboutUsComponent } from '../admin/manage-about-us/manage-about-us.component';
import { ManageBadReportComponent } from '../admin/manage-bad-report/manage-bad-report.component';
import { ManageCategoryComponent } from '../admin/manage-category/manage-category.component';
import { ManageChannelComponent } from '../admin/manage-channel/manage-channel.component';
import { ManageCommentComponent } from '../admin/manage-comment/manage-comment.component';
import { ManageContactUsComponent } from '../admin/manage-contact-us/manage-contact-us.component';
import { ManageHomeComponent } from '../admin/manage-home/manage-home.component';
import { ManageReplyCommentComponent } from '../admin/manage-reply-comment/manage-reply-comment.component';
import { ManageRoleComponent } from '../admin/manage-role/manage-role.component';
import { ManageSubscribeComponent } from '../admin/manage-subscribe/manage-subscribe.component';
import { ManageTestimonialComponent } from '../admin/manage-testimonial/manage-testimonial.component';
import { ManageUserComponent } from '../admin/manage-user/manage-user.component';
import { ManageVideoComponent } from '../user/manage-video/manage-video.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUserChannelComponent } from './manage-user-channel/manage-user-channel.component';
import { ManageUserProfileComponent } from './manage-user-profile/manage-user-profile.component';
import { ManageUserTestimonialComponent } from './manage-user-testimonial/manage-user-testimonial.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
 
   {
    path:'dashboard',
    component:DashboardComponent
   },
   {
    path:'manageChannel',
    component:ManageUserChannelComponent
   },
   
   {
    path:'editMyProfile',
    component:ManageUserProfileComponent
   },
   {
    path:'addVideos',
    component:ManageVideoComponent
   },
   {
    path:'manageTestimonial',
    component:ManageUserTestimonialComponent
   },
   {
    path:'userHome',
    component:UserHomeComponent
   },
   

   
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
