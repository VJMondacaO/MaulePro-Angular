import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ProgramCardData } from '../programs/program-card.types';
import { ProgramsService } from '../programs/programs.service';
import { ProgramCardComponent } from '../programs/program-card/program-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    ProgramCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  programas: ProgramCardData[] = [];

  constructor(private programsService: ProgramsService) {
    // Obtener todos los programas del servicio
    this.programas = this.programsService.getPrograms();
  }
}
