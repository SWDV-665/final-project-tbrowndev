import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  title = "Dashboard"
  upcomingTitle = "Upcoming Bills Due";

  constructor(public navCtrl: NavController, public toastCtrl:ToastController, public dataService: DataServiceProvider) {
    
  }

  loadCards(){
    this.dataService.getCards();
  }
  loadBills(){
    this.dataService.getBills();
  }

  markPaid(bill, index){
    const toast = this.toastCtrl.create({
      message: bill.name + " Marked as Paid",
      duration: 5000,
      showCloseButton: true
    });
    toast.present();
  }
}