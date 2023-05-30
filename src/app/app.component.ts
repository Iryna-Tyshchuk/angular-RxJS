import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { FiltersService } from './filters/filters.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private filtersService: FiltersService,
    private apiService: ApiService
  ) {}

  filters$ = this.filtersService.filters$;

  doctors$ = this.filters$.pipe(
    switchMap(([input, sort, pagination]) => {
      return this.apiService.httpGet$('/doctors', { input, sort, pagination });
    }),
    map((doctors) => {
      console.log(doctors);
      return doctors.map((doctor) => ({
        ...doctor,
        fullName: doctor.name + ' ' + doctor.surname,
      }));
    })
  );

  ngOnInit(): void {}
}
