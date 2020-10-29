import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

import {AlumnoService} from '../../services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altaalumnos',
  templateUrl: './altaalumnos.component.html',
  styleUrls: ['./altaalumnos.component.css']
})
export class AltaalumnosComponent implements OnInit {

  alumno: Alumno = {
    idanio: null,
    mail: '',
    nombre: '',
    apellido:'',
    dni: null,
   
  };

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {}

 
    saveNewAlumno(){

   
  
      this.alumnoService.saveAlumno(this.alumno)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
  
  
  
      )
      location.reload();
    }
  
    //  inicio() {
    //   this.router.navigate(['/']);
    //  }
  

}
