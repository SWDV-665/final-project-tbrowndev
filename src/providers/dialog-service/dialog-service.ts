import { Injectable } from '@angular/core';
import { ModalController, ActionSheetController } from 'ionic-angular';
import { RecordServiceProvider } from '../record-service/record-service'
import { AlertController } from 'ionic-angular';
import { DataServiceProvider } from '../data-service/data-service'

/*
  Generated class for the DialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DialogServiceProvider {

  constructor(public dataService: DataServiceProvider, public recordService: RecordServiceProvider, public modalCtrl: ModalController, public actionCtrl: ActionSheetController, public alertCtrl: AlertController) {
    //console.log('Hello DialogServiceProvider Provider');
  }

  featureNotAvaliableAlert(){
    const alert = this.alertCtrl.create({
      title: 'Feature Unavailable',
      message: 'Sorry, feature is not available!',
      buttons: ['OK']
    })
    alert.present();
  }

  presentCreateSheet() {
    const actionSheet = this.actionCtrl.create({
      title: 'Create',
      buttons: [
        {
          text: 'Income',
          handler: () => {
            this.recordService.presentNewRecordModal(0);
          }
        }, {
          text: 'Bill',
          handler: () => {
            this.recordService.presentNewRecordModal(1);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
