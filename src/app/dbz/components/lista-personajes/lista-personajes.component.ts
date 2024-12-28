import { Component, EventEmitter, input, Output } from '@angular/core';
import { Personaje } from '../../interfaces';

@Component({
  selector: 'dbz-lista-personajes',
  standalone: false,

  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css',
})
export class ListaPersonajesComponent {
  public title: string = 'Listado';
  public personajes = input<Personaje[]>([]);

  @Output()
  public onEliminarPersonajeById: EventEmitter<string> =
    new EventEmitter<string>();

  eliminarPersonaje(id?: string): void {
    if (!id) return;

    this.onEliminarPersonajeById.emit(id);
  }
}
