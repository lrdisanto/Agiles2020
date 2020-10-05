import { Component, HostBinding, OnInit } from '@angular/core';
import { Contenido } from 'src/app/models/Contenido';

import { ContenidosService } from '../../services/contenidos.service';

@Component({
  selector: 'app-agregarcontenido',
  templateUrl: './agregarcontenido.component.html',
  styleUrls: ['./agregarcontenido.component.css']
})
export class AgregarcontenidoComponent implements OnInit {

//  @HostBinding('class') class='row'; // ---> esto hace que el formulario sea una unica row en toda la pantalla, lo dejo por las dudas
  
  contenido: Contenido = {
   idcontenido: 0,
    descripcion: '',
    link: '',
    materia: '',
    created_at: new Date(),
    codigomateria: 2
   };

  constructor(private contenidosService: ContenidosService) { }

  ngOnInit(): void {
  }

  saveNewContenido(){

    delete this.contenido.created_at;
   // delete this.contenido.idcontenido;

    this.contenidosService.saveContenido(this.contenido)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)



    )
    location.reload();
  }

}
