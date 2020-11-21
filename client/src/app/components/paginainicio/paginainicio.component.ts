import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NovedadesService } from '../../services/novedades.service';


@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.component.html',
  styleUrls: ['./paginainicio.component.css'],
  
})
export class PaginainicioComponent implements OnInit {

  novedades: any =[]
  constructor(private router: Router, private novedadesService: NovedadesService) { }

  ngOnInit(): void {
    this.novedadesService.getNovedades().subscribe(
      res => {
        this.novedades = res;
          
      },
      err=> {console.error(err);
       // this.novedades=[];
      
      }
    )


    
  }

//   navegaralogin(){
//     this.router.navigate(['/login']);
// }
// navegaralogin2(){
//   this.router.navigate(['/logindos']);
// }
navegaralogin(){
  this.router.navigate(['/login']);
}
navegaralogin2(){
  this.router.navigate(['/logindos']);
}

navegarhome() {
  this.router.navigate(['']);
}

administrador() {
  this.router.navigate(['administrador']);
}
}

