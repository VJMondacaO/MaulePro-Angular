import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // Requerido por PrimeNG
    provideAnimationsAsync(),

    // Configurar PrimeNG con el tema Aura
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};