import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { TituloDirective } from './titulo.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    TituloDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FullNamePipe,
     TituloDirective
  ],
})
export class SharedModule {}
