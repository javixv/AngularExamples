import { Component, OnInit } from '@angular/core';
import { comentarios } from '../Models/comentarios';
import { ComentariosService } from '../service/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  listaComentario : comentarios[];
  loading = false;
  constructor(private comentarioService : ComentariosService) { }

  ngOnInit(): void {
    this.cargarComentarios();
  }

  cargarComentarios(){
    this.loading = true;
    this.comentarioService.getListaComentario().subscribe(data => {
      this.loading=false;
      this.listaComentario = data;
    })
  }

  eliminar(id :number){
    this.loading = true;
    this.comentarioService.eliminar(id).subscribe(data => {
      this.loading = true;
      this.cargarComentarios();
    })
  }
}
