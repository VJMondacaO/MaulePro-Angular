import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// PrimeNG Components
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    Tag,
    ButtonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  features = [
    {
      icon: 'pi-eye',
      title: 'Transparencia Total',
      description: 'Trazabilidad del proceso completo en cada etapa',
      color: 'primary'
    },
    {
      icon: 'pi-file-check',
      title: 'Documentación Oficial',
      description: 'Documentos oficiales y checklist por etapa',
      color: 'success'
    },
    {
      icon: 'pi-bell',
      title: 'Alertas Inteligentes',
      description: 'Avisos de apertura y recordatorios clave',
      color: 'warning'
    }
  ];

  constructor(private router: Router) {}

  scrollToPrograms(): void {
    const programsSection = document.querySelector('.section-header');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onClaveUnicaClick(): void {
    // TODO: Implementar redirección a ClaveÚnica
    console.log('ClaveÚnica clicked');
  }
}
