# MaulePro - Portal de Fondos Regionales

**Propuesta de Mejora - Prototipo Estético**

Portal web moderno desarrollado en Angular como propuesta de mejora para la página actual de MaulePro. Este proyecto es un prototipo estético desarrollado por el **Departamento de Informática del Gobierno Regional del Maule**, que presenta una nueva interfaz de usuario y experiencia mejorada para la gestión, visualización y postulación a programas y fondos regionales.

> **⚠️ Estado del Proyecto:** Este es un prototipo estético al cual le falta la implementación de la parte funcional. La interfaz y el diseño están completos, pero las funcionalidades de backend, integración con APIs y persistencia de datos aún no han sido implementadas.

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Prerrequisitos](#-prerrequisitos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)
- [Desarrollo](#-desarrollo)
- [Construcción](#-construcción)
- [Testing](#-testing)
- [Despliegue](#-despliegue)
- [Arquitectura](#-arquitectura)
- [Convenciones de Código](#-convenciones-de-código)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

---

## 🎯 Descripción

Este proyecto es una **propuesta de mejora** para la página actual de MaulePro, desarrollada por el **Departamento de Informática del Gobierno Regional del Maule**. Se trata de un **prototipo estético** que presenta una nueva interfaz de usuario moderna y mejorada, diseñada para facilitar el acceso ciudadano a los programas y fondos regionales.

### Estado del Proyecto

**⚠️ Prototipo Estético - Funcionalidad Pendiente**

Este proyecto es actualmente un **prototipo visual y estético** que incluye:

✅ **Completado:**
- Diseño completo de la interfaz de usuario
- Componentes visuales y estilos
- Estructura de navegación
- Layouts y maquetación
- Prototipado de formularios y flujos de usuario

❌ **Pendiente de Implementación:**
- Integración con APIs y servicios backend
- Persistencia de datos
- Autenticación y autorización funcional
- Validación y procesamiento de formularios
- Gestión de documentos en servidor
- Integración con sistemas existentes del Gobierno Regional

### Objetivos del Proyecto

- **Mejora Visual**: Proponer una interfaz moderna y actualizada para la plataforma actual
- **Mejor UX**: Diseñar una experiencia de usuario más intuitiva y accesible
- **Transparencia**: Facilitar el acceso público a información sobre programas y fondos regionales
- **Eficiencia**: Simplificar visualmente el proceso de postulación a programas regionales
- **Modernización**: Actualizar la tecnología y diseño de la plataforma existente

---

## ✨ Características Principales (Prototipo Visual)

> **Nota:** Las siguientes características están implementadas a nivel visual y de interfaz. La funcionalidad completa (backend, APIs, persistencia) está pendiente de implementación.

### 🏠 Página de Inicio
- Hero section con información destacada (diseño prototipo)
- Banner de próximos cierres de postulación (visual)
- Navegación intuitiva a todas las secciones

### 🔍 Búsqueda y Filtrado
- Interfaz de búsqueda avanzada de programas por palabras clave (prototipo)
- Diseño de filtros por estado, tipo de fondo y categorías
- Visualización de resultados con tarjetas informativas (datos de ejemplo)

### 📄 Detalles de Programas
- Diseño de página con información completa de cada programa
- Interfaz para detalles de modalidades, tipos de postulantes y financiamiento
- Visualización de plazos de postulación y montos disponibles
- Navegación directa al formulario de postulación

### 📝 Sistema de Postulación (Prototipo Visual)
- Diseño de formulario multi-paso (wizard) con 6 etapas:
  1. **Identificación**: Interfaz para datos del postulante y proyecto
  2. **Descripción del Proyecto**: Diseño para detalles técnicos y objetivos
  3. **Financiamiento**: Interfaz para información presupuestaria y recursos
  4. **Impacto**: Diseño para alcance y beneficiarios del proyecto
  5. **Documentos Adjuntos**: Interfaz de gestión de documentos (sin funcionalidad de subida)
  6. **Cierre**: Diseño de revisión y envío final
- Selector de ubicación geográfica con mapa interactivo (interfaz visual)
- Gestor de documentos con validación de tipos y tamaños (frontend únicamente)
- Validación en tiempo real de formularios (validación visual)
- Interfaz de guardado de borradores (sin persistencia)

### 📚 Contenido Informativo
- Página "Nosotros" con información institucional
- Preguntas Frecuentes (FAQ)
- Dashboard de usuario (diseño prototipo)

### 🎨 Interfaz de Usuario
- Diseño responsive y moderno
- Componentes PrimeNG para una experiencia consistente
- Estilos personalizados con Tailwind CSS
- Navegación intuitiva con navbar y footer

---

## 🛠️ Tecnologías Utilizadas

### Framework y Core
- **Angular 19.2.0** - Framework principal de la aplicación
- **TypeScript 5.7.2** - Lenguaje de programación
- **RxJS 7.8.0** - Programación reactiva y manejo de observables
- **Zone.js 0.15.0** - Detección de cambios

### UI y Estilos
- **PrimeNG 19.1.4** - Biblioteca de componentes UI
- **PrimeFlex 4.0.0** - Utilidades CSS
- **PrimeIcons 7.0.0** - Iconografía
- **Tailwind CSS 3.4.18** - Framework de utilidades CSS
- **@primeng/themes 19.1.4** - Temas de PrimeNG
- **@primeuix/themes 1.2.5** - Temas PrimeUI

### Herramientas de Desarrollo
- **Angular CLI 19.2.19** - Herramientas de línea de comandos
- **Karma 6.4.0** - Test runner
- **Jasmine 5.6.0** - Framework de testing
- **PostCSS 8.5.6** - Procesador CSS
- **Autoprefixer 10.4.22** - Compatibilidad de CSS

### Build y Deploy
- **@angular-devkit/build-angular 19.2.19** - Sistema de construcción
- **angular-cli-ghpages** - Despliegue en GitHub Pages

---

## 📦 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (viene incluido con Node.js) o **yarn**
- **Angular CLI** (versión 19.2.19)

### Verificar Instalaciones

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar Angular CLI (si está instalado globalmente)
ng version
```

### Instalar Angular CLI Globalmente (Opcional)

```bash
npm install -g @angular/cli@19.2.19
```

---

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd MaulePro-Angular
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias definidas en `package.json`.

### 3. Verificar la Instalación

```bash
ng version
```

Deberías ver la versión de Angular CLI y las dependencias instaladas.

---

## ⚙️ Configuración

### Variables de Entorno

Actualmente, el proyecto no requiere configuración de variables de entorno adicionales. Si necesitas configurar endpoints de API u otras configuraciones, puedes crear un archivo de entorno:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### Configuración de Rutas Base

El proyecto está configurado para desplegarse en GitHub Pages con la ruta base `/MaulePro-Angular/`. Esto se configura en el script `build:prod` del `package.json`.

---

## 💻 Uso

### Servidor de Desarrollo

Inicia el servidor de desarrollo local:

```bash
npm start
# o
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques cualquier archivo fuente.

### Acceso a Rutas Principales

Una vez que el servidor esté en ejecución, puedes acceder a:

- **Home**: `http://localhost:4200/home`
- **Búsqueda**: `http://localhost:4200/buscar`
- **Nosotros**: `http://localhost:4200/nosotros`
- **FAQ**: `http://localhost:4200/preguntas-frecuentes`
- **Detalle de Programa**: `http://localhost:4200/programas/:id`
- **Postulación**: `http://localhost:4200/postulacion/:id`
- **Dashboard**: `http://localhost:4200/dashboard`

---

## 📁 Estructura del Proyecto

```
MaulePro-Angular/
├── src/
│   ├── app/
│   │   ├── features/              # Módulos de funcionalidad
│   │   │   ├── dashboard/         # Dashboard de usuario
│   │   │   ├── faq/               # Preguntas frecuentes
│   │   │   ├── home/              # Página principal
│   │   │   │   └── components/
│   │   │   │       └── hero/      # Componente hero
│   │   │   ├── login/             # Autenticación
│   │   │   ├── nosotros/          # Página "Nosotros"
│   │   │   ├── not-found/         # Página 404
│   │   │   ├── postulacion/       # Sistema de postulación
│   │   │   │   ├── components/
│   │   │   │   │   ├── document-manager/  # Gestor de documentos
│   │   │   │   │   └── map-selector/      # Selector de ubicación
│   │   │   │   ├── models/                # Tipos y modelos
│   │   │   │   └── services/              # Servicios de postulación
│   │   │   ├── programs/          # Gestión de programas
│   │   │   │   └── components/
│   │   │   │       ├── program-card/      # Tarjeta de programa
│   │   │   │       ├── program-detail/    # Detalle de programa
│   │   │   │       ├── models/            # Modelos de datos
│   │   │   │       ├── services/          # Servicios de programas
│   │   │   │       └── utils/             # Utilidades
│   │   │   └── search/            # Búsqueda de programas
│   │   ├── shared/                # Recursos compartidos
│   │   │   ├── components/        # Componentes reutilizables
│   │   │   │   ├── banner-proximos-cierres/
│   │   │   │   ├── footer/
│   │   │   │   └── navbar/
│   │   │   ├── constants/         # Constantes y configuraciones
│   │   │   └── styles/            # Estilos globales
│   │   ├── app.component.*        # Componente raíz
│   │   ├── app.config.ts          # Configuración de la app
│   │   └── app.routes.ts          # Definición de rutas
│   ├── assets/                    # Recursos estáticos
│   │   └── images/                # Imágenes del proyecto
│   ├── index.html                 # HTML principal
│   ├── main.ts                    # Punto de entrada
│   └── styles.css                 # Estilos globales
├── public/                        # Archivos públicos
├── angular.json                   # Configuración de Angular
├── package.json                   # Dependencias y scripts
├── tailwind.config.js             # Configuración de Tailwind
├── tsconfig.json                  # Configuración de TypeScript
└── README.md                      # Este archivo
```

### Organización por Características

El proyecto sigue una arquitectura basada en características (feature-based), donde cada funcionalidad principal tiene su propio módulo con:

- Componentes específicos
- Servicios relacionados
- Modelos y tipos
- Estilos específicos

### Componentes Compartidos

Los componentes reutilizables se encuentran en `shared/components/`:

- **Navbar**: Barra de navegación principal
- **Footer**: Pie de página
- **Banner Próximos Cierres**: Banner informativo

---

## 📜 Scripts Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
# o
ng serve

# Iniciar con configuración específica
ng serve --configuration development
```

### Construcción

```bash
# Construcción para desarrollo
npm run build
# o
ng build

# Construcción para producción
npm run build:prod
# o
ng build --configuration production --base-href /MaulePro-Angular/
```

### Testing

```bash
# Ejecutar tests unitarios
npm test
# o
ng test

# Ejecutar tests con cobertura
ng test --code-coverage
```

### Despliegue

```bash
# Construir y desplegar en GitHub Pages
npm run deploy
```

### Otros

```bash
# Construcción en modo watch
npm run watch

# Generar componente
ng generate component nombre-componente

# Generar servicio
ng generate service nombre-servicio
```

---

## 🔧 Desarrollo

### Generación de Código

Angular CLI proporciona generadores para crear componentes, servicios, directivas, pipes, etc.

```bash
# Generar componente
ng generate component features/nombre-feature/nombre-componente

# Generar servicio
ng generate service features/nombre-feature/services/nombre-servicio

# Generar guard
ng generate guard core/guards/nombre-guard

# Ver todas las opciones disponibles
ng generate --help
```

### Convenciones de Nomenclatura

- **Componentes**: `kebab-case.component.ts` (ej: `program-card.component.ts`)
- **Servicios**: `kebab-case.service.ts` (ej: `postulacion-form.service.ts`)
- **Modelos/Tipos**: `kebab-case.types.ts` o `kebab-case.model.ts`
- **Constantes**: `kebab-case.constants.ts`
- **Utilidades**: `kebab-case.utils.ts`
- **Clases CSS**: Nombres en español y descriptivos (no Bootstrap)

### Estructura de Componentes

Cada componente debe incluir:

```typescript
@Component({
  selector: 'app-nombre-componente',
  standalone: true,
  imports: [/* módulos necesarios */],
  templateUrl: './nombre-componente.component.html',
  styleUrl: './nombre-componente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush // Recomendado para mejor rendimiento
})
```

### Servicios

Los servicios deben seguir el patrón de inyección de dependencias de Angular:

```typescript
@Injectable({
  providedIn: 'root' // o 'platform' según el caso
})
export class NombreService {
  // Implementación
}
```

### Manejo de Estado

El proyecto utiliza servicios con observables RxJS para el manejo de estado reactivo. Los servicios principales incluyen:

- `PostulacionFormService`: Gestión del formulario de postulación
- `DocumentService`: Gestión de documentos adjuntos
- `GeolocationService`: Gestión de ubicación geográfica
- `ProgramsService`: Gestión de datos de programas

---

## 🏗️ Construcción

### Construcción para Desarrollo

```bash
ng build
```

Genera los archivos en `dist/maulepro/` con:
- Source maps habilitados
- Sin optimizaciones
- Archivos sin minificar

### Construcción para Producción

```bash
ng build --configuration production
```

Genera una versión optimizada con:
- Archivos minificados y ofuscados
- Tree-shaking para eliminar código no utilizado
- Optimización de bundles
- Source maps deshabilitados (o separados)
- Hashing de nombres de archivos para cache busting

### Límites de Presupuesto

El proyecto tiene configurados límites de presupuesto en `angular.json`:

- **Bundle inicial**: Máximo 2MB (warning), 3MB (error)
- **Estilos de componentes**: Máximo 10kB (warning), 20kB (error)

---

## 🧪 Testing

### Tests Unitarios

El proyecto utiliza **Karma** y **Jasmine** para tests unitarios.

```bash
# Ejecutar tests una vez
ng test

# Ejecutar tests en modo watch
ng test --watch

# Ejecutar tests con cobertura
ng test --code-coverage
```

Los reportes de cobertura se generan en `coverage/`.

### Estructura de Tests

Los archivos de test siguen el patrón `*.spec.ts` y se ubican junto a los archivos que prueban:

```
componente.component.ts
componente.component.spec.ts
```

### Ejemplo de Test

```typescript
describe('NombreComponent', () => {
  let component: NombreComponent;
  let fixture: ComponentFixture<NombreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NombreComponent]
    });
    fixture = TestBed.createComponent(NombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

---

## 🚀 Despliegue

### Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

```bash
npm run deploy
```

Este comando:
1. Construye la aplicación en modo producción
2. Configura el base-href correcto (`/MaulePro-Angular/`)
3. Despliega los archivos en la rama `gh-pages`

### Configuración Manual

Si prefieres desplegar manualmente:

```bash
# 1. Construir para producción
ng build --configuration production --base-href /MaulePro-Angular/

# 2. Los archivos estarán en dist/maulepro/browser/

# 3. Subir a tu servidor o plataforma de hosting
```

### Variables de Entorno para Producción

Asegúrate de configurar las variables de entorno correctas para producción antes de construir:

```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.produccion.cl'
};
```

---

## 🏛️ Arquitectura

### Arquitectura Standalone

El proyecto utiliza la arquitectura **standalone** de Angular, donde cada componente, directiva o pipe es independiente y se importa directamente sin necesidad de módulos NgModule.

### Lazy Loading

Las rutas utilizan lazy loading para cargar componentes bajo demanda:

```typescript
{
  path: 'programas/:id',
  loadComponent: () => import('./features/programs/...')
    .then(m => m.ProgramDetailComponent)
}
```

### Change Detection Strategy

La mayoría de los componentes utilizan `OnPush` para optimizar el rendimiento:

```typescript
changeDetection: ChangeDetectionStrategy.OnPush
```

### Servicios Reactivos

Los servicios utilizan RxJS para manejo reactivo de datos:

```typescript
private dataSubject = new BehaviorSubject<DataType>(initialValue);
public data$ = this.dataSubject.asObservable();
```

---

## 📝 Convenciones de Código

### TypeScript

- Usar tipos explícitos en lugar de `any`
- Preferir interfaces para modelos de datos
- Usar `readonly` cuando sea apropiado
- Seguir las reglas de ESLint/TSLint configuradas

### HTML

- Usar atributos de Angular de forma consistente
- Mantener templates simples y legibles
- Separar lógica compleja en métodos del componente

### CSS

- Usar clases de Tailwind CSS cuando sea posible
- Clases personalizadas en español y descriptivas
- Mantener estilos específicos en archivos `.component.css`
- Estilos globales en `shared/styles/`

### Estructura de Archivos

- Un componente por archivo
- Un servicio por archivo
- Agrupar tipos relacionados en archivos `.types.ts`
- Mantener constantes en archivos `.constants.ts`

---

## 📄 Licencia

Este proyecto es propiedad del **Gobierno Regional del Maule**, desarrollado por el **Departamento de Informática**. Todos los derechos reservados.

---

## 📞 Soporte

Para consultas o soporte relacionado con este proyecto, contactar al **Departamento de Informática del Gobierno Regional del Maule**.

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [PrimeNG Documentation](https://primeng.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [RxJS Documentation](https://rxjs.dev)

---

## 📌 Información del Proyecto

**Desarrollado por:** Departamento de Informática del Gobierno Regional del Maule  
**Tipo de Proyecto:** Propuesta de Mejora - Prototipo Estético  
**Última actualización:** 12 de diciembre de 2025  
**Versión del Proyecto:** 0.0.0 (Prototipo)  
**Versión Angular:** 19.2.0  
**Versión PrimeNG:** 19.1.4

---

## ⚠️ Nota Importante

Este proyecto es un **prototipo estético** desarrollado como propuesta de mejora para la página actual de MaulePro. La implementación funcional completa, incluyendo integración con backend, APIs, autenticación y persistencia de datos, está pendiente de desarrollo en futuras fases del proyecto.


