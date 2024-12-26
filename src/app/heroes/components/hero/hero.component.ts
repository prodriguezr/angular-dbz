import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public nombre: string = 'superman';
  public edad: number = 45;

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombreHeroe(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdadHeroe(): void {
    this.edad = 20;
  }

  restablecer(): void {
    this.nombre = 'superman';
    this.edad = 45;
  }
}
