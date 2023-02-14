import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateAboutUsComponent } from './create-about-us/create-about-us.component';
import { CreateContactUsComponent } from './create-contact-us/create-contact-us.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { CreateHomeComponent } from './create-home/create-home.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { CreateTestimonialComponent } from './create-testimonial/create-testimonial.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { CreateLikingComponent } from './create-liking/create-liking.component';
import { ManageLikingComponent } from './manage-liking/manage-liking.component';
import { CreateBadReportComponent } from './create-bad-report/create-bad-report.component';
import { ManageBadReportComponent } from './manage-bad-report/manage-bad-report.component';
import { CreateSubscribeComponent } from './create-subscribe/create-subscribe.component';
import { ManageSubscribeComponent } from './manage-subscribe/manage-subscribe.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageAboutUsComponent } from './manage-about-us/manage-about-us.component';
import { CreateVideoComponent } from './create-video/create-video.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { ManageChannelComponent } from './manage-channel/manage-channel.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { ManageCommentComponent } from './manage-comment/manage-comment.component';
import { ManageReplyCommentComponent } from './manage-reply-comment/manage-reply-comment.component';
import { CreateReplyCommentComponent } from './create-reply-comment/create-reply-comment.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ContentComponent,
    CreateAboutUsComponent,
    CreateContactUsComponent,
    CreateCategoryComponent,
    ManageCategoryComponent,
    ManageContactUsComponent,
    CreateHomeComponent,
    ManageHomeComponent,
    CreateTestimonialComponent,
    ManageTestimonialComponent,
    CreateLikingComponent,
    ManageLikingComponent,
    CreateBadReportComponent,
    ManageBadReportComponent,
    CreateSubscribeComponent,
    ManageSubscribeComponent,
    CreateRoleComponent,
    ManageRoleComponent,
    ManageAboutUsComponent,
    CreateVideoComponent,
    ManageVideoComponent,
    CreateUserComponent,
    ManageUserComponent,
    CreateChannelComponent,
    ManageChannelComponent,
    CreateCommentComponent,
    ManageCommentComponent,
    ManageReplyCommentComponent,
    CreateReplyCommentComponent
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatDialogModule

  ],
    
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
