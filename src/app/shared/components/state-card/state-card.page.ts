import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IState } from '../../models/state';
import { ICountry } from '../../models/country';

@Component({
  selector: 'state-card',
  templateUrl: './state-card.page.html',
  styleUrls: ['./state-card.page.scss'],
})
export class StateCardPage implements OnInit {

  @Input() countries: Array<ICountry>;
  @Input() states: Array<IState>;
  filteredStates: Array<IState>;

  search: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    let search = this.search.toLowerCase().trim();
    this.filteredStates = this.states.filter(x => {
      if (x.state.toLowerCase().trim().startsWith(search) ||
        x.uf.trim().startsWith(search))
        return x;
    });
  }

  resetSearch() {
    this.search = '';
    this.filteredStates = new Array<IState>();
  }

}
