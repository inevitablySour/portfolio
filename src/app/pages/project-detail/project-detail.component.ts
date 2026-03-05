import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InViewDirective } from '../../shared/directives/in-view.directive';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { BadgeComponent } from '../../components/ui/badge/badge.component';
import { getProjectById, Project } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, InViewDirective, ButtonComponent, BadgeComponent],
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project?: Project;

  // Hero carousel state
  heroIndex = 0;
  heroArrowsVisible = false;
  private heroIdleTimer: ReturnType<typeof setTimeout> | null = null;

  // Lightbox state
  lightboxOpen = false;
  lightboxIndex = 0;
  lightboxArrowsVisible = false;
  private lightboxIdleTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = getProjectById(id);
    }
    if (!this.project) {
      this.router.navigate(['/projects']);
      return;
    }
    this.preloadGalleryImages();
  }

  private preloadGalleryImages() {
    if (!this.project?.gallery) return;
    for (const src of this.project.gallery) {
      const img = new Image();
      img.src = src;
    }
  }

  ngOnDestroy() {
    if (this.heroIdleTimer) clearTimeout(this.heroIdleTimer);
    if (this.lightboxIdleTimer) clearTimeout(this.lightboxIdleTimer);
  }

  // --- Hero carousel ---
  onHeroMouseMove() {
    this.heroArrowsVisible = true;
    if (this.heroIdleTimer) clearTimeout(this.heroIdleTimer);
    this.heroIdleTimer = setTimeout(() => (this.heroArrowsVisible = false), 600);
  }

  onHeroMouseLeave() {
    this.heroArrowsVisible = false;
    if (this.heroIdleTimer) clearTimeout(this.heroIdleTimer);
  }

  heroNext() {
    if (!this.project?.gallery) return;
    this.heroIndex = (this.heroIndex + 1) % this.project.gallery.length;
  }

  heroPrev() {
    if (!this.project?.gallery) return;
    this.heroIndex =
      (this.heroIndex - 1 + this.project.gallery.length) % this.project.gallery.length;
  }

  // --- Lightbox ---
  openLightbox(index: number) {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    this.lightboxArrowsVisible = true;
    this.resetLightboxIdle();
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
    if (this.lightboxIdleTimer) clearTimeout(this.lightboxIdleTimer);
  }

  onLightboxMouseMove() {
    this.lightboxArrowsVisible = true;
    this.resetLightboxIdle();
  }

  private resetLightboxIdle() {
    if (this.lightboxIdleTimer) clearTimeout(this.lightboxIdleTimer);
    this.lightboxIdleTimer = setTimeout(() => (this.lightboxArrowsVisible = false), 600);
  }

  lightboxNext(event: Event) {
    event.stopPropagation();
    if (!this.project?.gallery) return;
    this.lightboxIndex = (this.lightboxIndex + 1) % this.project.gallery.length;
  }

  lightboxPrev(event: Event) {
    event.stopPropagation();
    if (!this.project?.gallery) return;
    this.lightboxIndex =
      (this.lightboxIndex - 1 + this.project.gallery.length) % this.project.gallery.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.lightboxNext(event);
    if (event.key === 'ArrowLeft') this.lightboxPrev(event);
  }
}
