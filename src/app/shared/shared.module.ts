import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from'@angular/common/http';

import { CovidService } from './services/covid.service';
import { StateCardPage } from './state-card/state-card.page';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule
    ],
    providers: [CovidService],
    declarations: [StateCardPage],
    exports: [StateCardPage],
})
export class SharedModule {}