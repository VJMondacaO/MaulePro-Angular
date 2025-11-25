# Estructura del Proyecto - MaulePro Angular

**Última actualización:** 2025-01-27  
**Versión Angular:** 19.2.0

---

## 📁 Estructura de Carpetas

```
src/app/
├── core/                           # Servicios singleton, guards, interceptors
│   ├── services/                   # Servicios globales (futuro)
│   ├── guards/                     # Guards de rutas (futuro)
│   └── interceptors/               # Interceptors HTTP (futuro)
│
├── features/                       # Módulos de funcionalidad
│   ├── programs/                   # Feature: Programas
│   │   └── components/
│   │       ├── program-card/       # Componente de tarjeta
│   │       ├── program-detail/     # Componente de detalle
│   │       ├── services/           # Servicios específicos del feature
│   │       │   └── programs.service.ts
│   │       ├── models/             # Interfaces y tipos
│   │       │   ├── program-card.types.ts
│   │       │   └── program-detail.types.ts
│   │       └── utils/              # Utilidades específicas (futuro)
│   │
│   ├── home/                       # Feature: Home
│   │   └── components/
│   │       └── hero/               # Componente hero
│   │
│   ├── search/                     # Feature: Búsqueda
│   ├── faq/                        # Feature: Preguntas frecuentes
│   ├── nosotros/                   # Feature: Nosotros
│   ├── dashboard/                  # Feature: Dashboard
│   ├── login/                      # Feature: Login
│   └── not-found/                  # Feature: 404
│
└── shared/                         # Componentes y recursos compartidos
    ├── components/                  # Componentes reutilizables
    │   ├── navbar/                 # Barra de navegación
    │   ├── footer/                 # Pie de página
    │   └── banner-proximos-cierres/ # Banner de cierres próximos
    │
    ├── styles/                      # Estilos globales
    │   ├── base.css                # Estilos base
    │   ├── primeng-overrides.css   # Overrides de PrimeNG
    │   └── variables.css           # Variables CSS
    │
    ├── pipes/                       # Pipes personalizados (futuro)
    └── directives/                  # Directivas personalizadas (futuro)
```

---

## 🎯 Principios de Organización

### 1. **core/**
- **Propósito:** Servicios singleton, guards, interceptors
- **Regla:** Solo código que se usa en toda la aplicación
- **Ejemplo:** `AuthService`, `HttpInterceptor`, `AuthGuard`

### 2. **features/**
- **Propósito:** Módulos de funcionalidad independientes
- **Estructura por feature:**
  ```
  feature-name/
  ├── components/      # Componentes del feature
  ├── services/        # Servicios específicos del feature
  ├── models/         # Interfaces, tipos, modelos
  └── utils/          # Utilidades específicas del feature
  ```
- **Regla:** Cada feature debe ser independiente y autocontenido

### 3. **shared/**
- **Propósito:** Componentes y recursos reutilizables
- **Regla:** Solo código usado en múltiples features
- **Estructura:**
  - `components/` - Componentes reutilizables
  - `styles/` - Estilos globales
  - `pipes/` - Pipes compartidos
  - `directives/` - Directivas compartidas

---

## 📝 Convenciones de Nomenclatura

### Archivos
- **Componentes:** `kebab-case.component.ts` (ej: `program-card.component.ts`)
- **Servicios:** `kebab-case.service.ts` (ej: `programs.service.ts`)
- **Modelos:** `kebab-case.types.ts` o `kebab-case.model.ts`
- **Utilidades:** `kebab-case.util.ts`

### Carpetas
- **Features:** `kebab-case` (ej: `programs`, `home`)
- **Componentes:** `kebab-case` (ej: `program-card`, `hero`)

---

## 🔄 Cambios Realizados (2025-01-27)

### Reorganización de `features/programs/`
- ✅ Movidos componentes a `components/`
- ✅ Movido servicio a `components/services/`
- ✅ Movidos tipos a `components/models/`
- ✅ Creada carpeta `components/utils/` para futuras utilidades

### Reorganización de `shared/`
- ✅ Movidos componentes a `components/`
- ✅ Mantenidos estilos en `styles/`

### Reorganización de `features/home/`
- ✅ Movido componente `hero` a `components/hero/`

### Estructura `core/`
- ✅ Creadas carpetas base para servicios, guards, interceptors

---

## 📦 Imports Actualizados

### Antes
```typescript
import { ProgramsService } from '../programs/programs.service';
import { ProgramCardData } from '../programs/program-card.types';
import { ProgramCardComponent } from '../programs/program-card/program-card.component';
```

### Después
```typescript
import { ProgramsService } from '../programs/components/services/programs.service';
import { ProgramCardData } from '../programs/components/models/program-card.types';
import { ProgramCardComponent } from '../programs/components/program-card/program-card.component';
```

---

## ✅ Verificación

- ✅ Proyecto compila correctamente
- ✅ Todos los imports actualizados
- ✅ Sin errores de linting
- ✅ Estructura alineada con mejores prácticas de Angular

---

## 🚀 Próximos Pasos Recomendados

1. **Mover servicios singleton a `core/services/`**
   - Si `ProgramsService` es usado globalmente, moverlo a `core/services/`

2. **Crear guards en `core/guards/`**
   - `auth.guard.ts`
   - `role.guard.ts`

3. **Crear interceptors en `core/interceptors/`**
   - `http-error.interceptor.ts`
   - `auth.interceptor.ts`

4. **Agregar utilidades compartidas**
   - `shared/utils/` para funciones helper
   - `shared/pipes/` para pipes personalizados

5. **Documentar cada feature**
   - README.md en cada feature explicando su propósito

---

**Mantenido por:** Equipo de Desarrollo MaulePro  
**Última revisión:** 2025-01-27

