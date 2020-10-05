import { Component, OnInit } from '@angular/core';
import { ContenidosService } from 'src/app/services/contenidos.service';

@Component({
  selector: 'app-muestrotodoalumnos',
  templateUrl: './muestrotodoalumnos.component.html',
  styleUrls: ['./muestrotodoalumnos.component.scss']
})
export class MuestrotodoalumnosComponent implements OnInit {



  contenidos: any = [];

  constructor(private contenidosService: ContenidosService) { }

  ngOnInit(): void {
    
    this.contenidosService.getContenidos().subscribe(
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
    location.reload();
  }
    
}
