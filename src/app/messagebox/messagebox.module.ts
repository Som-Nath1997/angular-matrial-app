import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import {MatTableModule} from '@angular/material/table'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import { ModelboxComponent } from './modelbox/modelbox.component'
import {MatDialogModule} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import {SetupModule} from '../setup/setup.module'

@NgModule({
  declarations: [
    MessageComponent,
    ModelboxComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    SetupModule
    

    
    
  ],
  exports: [    
    MessageComponent,
    FormComponent
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {float: 'always'} }
  ],
})
export class MessageboxModule { }
