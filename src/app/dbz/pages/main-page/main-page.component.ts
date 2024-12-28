import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Personaje } from '../../interfaces';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get personajes(): Personaje[] {
    return [...this.dbzService.personajes];
  }

  onDelete(id: string): void {
    this.dbzService.eliminarPersonajeById(id);
  }

  onNuevoPersonaje(personaje: Personaje): void {
    this.dbzService.agregarPersonaje(personaje);
  }
}
