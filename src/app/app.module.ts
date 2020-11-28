import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NuevoDatoComponent } from './nuevo-dato/nuevo-dato.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { NuevoComentarioComponent } from './nuevo-comentario/nuevo-comentario.component';
import { VerComentarioComponent } from './ver-comentario/ver-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    NavbarComponent,
    HomeComponent,
    NuevoDatoComponent,
    NuevoComentarioComponent,
    ComentariosComponent,    
    VerComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
