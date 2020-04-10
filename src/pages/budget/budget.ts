import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service'
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service'


@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider, public dialogService: DialogServiceProvider) {
  }

  totalBudget(){
    return this.dataService.getTotalBudget();
  }

  getManualItems(){
    return this.dataService.getManualItems();
  }

  getBudgetItems(){
    return this.dataService.getBudgetItems();
  }
  getIncomeItems(){
    return this.dataService.getIncome();
  }
  getBillItems(){
    return this.dataService.getBills();
  }

  onNewManualItem(){
    this.dialogService.presentManualTypeSheet();
  }

  onManualItemClick(item){
    this.dataService.manualAddToBudget(item);
  }

  onIncomeClick(item) {
    this.dataService.incomeAddToBudget(item);
  }

  onBillClick(item) {
    this.dataService.billAddToBudget(item);
  }

  onBudgetItemClick(item) {
    this.dataService.removeItemFromBudget(item);
  }

  

}
