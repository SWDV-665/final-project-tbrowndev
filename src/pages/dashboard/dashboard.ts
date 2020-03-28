import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  title = "Dashboard"
  upcomingTitle = "Upcoming Bills Due";

  bills = [
    {name: "NetFlix", id: "NETF865", duedate: "3/28/2020", amountdue: 10.99},
    {name: "Hulu", id: "HU56", duedate: "3/28/2020", amountdue: 7.99},
    {name: "Electric", id: "ELE867", duedate: "3/28/2020", amountdue: 103.25},
    {name: "Rent", id: "APRT124", duedate: "3/28/2020", amountdue: 945.00},
    {name: "Gas", id: "GAS90", duedate: "3/28/2020", amountdue: 23.34},
    {name: "Water", id: "WT56", duedate: "3/28/2020", amountdue: 22.56},
    {name: "Sallie Mae (Student Loan)", id: "LODWS", duedate: "3/28/2020", amountdue: 264.23},
    {name: "Sewer", id: "SERHT5", duedate: "3/28/2020", amountdue: 42.00},
    {name: "Internet (Charter)", id: "INET43", duedate: "3/28/2020", amountdue: 78.00},
    {name: "Cell Phone (AT&T)", id: "CPATG6", duedate: "3/28/2020", amountdue: 143.54},
    {name: "Cable (Charter)", id: "CBL226", duedate: "3/28/2020", amountdue: 44.26}
  ];

  cards = [
    {
      name:"Income",
      total: 13452.54, 
      color: "green"
    },
    {
      name:"Bills",
      total: 13452.54, 
      color: "red"
    },
    {
      name:"Credit Cards",
      total: 13452.54, 
      color: "blue"
    },
    {
      name:"Savings",
      total: 13452.54, 
      color: "indigo"
    },
    {
      name:"Misc",
      total: 13452.54, 
      color: "yellow"
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl:ToastController) {
    
  }

  markPaid(bill, index){
    //console.log("Item Removed: ", bill)
    //this.bills.splice(index, 1);
    const toast = this.toastCtrl.create({
      message: bill.name + " Marked as Paid",
      duration: 5000,
      showCloseButton: true
    });
    toast.present();
  }

}