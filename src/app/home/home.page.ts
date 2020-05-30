import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IState } from '../shared/models/state';
import { ICountry } from '../shared/models/country';
import { CovidService } from '../shared/services/covid.service';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  countries: Array<ICountry>;
  states: Array<IState>;

  typeOfView: "country" | "state" = "country";

  constructor(private covidService: CovidService, private toastService: ToastService, private authService: AuthService) { }

  ngOnInit() {
    // this.loadMockCountries();
    this.getCountries();
  }

  /**Get all countries */
  getCountries() {
    this.covidService.getCountries().subscribe(
      (result) => {
        this.countries = result;
        let brazil = this.countries.find(x => x.country.toLowerCase().trim() == "brazil");
        let index = this.countries.findIndex(x => x.country.toLowerCase().trim() == "brazil");
        this.countries.splice(index); 
        this.countries.unshift(brazil);
      },
      (error) => {
        this.toastService.presentToast("Error to load data", "danger");
      }
    );
  }

  /**Get States from Brazil */
  getStates() {
    this.covidService.getStates().subscribe(
      (result) => {
        this.states = result;
      },
      (error) => {
        this.toastService.presentToast("Error to load data", "danger");
      }
    );
  }

  /**Trigger when select a country */
  onSelectCountry(country: ICountry) {
    if (country.country.toLowerCase().trim() == "brazil") {
      // if (country.country == "Lithuania") {
      // this.loadMockStates();
      this.getStates();
      this.typeOfView = "state";
    }
  }

  /**Sign Out */
  signOut() {
    this.authService.signOut();
  }

  loadMockCountries() {
    this.covidService.loadMockCountries().subscribe(
      (result) => {
        this.countries = result;
        let lithuania = this.countries.find(x => x.country.toLowerCase().trim() == "lithuania");
        let index = this.countries.findIndex(x => x.country.toLowerCase().trim() == "lithuania");
        this.countries.splice(index); 
        this.countries.unshift(lithuania);
      },
      (error) => {
        this.toastService.presentToast("Erro to load mock", "danger");
      }
    );
  }

  loadMockStates() {
    this.covidService.loadMockStates().subscribe(
      (result) => {
        this.states = result;
      },
      (error) => {
        this.toastService.presentToast("Erro to load mock", "danger");
      }
    );
  }
}
