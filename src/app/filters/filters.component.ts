import { Component } from '@angular/core';
import { FiltersService } from './filters.service';

@Component({
  selector: 'my-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  constructor(private filtersService: FiltersService) {}

  filters$ = this.filtersService.filters$;

  changeText(event) {
    this.filtersService.changeText(event.target.value);
  }

  changeSort(direction: string) {
    this.filtersService.changeSort(direction);
  }

  changePagination(pageDirection) {
    this.filtersService.changePaginationDirection(pageDirection);
  }
}
