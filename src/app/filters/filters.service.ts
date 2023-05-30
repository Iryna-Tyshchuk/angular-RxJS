import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class FiltersService {
  textFilter$ = new BehaviorSubject('');
  sortDir$ = new BehaviorSubject('asc');
  currentPage$ = new BehaviorSubject(0);

  filters$ = combineLatest([
    this.textFilter$.pipe(
      distinctUntilChanged(),
      tap(() => this.currentPage$.next(0))
    ),
    this.sortDir$.pipe(
      distinctUntilChanged(),
      tap(() => this.currentPage$.next(0))
    ),
    this.currentPage$,
  ]).pipe(debounceTime(500));

  changeText(text) {
    this.textFilter$.next(text);
  }

  changeSort(direction: string) {
    this.sortDir$.next(direction);
  }

  changePaginationDirection(direction: string) {
    if (direction === 'left' && !this.currentPage$.value) return;

    this.currentPage$.next(
      direction === 'left'
        ? this.currentPage$.value - 1
        : this.currentPage$.value + 1
    );
  }

  constructor() {}
}
