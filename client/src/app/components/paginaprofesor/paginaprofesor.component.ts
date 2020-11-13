import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-paginaprofesor',
  templateUrl: './paginaprofesor.component.html',
  styleUrls: ['./paginaprofesor.component.scss']
})
export class PaginaprofesorComponent  {

  constructor(private router:Router, private materiasService: MateriaService) { }

  ngOnInit(): void {
    this.getmateriasfiltradas();

  }

  getmateriasfiltradas() {
    var idanioprofesor=localStorage.getItem("idanioprofesor");
      this.materiasService.getMateriabyProfesor(idanioprofesor).subscribe(
        (data: any) => {
          console.log(data);
        }
      )
    
    }
  
    
  
  
  


  subircontenidos(){
    this.router.navigate(['/agregarcontenido']);

  }
  vercontenido(){
    this.router.navigate(['/muestrotodos']);
  }
}
