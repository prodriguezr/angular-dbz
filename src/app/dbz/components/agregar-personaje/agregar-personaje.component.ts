import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Personaje } from '../../interfaces';

@Component({
  selector: 'dbz-agregar-personaje',
  standalone: false,
  templateUrl: './agregar-personaje.component.html',
  styleUrl: './agregar-personaje.component.css',
})
export class AgregarPersonajeComponent {
  @Output() public onNuevoPersonaje: EventEmitter<Personaje> =
    new EventEmitter();
  public personaje: Personaje = { nombre: '', poder: 0 };

  emitirPersonaje(): void {
    if (this.personaje.nombre.trim().length === 0) return;

    this.onNuevoPersonaje.emit(this.personaje);

    this.personaje = { nombre: '', poder: 0 };
  }
}
