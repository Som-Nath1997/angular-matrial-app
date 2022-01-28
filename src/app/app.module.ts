import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';
import { MessageboxModule } from './messagebox/messagebox.module';
// import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SetupRoutingModule} from '../app/setup/setup-routing.module'
import { SetupModule } from './setup/setup.module';
import {MatBreadcrumbModule} from "mat-breadcrumb";




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule, 
    MatToolbarModule,
    MatSidenavModule,
  	MatToolbarModule,
    // MatSidenavModule,
    // MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    // MaterialExampleModule,
    ReactiveFormsModule,
    MessageboxModule,
    MatFormFieldModule,
    SetupModule,
    SetupRoutingModule,
    MatBreadcrumbModule
,
SetupModule  ],
  providers: [
    SidenavService ,  
    
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
