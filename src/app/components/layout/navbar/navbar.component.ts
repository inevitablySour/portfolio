import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 animate-slide-down"
    >
      <div class="max-w-6xl mx-auto">
        <div
          class="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between"
        >
          <!-- Logo -->
          <a
            routerLink="/"
            class="group flex items-center gap-2"
            (click)="mobileOpen = false"
          >
            <div
              class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-purple-500 flex items-center justify-center font-bold text-lg text-dark-900 group-hover:scale-110 transition-transform"
            >
              J
            </div>
            <span class="font-semibold text-lg hidden sm:block">Joel</span>
          </a>

          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex items-center gap-1">
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

          <!-- Desktop CTA Button -->
          <a
            href="mailto:hello@example.com"
            class="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-500/20 text-accent-400 text-sm font-medium hover:bg-accent-500/30 transition-colors"
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

          <!-- Mobile Hamburger -->
          <button
            class="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-white/10 transition-colors"
            (click)="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            @if (!mobileOpen) {
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            } @else {
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          </button>
        </div>

        <!-- Mobile Menu -->
        @if (mobileOpen) {
          <div class="md:hidden glass rounded-2xl mt-2 px-4 py-3 flex flex-col gap-1 animate-menu-in">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                [routerLinkActive]="'nav-active'"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:text-white text-gray-400"
                (click)="mobileOpen = false"
              >
                {{ link.label }}
              </a>
            }
            <a
              href="mailto:hello@example.com"
              class="px-4 py-3 rounded-xl text-sm font-medium text-accent-400 hover:bg-accent-500/10 transition-colors"
              (click)="mobileOpen = false"
            >
              Contact
            </a>
          </div>
        }
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
    @keyframes menuIn {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-menu-in {
      animation: menuIn 0.2s ease-out;
    }
    :host ::ng-deep .nav-active {
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }
  `,
})
export class NavbarComponent {
  mobileOpen = false;

  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
  ];
}
