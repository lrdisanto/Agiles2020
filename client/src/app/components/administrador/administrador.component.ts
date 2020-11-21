import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
 export class AdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    altaprofesor(){
      this.router.navigate(['altaprofesor']);
    }
  
    altaalumnos() {
      this.router.navigate(['altaalumnos']);
    }
    altaasignaturas(){
      this.router.navigate(['altaasignatura']);
    }
    
    agregarnovedad(){
      this.router.navigate(['agregarnovedades'])
    }
    

 /*  sistema: {title: string, content: string, url: string, func}[] = [
    {title: 'Alta alumnos', content:'Aquí va el altaAlumno', url:'Aquí va la url', func: this.altaalumnos()},
    {title: 'Alta profesores', content:'Aquí va el altaAlumno', url:'Aquí va la url', func: this.altaprofesor()},
    {title: 'Alta materias', content:'Aquí va el altaAlumno', url:'Aquí va la url', func: this.altaasignaturas()}  

  ];
  fin: number =3;
 */
}

