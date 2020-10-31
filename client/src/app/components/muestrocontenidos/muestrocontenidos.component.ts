import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { ContenidosService } from '../../services/contenidos.service';

@Component({
  selector: 'app-muestrocontenidos',
  templateUrl: './muestrocontenidos.component.html',
  styleUrls: ['./muestrocontenidos.component.css']
})
export class MuestrocontenidosComponent implements OnInit {

    contenidos: any = [];

  constructor(private contenidosService: ContenidosService) { }

  ngOnInit(): void {
    
    this.contenidosService.getFiltrado().subscribe(
      res => {
        this.contenidos = res;
          
      },
      err=> {console.error(err);
       // this.contenidos=[];
      
      }
    )
  }

  

  deleteContenido(id: string){
    this.contenidosService.deleteContenido(id).subscribe(

      res => {
        console.log(res)

      },

      err => console.log(err)
    ) 
  }
    
}
