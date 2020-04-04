import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
export class RecordsPage {

  //Sets income as the selected section
  records: string = "income";

  constructor(public navCtrl: NavController, public dialogService: InputDialogServiceProvider, public toastCtrl: ToastController, public dataService: DataServiceProvider) {

  }

  loadBills(){
    return this.dataService.getBills();
  }
  loadIncome(){
    return this.dataService.getIncome();
  }
  loadCreditCards(){
    return this.dataService.getCreditCards();
  }
  loadSavings(){
    return this.dataService.getSavings();
  }
  loadMisc(){
    return this.dataService.getMisc();
  }

  RecordSelected(item) {
    const toast = this.toastCtrl.create({
      message: item.name + " Selected",
      duration: 2500,
      //showCloseButton: true
    });
    toast.present();
  }

  viewRecord(item){
    this.dialogService.presentRecordModal(item);
  }

  create(){
    this.dialogService.presentCreateSheet();
  }

}
