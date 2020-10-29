import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ContenidosService } from '../../services/contenidos.service';
@Component({
  selector: 'app-editarcontenido',
  templateUrl: './editarcontenido.component.html',
  styleUrls: ['./editarcontenido.component.scss']
})
export class EditarcontenidoComponent implements OnInit {
  contenido: any
  id: string
  constructor(private contenidosService: ContenidosService) { }

  ngOnInit(){
    this.contenidosService.getContenido(this.id).subscribe(

      res => {
        this.contenido = res;
          
      },
      err=> {console.error(err);
       // this.contenidos=[];
      
      }
    )
  }

}
