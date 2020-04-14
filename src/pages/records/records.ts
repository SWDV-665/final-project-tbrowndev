import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { RecordServiceProvider } from '../../providers/record-service/record-service';
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service';
import { Kompass } from '../../providers/data-service/kompass-objects'

@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
export class RecordsPage {

  //Sets income as the selected section
  records: string = "income";

  constructor(public recordService: RecordServiceProvider, public navCtrl: NavController, public dialogService: DialogServiceProvider, public toastCtrl: ToastController, public dataService: DataServiceProvider) {

  }

  //NEW CONCEPT TO REPLACE ABOVE - DONE
  fetchBills(){
    return this.dataService.fetchBills();
  }
  fetchBillTotal(){
    return this.dataService.fetchBillTotal();
  }
  fetchIncome(){
    return this.dataService.fetchIncome();
  }
  fetchIncomeTotal(){
    return this.dataService.fetchIncomeTotal();
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
    //this.dialogService.presentCreateSheet()
    this.dialogService.featureNotAvaliableAlert();
  }

}
