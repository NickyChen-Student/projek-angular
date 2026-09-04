import {Directive, input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.background-color]': 'color()',
    '[style.transition]': '"background-color 160ms"',
  },
})
export class HighlightDirective {
  color = input('#FFF59D');
}