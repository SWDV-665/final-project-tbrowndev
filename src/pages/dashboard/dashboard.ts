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

  title = "Dashboard"
  upcomingTitle = "Upcoming Bills Due";

  constructor(public paymentService:PaymentServiceProvider, public recordService:RecordServiceProvider, public navCtrl: NavController, public toastCtrl:ToastController, public dataService: DataServiceProvider, public dialogService: DialogServiceProvider) {
    
  }

  loadCards(){
    return this.dataService.getCards();
  }
  
  loadBills(){
    return this.dataService.getBills();
  }

  markPaid(bill){
    this.paymentService.presentPaymentModal(bill);
  }

  viewItem(item){
    this.recordService.presentRecordModal(item)
  }

  create(){
    this.dialogService.presentCreateSheet();
  }
}