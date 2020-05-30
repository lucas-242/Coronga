import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from'@angular/common/http';

import { CovidService } from './services/covid.service';
import { StateCardPage } from './components/state-card/state-card.page';
import { ToastService } from './services/toast.service';
import { CountryCardPage } from './components/country-card/country-card.page';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule
    ],
    providers: [CovidService, ToastService],
    declarations: [StateCardPage, CountryCardPage],
    exports: [StateCardPage, CountryCardPage],
})
export class SharedModule {}