import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation, housingLocationList } from '../housing-locations';

@Component({
  selector: 'app-housing-locations',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </section>
  `,
  styleUrls: ['./housing-locations.component.css']
  }
)
export class HousingLocationsComponent {
  @Input() housingLocation!: HousingLocation;
  constructor() {
    console.log(this.housingLocation)
  }
}
