import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button
        [disabled]="counterAtZero()"
        (click)="decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ counter() }}</span>
      <button (click)="increment()" class="btn btn-primary">+</button>
    </div>

    @if (!counterAtZero()) {
      <div data-testid="fizzBuzz">
        @if (counterDivisibleBy3()) {
          <span>Fizz</span>
        }
        @if (counterDivisibleBy5()) {
          <span>Buzz</span>
        }
      </div>
    }
  `,
  styles: ``,
})
export class UiComponent {
  counter = signal(0);

  increment() {
    this.counter.update((c) => c + 1);
  }

  decrement() {
    this.counter.update((c) => c - 1);
  }

  counterAtZero = computed(() => this.counter() === 0);
  counterDivisibleBy3 = computed(() => this.counter() % 3 === 0);
  counterDivisibleBy5 = computed(() => this.counter() % 5 === 0);
}
