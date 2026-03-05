import { Component, Input } from '@angular/core';
import { NgxLavaLampComponent } from '@omnedia/ngx-lava-lamp';

@Component({
  selector: 'app-lava-lamp-background',
  standalone: true,
  imports: [NgxLavaLampComponent],
  template: `
    <div class="absolute inset-0 z-0" [style.opacity]="opacity">
      <om-lava-lamp
        [color]="color"
        [cursorBallColor]="cursorBallColor"
        [speed]="speed"
        [ballCount]="ballCount"
        [animationSize]="animationSize"
        [clumpFactor]="clumpFactor"
        [cursorBallSize]="cursorBallSize"
        [enableMouseInteraction]="enableMouseInteraction"
        [hoverSmoothness]="hoverSmoothness"
      ></om-lava-lamp>
    </div>
    <!-- Fade edges for text readability -->
    <div
      class="absolute inset-0 z-[1] bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900 pointer-events-none"
    ></div>
  `,
  styles: `
    :host {
      display: contents;
    }
    om-lava-lamp {
      width: 100%;
      height: 100%;
    }
  `,
})
export class LavaLampBackgroundComponent {
  @Input() color = '#06b6d4';
  @Input() cursorBallColor = '#a855f7';
  @Input() opacity = 0.6;
  @Input() speed = 0.25;
  @Input() ballCount = 10;
  @Input() animationSize = 25;
  @Input() clumpFactor = 1.2;
  @Input() cursorBallSize = 3;
  @Input() enableMouseInteraction = true;
  @Input() hoverSmoothness = 0.05;
}
