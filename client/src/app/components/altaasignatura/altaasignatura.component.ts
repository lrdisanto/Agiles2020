import { Component, HostBinding, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/Materia';

import { MateriaService } from '../../services/materia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altaasignaturas',
  templateUrl: './altaasignatura.component.html',
  styleUrls: ['./altaasignatura.component.css']
})
export class AltaasignaturaComponent implements OnInit {

//  @HostBinding('class') class='row'; // ---> esto hace que el formulario sea una unica row en toda la pantalla, lo dejo por las dudas
  
  materia: Materia = {
    idanio: 1,
    idprofesor:1, 
    nombre: '',
   };

  constructor(private materiaService: MateriaService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewMateria(){

   // delete this.materia.idmateria;
   

    this.materiaService.saveMateria(this.materia)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)



    )
    location.reload();
  }

  inicio() {
    this.router.navigate(['/']);
  }

}