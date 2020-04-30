import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service';
import { PaymentServiceProvider } from '../../providers/payment-service/payment-service';
import { RecordServiceProvider } from '../../providers/record-service/record-service';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  billDueTitle = "Bills This Month"

  billsDue = [];
  errorMessage: string;

  constructor(public paymentService: PaymentServiceProvider, public recordService: RecordServiceProvider, public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider, public dialogService: DialogServiceProvider) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadBills();
    });
  }

  ionViewDidLoad() {
    this.loadBills();
  }

  loadBills() {
    this.dataService.getRecords().subscribe(
      allRecords => this.billsDue = allRecords.filter(
        //@ts-ignore
        record => record.kind === 1  //filters data for only bills 
          //@ts-ignore
          && new Date(record.nextOccurenceDate).getUTCMonth() === new Date().getUTCMonth()
          //@ts-ignore
          && record.occurenceLevel != 0 //filters for bills due in the current month
          //@ts-ignore
          || (record.kind === 1 && new Date(record.nextOccurenceDate).getUTCMonth() === new Date().getUTCMonth() && record.occurenceLevel === 0 && record.payments.length === 0)
      ),
      error => this.errorMessage = <any>error
    );
  }

  onRecordClick(record) {
    this.recordService.presentRecordModal(record);
  }

  /**
   * send bill to payment service modal
   * @param record 'the item that will be paid'
   * 
   */
  onMarkRecordPaid(record) {
    this.paymentService.presentPaymentModal(record);
  }

  /**
   * starts command for creation of new record
   */
  onCreateNew() {
    //this.dialogService.presentCreateSheet();
    this.dialogService.presentCreateSheet();
  }

}