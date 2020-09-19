import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LogindosComponent } from './components/logindos/logindos.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, LogindosComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
