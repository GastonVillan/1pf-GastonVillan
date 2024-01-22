import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alumnosComponent } from './alumnos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    alumnosComponent
  ],
  imports: [
    CommonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatIconModule
  ],
  exports : [alumnosComponent]
})
export class AlumnosModule { }
