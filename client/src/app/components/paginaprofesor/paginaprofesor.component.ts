import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaprofesor',
  templateUrl: './paginaprofesor.component.html',
  styleUrls: ['./paginaprofesor.component.scss']
})
export class PaginaprofesorComponent  {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  subircontenidos(){
    this.router.navigate(['/agregarcontenido']);

  }
  vercontenido(){
    this.router.navigate(['/muestrotodos']);
  }
}
