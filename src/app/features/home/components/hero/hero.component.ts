import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

interface HeroImage {
  itemImageSrc: string;
}

interface ResponsiveOption {
  breakpoint: string;
  numVisible: number;
}

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
  images: HeroImage[] = [];
  responsiveOptions: ResponsiveOption[] = [
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
      icon: 'pi pi-eye',
      title: 'Transparencia Total',
      description: 'Trazabilidad del proceso completo en cada etapa',
      color: 'primary'
    },
    {
      icon: 'pi pi-file-check',
      title: 'Documentación Oficial',
      description: 'Documentos oficiales y checklist por etapa',
      color: 'success'
    },
    {
      icon: 'pi pi-bell',
      title: 'Alertas Inteligentes',
      description: 'Avisos de apertura y recordatorios clave',
      color: 'warning'
    }
  ];

  constructor(private router: Router) {
    this.images = [
      {
        itemImageSrc: 'assets/images/Carrusel/bomberos.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/cortecinta.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/cortecinta2.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/cortecinta3.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/deportistas.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/deportistas2.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/discurso.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/entregallaves.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/resonador .webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/resonancia.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/sedesocial.webp'
      },
      {
        itemImageSrc: 'assets/images/Carrusel/vinculacion comunidad.webp'
      }
    ];
  }

  scrollToPrograms(): void {
    const fondosSection = document.getElementById('fondos-disponibles');
    if (fondosSection) {
      const elementPosition = fondosSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  onClaveUnicaClick(): void {
    // TODO: Implementar redirección a ClaveÚnica
  }
}
