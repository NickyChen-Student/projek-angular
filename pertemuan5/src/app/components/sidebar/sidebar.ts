import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { Menu4State, SectionId } from '../../pages/menu4/menu4-state';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private readonly router = inject(Router);
  private readonly menuState = inject(Menu4State);

  protected readonly menus = [
    { label: 'Menu 1', path: '/menu1' },
    { label: 'Menu 2', path: '/menu2' },
    { label: 'Menu 3', path: '/menu3' },
  ];

  protected readonly subMenus: { id: SectionId; label: string; path: string }[] = [
    { id: 'a', label: 'A', path: '/menu4/a' },
    { id: 'b', label: 'B', path: '/menu4/b' },
  ];

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

  protected readonly menu4Active = computed(() => this.url().startsWith('/menu4'));
  protected readonly openMenu4 = signal(this.router.url.startsWith('/menu4'));

  protected selectSection(id: SectionId): void {
    this.menuState.toggle(id);
  }

  protected toggleMenu4(): void {
    this.openMenu4.update((open) => !open);
    this.menuState.reset();
    this.router.navigate(['/menu4']);
  }
}
