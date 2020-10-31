import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.componente.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private router:Router) {
    

  }
  
   

  ngOnInit(): void {
  }
     navegaralogin(){
   this.router.navigate(['/login']);
 }
 navegaralogin2(){
   this.router.navigate(['/logindos']);
 }

 navegarhome() {
   this.router.navigate(['']);
 }

 administrador() {
   this.router.navigate(['administrador']);
 }

}
