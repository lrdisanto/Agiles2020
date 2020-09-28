import { Component, OnInit } from '@angular/core';

import { ContenidosService } from '../../services/contenidos.service';

@Component({
  selector: 'app-muestrocontenidos',
  templateUrl: './muestrocontenidos.component.html',
  styleUrls: ['./muestrocontenidos.component.scss']
})
export class MuestrocontenidosComponent implements OnInit {

    contenidos: any = [];

  constructor(private contenidosService: ContenidosService) { }

  ngOnInit(): void {

    this.contenidosService.getContenidos().subscribe(
      res => {
        this.contenidos = res;
      },
      err=> {console.error(err);
        this.contenidos=[];
      
      }
    )
  }

}
