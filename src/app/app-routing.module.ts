import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AutherizationGuard } from './autherization.guard';
import { CategoryComponent } from './category/category.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelsPageComponent } from './channels-page/channels-page.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserModule } from './user/user.module';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
  path:'contactus',
  component:ContactusComponent

},
{
  path:'',
  component:HomeComponent

},
{
  path:'home',
  component:HomeComponent

},

{
  path:'aboutus',
  component:AboutusComponent

},
{
  path:'channels-page',
  component:ChannelsPageComponent

},


{
  path:'testimonial',
  component:TestimonialComponent

},
{
  path:'category',
  component:CategoryComponent

},
{
  path:'Channels',
  component:ChannelComponent

},
{
  path:'Video',
  component:VideosComponent

},
{
  path:"chart",
  component:MyChartComponent
},
{
  path:"userHome",
  component:UserHomeComponent
},

{
  path:'admin',
loadChildren: ()=> AdminModule,
canActivate:[AutherizationGuard]
},
{
  path:'user',
loadChildren: ()=> UserModule,
canActivate:[AutherizationGuard]
},


{
  path:'security',
  loadChildren: ()=> AuthModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
