import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contenido } from '../models/Contenido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidosService {

  API_URI = 'http://localhost:3000/api';

  constructor( private http: HttpClient) { }

  getContenidos() {
  
   // return this.http.get('${this.API_URI}/contenidos');
    return this.http.get('http://localhost:3000/api/contenidos');
  }

  getFiltrado() {
  
    // return this.http.get('${this.API_URI}/contenidos');
     return this.http.get('http://localhost:3000/api/contenidos');
   }
 
getAlumnos() {
  return this.http.get('http://localhost:3000/api/contenidos/alumnos');
}


  getContenido(id: string) {

    return this.http.get('http://localhost:3000/api/contenidos/${id}');

  }

  deleteContenido(id: string) {

      return this.http.delete(`${this.API_URI}/contenidos/${id}`);

  }

  saveContenido(contenido: Contenido) {
    return this.http.post('http://localhost:3000/api/contenidos', contenido);
  }

  updateContenido(idcontenido: string, updatedContenido: Contenido): Observable<any> { 

    return this.http.put('http://localhost:3000/api/contenidos/${id}', updatedContenido);

  }
}
