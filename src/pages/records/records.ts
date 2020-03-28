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
    {name: "Charter Tech Support", id: "CRTKCG"},
    {name: "Web Designer", id: "WD73R"}
  ]
  bills = [
    {name: "NetFlix", id: "NETF865"},
    {name: "Hulu", id: "HU56"},
    {name: "Electric", id: "ELE867"},
    {name: "Rent", id: "APRT124"},
    {name: "Gas", id: "GAS90"},
    {name: "Water", id: "WT56"},
    {name: "Sallie Mae (Student Loan)", id: "LODWS"},
    {name: "Sewer", id: "SERHT5"},
    {name: "Internet (Charter)", id: "INET43"},
    {name: "Cell Phone (AT&T)", id: "CPATG6"},
    {name: "Cable (Charter)", id: "CBL226"}
  ]
  savings = [
    {name: "Christmas Fund", id: "CF845"},
    {name: "Primary Savings", id: "01PS"},
    {name: "Travel Fund", id: "TRAVEL"},
    {name: "Emergency", id: "EMER911"}
  ]
  creditCards = [
    {name: "Travel Rewards", id: "REWARD39"},
    {name: "Master Credit", id: "MASTERC"}
  ]
  misc = [
    {name: "401K", id: "93G6"},
    {name: "Stock", id: "NJS3DF"},
    {name: "CDs", id: "BSWW612"}
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
