import { Injectable } from '@angular/core';
import { ModalController, ActionSheetController} from 'ionic-angular';
import { RecordServiceProvider } from '../record-service/record-service'

/*
  Generated class for the DialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DialogServiceProvider {

  constructor(public recordService: RecordServiceProvider, public modalCtrl: ModalController, public actionCtrl: ActionSheetController) {
    //console.log('Hello DialogServiceProvider Provider');
  }

  presentCreateSheet(){
    const actionSheet = this.actionCtrl.create({
      title: 'Create',
      buttons: [
        {
          text: 'Income',
          handler: () => {
            this.recordService.presentRecordModal();
          }
        },{
          text: 'Bill',
          handler: () => {
            this.recordService.presentRecordModal();
          }
        },{
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
