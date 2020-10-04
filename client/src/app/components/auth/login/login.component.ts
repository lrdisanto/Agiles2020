import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    this.router.navigate(['/paginaalumno']);

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



