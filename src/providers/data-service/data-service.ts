import { Injectable } from '@angular/core';
import { Kompass } from './kompass-objects';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  activeUser = new Kompass.ActiveUser("John Smith", "Web Designer", "jdesign@smithdesigns.com", 2317683325)
  
  paystubs = [
    new Kompass.Paystub("Charter Tech Support", "2020-04-22", 2, true, 1632.85),
    new Kompass.Paystub("Web Designer", "2020-04-29", 4, false, 2000.00)
  ];

  bills = [
    new Kompass.Bill("Netflix", "2020-03-28", 4, true, 15.99),
    new Kompass.Bill("Hulu", "2020-03-28", 4, true, 7.99),
    new Kompass.Bill("Electric", "2020-03-28", 4, false, 86.45),
    new Kompass.Bill("Rent", "2020-03-28", 4, false, 1240.00),
    new Kompass.Bill("Gas", "2020-03-28", 4, false, 23.65),
    new Kompass.Bill("Water", "2020-03-28", 4, false, 30.00),
    new Kompass.Bill("Sallie Mae (Student Loan)", "2020-03-28", 4, true, 259.98),
    new Kompass.Bill("Sewer", "2020-03-28", 4, false, 42.00),
    new Kompass.Bill("Internet", "2020-03-28", 4, true, 76.34),
    new Kompass.Bill("Cell Phone", "2020-03-28", 4, true, 122.42),
    new Kompass.Bill("Cable", "2020-03-28", 4, true, 43.67)
  ];

  constructor() {
    //console.log('Hello DataServiceProvider Provider');
  }

  getUser() {
    return this.activeUser;
  }

  getIncome() {
    return this.paystubs;
  }
  getBills() {
    return this.bills;
  }

  payBill(item) {
    this.bills.splice(this.bills.indexOf(item), 1)
  }

  updateItem(item) {
    //this.items[this.items.indexOf(item)] = item;
  }

  getPaystubTotal(){
    var total = 0.00;
    this.paystubs.forEach(stub =>
      {
        total += stub.pay;
      })

    return total;
  }

  getBillTotal(){
    var total = 0.00;
    this.bills.forEach(bill =>
      {
        total += bill.amount;
      })

    return total;
  }

}
