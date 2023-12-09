import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationsComponent } from '../housing-locations/housing-locations.component';
import { HousingLocation, housingLocationList } from '../housing-locations';
console.log("Hello1");

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationsComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-locations
        *ngFor = "let housingLocation of housingLocationList"
        [housingLocation] = "housingLocation"
      ></app-housing-locations>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = housingLocationList;
  
  constructor() {
    console.log(this.housingLocationList) 
  }
}

  
