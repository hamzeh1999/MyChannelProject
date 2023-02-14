import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    FormsModule,
     ReactiveFormsModule ,
     MatInputModule,
     SharedModule
  ]
})
export class AuthModule { }
