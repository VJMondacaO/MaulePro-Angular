import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// PrimeNG Components
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    GalleriaModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  images: any[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

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

  constructor(private router: Router) {
    this.images = [
      {
        itemImageSrc: 'assets/images/Carrusel/bomberos.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/cortecinta.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/cortecinta2.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/cortecinta3.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/deportistas.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/deportistas2.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/discurso.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/entregallaves.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/resonador .JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/resonancia.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/sedesocial.JPG'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/vinculacion comunidad.JPG'
      }
    ];
  }

  scrollToPrograms(): void {
    const programsSection = document.querySelector('.programs-header-panel');
    if (programsSection) {
      const elementPosition = programsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight * 0.15);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  onClaveUnicaClick(): void {
    // TODO: Implementar redirección a ClaveÚnica
    console.log('ClaveÚnica clicked');
  }
}
