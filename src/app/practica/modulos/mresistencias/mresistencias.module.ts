import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ResistenciasComponent } from '../resistencias/resistencias.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ResistenciasComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    ResistenciasComponent
  ]
})
export class MresistenciasModule { }
