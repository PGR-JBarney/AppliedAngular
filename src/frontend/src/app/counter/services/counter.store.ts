import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { DEVIATION_VALUES, DeviationValue } from '../types';
import { computed } from '@angular/core';

export const CounterStore = signalStore(
  withState({
    counter: 0,
    deviationValues: DEVIATION_VALUES,
    deviationValue: 1,
  }),
  withMethods((store) => {
    return {
      increment(deviationValue: DeviationValue) {
        patchState(store, { counter: store.counter() + deviationValue });
      },
      decrement(deviationValue: DeviationValue) {
        patchState(store, { counter: store.counter() - deviationValue });
      },
    };
  }),
  withComputed((store) => {
    return {
      counterAtZero: computed(() => store.counter() === 0),
      counterDivisibleBy3: computed(() => store.counter() % 3 === 0),
      counterDivisibleBy5: computed(() => store.counter() % 5 === 0),
    };
  }),
);
