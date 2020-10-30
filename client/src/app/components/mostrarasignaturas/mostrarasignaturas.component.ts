import { Component, OnInit } from '@angular/core';

import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-mostrarasignaturas',
  templateUrl: './mostrarasignaturas.component.html',
  styleUrls: ['./mostrarasignaturas.component.scss']
})
export class MostrarasignaturasComponent implements OnInit {

  materias: any =[]
  constructor(private materiaService: MateriaService) { }

  ngOnInit(): void {

    this.materiaService.getMaterias().subscribe(
      res => {
        this.materias = res;
          
      },
      err=> {console.error(err);
       // this.contenidos=[];
      
      }
    )
  }
  deleteMateria(id: string){
    this.materiaService.deleteMateria(id).subscribe(

      res => {
        console.log(res)

      },

      err => console.log(err)
    ) 
    location.reload();
  }
    

}
