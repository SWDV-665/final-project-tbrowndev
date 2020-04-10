import { Injectable } from '@angular/core';
import { ModalController, ActionSheetController } from 'ionic-angular';
import { RecordServiceProvider } from '../record-service/record-service'
import { AlertController } from 'ionic-angular';
import { DataServiceProvider } from '../data-service/data-service'
import { Kompass } from '../data-service/kompass-objects'

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

  presentBudgetManualAddPrompt(isExpense) {
    const prompt = this.alertCtrl.create({
      title: 'Add Manual Item',
      message: "Enter Manual Item Details",
      inputs: [
        {
          name: 'reference',
          placeholder: 'Name',
          type: 'text'
        },
        {
          name: 'amount',
          placeholder: 'Amount',
          type: 'number',
          min: 0,
          max: 999999
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            //do nothing
          }
        },
        {
          text: 'Add',
          handler: data => {
            var item = new Kompass.ManualItem(data.reference, isExpense, data.amount);
            this.dataService.manualAddNewItem(item);
          }
        }
      ]
    });
    prompt.present();
  }

  presentManualTypeSheet() {
    //return the type the manual item is
    const actionsheet = this.actionCtrl.create({
      title: "Manual Item Type",
      buttons: [
        {
          text: 'Income',
          handler: () => {
            this.presentBudgetManualAddPrompt(false);
          }
        }, {
          text: 'Expense',
          handler: () => {
            this.presentBudgetManualAddPrompt(true);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //do nothing
          }
        }
      ]
    });
    actionsheet.present();
  }

  presentCreateSheet() {
    const actionSheet = this.actionCtrl.create({
      title: 'Create',
      buttons: [
        {
          text: 'Income',
          handler: () => {
            this.recordService.presentRecordModal();
          }
        }, {
          text: 'Bill',
          handler: () => {
            this.recordService.presentRecordModal();
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
