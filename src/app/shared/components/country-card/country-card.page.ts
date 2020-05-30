import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICountry } from '../../models/country';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.page.html',
  styleUrls: ['./country-card.page.scss'],
})
export class CountryCardPage implements OnInit {

  @Input() countries: Array<ICountry>;
  @Output() onSelectCountry = new EventEmitter<ICountry>();
  filteredCountries: Array<ICountry>;

  search: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    let search = this.search.toLowerCase().trim();
    this.filteredCountries = this.countries.filter(x => {
      if (x.country.toLowerCase().trim().startsWith(search))
        return x;
    });
  }

  resetSearch() {
    this.search = '';
    this.filteredCountries = new Array<ICountry>();
  }

  selectCountry(country: ICountry) {
    this.onSelectCountry.emit(country);
  }

}
