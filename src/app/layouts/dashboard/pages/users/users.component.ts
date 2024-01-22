import { Component } from '@angular/core';
import { User } from './models/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'edad','cursos','carrera',];
  dataSource :
  User []=[
  {
    id: 1,
    firstName: 'Martin',
    lastName: "Lopez",
    edad: 20,
    cursos:"Javascript",
    carrera: "Full stack",
  },
  {
    id: 1,
    firstName: 'Martin',
    lastName: "Lopez",
    edad: 20,
    cursos:"Javascript",
    carrera: "Full stack",
  },
  {
    id: 2,
    firstName: 'Gaston',
    lastName: "Herrera",
    edad: 29,
    cursos:"Javascript",
    carrera: "Full stack",
  },
  {
    id: 3,
    firstName: 'Luis',
    lastName: "Galvez",
    edad: 36,
    cursos:"Javascript",
    carrera: "Back End",
  },
  {
    id: 4,
    firstName: 'Esteban',
    lastName: "Maldonado",
    edad: 25,
    cursos:"Angular",
    carrera: "Back End",
  },
  {
    id: 5,
    firstName: 'Jose',
    lastName: "Tadic",
    edad: 38,
    cursos:"Angular",
    carrera: "Back End",
  },
  {
    id: 6,
    firstName: 'Maria',
    lastName: "Rosa",
    edad: 19,
    cursos:"Reacts",
    carrera: "Back End",
  },
  {
    id: 7,
    firstName: 'Ariana',
    lastName: "Gullota",
    edad: 28,
    cursos:"Reacts",
    carrera: "Reacts",
  },
  {
    id: 8,
    firstName: 'Guadalupe',
    lastName: "Veliz",
    edad: 34,
    cursos:"DesarrolloWeb",
    carrera: "Desarrollo web",
  },

  ]

  onUserSubmitter (ev: User):void{
    this.dataSource = [...this.dataSource, ev];
  }

}