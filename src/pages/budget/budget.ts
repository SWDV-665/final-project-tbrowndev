import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service'
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service'


@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})

export class BudgetPage {

  income = [];
  bills = [];
  manuals = [];
  budget = [];
  errorMessage: any;

  constructor(public actionCtrl: ActionSheetController, public alertCtrl: AlertController, public navCtrl: NavController, public dataService: DataServiceProvider, public dialogService: DialogServiceProvider) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadRecords();
    });
  }

  ionViewDidLoad() {
    this.loadRecords();
  }

  
  loadRecords() {
    this.dataService.getRecords().subscribe(
      //@ts-ignore
      items => this.manuals = items.filter(record => (record.kind === 2 || record.kind === 3) && record.inBudget === false),
      error => this.errorMessage = <any>error
    );
    this.dataService.getRecords().subscribe(
      //@ts-ignore
      items => this.income = items.filter(record => record.kind === 0 && record.inBudget === false),
      error => this.errorMessage = <any>error
    );
    this.dataService.getRecords().subscribe(
      //@ts-ignore
      items => this.bills = items.filter(record => record.kind === 1 && record.inBudget === false),
      error => this.errorMessage = <any>error
    );

    this.dataService.getRecords().subscribe(
      //@ts-ignore
      items => this.budget = items.filter(record => record.inBudget === true),
      error => this.errorMessage = <any>error
    );
  }

  calcBudgetExcess() {
    var total = 0.00;
    this.budget.forEach(record => {
      if (record.kind === 0 || record.kind === 2) {
        total = total + parseFloat(record.amount);
      }
      else {
        total = total - parseFloat(record.amount);
      }
    })
    return total;
  }

  addToBudget(record) {
    record.inBudget = true;
    this.dataService.updateRecord(record);
  }

  removeFromBudget(record) {
    record.inBudget = false;
    this.dataService.updateRecord(record);
  }

  onEditManualItem(record){
    const prompt = this.alertCtrl.create({
      title: 'Edit Manual Record',
      inputs:[{
        name:'name',
        placeholder: 'Name',
        value: record.name
      },{
        name: 'amount',
        placeholder:'Amount',
        type: "Number",
        value: record.amount
      }],
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Update',
        handler: data =>{
          record.name = data.name;
          record.amount = data.amount;
          this.dataService.updateRecord(record);
        }
      }]
    })
    prompt.present();
  }


  presentBudgetManualAddPrompt(isExpense) {
    const prompt = this.alertCtrl.create({
      title: 'Add Manual Item',
      message: "Enter Manual Item Details",
      inputs: [
        {
          name: 'name',
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
            this.dataService.createRecord({
              name: data.name,
              kind: isExpense,
              amount: data.amount,
              inBudget: false
            });
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
            this.presentBudgetManualAddPrompt(2);
          }
        }, {
          text: 'Expense',
          handler: () => {
            this.presentBudgetManualAddPrompt(3);
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
