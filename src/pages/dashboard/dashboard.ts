import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service';
import { PaymentServiceProvider } from '../../providers/payment-service/payment-service';
import { RecordServiceProvider } from '../../providers/record-service/record-service';
import { Kompass } from '../../providers/data-service/kompass-objects';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public paymentService: PaymentServiceProvider, public recordService: RecordServiceProvider, public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider, public dialogService: DialogServiceProvider) {
  }

  //NEW CONCEPT SECTION TO REPLACE ABOVE - DONE

  /**
   * gathers all upcoming bills from data service
   */
  fetchUpcomingBills(){
    return this.dataService.fetchUpcomingBills();
  }

  /**
   * send bill to payment service modal
   * @param item 'the item that will be paid'
   * 
   */
  onMarkPaid(item: Kompass.Record){
    //this.paymentService.presentPaymentModal(item);
    this.dialogService.featureNotAvaliableAlert();
  }

  /**
   * send bill to record service modal
   * @param item 'the item that user has selected to view'
   */
  onItemClick(item: Kompass.Record){
    //this.recordService.presentRecordModal(item);
    this.dialogService.featureNotAvaliableAlert();
  }

  /**
   * starts command for creation of new record item
   */
  onCreateNew(){
    //this.dialogService.presentCreateSheet();
    this.dialogService.featureNotAvaliableAlert();
  }

}