import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';

import {ProfesoresService} from '../../services/profesores.service';

@Component({
  selector: 'app-mostrarprof',
  templateUrl: './mostrarprof.component.html',
  styleUrls: ['./mostrarprof.component.scss']
})
export class MostrarprofComponent implements OnInit {

  profesor: any = [];

  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit(): void {
    
    this.profesoresService.getProfesores().subscribe(
      res => {
        this.profesor = res;
          
      },
      err=> {console.error(err);
       // this.contenidos=[];
      
      }
    )
  }

  

  deleteProfesor(id: string){
    this.profesoresService.deleteProfesor(id).subscribe(

      res => {
        console.log(res)

      },

      err => console.log(err)
    ) 
   console.log(id);
    location.reload();
  }
    
}
