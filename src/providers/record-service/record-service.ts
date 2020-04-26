import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController, ActionSheetController, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/*
  Generated class for the RecordServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecordServiceProvider {

  constructor(public modalCtrl: ModalController, public actionCtrl: ActionSheetController) {
    //console.log('Hello RecordServiceProvider Provider');
  }

  presentRecordModal(item) {
    let recordModal = this.modalCtrl.create(RecordModal, item);
    recordModal.present();
  }
  presentNewRecordModal(kind) {
    let newModal = this.modalCtrl.create(NewRecordModal, { kind });
    newModal.present();
  }
}

@Component({
  templateUrl: 'record.html'
})
export class RecordModal {
  record;
  payments = [];

  constructor(params: NavParams,public alertCtrl:AlertController, public dataService: DataServiceProvider, public toastCtrl: ToastController, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.record = params.data;
    this.record.payments.forEach( id => {
      this.dataService.getPayment(id).subscribe( payment => {
        this.payments.push(payment);
      });
    });
  }

  //close record modal
  close() {
    this.viewCtrl.dismiss();
  }

  updateRecord() {
    this.dataService.updateRecord(this.record);
    this.close();
  }
  deleteRecord(){
    this.dataService.deleteRecord(this.record);
    this.close();
  }

  presentDeletePrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Delete ' + this.record.name,
      message: "Are You Sure?",
      buttons: [
        {
          text: 'No',
          handler: data => {
            //do nothing
          }
        },
        {
          text: 'Yes',
          handler: data => {
            this.deleteRecord();
          }
        }
      ]
    });
    prompt.present();
  }
}

@Component({
  templateUrl: 'newRecord.html'
})
export class NewRecordModal {
  name: String;
  kind: Number;
  nextOccurenceDate: String;
  occurenceLevel: Number;
  isAuto: Boolean;
  amount: Number;
  description: String;

  constructor(params: NavParams, public dataService: DataServiceProvider, public toastCtrl: ToastController, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.kind = params.data.kind;
  }

  //close payment modal
  close() {
    this.viewCtrl.dismiss();
  }

  createRecord() {
    this.dataService.createRecord({
      name: this.name,
      kind: this.kind,
      nextOccurenceDate: this.nextOccurenceDate,
      occurenceLevel: this.occurenceLevel,
      isAuto: this.isAuto,
      amount: this.amount,
      description: this.description,
      inBudget: false
    });
    this.close();
  }
}
