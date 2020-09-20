import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logindos',
  templateUrl: './logindos.component.html',
  styleUrls: ['./logindos.component.scss']
})
export class LogindosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  paginaprofesor(){
    this.router.navigate(['/paginaprofesor']);

  }

}
