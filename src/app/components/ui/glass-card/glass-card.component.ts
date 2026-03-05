import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="glass rounded-2xl overflow-hidden transition-all duration-300"
      [ngClass]="{
        'glass-hover cursor-pointer hover:-translate-y-1 hover:scale-[1.02]': hover,
        'glow': glow
      }"
    >
      <ng-content />
    </div>
  `,
})
export class GlassCardComponent {
  @Input() hover = true;
  @Input() glow = false;
}
