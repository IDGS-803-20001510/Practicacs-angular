import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Ds2PuntosComponent } from '../ds2-puntos/ds2-puntos.component';


@NgModule({
  declarations: [
    Ds2PuntosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    Ds2PuntosComponent
  ]
})
export class D2PuntosModule { }
