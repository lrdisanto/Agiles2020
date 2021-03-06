import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule} from '@angular/forms';

// INICIO Servicio
import { CargarScriptsService } from "./cargar-scripts.service";
// FIN Servicio

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LogindosComponent } from './components/logindos/logindos.component';
import { PaginainicioComponent } from './components/paginainicio/paginainicio.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginaprofesorComponent } from './components/paginaprofesor/paginaprofesor.component';
import { PaginaalumnoComponent } from './components/paginaalumno/paginaalumno.component';
import { APP_BASE_HREF } from '@angular/common';
import { CabeceraComponent } from './components/paginainicio/@components/cabecera/cabecera.component';
import { FooterComponent } from './components/paginainicio/@components/footer/footer.component';
import { ContactComponent } from './components/paginainicio/@components/contact/contact.component';
import { HeaderComponent } from './components/paginainicio/@components/header/header.component';
import { PortfolioComponent } from './components/paginainicio/@components/portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ContenidosService } from './services/contenidos.service';
import { MuestrocontenidosComponent } from './components/muestrocontenidos/muestrocontenidos.component';
import { AgregarcontenidoComponent } from './components/agregarcontenido/agregarcontenido.component';
import { HttpClientModule } from '@angular/common/http';
import { CabeceradosComponent } from './components/cabecerados/cabecerados.component';
import { MuestrotodoalumnosComponent } from './components/muestrotodoalumnos/muestrotodoalumnos.component';
import { UrlsPipe } from './components/urls.pipe';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AltaprofesorComponent } from './components/altaprofesor/altaprofesor.component';
import { AltaasignaturaComponent } from './components/altaasignatura/altaasignatura.component';
import { AltaalumnosComponent } from './components/altaalumnos/altaalumnos.component';
import { ProfesoresService } from './services/profesores.service';
import { MuestroalumnosComponent } from './components/muestroalumnos/muestroalumnos.component';
import { MostrarasignaturasComponent } from './components/mostrarasignaturas/mostrarasignaturas.component';


import { MostrarprofComponent } from './components/mostrarprof/mostrarprof.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { Paginaalumnos2Component } from './paginaalumnos2/paginaalumnos2.component';

import { AgregarnovedadComponent } from './components/agregarnovedad/agregarnovedad.component';
import { MostrarnovedadesComponent } from './components/mostrarnovedades/mostrarnovedades.component';




const routes: Routes = [
{path: '', component: PaginainicioComponent},
{path: 'logindos', component: LogindosComponent},
{path: 'paginaprofesor', component: PaginaprofesorComponent},
{path: 'paginaalumno', component: PaginaalumnoComponent},
{path: 'muestrotodos', component: MuestrocontenidosComponent},
{path: 'agregarcontenido', component: AgregarcontenidoComponent},

{path: 'muestroalumnos', component: MuestroalumnosComponent},
{path: 'administrador', component: AdministradorComponent},
{path: 'altaalumnos', component: AltaalumnosComponent},
{path: 'altaprofesor', component: AltaprofesorComponent},
{path: 'altaasignatura', component: AltaasignaturaComponent},
{path: 'muestrotodoalumnos', component: MuestrotodoalumnosComponent},
{path: 'mostrarasignaturas', component: MostrarasignaturasComponent},
{path: 'mostrarprof', component: MostrarprofComponent},
{path: 'prueba', component: PruebaComponent},
{path: 'mapa', component: MapaComponent},
{path: 'agregarnovedades', component:AgregarnovedadComponent},
{path: 'mostrarnovedades', component:MostrarnovedadesComponent},


{path: 'muestroalumnos', component: MuestrotodoalumnosComponent},
{path: 'paginaalumnos2', component: Paginaalumnos2Component}

];


@NgModule({
  declarations: [AppComponent, NavbarComponent, LogindosComponent,
    PaginainicioComponent, PaginaprofesorComponent, PaginaalumnoComponent,
     CabeceraComponent, FooterComponent, ContactComponent, HeaderComponent,
     PortfolioComponent, MuestrocontenidosComponent,
     AgregarcontenidoComponent, CabeceradosComponent,

      MuestrotodoalumnosComponent, UrlsPipe, AdministradorComponent,
       AltaprofesorComponent, AltaasignaturaComponent, AltaalumnosComponent,
        MostrarasignaturasComponent, MostrarprofComponent, MuestroalumnosComponent, PruebaComponent, MapaComponent, PruebaComponent, AgregarnovedadComponent, MostrarnovedadesComponent,
       Paginaalumnos2Component],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    HttpClientModule],
  providers: [ { provide: APP_BASE_HREF, useValue : '/' }, CargarScriptsService ,
              { provide:ContenidosService }, 
              ProfesoresService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
