import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { comentarios } from '../Models/comentarios';
import { ComentariosService } from '../service/comentarios.service';

@Component({
  selector: 'app-nuevo-comentario',
  templateUrl: './nuevo-comentario.component.html',
  styleUrls: ['./nuevo-comentario.component.css']
})
export class NuevoComentarioComponent implements OnInit {

  comentarios:FormGroup
  idComentariio = 0;
  accion = 'Agregar'
  loading= false;
  comenta:comentarios;

  constructor(private fb:FormBuilder, private router: ActivatedRoute,
    private comentarioService : ComentariosService, private route: Router) { 
    this.comentarios = this.fb.group({
      titulo: ['',Validators.required],
      autor: ['',Validators.required],
      texto: ['',Validators.required],
    })

    if(+this.router.snapshot.paramMap.get('id') > 0){
      this.idComentariio = +this.router.snapshot.paramMap.get('id')
    }
  }

  ngOnInit(): void {
    this.editar();
  }

  guardarComentario(){
    if(this.accion === 'Agregar'){
      const Micomentario: comentarios = {
        fecha : new Date(),
        creador: this.comentarios.get('autor').value,
        texto: this.comentarios.get('texto').value,
        titulo: this.comentarios.get('titulo').value,
      }

      this.comentarioService.guardarComentario(Micomentario).subscribe(data => {
        this.route.navigate(['comentarios']);       
      })
    }else{
      const Micomentario: comentarios = {
        id : this.comenta.id,
        fecha : this.comenta.fecha,
        creador: this.comentarios.get('autor').value,
        texto: this.comentarios.get('texto').value,
        titulo: this.comentarios.get('titulo').value,
      }

      this.comentarioService.actComentario(this.idComentariio, Micomentario).subscribe(data => {
        this.route.navigate(['comentarios']);       
      })
    }
   
  }
  
  editar(){
    if(this.idComentariio > 0)
    {
      this.comentarioService.cargarComentario(this.idComentariio).subscribe(data => {
      this.comenta = data;
      this.accion = 'Editar este Comentario'
      this.comentarios.patchValue({
      titulo: data.titulo,
      autor: data.creador,
      texto: data.texto
      })
      })
      
    }
  }
}
