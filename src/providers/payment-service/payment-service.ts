import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/*
  Generated class for the PaymentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentServiceProvider {

  constructor(public modalCtrl: ModalController, public actionCtrl: ActionSheetController) {
    //console.log('Hello PaymentServiceProvider Provider');
  }

  presentPaymentModal(item) {
    let paymentModal = this.modalCtrl.create(PaymentModal, item);
    paymentModal.present();
  }

}

@Component({
  templateUrl: 'payment.html'
})
export class PaymentModal {
  currentDate: string = new Date().toISOString();
  record;
  partialPayment: boolean = false;
  payDate: String = new Date().toISOString(); 
  payAmount: Number;
  confnum: String;

  constructor(params: NavParams, public dataService: DataServiceProvider, public toastCtrl: ToastController, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    this.record = params.data;
  }

  paymentChange() {
    if (this.partialPayment) {
      this.partialPayment = false;
    }
    else {
      this.partialPayment = true;
    }
  }

  isPartialPayment() {
    return this.partialPayment;
  }

  //close payment modal
  cancel() {
    this.viewCtrl.dismiss();
  }

  markRecordPaid() {
    const loader = this.loadingCtrl.create({
      content: "Marking Payment...",
    });
    loader.present();
    this.dataService.createPayment(this.record, {
      occurenceDate: this.record.nextOccurenceDate,
      amount: this.record.amount,
      payDate: this.payDate,
      payAmount: this.partialPayment ? this.payAmount : this.record.amount,
      confnum: this.confnum
    });
    loader.dismiss();

    this.viewCtrl.dismiss();

    const toast = this.toastCtrl.create({
      message: this.record.name + " Marked as Paid",
      duration: 5000,
      showCloseButton: true
    });
    toast.present();
  }
}