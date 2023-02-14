import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { CreateUserChannelComponent } from './create-user-channel/create-user-channel.component';
import { ManageUserChannelComponent } from './manage-user-channel/manage-user-channel.component';
import { ManageUserProfileComponent } from './manage-user-profile/manage-user-profile.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { CreateUserVideoComponent } from './create-user-video/create-user-video.component';
import { ManageUserTestimonialComponent } from './manage-user-testimonial/manage-user-testimonial.component';
import { UserHomeComponent } from './user-home/user-home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateUserChannelComponent,
    ManageUserChannelComponent,
    ManageUserProfileComponent,
    ManageVideoComponent,
    CreateUserVideoComponent,
    ManageUserTestimonialComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatDialogModule,
    CommonModule,
    SharedModule,
    MatDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
