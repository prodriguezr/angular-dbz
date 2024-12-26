import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deletedHero?: string;

  public heroNames: string[] = [
    'Superman',
    'Batman',
    'Spiderman',
    'Flash',
    'Wolverine',
    'Thor',
  ];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
