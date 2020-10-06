import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logindos',
  templateUrl: './logindos.component.html',
  styleUrls: ['./logindos.component.css']
})
export class LogindosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  paginaprofesor(){

    
      // var usuario= (document.getElementById("emailalumno") as HTMLTextAreaElement).value;
      // console.log(usuario);
      // var clave=(document.getElementById("clavealumno") as HTMLTextAreaElement).value;
      // console.log(clave);
  
      // if (usuario === 'martin@gmail.com' && clave === '123456') {
        this.router.navigate(['/paginaprofesor']);

  
    //   }
  
    // else {
    //   alert('Usuario o contraseña incorrectos')
    // }
  
    // }
  }

  }


