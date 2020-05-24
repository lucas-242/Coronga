import { Component, OnInit } from '@angular/core';
import { IState } from '../models/state';
import { CovidService } from '../services/covid.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'state-card',
  templateUrl: './state-card.page.html',
  styleUrls: ['./state-card.page.scss'],
})
export class StateCardPage implements OnInit {

  states: Array<IState>;

  filteredStates: Array<IState>;

  search: string = '';

  constructor(private covidService: CovidService, private toastController: ToastController) { }

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
        this.presentToast("Erro ao carregar os dados", "danger");
      }
    );
  }

  loadMock() {
    this.covidService.loadMock().subscribe(
      (result) => {
        this.states = result;
      },
      (error) => {
        this.presentToast("Erro ao carregar o mock", "danger");
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

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      color: color,
      message: message,
      duration: 3500,
    });
    toast.present();
  }

}
