import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{Alumno} from '../models/alumno'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAlumnos(){
    return this.http.get('http://localhost:3000/api/alumno');
  }

    getAlumno(id: number){
      return this.http.get('http://localhost:3000/api/alumno/${id}');
    }

  saveAlumno(alumno: Alumno){
    return this.http.post('http://localhost:3000/api/alumno', alumno);
  }

  deleteAlumno(id:string){
    return this.http.delete(`${this.API_URI}/alumno/${id}`);
  }

  updateAlumno(id:number, updateAlumno:Alumno ): Observable<any> {
    return this.http.put('$(http://localhost:3000/api/alumno/${id})', updateAlumno);
  }

}