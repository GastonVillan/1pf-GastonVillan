import { Component, EventEmitter, Output, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
userForm:FormGroup;

@Output()
userSubmitted = new EventEmitter();



  constructor (private fb:FormBuilder) {
    this.userForm = this.fb.group({
      id:this.fb.control (null),
      firstName: this.fb.control(' ', Validators.required),
      lastName: this.fb.control(' ', Validators.required),
      edad: this.fb.control(' ', Validators.required),
      cursos: this.fb.control(' ', Validators.required),
      carrera: this.fb.control(' ', Validators.required),
    })
  }
  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.userSubmitted.emit(this.userForm.value);
      this.userForm.reset();
    }
  }
  // onSubmit():void{
    //this.userSubmitted.emit(this.userform.value);
  //}
    
}
