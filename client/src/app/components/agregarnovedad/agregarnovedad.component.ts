import { Component, HostBinding, OnInit } from '@angular/core';
import { Novedades } from 'src/app/models/novedades';

import { NovedadesService } from '../../services/novedades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarnovedad',
  templateUrl: './agregarnovedad.component.html',
  styleUrls: ['./agregarnovedad.component.css']
})
export class AgregarnovedadComponent implements OnInit {

//  @HostBinding('class') class='row'; // ---> esto hace que el formulario sea una unica row en toda la pantalla, lo dejo por las dudas
  
 novedades: Novedades = {
    titulo:'',
    descripcion:'',
    imagen:''
   };

  constructor(private novedadesService: NovedadesService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNewNovedad(){

   // delete this.novedades.created_at;
   delete this.novedades.idnovedades;

    this.novedadesService.saveNovedades(this.novedades)
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
