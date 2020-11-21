import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log('Form->', this.loginForm.value);
  }

  paginaalumno(){
    var usuario = (document.getElementById("emailprofesor")as HTMLTextAreaElement).value;
     console.log(usuario);
     var clave= (document.getElementById("claveprofesor") as HTMLTextAreaElement).value;
     console.log(clave);

    if (usuario === 'jose@gmail.com' && clave === '123456') {
      this.router.navigate(['/paginaalumno']);

    }

    if (usuario === 'pamela@gmail.com' && clave === '123456') {
      this.router.navigate(['/paginaalumnos2']);
    }
    else{
      alert('El usuario o la contraseña son incorrectos');
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



