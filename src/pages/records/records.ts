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
    {name: "Charter Tech Support", id: "CRTKCG", amount:1756.04, autopay:false},
    {name: "Web Designer", id: "WD73R", amount:465.87, autopay:false}
  ]
  bills = [
    {name: "NetFlix", id: "NETF865", duedate: "3/28/2020", amount: 10.99, autopay:true},
    {name: "Hulu", id: "HU56", duedate: "3/28/2020", amount: 7.99, autopay:true},
    {name: "Electric", id: "ELE867", duedate: "3/28/2020", amount: 103.25, autopay:true},
    {name: "Rent", id: "APRT124", duedate: "3/28/2020", amount: 1945.00, autopay:true},
    {name: "Gas", id: "GAS90", duedate: "3/28/2020", amount: 23.34, autopay:true},
    {name: "Water", id: "WT56", duedate: "3/28/2020", amount: 22.56, autopay:false},
    {name: "Sallie Mae (Student Loan)", id: "LODWS", duedate: "3/28/2020", amount: 264.23, autopay:true},
    {name: "Sewer", id: "SERHT5", duedate: "3/28/2020", amount: 42.00, autopay:true},
    {name: "Internet (Charter)", id: "INET43", duedate: "3/28/2020", amount: 78.00, autopay:true},
    {name: "Cell Phone (AT&T)", id: "CPATG6", duedate: "3/28/2020", amount: 143.54, autopay:false},
    {name: "Cable (Charter)", id: "CBL226", duedate: "3/28/2020", amount: 44.26, autopay:false}
  ];
  savings = [
    {name: "Christmas Fund", id: "CF845", amount:2000.00},
    {name: "Primary Savings", id: "01PS", amount:22432.84},
    {name: "Travel Fund", id: "TRAVEL", amount:868.00},
    {name: "Emergency", id: "EMER911", amount:4500.00}
  ]
  creditCards = [
    {name: "Travel Rewards", id: "REWARD39", amount:0.00},
    {name: "Master Credit", id: "MASTERC", amount:500.00}
  ]
  misc = [
    {name: "401K", id: "93G6", amount:23000.00},
    {name: "Stock", id: "NJS3DF", amount:6000.00},
    {name: "CDs", id: "BSWW612", amount:800.00}
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
