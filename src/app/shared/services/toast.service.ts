import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {

    constructor(private toastController: ToastController) { }

    async presentToast(message: string, color: string) {
        const toast = await this.toastController.create({
          color: color,
          message: message,
          duration: 3500,
        });
        toast.present();
      }
}