import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuA } from './menu-a/menu-a';
import { MenuB } from './menu-b/menu-b';
import { isSectionId, Menu4State } from './menu4-state';

@Component({
  selector: 'app-menu4',
  imports: [MenuA, MenuB],
  templateUrl: './menu4.html',
  styleUrl: './menu4.css',
})
export class Menu4 {
  private readonly menuState = inject(Menu4State);
  private readonly route = inject(ActivatedRoute);

  protected readonly hasContent = computed(() => this.menuState.visible().size > 0);
  protected readonly showA = computed(() => this.menuState.visible().has('a'));
  protected readonly showB = computed(() => this.menuState.visible().has('b'));

  constructor() {
    const section = this.route.snapshot.paramMap.get('section');
    this.menuState.reset();
    if (isSectionId(section)) {
      this.menuState.toggle(section);
    }
  }
}
