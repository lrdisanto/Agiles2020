import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const routes: Routes = [
{path: '', component: PaginainicioComponent},
{path: 'logindos', component: LogindosComponent},
{path: 'paginaprofesor', component: PaginaprofesorComponent},
{path: 'paginaalumno', component: PaginaalumnoComponent},
];


@NgModule({
  declarations: [AppComponent, NavbarComponent, LogindosComponent, PaginainicioComponent, PaginaprofesorComponent, PaginaalumnoComponent, CabeceraComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  
    // ContactModule,
    // FooterModule,
    // HeaderModule,
    // PortfolioModule,
    // CabeceraModule,
    
  ],
  providers: [ { provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
