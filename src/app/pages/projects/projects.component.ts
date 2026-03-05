import { Component } from '@angular/core';
import { InViewDirective } from '../../shared/directives/in-view.directive';
import { ProjectCardComponent } from '../../components/ui/project-card/project-card.component';
import {
  projects,
  categories,
  getProjectsByCategory,
  Project,
} from '../../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [InViewDirective, ProjectCardComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  categories = categories;
  activeCategory = 'All';
  filteredProjects: Project[] = projects;
  allProjects = projects;

  stats = [
    { label: 'Total Projects', value: projects.length },
    { label: 'AI/ML', value: projects.filter((p) => p.category === 'AI/ML').length },
    { label: 'Web Apps', value: projects.filter((p) => p.category === 'Web App').length },
    {
      label: 'Games & Other',
      value: projects.filter((p) => ['Game', 'Tool', 'Creative'].includes(p.category)).length,
    },
  ];

  setCategory(category: string) {
    this.activeCategory = category;
    this.filteredProjects = getProjectsByCategory(category);
  }
}
