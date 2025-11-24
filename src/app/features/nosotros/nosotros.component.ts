import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';

interface ProyectoImagen {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit {
  proyectoImages: ProyectoImagen[] = [];

  constructor(private router: Router) {
    this.proyectoImages = [
      {
        itemImageSrc: 'assets/images/fotosproyectos/bomberos.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/bomberos.JPG',
        alt: 'Proyecto Bomberos',
        title: 'Apoyo a Bomberos de la Región'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/cortecinta.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/cortecinta.JPG',
        alt: 'Inauguración de Proyecto',
        title: 'Inauguración de Proyecto Regional'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/deportistas.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/deportistas.JPG',
        alt: 'Apoyo a Deportistas',
        title: 'Apoyo al Deporte Regional'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/sedesocial.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/sedesocial.JPG',
        alt: 'Sede Social',
        title: 'Construcción de Sedes Sociales'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/vinculacion comunidad.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/vinculacion comunidad.JPG',
        alt: 'Vinculación con la Comunidad',
        title: 'Vinculación con la Comunidad'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/resonancia.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/resonancia.JPG',
        alt: 'Equipamiento Médico',
        title: 'Equipamiento para Salud'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/discurso.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/discurso.JPG',
        alt: 'Ceremonia Regional',
        title: 'Ceremonias y Eventos Regionales'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/entregallaves.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/entregallaves.JPG',
        alt: 'Entrega de Proyectos',
        title: 'Entrega de Proyectos de Transporte'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/deportistas2.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/deportistas2.JPG',
        alt: 'Deportistas Regionales',
        title: 'Deportistas de la Región del Maule'
      },
      {
        itemImageSrc: 'assets/images/fotosproyectos/cortecinta2.JPG',
        thumbnailImageSrc: 'assets/images/fotosproyectos/cortecinta2.JPG',
        alt: 'Inauguración',
        title: 'Inauguración de Infraestructura'
      }
    ];
  }

  ngOnInit(): void {
    // Scroll al top al cargar el componente
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  goToFaq(): void {
    this.router.navigate(['/preguntas-frecuentes']);
  }
}

