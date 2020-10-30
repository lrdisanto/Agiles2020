import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Materia } from '../models/Materia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  API_URI = 'http://localhost:3000/api';

  constructor( private http: HttpClient) { }

  getMaterias() {
  
   // return this.http.get('${this.API_URI}/materia');
    return this.http.get('http://localhost:3000/api/materia');
  }

  getMateria(id: string) {

    return this.http.get('http://localhost:3000/api/materia/${id}');

  }

  deleteMateria(id: string) {

      return this.http.delete(`${this.API_URI}/materia/${id}`);

  }

  saveMateria(materia: Materia) {
    return this.http.post('http://localhost:3000/api/materia', materia);
  }

  updateMateria(idmateria: string, updatedMateria: Materia): Observable<any> { 

    return this.http.put('http://localhost:3000/api/materia/${id}', updatedMateria);

  }
}
