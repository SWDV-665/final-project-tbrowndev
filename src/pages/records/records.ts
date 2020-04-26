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
  income = [];
  bills = [];
  errorMessage: any;

  constructor(public recordService: RecordServiceProvider, public navCtrl: NavController, public dialogService: DialogServiceProvider, public toastCtrl: ToastController, public dataService: DataServiceProvider) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadRecords();
    });
  }

  ionViewDidLoad() {
    this.loadRecords();
  }

  loadRecords() {
    this.dataService.getRecords().subscribe(
      allRecords => this.income = allRecords.filter(record => record.kind === 0),
      error => this.errorMessage = <any>error
    );
    this.dataService.getRecords().subscribe(
      allRecords => this.bills = allRecords.filter(record => record.kind === 1),
      error => this.errorMessage = <any>error
    );
  }

  calcBillTotal() {
    var total = 0.00;
    this.bills.forEach(bill => {
      total = total + parseFloat(bill.amount);
    })
    return total;
  }
  calcIncomeTotal() {
    var total = 0.00;
    this.income.forEach(income => {
      total = total + parseFloat(income.amount);
    })
    return total;
  }

  /**
   * send bill to record service modal
   * @param item 'the item that user has selected to view'
   */
  onItemClick(record) {
    this.recordService.presentRecordModal(record);
  }

  /**
   * starts command for creation of new record item
   */
  onCreateNew() {
    this.dialogService.presentCreateSheet()
  }

}
