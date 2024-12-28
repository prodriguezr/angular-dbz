import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Personaje } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Krillin',
      poder: 1000,
    },
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 9000,
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 8000,
    },
    {
      id: uuid(),
      nombre: 'Piccolo',
      poder: 7000,
    },
  ];

  agregarPersonaje(personaje: Personaje): void {
    const nuevoPersonaje: Personaje = {
      ...personaje,
      id: uuid(),
    };

    this.personajes.push(nuevoPersonaje);
  }

  eliminarPersonajeById(id: string): void {
    const index = this.personajes.findIndex((p) => p.id === id);

    this.personajes.splice(index, 1);
  }
}
