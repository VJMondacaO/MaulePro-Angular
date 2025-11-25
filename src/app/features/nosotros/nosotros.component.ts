import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

interface ProyectoImagen {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, GalleriaModule, RouterModule, ButtonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit {
  proyectoImages: ProyectoImagen[] = [];

  constructor(private router: Router) {
    this.proyectoImages = [
      {
        itemImageSrc: 'assets/images/fotosproyectos/bomberos.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/bomberos.webp',
        alt: 'Proyecto Bomberos',
        title: 'Apoyo a Bomberos de la Región'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/cortecinta.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/cortecinta.webp',
        alt: 'Inauguración de Proyecto',
        title: 'Inauguración de Proyecto Regional'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/deportistas.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/deportistas.webp',
        alt: 'Apoyo a Deportistas',
        title: 'Apoyo al Deporte Regional'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/sedesocial.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/sedesocial.webp',
        alt: 'Sede Social',
        title: 'Construcción de Sedes Sociales'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/vinculacion comunidad.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/vinculacion comunidad.webp',
        alt: 'Vinculación con la Comunidad',
        title: 'Vinculación con la Comunidad'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/resonancia.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/resonancia.webp',
        alt: 'Equipamiento Médico',
        title: 'Equipamiento para Salud'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/discurso.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/discurso.webp',
        alt: 'Ceremonia Regional',
        title: 'Ceremonias y Eventos Regionales'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/entregallaves.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/entregallaves.webp',
        alt: 'Entrega de Proyectos',
        title: 'Entrega de Proyectos de Transporte'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/deportistas2.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/deportistas2.webp',
        alt: 'Deportistas Regionales',
        title: 'Deportistas de la Región del Maule'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/cortecinta2.webp',
        thumbnailImageSrc: 'assets/images/fotosproyectos/cortecinta2.webp',
        alt: 'Inauguración',
        title: 'Inauguración de Infraestructura'
      }
    ];
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  goToFaq(): void {
    this.router.navigate(['/preguntas-frecuentes']);
  }
}

