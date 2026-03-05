import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';

const routeAnimation = trigger('routeAnimation', [
  // Skip initial load (void => *), only animate between pages
  transition('* => *', [
    query(':enter', style({ opacity: 0, transform: 'translateY(20px)' }), { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ], { optional: true }),
      query(':enter', [
        animate('300ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ], { optional: true }),
    ]),
  ]),
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeAnimation],
})
export class App {
  routeCounter = 0;

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.isActivated ? ++this.routeCounter : 0;
  }
}
