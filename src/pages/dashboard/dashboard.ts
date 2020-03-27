import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  title = "Upcoming Bills";
  bills = [
    {
      name:"Bill 1",
      description: "decription",
      duedate: "3/28/2020",
      amountdue:123.45
    },
    {
      name:"Bill 2",
      description: "decription",
      duedate: "3/28/2020",
      amountdue:123.45
    },
    {
      name:"Bill 3",
      description: "decription",
      duedate: "3/28/2020",
      amountdue:123.45
    },
    {
      name:"Bill 4",
      description: "decription",
      duedate: "3/28/2020",
      amountdue:123.45
    },
    {
      name:"Bill 5",
      description: "decription",
      duedate: "3/28/2020",
      amountdue:123.45
    },
    {
      name:"Bill 6",
      description: "decription",
      duedate: "3/28/2020",
      amountdue:123.45
    }
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
  ]

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