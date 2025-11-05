import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// NOTA
import italiano from '@angular/common/locales/it';
// NOTA
import { registerLocaleData } from '@angular/common';

registerLocaleData(italiano);
// NOTA

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),


    { provide: LOCALE_ID, useValue: 'it-IT' }
    // NOTA
  ]
};
