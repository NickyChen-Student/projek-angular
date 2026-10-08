import { Injectable, signal } from '@angular/core';

export type SectionId = 'a' | 'b';

const SECTIONS: readonly SectionId[] = ['a', 'b'];

export function isSectionId(value: string | null): value is SectionId {
  return value !== null && SECTIONS.includes(value as SectionId);
}

@Injectable({ providedIn: 'root' })
export class Menu4State {
  private readonly state = signal<ReadonlySet<SectionId>>(new Set<SectionId>());
  readonly visible = this.state.asReadonly();

  toggle(section: SectionId): void {
    this.state.update((current) => {
      const bothOpen = current.has('a') && current.has('b');
      return bothOpen
        ? new Set<SectionId>([section])
        : new Set<SectionId>(current).add(section);
    });
  }

  reset(): void {
    this.state.set(new Set<SectionId>());
  }
}
