import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{Profesor} from '../models/profesor'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProfesores(){
    return this.http.get('http://localhost:3000/api/profesor');
  }

    getProfesor(id: string){
      return this.http.get('http://localhost:3000/api/profesor/${id}');
    }

  saveProfesor(profesor: Profesor){
    return this.http.post('http://localhost:3000/api/profesor', profesor)
  }

  deleteProfesor(id:string){
    return this.http.delete(`${this.API_URI}/profesor/${id}`);
  }

  updateProfesor(id:string, updateProfesor:Profesor ): Observable<any> {
    return this.http.put('$(http://localhost:3000/api/profesor/${id})', updateProfesor);
  }

}
