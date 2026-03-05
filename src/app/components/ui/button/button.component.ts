import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgTemplateOutlet } from '@angular/common';

const variants: Record<string, string> = {
  primary:
    'bg-gradient-to-r from-accent-500 to-accent-600 text-dark-900 font-semibold hover:from-accent-400 hover:to-accent-500',
  secondary: 'glass glass-hover text-white',
  ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
};

const sizes: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const base = 'inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 font-medium hover:scale-105 active:scale-95';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, NgClass, NgTemplateOutlet],
  template: `
    <ng-template #content><ng-content /></ng-template>

    @if (to) {
      <a
        [routerLink]="to"
        [class]="base"
        [ngClass]="[variantClass, sizeClass]"
      ><ng-container *ngTemplateOutlet="content" /></a>
    } @else if (href) {
      <a
        [href]="href"
        [target]="target"
        [rel]="rel"
        [class]="base"
        [ngClass]="[variantClass, sizeClass]"
      ><ng-container *ngTemplateOutlet="content" /></a>
    } @else {
      <button
        [class]="base"
        [ngClass]="[variantClass, sizeClass]"
      ><ng-container *ngTemplateOutlet="content" /></button>
    }
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() to?: string;
  @Input() href?: string;
  @Input() target?: string;
  @Input() rel?: string;

  base = base;

  get variantClass(): string {
    return variants[this.variant];
  }

  get sizeClass(): string {
    return sizes[this.size];
  }
}
