import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  activeUser = {
    name: "John Smith",
    email: "jsmith@me.com",
    phone: 3428970856
  };
  income = [
    { name: "Charter Tech Support", id: "CRTKCG", amount: 1756.04, autopay: false },
    { name: "Web Designer", id: "WD73R", amount: 465.87, autopay: false }
  ];
  bills = [
    { name: "NetFlix", id: "NETF865", duedate: "3/28/2020", amount: 10.99, autopay: true },
    { name: "Hulu", id: "HU56", duedate: "3/28/2020", amount: 7.99, autopay: true },
    { name: "Electric", id: "ELE867", duedate: "3/28/2020", amount: 103.25, autopay: true },
    { name: "Rent", id: "APRT124", duedate: "3/28/2020", amount: 1945.00, autopay: true },
    { name: "Gas", id: "GAS90", duedate: "3/28/2020", amount: 23.34, autopay: true },
    { name: "Water", id: "WT56", duedate: "3/28/2020", amount: 22.56, autopay: false },
    { name: "Sallie Mae (Student Loan)", id: "LODWS", duedate: "3/28/2020", amount: 264.23, autopay: true },
    { name: "Sewer", id: "SERHT5", duedate: "3/28/2020", amount: 42.00, autopay: true },
    { name: "Internet (Charter)", id: "INET43", duedate: "3/28/2020", amount: 78.00, autopay: true },
    { name: "Cell Phone (AT&T)", id: "CPATG6", duedate: "3/28/2020", amount: 143.54, autopay: false },
    { name: "Cable (Charter)", id: "CBL226", duedate: "3/28/2020", amount: 44.26, autopay: false }
  ];
  upcomingBills = [
    { name: "NetFlix", id: "NETF865", duedate: "3/28/2020", amount: 10.99, autopay: true },
    { name: "Hulu", id: "HU56", duedate: "3/28/2020", amount: 7.99, autopay: true },
    { name: "Electric", id: "ELE867", duedate: "3/28/2020", amount: 103.25, autopay: true },
    { name: "Rent", id: "APRT124", duedate: "3/28/2020", amount: 1945.00, autopay: true },
    { name: "Gas", id: "GAS90", duedate: "3/28/2020", amount: 23.34, autopay: true },
  ];
  savings = [
    { name: "Christmas Fund", id: "CF845", amount: 2000.00 },
    { name: "Primary Savings", id: "01PS", amount: 22432.84 },
    { name: "Travel Fund", id: "TRAVEL", amount: 868.00 },
    { name: "Emergency", id: "EMER911", amount: 4500.00 }
  ]
  creditCards = [
    { name: "Travel Rewards", id: "REWARD39", amount: 0.00 },
    { name: "Master Credit", id: "MASTERC", amount: 500.00 }
  ]
  misc = [
    { name: "401K", id: "93G6", amount: 23000.00 },
    { name: "Stock", id: "NJS3DF", amount: 6000.00 },
    { name: "CDs", id: "BSWW612", amount: 800.00 }
  ]

  cards = [
    {
      name: "Income",
      total: 13452.54,
      color: "green"
    },
    {
      name: "Bills",
      total: 13452.54,
      color: "red"
    },
    {
      name: "Credit Cards",
      total: 13452.54,
      color: "blue"
    },
    {
      name: "Savings",
      total: 13452.54,
      color: "indigo"
    },
    {
      name: "Misc",
      total: 13452.54,
      color: "yellow"
    },
  ];

  constructor() {
    //console.log('Hello DataServiceProvider Provider');
  }

  getUser(){
    return this.activeUser;
  }

  getIncome() {
    return this.income;
  }
  getBills() {
    return this.bills;
  }
  getUpcomingBills(){
    return this.upcomingBills;
  }
  getSavings() {
    return this.savings;
  }
  getCreditCards() {
    return this.creditCards;
  }
  getMisc() {
    return this.misc;
  }
  getCards() {
    return this.cards;
  }

  payBill(index) {
    this.upcomingBills.splice(index, 1);
  }

}
