import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

const colorMap: Record<string, string> = {
  default: 'bg-white/10 text-gray-300',
  accent: 'bg-accent-500/20 text-accent-400',
  purple: 'bg-purple-500/20 text-purple-400',
};

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass],
  template: `
    <span
      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
      [ngClass]="colorClass"
    >
      <ng-content />
    </span>
  `,
})
export class BadgeComponent {
  @Input() color: 'default' | 'accent' | 'purple' = 'default';

  get colorClass(): string {
    return colorMap[this.color] ?? colorMap['default'];
  }
}
