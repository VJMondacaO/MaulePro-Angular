# Guía: Cómo Agregar Páginas y Tarjetas

Esta guía te explica paso a paso cómo agregar nuevas páginas y tarjetas (cards) a tu proyecto Angular.

## 📄 Parte 1: Agregar una Nueva Página

### Paso 1: Crear el Componente

Usa el CLI de Angular para generar el componente:

```bash
ng generate component features/mi-nueva-pagina --standalone
```

O crea manualmente la carpeta y archivos en `src/app/features/mi-nueva-pagina/`:

- `mi-nueva-pagina.component.ts`
- `mi-nueva-pagina.component.html`
- `mi-nueva-pagina.component.css`

### Paso 2: Estructura del Componente TypeScript

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-nueva-pagina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-nueva-pagina.component.html',
  styleUrl: './mi-nueva-pagina.component.css'
})
export class MiNuevaPaginaComponent {
  // Tu lógica aquí
}
```

### Paso 3: Crear el Template HTML

```html
<div class="contenedor-pagina">
  <div class="hero-seccion">
    <h1>Título de la Página</h1>
  </div>
  
  <div class="contenido-principal">
    <!-- Tu contenido aquí -->
  </div>
</div>
```

### Paso 4: Agregar la Ruta

Edita `src/app/app.routes.ts`:

```typescript
import { MiNuevaPaginaComponent } from './features/mi-nueva-pagina/mi-nueva-pagina.component';

export const routes: Routes = [
  // ... rutas existentes
  { path: 'mi-nueva-pagina', component: MiNuevaPaginaComponent },
  // ...
];
```

### Paso 5: Navegar a la Página

Para navegar desde otro componente:

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

navegar(): void {
  this.router.navigate(['/mi-nueva-pagina']);
}
```

O en el HTML:

```html
<a routerLink="/mi-nueva-pagina">Ir a Mi Nueva Página</a>
```

---

## 🎴 Parte 2: Agregar una Nueva Tarjeta (Card)

### Paso 1: Crear el Componente de Tarjeta

Usa el CLI:

```bash
ng generate component features/mi-feature/components/mi-tarjeta --standalone
```

O crea manualmente en `src/app/features/mi-feature/components/mi-tarjeta/`:

- `mi-tarjeta.component.ts`
- `mi-tarjeta.component.html`
- `mi-tarjeta.component.css`

### Paso 2: Definir el Tipo/Interfaz de Datos

Crea un archivo de tipos en `src/app/features/mi-feature/components/models/mi-tarjeta.types.ts`:

```typescript
export interface MiTarjetaData {
  id: string;
  titulo: string;
  descripcion: string;
  imagen?: string;
  fecha?: string;
  // Agrega más campos según necesites
}
```

### Paso 3: Estructura del Componente de Tarjeta

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MiTarjetaData } from '../models/mi-tarjeta.types';

@Component({
  selector: 'app-mi-tarjeta',
  standalone: true,
  imports: [CommonModule, Card, ButtonModule],
  templateUrl: './mi-tarjeta.component.html',
  styleUrl: './mi-tarjeta.component.css'
})
export class MiTarjetaComponent {
  @Input() datos!: MiTarjetaData;

  // Métodos auxiliares si los necesitas
  obtenerColor(): string {
    return '#0066CC';
  }
}
```

### Paso 4: Template HTML de la Tarjeta

```html
<article class="mi-tarjeta">
  <p-card [styleClass]="'tarjeta-wrapper'">
    <div class="tarjeta-contenido">
      <div class="tarjeta-header">
        <h3 class="tarjeta-titulo">{{ datos.titulo }}</h3>
      </div>
      
      <div class="tarjeta-body">
        <p class="tarjeta-descripcion">{{ datos.descripcion }}</p>
        <img *ngIf="datos.imagen" [src]="datos.imagen" alt="{{ datos.titulo }}" />
      </div>
      
      <div class="tarjeta-footer">
        <button 
          pButton 
          type="button" 
          label="Ver más" 
          icon="pi pi-arrow-right"
          iconPos="right"
          class="btn-ver-mas">
        </button>
      </div>
    </div>
  </p-card>
</article>
```

### Paso 5: Estilos CSS (con clases en español)

```css
.mi-tarjeta {
  width: 100%;
  height: 100%;
}

