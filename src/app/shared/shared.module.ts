import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { SidenavService } from '../services/sidenav.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatListModule} from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MessageboxModule } from '../messagebox/messagebox.module';
import {MatExpansionModule} from '@angular/material/expansion'
import {SetupModule} from '../setup/setup.module'
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent, 
    
  ],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatToolbarModule,
    MatSidenavModule,
  	MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    // MaterialExampleModule,
    ReactiveFormsModule,
    MatListModule,
    MatGridListModule,
    MessageboxModule,
    MatExpansionModule,
    SetupModule,
    MatTooltipModule,
    RouterModule
   
  ],
  providers:[
    SidenavService   ,
  ],
  exports: [    
    HeaderComponent, 
    SidenavComponent

  ],
  
})
export class SharedModule { }
