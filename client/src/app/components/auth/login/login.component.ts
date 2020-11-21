import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ProfesoresService } from '../../../services/profesores.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor( private router: Router, private alumnosService: AlumnoService, private profesorservice: ProfesoresService) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log('Form->', this.loginForm.value);
  }

  paginaalumno(){
     const usuario = (document.getElementById("emailprofesor")as HTMLTextAreaElement).value;
    //  console.log(usuario);
     var clave= (document.getElementById("claveprofesor") as HTMLTextAreaElement).value;
    //  console.log(clave);

     if (usuario === 'fran@gmail.com' && clave === '123456') {
       this.alumnosService.getalumnobyID(usuario).subscribe(
         (data: any) => {
           console.log(usuario);
           localStorage.setItem("idalumno", data.alumno[0].idalumno);
           localStorage.setItem("idanio", data.alumno[0].idanio);

          console.log(data);
         }
         
       )
      this.router.navigate(['/paginaalumno']);

     }
else if ( usuario === 'eri@gmail.com' && clave === '123456' ){
  this.alumnosService.getalumnobyID(usuario).subscribe(
    (data: any) => {
      console.log(usuario);
      localStorage.setItem("idalumno", data.alumno[0].idalumno);
      localStorage.setItem("idanio", data.alumno[0].idanio);

     console.log(data);
}
  )
  this.router.navigate(['/paginaalumno']);
}

     

   else if (usuario === 'profesor@gmail.com' && clave === '123456') {
     this.profesorservice.getprofbyID(usuario).subscribe(
       (data: any) => {
         console.log(usuario);
         localStorage.setItem("idprofesor", data.alumno[0].idprofesor);
         console.log("el id del profesor es", data);
       }
      
     )
    this.router.navigate(['/paginaprofesor']);


   }
   else if (usuario === 'admin@gmail.com' && clave === '123456') {
     this.router.navigate(['/administrador']);
   }
   

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

}






