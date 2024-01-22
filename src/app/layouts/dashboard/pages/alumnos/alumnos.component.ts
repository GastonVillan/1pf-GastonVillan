import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss',
})
export class alumnosComponent {

  alumnosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alumnosForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      products: this.fb.array([]),
    });

  }
  onAddProduct (): void{
    const formArray = this.alumnosForm.get('products')
    if ( formArray instanceof FormArray){
      formArray.push(
        this.fb.group({
          productName: this.fb.control(''),
    })
      )
    }
  }
}