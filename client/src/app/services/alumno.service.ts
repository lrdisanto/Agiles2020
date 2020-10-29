import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{Alumno} from '../models/alumno'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  getAlumnos(){
    return this.http.get('http://localhost:3000/api/alumno');
  }

    getAlumno(id: number){
      return this.http.get('http://localhost:3000/api/alumno/${id}');
    }

  saveAlumno(profesor: Alumno){
    return this.http.post('http://localhost:3000/api/alumno', profesor)
  }

  deleteAlumno(id:number){
    return this.http.delete('http://localhost:3000/api/alumno/${id}');
  }

  updateAlumno(id:number, updateAlumno:Alumno ): Observable<any> {
    return this.http.put('$(http://localhost:3000/api/alumno/${id})', updateAlumno);
  }

}