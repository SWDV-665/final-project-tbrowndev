import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
export class RecordsPage {

  //Sets income as the selected section
  records: string = "income";

  income = [
    {name: "Income 1", id: "kjhet1"},
    {name: "Income 2", id: "kjhet1"}
  ]
  bills = [
    {name: "Bill 1", id: "kjhet1"},
    {name: "Bill 2", id: "kjhet1"},
    {name: "Bill 3", id: "kjhet1"},
    {name: "Bill 4", id: "kjhet1"},
    {name: "Bill 5", id: "kjhet1"},
    {name: "Bill 6", id: "kjhet1"},
    {name: "Bill 7", id: "kjhet1"},
    {name: "Bill 8", id: "kjhet1"},
    {name: "Bill 9", id: "kjhet1"},
    {name: "Bill 10", id: "kjhet1"},
    {name: "Bill 11", id: "kjhet1"}
  ]
  savings = [
    {name: "Saving Account 1", id: "kjhet1"},
    {name: "Saving Account 2", id: "kjhet1"},
    {name: "Saving Account 3", id: "kjhet1"},
    {name: "Saving Account 4", id: "kjhet1"}
  ]
  creditCards = [
    {name: "Credit Card 1", id: "kjhet1"},
    {name: "Credit Card 2", id: "kjhet1"}
  ]
  misc = [
    {name: "Misc. 1", id: "kjhet1"},
    {name: "Misc. 2", id: "kjhet1"},
    {name: "Misc. 3", id: "kjhet1"}
  ]
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    
  }

  RecordSelected(item){
    const toast = this.toastCtrl.create({
      message: item.name + " Selected",
      duration: 2500,
      //showCloseButton: true
    });
    toast.present();
  }

  viewRecord(item){
    this.navCtrl.push(ViewerPage, {record: item});
  }

}

@Component({
  templateUrl:"recordDetails.html"
})
export class ViewerPage{
  
  record;

  constructor(params: NavParams) {
    this.record = params.data.record
  }

}
