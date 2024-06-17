import { bootstrapApplication } from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideHttpClient()
  ]
})
  .catch(err => console.error(err));
