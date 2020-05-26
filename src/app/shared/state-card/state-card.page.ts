import { Component, OnInit } from '@angular/core';
import { IState } from '../models/state';
import { CovidService } from '../services/covid.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'state-card',
  templateUrl: './state-card.page.html',
  styleUrls: ['./state-card.page.scss'],
})
export class StateCardPage implements OnInit {

  states: Array<IState>;

  filteredStates: Array<IState>;

  search: string = '';

  constructor(private covidService: CovidService, private toastService: ToastService) { }

  ngOnInit() {
    // this.loadMock();
    this.get();
  }

  get() {
    this.covidService.get().subscribe(
      (result) => {
        this.states = result;
      },
      (error) => {
        this.toastService.presentToast("Erro ao carregar os dados", "danger");
      }
    );
  }

  loadMock() {
    this.covidService.loadMock().subscribe(
      (result) => {
        this.states = result;
      },
      (error) => {
        this.toastService.presentToast("Erro ao carregar o mock", "danger");
      }
    );
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
    this.filteredStates = [];
  }

}
