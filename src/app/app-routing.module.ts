import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { NuevoDatoComponent } from './nuevo-dato/nuevo-dato.component';
import { NuevoComentarioComponent} from './nuevo-comentario/nuevo-comentario.component'
import { VerComentarioComponent } from './ver-comentario/ver-comentario.component';
import { FormularioComponent } from './formulario/formulario.component';



const routes: Routes = [
  {path: 'empleado', component:EmpleadoComponent},
  {path: 'nuevo', component:NuevoDatoComponent},
  {path: 'nuevocomentario', component:NuevoComentarioComponent},
  {path: 'editar/:id', component:NuevoComentarioComponent},
  {path: 'comentarios', component:ComentariosComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'ver/:id', component:VerComentarioComponent},
  {path: '', component:HomeComponent, pathMatch: 'full'},  
  //{path: '**', redirectTo: '/'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
