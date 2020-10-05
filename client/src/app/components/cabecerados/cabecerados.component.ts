import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecerados',
  templateUrl: './cabecerados.component.html',
  styleUrls: ['./cabecerados.component.scss']
})
export class CabeceradosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarhome() {
    this.router.navigate(['']);
  }

}