.tarjeta-wrapper {
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tarjeta-contenido {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tarjeta-header {
  margin-bottom: 1rem;
}

.tarjeta-titulo {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.tarjeta-body {
  flex: 1;
  margin-bottom: 1rem;
}

.tarjeta-descripcion {
  color: #666;
  line-height: 1.6;
}

.tarjeta-footer {
  margin-top: auto;
}

.btn-ver-mas {
  width: 100%;
}
```

### Paso 6: Usar la Tarjeta en una Página

En el componente de la página:

```typescript
import { MiTarjetaComponent } from './components/mi-tarjeta/mi-tarjeta.component';
import { MiTarjetaData } from './components/models/mi-tarjeta.types';

@Component({
  selector: 'app-mi-pagina',
  standalone: true,
  imports: [CommonModule, MiTarjetaComponent],
  // ...
})
export class MiPaginaComponent {
  tarjetas: MiTarjetaData[] = [
    {
      id: '1',
      titulo: 'Tarjeta Ejemplo 1',
      descripcion: 'Descripción de la primera tarjeta',
      imagen: 'assets/images/ejemplo.jpg'
    },
    {
      id: '2',
      titulo: 'Tarjeta Ejemplo 2',
      descripcion: 'Descripción de la segunda tarjeta'
    }
  ];
}
```

En el HTML de la página:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <app-mi-tarjeta 
    *ngFor="let tarjeta of tarjetas" 
    [datos]="tarjeta">
  </app-mi-tarjeta>
</div>
```

---

## 📋 Ejemplo Completo: Página con Tarjetas

### Estructura de Archivos

```
src/app/features/noticias/
├── noticias.component.ts
├── noticias.component.html
├── noticias.component.css
└── components/
    ├── noticia-card/
    │   ├── noticia-card.component.ts
    │   ├── noticia-card.component.html
    │   └── noticia-card.component.css
    └── models/
        └── noticia-card.types.ts
```

### 1. Tipo de Datos (`noticia-card.types.ts`)

```typescript
export interface NoticiaCardData {
  id: string;
  titulo: string;
  resumen: string;
  imagen: string;
  fecha: string;
  categoria: string;
  enlace?: string;
}
```

### 2. Componente de Tarjeta (`noticia-card.component.ts`)

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { NoticiaCardData } from '../models/noticia-card.types';

@Component({
  selector: 'app-noticia-card',
  standalone: true,
  imports: [CommonModule, Card, Tag, ButtonModule],
  templateUrl: './noticia-card.component.html',
  styleUrl: './noticia-card.component.css'
})
export class NoticiaCardComponent {
  @Input() noticia!: NoticiaCardData;

  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-CL');
  }
}
```

### 3. Template de Tarjeta (`noticia-card.component.html`)

```html
<article class="tarjeta-noticia">
  <p-card [styleClass]="'wrapper-tarjeta'">
    <div class="contenido-tarjeta">
      <div class="imagen-contenedor" *ngIf="noticia.imagen">
        <img [src]="noticia.imagen" [alt]="noticia.titulo" class="imagen-noticia" />
      </div>
      
      <div class="cuerpo-tarjeta">
        <div class="cabecera-tarjeta">
          <p-tag [value]="noticia.categoria" severity="info"></p-tag>
          <span class="fecha-noticia">{{ formatearFecha(noticia.fecha) }}</span>
        </div>
        
        <h3 class="titulo-noticia">{{ noticia.titulo }}</h3>
        <p class="resumen-noticia">{{ noticia.resumen }}</p>
      </div>
      
      <div class="pie-tarjeta" *ngIf="noticia.enlace">
        <button 
          pButton 
          type="button" 
          label="Leer más" 
          icon="pi pi-arrow-right"
          iconPos="right"
          class="boton-leer-mas">
        </button>
      </div>
    </div>
  </p-card>
</article>
```

### 4. Componente de Página (`noticias.component.ts`)

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaCardComponent } from './components/noticia-card/noticia-card.component';
import { NoticiaCardData } from './components/models/noticia-card.types';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, NoticiaCardComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticias: NoticiaCardData[] = [
    {
      id: '1',
      titulo: 'Nueva Iniciativa Regional',
      resumen: 'Descripción breve de la noticia...',
      imagen: 'assets/images/noticia1.jpg',
      fecha: '2024-01-15',
      categoria: 'Actualidad',
      enlace: '/noticias/1'
    },
    // Más noticias...
  ];
}
```

### 5. Template de Página (`noticias.component.html`)

```html
<div class="contenedor-noticias">
  <div class="hero-seccion">
    <h1>Noticias y Actualidades</h1>
  </div>
  
  <div class="contenido-principal">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <app-noticia-card 
        *ngFor="let noticia of noticias" 
        [noticia]="noticia">
      </app-noticia-card>
    </div>
  </div>
</div>
```

### 6. Agregar Ruta (`app.routes.ts`)

```typescript
import { NoticiasComponent } from './features/noticias/noticias.component';

export const routes: Routes = [
  // ... otras rutas
  { path: 'noticias', component: NoticiasComponent },
  // ...
];
```

---

## ✅ Checklist

### Para Agregar una Página:
- [ ] Crear el componente en `features/nombre-pagina/`
- [ ] Componente debe ser `standalone: true`
- [ ] Importar `CommonModule` y otros módulos necesarios
- [ ] Crear template HTML
- [ ] Crear estilos CSS (usar clases en español)
- [ ] Agregar ruta en `app.routes.ts`
- [ ] Probar navegación

### Para Agregar una Tarjeta:
- [ ] Crear componente en `features/nombre-feature/components/nombre-tarjeta/`
- [ ] Crear interfaz/tipo en `models/nombre-tarjeta.types.ts`
- [ ] Usar `@Input()` para recibir datos
- [ ] Componente debe ser `standalone: true`
- [ ] Importar módulos de PrimeNG necesarios (Card, Button, etc.)
- [ ] Crear template HTML con estructura de tarjeta
- [ ] Crear estilos CSS (usar clases en español)
- [ ] Usar la tarjeta en la página correspondiente

---

## 💡 Consejos

1. **Nombres en Español**: Todas las clases CSS que no sean de Bootstrap deben estar en español y ser descriptivas.

2. **Componentes Standalone**: Este proyecto usa componentes standalone, no módulos tradicionales.

3. **PrimeNG**: El proyecto usa PrimeNG para componentes UI. Importa solo lo que necesites:
   - `Card` para tarjetas
   - `ButtonModule` para botones
   - `Tag` para etiquetas
   - `GalleriaModule` para galerías
   - etc.

4. **Estructura de Carpetas**: Mantén la estructura organizada:
   - `features/` para páginas principales
   - `components/` dentro de cada feature para componentes reutilizables
   - `models/` para tipos e interfaces
   - `services/` para servicios

5. **Rutas**: Las rutas deben ser descriptivas y en español (ej: `/noticias`, `/preguntas-frecuentes`).

---

## 🔗 Referencias

- Componente de tarjeta existente: `program-card.component.ts`
- Página de ejemplo: `nosotros.component.ts`
- Configuración de rutas: `app.routes.ts`

