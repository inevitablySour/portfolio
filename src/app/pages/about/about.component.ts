import { Component } from '@angular/core';
import { InViewDirective } from '../../shared/directives/in-view.directive';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { SkillIconComponent } from '../../components/ui/skill-icon/skill-icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InViewDirective, ButtonComponent, SkillIconComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  skills = [
    { name: 'Python', slug: 'python', devicon: 'python', color: '#3776AB' },
    { name: 'Java', slug: 'java', devicon: 'java', color: '#ED8B00' },
    { name: 'Scikit-learn', slug: 'scikitlearn', devicon: 'scikitlearn', color: '#F7931E' },
    { name: 'Flask', slug: 'flask', devicon: 'flask', color: '#ffffff' },
    { name: 'FastAPI', slug: 'fastapi', devicon: 'fastapi', color: '#009688' },
    { name: 'Docker', slug: 'docker', devicon: 'docker', color: '#2496ED' },
    { name: 'PostgreSQL', slug: 'postgresql', devicon: 'postgresql', color: '#4169E1' },
    { name: 'MySQL', slug: 'mysql', devicon: 'mysql', color: '#4479A1' },
    { name: 'Streamlit', slug: 'streamlit', devicon: 'streamlit', color: '#FF4B4B' },
    { name: 'Pandas', slug: 'pandas', devicon: 'pandas', color: '#150458' },
    { name: 'OpenCV', slug: 'opencv', devicon: 'opencv', color: '#5C3EE8' },
    { name: 'RabbitMQ', slug: 'rabbitmq', devicon: 'rabbitmq', color: '#FF6600' },
    { name: 'GitHub Actions', slug: 'githubactions', devicon: 'githubactions', color: '#2088FF' },
    { name: 'Git', slug: 'git', devicon: 'git', color: '#F05032' },
    { name: 'Linux', slug: 'linux', devicon: 'linux', color: '#FCC624' },
    { name: 'Bootstrap', slug: 'bootstrap', devicon: 'bootstrap', color: '#7952B3' },
    { name: 'HTML5', slug: 'html5', devicon: 'html5', color: '#E34F26' },
    { name: 'CSS3', slug: 'css3', devicon: 'css3', color: '#1572B6' },
  ];

}
