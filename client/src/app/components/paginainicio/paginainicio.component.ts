import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.component.html',
  styleUrls: ['./paginainicio.component.scss']
})
export class PaginainicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

//   navegaralogin(){
//     this.router.navigate(['/login']);
// }
// navegaralogin2(){
//   this.router.navigate(['/logindos']);
// }

}
