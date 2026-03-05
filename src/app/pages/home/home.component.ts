import { Component } from '@angular/core';
import { InViewDirective } from '../../shared/directives/in-view.directive';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { ProjectCardComponent } from '../../components/ui/project-card/project-card.component';
import { LavaLampBackgroundComponent } from '../../components/lava-lamp/lava-lamp-background.component';
import { getFeaturedProjects, Project } from '../../data/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InViewDirective,
    ButtonComponent,
    ProjectCardComponent,
    LavaLampBackgroundComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  featuredProjects: Project[] = getFeaturedProjects();
}
