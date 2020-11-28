import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comentarios } from '../Models/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  urlApi = 'https://localhost:44391/';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getListaComentario() : Observable<comentarios[]>{
    return this.http.get<comentarios[]>(this.urlApi + 'api/comentario')
  }

  eliminar( id : number) : Observable<comentarios>{
    return this.http.delete<comentarios>(this.urlApi + 'api/comentario/' + id)
  }

  guardarComentario( comentario : comentarios) : Observable<comentarios>{
    return this.http.post<comentarios>(this.urlApi + 'api/comentario', comentario, this.httpOptions)
  }

  cargarComentario( id : number) : Observable<comentarios>{
    return this.http.get<comentarios>(this.urlApi + 'api/comentario/' + id)
  }

  actComentario( id : number, comentarios : comentarios) : Observable<comentarios>{
    return this.http.put<comentarios>(this.urlApi + 'api/comentario/'+id,comentarios, this.httpOptions )
  }
}
