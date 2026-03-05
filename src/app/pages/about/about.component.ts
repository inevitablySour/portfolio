import { Component } from '@angular/core';
import { InViewDirective } from '../../shared/directives/in-view.directive';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { GlassCardComponent } from '../../components/ui/glass-card/glass-card.component';
import { SkillIconComponent } from '../../components/ui/skill-icon/skill-icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InViewDirective, ButtonComponent, GlassCardComponent, SkillIconComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  skills = [
    { name: 'Angular', slug: 'angular', devicon: 'angularjs', color: '#DD0031' },
    { name: 'JavaScript', slug: 'javascript', devicon: 'javascript', color: '#F7DF1E' },
    { name: 'TypeScript', slug: 'typescript', devicon: 'typescript', color: '#3178C6' },
    { name: 'WebGL', slug: 'webgl', devicon: 'opengl', color: '#ffffff' },
    { name: 'Tailwind', slug: 'tailwindcss', devicon: 'tailwindcss', color: '#06B6D4' },
    { name: 'Node.js', slug: 'nodedotjs', devicon: 'nodejs', color: '#339933' },
    { name: 'Python', slug: 'python', devicon: 'python', color: '#3776AB' },
    { name: 'Git', slug: 'git', devicon: 'git', color: '#F05032' },
    { name: 'HTML5', slug: 'html5', devicon: 'html5', color: '#E34F26' },
    { name: 'CSS3', slug: 'css3', devicon: 'css3', color: '#1572B6' },
    { name: 'Figma', slug: 'figma', devicon: 'figma', color: '#F24E1E' },
    { name: 'VS Code', slug: 'visualstudiocode', devicon: 'vscode', color: '#007ACC' },
  ];

  timeline = [
    {
      year: '2024',
      title: 'Full Stack Developer',
      description: 'Building modern web applications with Angular and Node.js',
    },
    {
      year: '2023',
      title: 'Frontend Developer',
      description: 'Focused on creating beautiful, responsive user interfaces',
    },
    {
      year: '2022',
      title: 'Started Learning Web Development',
      description: 'Began my journey into the world of programming',
    },
  ];
}
