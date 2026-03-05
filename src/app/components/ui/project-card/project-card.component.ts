import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeComponent } from '../badge/badge.component';
import { Project } from '../../../data/projects';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, BadgeComponent],
  template: `
    <a [routerLink]="['/projects', project.id]" class="block">
      <div
        class="glass glass-hover rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
      >
        <!-- Image -->
        <div
          class="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 relative overflow-hidden"
        >
          @if (project.gallery && project.gallery.length > 0) {
            <img
              [src]="project.image"
              [alt]="project.title"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          } @else {
            <div
              class="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-500/20"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center px-6">
              <span class="text-2xl font-bold tracking-tight text-white/80 text-center drop-shadow-lg">
                {{ project.title }}
              </span>
            </div>
          }
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center"
          >
            <span
              class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100"
            >
              View Project →
            </span>
          </div>
          <div class="absolute top-4 left-4">
            <app-badge color="accent">{{ project.category }}</app-badge>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6">
          <h3
            class="text-xl font-semibold mb-2 group-hover:text-accent-400 transition-colors"
          >
            {{ project.title }}
          </h3>
          <p class="text-gray-400 text-sm mb-4 line-clamp-2">
            {{ project.shortDescription }}
          </p>
          <div class="flex flex-wrap gap-2">
            @for (tag of project.tags.slice(0, 3); track tag) {
              <app-badge>{{ tag }}</app-badge>
            }
            @if (project.tags.length > 3) {
              <app-badge>+{{ project.tags.length - 3 }}</app-badge>
            }
          </div>
        </div>
      </div>
    </a>
  `,
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
