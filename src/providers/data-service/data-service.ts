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
  //types - 1:Income, 2:Bills, 3:Savings, 4:Credit Cards, 5:Misc
  items = [
    { name: "Charter Tech Support", id: "CRTKCG", amount: 1756.04, autopay: false, type: 1 },
    { name: "Web Designer", id: "WD73R", amount: 465.87, autopay: false, type: 1 },
    { name: "NetFlix", id: "NETF865", duedate: "2020-03-28", amount: 10.99, autopay: false, type: 2 },
    { name: "Hulu", id: "HU56", duedate: "2020-03-28", amount: 7.99, autopay: true, type: 2 },
    { name: "Electric", id: "ELE867", duedate: "2020-03-28", amount: 103.25, autopay: true, type: 2 },
    { name: "Rent", id: "APRT124", duedate: "2020-03-28", amount: 1945.00, autopay: true, type: 2 },
    { name: "Gas", id: "GAS90", duedate: "2020-03-28", amount: 23.34, autopay: true, type: 2 },
    { name: "Water", id: "WT56", duedate: "2020-03-28", amount: 22.56, autopay: false, type: 2 },
    { name: "Sallie Mae (Student Loan)", id: "LODWS", duedate: "2020-03-28", amount: 264.23, autopay: true, type: 2 },
    { name: "Sewer", id: "SERHT5", duedate: "2020-03-28", amount: 42.00, autopay: true, type: 2 },
    { name: "Internet (Charter)", id: "INET43", duedate: "2020-03-28", amount: 78.00, autopay: true, type: 2 },
    { name: "Cell Phone (AT&T)", id: "CPATG6", duedate: "2020-03-28", amount: 143.54, autopay: false, type: 2 },
    { name: "Cable (Charter)", id: "CBL226", duedate: "2020-03-28", amount: 44.26, autopay: false, type: 2 },
    { name: "Christmas Fund", id: "CF845", amount: 2000.00, type: 3 },
    { name: "Primary Savings", id: "01PS", amount: 22432.84, type: 3 },
    { name: "Travel Fund", id: "TRAVEL", amount: 868.00, type: 3 },
    { name: "Emergency", id: "EMER911", amount: 4500.00, type: 3 },
    { name: "Travel Rewards", id: "REWARD39", amount: 0.00, duedate: "2020-03-28", type: 4 },
    { name: "Master Credit", id: "MASTERC", amount: 500.00, duedate: "2020-03-28", type: 4 },
    { name: "401K", id: "93G6", amount: 23000.00, type: 5 },
    { name: "Stock", id: "NJS3DF", amount: 6000.00, type: 5 },
    { name: "CDs", id: "BSWW612", amount: 800.00, type: 5 }
  ];

  //name, total, color
  cards = [
    { name: "Income", total: 0.00, color: "green" },
    { name: "Bills", total: 0.00, color: "red" },
    { name: "Savings", total: 0.00, color: "blue" },
    { name: "Credit Cards", total: 0.00, color: "orange" },
    { name: "Misc", total: 0.00, color: "light" },
  ];

  constructor() {
    //console.log('Hello DataServiceProvider Provider');
    this.loadCards();
  }

  loadCards() {

    this.items.forEach(item => {
      switch(item.type){
        case 1:
          this.updateCard("Income", item.amount);
          break;
        case 2:
          this.updateCard("Bills", item.amount);
          break;
        case 3:
          this.updateCard("Savings", item.amount);
          break;
        case 4:
          this.updateCard("Credit Cards", item.amount);
          break;
        case 5:
          this.updateCard("Misc", item.amount);
          break;
      }
    });
  }
  updateCard(type, amount){
    this.cards.forEach( card =>{
      if (card.name == type){
        card.total = card.total + amount;
      }
    });
  }

  getUser() {
    return this.activeUser;
  }

  getIncome() {
    const income = [];
    this.items.forEach( item =>{
      if (item.type === 1){
        income.push(item);
      };
    });
    return income;
  }
  getBills() {
    const bills = [];
    this.items.forEach( item =>{
      if (item.type === 2){
        bills.push(item);
      };
    });
    return bills;
  }
  getUpcomingBills() {
    //apply logic to check for bills that are due in the next 14 days.  
    const bills = [];
    this.items.forEach( item =>{
      if (item.type === 2){
        bills.push(item);
      };
    });
    return bills;
  }
  getSavings() {
    const savings = [];
    this.items.forEach( item =>{
      if (item.type === 3){
        savings.push(item);
      };
    });
    return savings;
  }
  getCreditCards() {
    const creditCards = [];
    this.items.forEach( item =>{
      if (item.type === 4){
        creditCards.push(item);
      };
    });
    return creditCards;
  }
  getMisc() {
    const misc = [];
    this.items.forEach( item =>{
      if (item.type === 5){
        misc.push(item);
      };
    });
    return misc;
  }
  getCards() {
    return this.cards;
  }

  payBill(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  updateItem(item) {
    this.items[this.items.indexOf(item)] = item;
  }

}
