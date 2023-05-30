import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TimerComponent, FiltersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
