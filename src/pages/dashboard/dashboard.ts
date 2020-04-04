import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  title = "Dashboard"
  upcomingTitle = "Upcoming Bills Due";

  constructor(public navCtrl: NavController, public toastCtrl:ToastController, public dataService: DataServiceProvider, public dialogService: InputDialogServiceProvider) {
    
  }

  loadCards(){
    return this.dataService.getCards();
  }
  
  loadBills(){
    return this.dataService.getUpcomingBills();
  }

  markPaid(bill){
    this.dialogService.presentPaymentModal(bill);
  }

  viewItem(item){
    this.dialogService.presentRecordModal(item)
  }

  create(){
    this.dialogService.presentCreateSheet();
  }
}