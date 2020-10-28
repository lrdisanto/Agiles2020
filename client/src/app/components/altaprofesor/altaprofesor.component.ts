import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';

import {ProfesoresService} from '../../services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altaprofesor',
  templateUrl: './altaprofesor.component.html',
  styleUrls: ['./altaprofesor.component.scss']
})
export class AltaprofesorComponent implements OnInit {

  profesor: Profesor = {
    mail: '',
    nombre: '',
    apellido:'',
    dni: null,
    
  };

  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit(): void {}

 
    saveNewProfesor(){

   
  
      this.profesoresService.saveProfesor(this.profesor)
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
