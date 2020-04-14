import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service'
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service'
import { Kompass } from '../../providers/data-service/kompass-objects';


@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})

export class BudgetPage {

  activeBudgetItems: (Kompass.Record|Kompass.ManualBudgetItem)[] = [];
  avaliableManualItems: Kompass.ManualBudgetItem[] = [];
  avaliableIncomeItems: Kompass.Record[] = [];
  avaliableBillItems: Kompass.Record[] = [];
  
  constructor(public actionCtrl: ActionSheetController, public alertCtrl: AlertController, public navCtrl: NavController, public dataService: DataServiceProvider, public dialogService: DialogServiceProvider) {
    this.allocateItems(this.dataService.fetchBudgetItems(), this.dataService.fetchManualBudgetItems());
  }

  //NEW CONCEPT SECTION TO REPLACE ABOVE - DONE
  allocateItems(records: Kompass.Record[], manuals:Kompass.ManualBudgetItem[]){
    records.forEach( item => {
      if(item.inBudget){
        this.activeBudgetItems.push(item);
      }
      else{
        if (item.kind === 0){
          this.avaliableIncomeItems.push(item);
        }
        else{
          this.avaliableBillItems.push(item);
        }
      }
    })
    manuals.forEach( item => {
      if(item.inBudget){
        this.activeBudgetItems.push(item);
      }
      else{
        this.avaliableManualItems.push(item);
      }
    });
  }

  updateActiveBudgetTotal(){
    var total: number = 0.00;
    this.activeBudgetItems.forEach(item =>{
      if(item.kind === 0){
        total = total + item.amount;
      }
      else{
        total = total -item.amount;
      }
    });
    return total;
  }

  onItemClick(item){
    this.dataService.SetItemInBudget(item);
  }
  onBudgetItemClick(item){
    this.dataService.setItemOutBudget(item);
  }

  //TODO: create manual item and add to database. 
  onNewManualItemClick(){
    this.presentManualTypeSheet();
  }

  //BUDGET ITEM ALERTS
  presentBudgetManualAddPrompt(isExpense) {
    const prompt = this.alertCtrl.create({
      title: 'Add Manual Item',
      message: "Enter Manual Item Details",
      inputs: [
        {
          name: 'title',
          placeholder: 'Name',
          type: 'text'
        },
        {
          name: 'amount',
          placeholder: 'Amount',
          type: 'number',
          min: 0,
          max: 999999
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            //do nothing
          }
        },
        {
          text: 'Add',
          handler: data => {
            this.dataService.pushNewManualBudgetItem(new Kompass.ManualBudgetItem(data.title, isExpense, data.amount));
          }
        }
      ]
    });
    prompt.present();
  }

  presentManualTypeSheet() {
    //return the type the manual item is
    const actionsheet = this.actionCtrl.create({
      title: "Manual Item Type",
      buttons: [
        {
          text: 'Income',
          handler: () => {
            this.presentBudgetManualAddPrompt(0);
          }
        }, {
          text: 'Expense',
          handler: () => {
            this.presentBudgetManualAddPrompt(1);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //left blank on purpose
          }
        }
      ]
    });
    actionsheet.present();
  }
}
