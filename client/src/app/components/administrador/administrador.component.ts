import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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


}
