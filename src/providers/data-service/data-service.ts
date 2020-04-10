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

  manualItems = [];
  budgetItems = [];

  constructor() {
  }

  getTotalBudget(){
    var total = 0.00;
    this.budgetItems.forEach(item =>{
      if(item.constructor.name == 'Paystub'){
        total += item.pay;
      }
      else if (item.constructor.name == 'Bill'){
        total -= item.amount;
      }
      else
      {
        if (item.isExpense){
          total -= item.amount;
        }
        else
        {
          total += item.amount;
        }
      }
    })
    return total
  }

  manualAddToBudget(item){
    this.manualItems.splice(this.manualItems.indexOf(item), 1);
    this.budgetItems.push(item);
  }

  manualAddNewItem(item){
    this.manualItems.push(item);
  }

  incomeAddToBudget(item){
    this.paystubs.splice(this.paystubs.indexOf(item), 1)
    this.budgetItems.push(item);
  }

  billAddToBudget(item){
    this.bills.splice(this.bills.indexOf(item), 1)
    this.budgetItems.push(item);
  }

  removeItemFromBudget(item){
    this.budgetItems.splice(this.budgetItems.indexOf(item), 1);
    if (item.constructor.name == 'Paystub') {
      this.paystubs.push(item);
    }
    else if (item.constructor.name == 'Bill') {
      this.bills.push(item);
    }
    else{
      this.manualItems.push(item);
    }
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

  getBudgetItems(){
    return this.budgetItems;
  }

  getManualItems(){
    return this.manualItems;
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
