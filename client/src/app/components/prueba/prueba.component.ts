import { Component, OnInit } from '@angular/core';
import { ContenidosService } from 'src/app/services/contenidos.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

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

  

    
}