import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div data-testid="counter-feature">
      <a class="btn btn-primary" routerLink="ui">UI</a>
    </div>
    <router-outlet />
  `,
  styles: ``,
})
export class CounterComponent {}
