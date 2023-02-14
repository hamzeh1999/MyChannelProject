import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { UserHeaderComponent } from './user-header/user-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    UserHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatDialogModule
    
  ],
  exports: [
   
    //for two way amd forms we use the form
    FormsModule ,
    ReactiveFormsModule ,
    //for validation and mat errors we use the mat
    MatFormFieldModule,
    MatInputModule,
    HeaderComponent,
    FooterComponent ,
    MatDialogModule,
    ChartComponent,
    UserHeaderComponent
    //for the custompipe i created in the appmodule and declaration 
  ],
    
})
export class SharedModule { }
