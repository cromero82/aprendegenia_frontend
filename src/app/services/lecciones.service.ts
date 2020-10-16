import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LeccionModel } from '../models/leccion-model';
import { BasicModel } from '../models/basic-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeccionesService  {

  urlService = 'v1/lecciones-api';
  constructor(private http: HttpClient) {
    this.urlService = environment.url + this.urlService;
  }

  findAllByGrupoNivelTemaId(grupoNivelTemaId: number): Observable<LeccionModel[]> {
    const endpoint = this.urlService +  '/findAllByGrupoNivelTemaId/' + grupoNivelTemaId;
    return this.http.get<LeccionModel[]>(endpoint);
  }

  findAllByEstudianteId(estudianteId: number): Observable<LeccionModel[]> {
    const endpoint = this.urlService +  '/findAllByEstudianteId/' + estudianteId;
    return this.http.get<LeccionModel[]>(endpoint);
  }
  findAllGroupsByEstudianteId(estudianteId: number): Observable<any> {
    const endpoint = environment.url +  'v1/grupo-api/findAllByEstudianteId/' + estudianteId;
    return this.http.get<BasicModel[]>(endpoint);
  }
}