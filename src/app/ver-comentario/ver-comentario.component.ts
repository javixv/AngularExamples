import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comentarios } from '../Models/comentarios';
import { ComentariosService } from '../service/comentarios.service';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {
  comentario = comentarios;
  loading = false;
  idComentariio : number;
  Comentario : comentarios;
  constructor(private comentarioService : ComentariosService, private router : ActivatedRoute) { 
    this.idComentariio = +this.router.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.cargarComentario();
  }

  cargarComentario(){
    this.loading = true;
    this.comentarioService.cargarComentario(this.idComentariio).subscribe(data => {
      this.Comentario = data;
      this.loading = false;
    })
  }

}
