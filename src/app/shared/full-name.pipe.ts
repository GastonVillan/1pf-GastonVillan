import {Pipe, PipeTransform } from '@angular/core';

export interface UserPipe{
firstName: string;
lastName: string;
}

//anexe asi el User porque intente usar el pipe importando mi carpeta Model y no me lo leia al user

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  edad: number;
  cursos: string;
  carrera: string;
}

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    const firstArg = args [0];
    const result = '$(value.name) $(value.lastname)';
    switch (firstArg) {
      case 'lowercase':
        return result.toLowerCase();
      case 'uppercase':
        return result.toUpperCase();

      default:
        return result;
  }
  }}
