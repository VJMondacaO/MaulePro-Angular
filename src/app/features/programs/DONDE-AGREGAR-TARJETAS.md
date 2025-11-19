# 📍 ¿Dónde Agregar Más Tarjetas de Programa?

## ✅ Ubicación Principal

**Archivo:** `src/app/features/programs/programs.service.ts`

**Método:** `getPrograms()`

---

## 📝 Cómo Agregar una Nueva Tarjeta

1. **Abre el archivo:** `src/app/features/programs/programs.service.ts`

2. **Encuentra el método `getPrograms()`** que retorna un array de `ProgramCardData[]`

3. **Agrega un nuevo objeto al array** siguiendo este formato:

```typescript
{
  id: '6', // ID único (puede ser número o string)
  titulo: 'Nombre del Nuevo Programa',
  descripcion: 'Descripción detallada del programa...',
  estado: 'open', // 'open' | 'soon' | 'closed'
  fechaInicio: '01-03-2026', // Formato: DD-MM-YYYY
  fechaFin: '31-03-2026', // Formato: DD-MM-YYYY
  fechaCierre: '2026-03-31', // Opcional: Formato YYYY-MM-DD para calcular días restantes
  beneficiarios: 'Municipios, Organizaciones, Personas naturales, etc.',
  montos: '$5.000.000 - $10.000.000',
  tipoFondo: 'FNDR 10%', // Opcional
  rutaDetalles: '/programas/nuevo-programa' // Opcional: ruta interna de Angular
  // O usar linkDetalles para URL externa:
  // linkDetalles: 'https://ejemplo.com/programa'
}
```

---

## 📋 Ejemplo Completo

```typescript
getPrograms(): ProgramCardData[] {
  return [
    // ... programas existentes ...
    
    // 👇 NUEVA TARJETA 👇
    {
      id: '6',
      titulo: 'Financiamiento para Emprendimientos Locales',
      descripcion: 'Apoyo económico para emprendimientos locales que fortalezcan la economía regional.',
      estado: 'open',
      fechaInicio: '01-03-2026',
      fechaFin: '31-03-2026',
      fechaCierre: '2026-03-31',
      beneficiarios: 'Empresas',
      montos: '$5.000.000 - $15.000.000',
      tipoFondo: 'FNDR 10%',
      rutaDetalles: '/programas/emprendimientos-locales'
    }
  ];
}
```

---

## 🎯 Campos Importantes

### Campos OBLIGATORIOS:
- ✅ `titulo`: Título del programa
- ✅ `descripcion`: Descripción del programa
- ✅ `estado`: 'open' | 'soon' | 'closed'
- ✅ `fechaInicio`: Fecha de inicio (formato: DD-MM-YYYY)
- ✅ `fechaFin`: Fecha de fin (formato: DD-MM-YYYY)
- ✅ `beneficiarios`: Texto descriptivo de los beneficiarios
- ✅ `montos`: Texto descriptivo de los montos

### Campos OPCIONALES:
- ⚪ `id`: ID único del programa
- ⚪ `fechaCierre`: Fecha de cierre (formato: YYYY-MM-DD) - Se usa para calcular días restantes
- ⚪ `tipoFondo`: Tipo de fondo (ej: "FNDR 8%")
- ⚪ `rutaDetalles`: Ruta interna de Angular (ej: "/programas/fndr-8")
- ⚪ `linkDetalles`: URL externa (ej: "https://ejemplo.com/programa")

**Nota:** Usa `rutaDetalles` O `linkDetalles`, no ambos.

---

## 🔄 Después de Agregar

1. **Guarda el archivo** `programs.service.ts`
2. **Las tarjetas se actualizarán automáticamente** en el componente que las muestra
3. **No necesitas cambiar ningún otro archivo** - El servicio ya está conectado al componente

---

## 📂 Ubicación del Archivo

```
src/app/features/programs/
  ├── programs.service.ts  👈 AQUÍ AGREGAS LAS TARJETAS
  ├── card-v7/              (Componente de tarjeta utilizado)
  ├── program-card.types.ts (Interfaz de datos)
  └── DONDE-AGREGAR-TARJETAS.md (este archivo)
```

---

## 💡 Consejos

- **IDs únicos**: Usa números secuenciales o nombres descriptivos como ID
- **Fechas**: El formato de `fechaCierre` debe ser `YYYY-MM-DD` para que funcione el cálculo de días
- **Estados**: 
  - `'open'`: Programa abierto (verde)
  - `'soon'`: Programa próximo (amarillo)
  - `'closed'`: Programa cerrado (rojo/gris)
- **Días restantes**: Solo se muestra si `fechaCierre` está definida y el estado es `'open'`

---

¡Listo! Solo agrega objetos al array en `programs.service.ts` y las tarjetas aparecerán automáticamente. 🚀

