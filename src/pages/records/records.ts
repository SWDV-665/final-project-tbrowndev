import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { RecordServiceProvider } from '../../providers/record-service/record-service';
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service';

@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
export class RecordsPage {

  //Sets income as the selected section
  records: string = "income";

  constructor(public recordService: RecordServiceProvider, public navCtrl: NavController, public dialogService: DialogServiceProvider, public toastCtrl: ToastController, public dataService: DataServiceProvider) {

  }

  loadBills(){
    return this.dataService.getBills();
  }
  loadIncome(){
    return this.dataService.getIncome();
  }

  getPayTotal(){
    return this.dataService.getPaystubTotal();
  }

  getBillTotal(){
    return this.dataService.getBillTotal();
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
    this.recordService.presentRecordModal(item);
  }

  create(){
    this.dialogService.presentCreateSheet();
  }

}
