import { Component, OnInit } from '@angular/core';

import { NovedadesService } from '../../services/novedades.service';

@Component({
  selector: 'app-mostrarnovedades',
  templateUrl: './mostrarnovedades.component.html',
  styleUrls: ['./mostrarnovedades.component.scss']
})
export class MostrarnovedadesComponent implements OnInit {

  novedades: any =[]
  constructor(private novedadesService: NovedadesService) { }

  ngOnInit(): void {

    this.novedadesService.getNovedades().subscribe(
      res => {
        this.novedades = res;
          
      },
      err=> {console.error(err);
       // this.novedades=[];
      
      }
    )
  }
  deleteNovedad(id: string){
    this.novedadesService.deleteNovedad(id).subscribe(

      res => {
        console.log(res)

      },

      err => console.log(err)
    ) 
    location.reload();
  }
    

}
