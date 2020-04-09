import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service'

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {

  budget = [];
  income = [];
  bills = [];

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider) {

    this.income = this.dataService.getIncome();
    this.bills = this.dataService.getBills();

  }

  totalBudget(){
    var total = 0.00;
    this.budget.forEach(item =>{
      if(item.constructor.name == 'Paystub'){
        total += item.pay;
      }
      else{
        total -= item.amount;
      }
    })
    return total
  }

  getBudgetItems(){
    return this.budget;
  }
  getIncomeItems(){
    return this.income;
  }
  getBillItems(){
    return this.bills;
  }

  onIncomeClick(item) {
    this.income.splice(this.income.indexOf(item), 1)
    this.budget.push(item);
  }

  onBillClick(item) {
    this.bills.splice(this.bills.indexOf(item), 1)
    this.budget.push(item);
  }

  onBudgetItemClick(item) {
    this.budget.splice(this.budget.indexOf(item), 1);
    if (item.constructor.name == 'Paystub') {
      this.income.push(item);
    }
    else {
      this.bills.push(item);
    }
  }

  

}
