import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { CreateSubscribeComponent } from './create-subscribe/create-subscribe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAboutUsComponent } from './manage-about-us/manage-about-us.component';
import { ManageBadReportComponent } from './manage-bad-report/manage-bad-report.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageChannelComponent } from './manage-channel/manage-channel.component';
import { ManageCommentComponent } from './manage-comment/manage-comment.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageReplyCommentComponent } from './manage-reply-comment/manage-reply-comment.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageSubscribeComponent } from './manage-subscribe/manage-subscribe.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
   {
     path:'manageAboutUs',
    component:ManageAboutUsComponent
   },
  {
    path:'content',
    component:ContentComponent
  },
  {
    path:'ManageContactUs',
    component:ManageContactUsComponent
  },
  {
    path:'manageCategory',
    component:ManageCategoryComponent
  },
  {
    path:'manageHome',
    component:ManageHomeComponent
  },
  {
    path:'manageSubscribe',
    component:ManageSubscribeComponent
  },
  {
    path:'manageTestimonial',
    component:ManageTestimonialComponent
  },
 
  {
    path:'manageRole',
    component:ManageRoleComponent
  },

  {
    path:'manageUser',
    component: ManageUserComponent
  },
  {
    path:'manageVideo',
    component: ManageVideoComponent
  },
  {
    path:'manageChannel',
    component: ManageChannelComponent
  },
  {
    path:'manageComment',
    component: ManageCommentComponent
  },
  {
    path:'manageReport',
    component:ManageBadReportComponent
  },
  {
    path:'manageReplayComment',
    component:ManageReplyCommentComponent
  }
  // {
  //   path:'createsub',
  //   component:CreateSubscribeComponent
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
