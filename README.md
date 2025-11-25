# MaulePro - Portal de Fondos Regionales

Portal web para la gestión y visualización de programas y fondos regionales del Gobierno Regional del Maule.

**Última actualización:** 24 de noviembre de 2024  
**Versión Angular:** 19.2.19

---

## 📋 Descripción

MaulePro es una aplicación web desarrollada en Angular que permite a los usuarios:
- Explorar programas y fondos regionales disponibles
- Buscar y filtrar programas por estado, tipo de fondo y palabras clave
- Ver detalles completos de cada programa
- Acceder a información sobre plazos de postulación, beneficiarios y montos

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn
- Angular CLI 19.2.19

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

Navega a `http://localhost:4200/` para ver la aplicación.

## 🛠️ Desarrollo

### Servidor de Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
ng serve
```

Una vez que el servidor esté en ejecución, abre tu navegador y ve a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques cualquier archivo fuente.

### Estructura del Proyecto

El proyecto sigue las mejores prácticas de Angular con una estructura organizada:

```
src/app/
├── core/              # Servicios singleton, guards, interceptors
├── features/          # Módulos de funcionalidad
│   ├── programs/      # Gestión de programas
│   ├── home/          # Página principal
│   ├── search/        # Búsqueda de programas
│   └── ...
└── shared/            # Componentes y recursos compartidos
    ├── components/    # Componentes reutilizables
    └── styles/        # Estilos globales
```

Para más detalles, consulta [ESTRUCTURA_PROYECTO.md](./ESTRUCTURA_PROYECTO.md).

## 📦 Generación de Código

Angular CLI incluye herramientas poderosas para generar código. Para generar un nuevo componente:

```bash
ng generate component component-name
```

Para una lista completa de esquemas disponibles (como `components`, `directives`, o `pipes`), ejecuta:

```bash
ng generate --help
```

### Convenciones de Nomenclatura

- **Componentes:** `kebab-case.component.ts`
- **Servicios:** `kebab-case.service.ts`
- **Modelos:** `kebab-case.types.ts` o `kebab-case.model.ts`

## 🏗️ Construcción

Para construir el proyecto:

```bash
# Desarrollo
ng build

# Producción (optimizado)
ng build --configuration production
```

Esto compilará tu proyecto y almacenará los artefactos de construcción en el directorio `dist/`. Por defecto, la construcción de producción optimiza la aplicación para rendimiento y velocidad.

## 🧪 Testing

### Tests Unitarios

Para ejecutar tests unitarios con [Karma](https://karma-runner.github.io):

```bash
ng test
```

### Tests End-to-End

Para pruebas end-to-end (e2e):

```bash
ng e2e
```

Angular CLI no incluye un framework de testing e2e por defecto. Puedes elegir uno que se adapte a tus necesidades.

---

## 🛠️ Tecnologías Utilizadas

- **Angular 19.2.19** - Framework principal
- **PrimeNG 19.1.4** - Componentes UI
- **Tailwind CSS** - Framework de estilos
- **TypeScript** - Lenguaje de programación
- **RxJS** - Programación reactiva

---

## 📚 Recursos Adicionales

Para más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visita la [Documentación de Angular CLI](https://angular.dev/tools/cli).

### Documentación del Proyecto

- [ESTRUCTURA_PROYECTO.md](./ESTRUCTURA_PROYECTO.md) - Estructura y organización del proyecto
- [ANALISIS_CODIGO.md](../ANALISIS_CODIGO.md) - Análisis técnico y mejoras implementadas

---

## 👥 Contribución

Este proyecto es desarrollado para el Gobierno Regional del Maule. Para contribuir:

1. Sigue las convenciones de código establecidas
2. Mantén la estructura de carpetas organizada
3. Documenta cambios significativos
4. Ejecuta los tests antes de hacer commit

---

## 📝 Licencia

Este proyecto es propiedad del Gobierno Regional del Maule.

---

**Última actualización:** 24 de noviembre de 2024
