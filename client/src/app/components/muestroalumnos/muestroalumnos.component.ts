import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-muestroalumnos',
  templateUrl: './muestroalumnos.component.html',
  styleUrls: ['./muestroalumnos.component.css']
})
export class MuestroalumnosComponent implements OnInit {

    alumnos: any = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    
    this.alumnoService.getAlumnos().subscribe(
      res => {
        this.alumnos = res;
          
      },
      err=> {console.error(err);
       // this.contenidos=[];
      
      }
    )
  }

  

  deleteAlumno(id: string){
    this.alumnoService.deleteAlumno(id).subscribe(

      res => {
        console.log(res)

      },

      err => console.log(err)
    ) 
    location.reload();
  }
    
}