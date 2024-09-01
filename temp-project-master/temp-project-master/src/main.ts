
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppComponent } from './app/app.component';
//import { environment } from './environments/environment';

//if (environment.production) {
 // enableProdMode();
//}

// platformBrowserDynamic().bootstrapModule(AppComponent)
//   .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync()
  ]
}).catch(err => console.error(err));



