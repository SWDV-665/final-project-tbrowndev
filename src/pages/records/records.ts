import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
export class RecordsPage {

  //Sets income as the selected section
  records: string = "income";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider) {

  }

  loadBills(){
    this.dataService.getBills();
  }
  loadIncome(){
    this.dataService.getIncome();
  }
  loadCreditCards(){
    this.dataService.getCreditCards();
  }
  loadSavings(){
    this.dataService.getSavings();
  }
  loadMisc(){
    this.dataService.getMisc();
  }

  RecordSelected(item) {
    const toast = this.toastCtrl.create({
      message: item.name + " Selected",
      duration: 2500,
      //showCloseButton: true
    });
    toast.present();
  }

  viewRecord(item) {
    this.navCtrl.push(ViewerPage, { record: item });
  }

}

@Component({
  templateUrl: "recordDetails.html"
})
export class ViewerPage {

  record;

  constructor(params: NavParams) {
    this.record = params.data.record
  }

}
