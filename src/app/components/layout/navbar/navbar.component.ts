import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 px-6 py-4 animate-slide-down"
    >
      <div class="max-w-6xl mx-auto">
        <div
          class="glass rounded-2xl px-6 py-3 flex items-center justify-between"
        >
          <!-- Logo -->
          <a
            routerLink="/"
            class="group flex items-center gap-2"
          >
            <div
              class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-purple-500 flex items-center justify-center font-bold text-lg text-dark-900 group-hover:scale-110 transition-transform"
            >
              J
            </div>
            <span class="font-semibold text-lg hidden sm:block">Joel</span>
          </a>

          <!-- Navigation Links -->
          <div class="flex items-center gap-1">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                [routerLinkActive]="'nav-active'"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:text-white text-gray-400"
              >
                {{ link.label }}
              </a>
            }
          </div>

          <!-- CTA Button -->
          <a
            href="mailto:hello@example.com"
            class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-500/20 text-accent-400 text-sm font-medium hover:bg-accent-500/30 transition-colors"
          >
            <span>Contact</span>
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: `
    @keyframes slideDown {
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    }
    .animate-slide-down {
      animation: slideDown 0.6s ease-out;
    }
    :host ::ng-deep .nav-active {
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }
  `,
})
export class NavbarComponent {
  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
  ];
}
