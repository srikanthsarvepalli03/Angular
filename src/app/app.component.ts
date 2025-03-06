import { Component } from '@angular/core';

import { HeadersComponent } from './components/headers/headers.component';

import { HomeComponent } from "./home/home.component";
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,HeadersComponent],
  template: `
    <app-headers/>
    <main>
      <router-outlet/>
    </main>
    `,
  styles: [
    `
    main {
     padding:16px;
    }
    `
  ],
})
export class AppComponent {
  title = 'sharath kumar ';
}
