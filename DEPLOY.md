# 🚀 Despliegue a GitHub Pages

## Pasos para desplegar

### 1. Instalar angular-cli-ghpages globalmente (si aún no lo tienes)
```bash
npm install -g angular-cli-ghpages
```

### 2. Asegúrate de que todos los cambios estén commiteados
```bash
git status
git add .
git commit -m "Preparar para despliegue"
```

### 3. Subir los cambios a GitHub
```bash
git push origin main
```

### 4. Desplegar a GitHub Pages
```bash
npm run deploy
```

Este comando hará:
- Build de producción optimizado
- Configurará la base href correctamente para GitHub Pages
- Desplegará automáticamente a la rama `gh-pages`

### 5. Configurar GitHub Pages (solo primera vez)
1. Ve a tu repositorio en GitHub
2. Ve a Settings → Pages
3. En "Source", selecciona la rama `gh-pages`
4. Guarda los cambios

### 6. Acceder a tu sitio
Tu sitio estará disponible en:
```
https://[tu-usuario].github.io/MaulePro-Angular/
```

## Scripts disponibles

- `npm run build:prod` - Solo hace el build de producción
- `npm run deploy` - Hace build y despliega automáticamente

## Notas importantes

⚠️ **IMPORTANTE**: Cambia `/MaulePro-Angular/` en `package.json` por el nombre real de tu repositorio:
```json
"build:prod": "ng build --configuration production --base-href /TU-REPO-AQUI/",
"deploy": "ng build --configuration production --base-href /TU-REPO-AQUI/ && npx angular-cli-ghpages --dir=dist/maulepro/browser",
```

## Actualizaciones futuras

Para actualizar el sitio después de hacer cambios:
```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
npm run deploy
```

¡Eso es todo! 🎉

