import { NgModule } from '@angular/core';
import { HeroComponent, ListComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent, HeroComponent],
  imports: [CommonModule],
  exports: [ListComponent, HeroComponent],
})
export class HeroesModule {}
