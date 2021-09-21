import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import ErrorData from 'src/MLC/types/error-data';
@Injectable({
	providedIn: 'root'
})
export default class DialogService {
  constructor(public alertController: AlertController) { }
	 error(error: ErrorData) {
		const formattedDetails = error.details && "<pre>" + JSON.stringify(error.details, undefined, 1) + "</pre>";
		return new Promise(resolve =>
			// setTimeout is necessary due to a bug in Angular itself. See
			// https://github.com/angular/angular/issues/15634
			// https://github.com/ng-bootstrap/ng-bootstrap/issues/1384
			setTimeout(async () => {
        await this.dialog(error, formattedDetails);
			}));
  }
  async dialog(error, formattedDetails) {
    const alert = await this.alertController.create({
      header: error.title || 'Error',
      subHeader: error.message,
      message: formattedDetails,
      buttons: ['ok']
    });
    await alert.present();
  }
}
