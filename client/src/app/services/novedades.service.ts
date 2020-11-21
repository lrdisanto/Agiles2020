import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Novedades } from '../models/Novedades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

  API_URI = 'http://localhost:3000/api';

  constructor( private http: HttpClient) { }


  getNovedades() {
  
   // return this.http.get('${this.API_URI}/materia');
    return this.http.get('http://localhost:3000/api/novedades');
  }

  getNovedad(id: string) {

    return this.http.get('http://localhost:3000/api/novedades/${id}');

  }

  deleteNovedad(id: string) {

      return this.http.delete(`${this.API_URI}/novedades/${id}`);

  }

  saveNovedades(novedades: Novedades) {
    return this.http.post('http://localhost:3000/api/novedades', novedades);
  }

  
}
