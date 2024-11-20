import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="grid grid-flow-col gap-8">
      @for (value of store.deviationValues(); track value) {
        <button>{{ value }}</button>
      }
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
