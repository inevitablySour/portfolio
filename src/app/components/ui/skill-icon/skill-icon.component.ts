import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  host: { style: 'display:block;width:100%;height:100%' },
  template: `
    @if (failed) {
      <div
        class="w-full h-full rounded-lg flex items-center justify-center text-sm font-bold"
        [style.backgroundColor]="color + '30'"
        [style.color]="color"
      >
        {{ name.slice(0, 2).toUpperCase() }}
      </div>
    } @else {
      <img
        [src]="currentSource"
        [alt]="name"
        class="w-full h-full object-contain"
        loading="lazy"
        (error)="onError()"
      />
    }
  `,
})
export class SkillIconComponent implements OnInit {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) slug!: string;
  @Input() devicon?: string;
  @Input({ required: true }) color!: string;

  currentSource = '';
  failed = false;
  private sources: string[] = [];
  private sourceIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const cleanColor = this.color.replace('#', '');
    this.sources = [
      `https://cdn.simpleicons.org/${this.slug}/${cleanColor}`,
      this.devicon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${this.devicon}/${this.devicon}-original.svg`
        : '',
      `https://api.iconify.design/simple-icons/${this.slug}.svg?color=%23${cleanColor}`,
      `https://api.iconify.design/devicon/${this.devicon || this.slug}.svg`,
      `https://api.iconify.design/logos/${this.slug}.svg`,
    ].filter(Boolean);
    this.currentSource = this.sources[0] ?? '';
  }

  onError() {
    this.sourceIndex++;
    if (this.sourceIndex < this.sources.length) {
      this.currentSource = this.sources[this.sourceIndex];
    } else {
      this.failed = true;
    }
    this.cdr.detectChanges();
  }
}
