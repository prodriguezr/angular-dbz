import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages';
import { ListaPersonajesComponent } from './components';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    ListaPersonajesComponent,
    AgregarPersonajeComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
