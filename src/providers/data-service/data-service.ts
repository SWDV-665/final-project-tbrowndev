import { Injectable } from '@angular/core';
import { Kompass } from './kompass-objects';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor() {
  }

  //NEW CONCEPT TO REPLCE ABOVE - DONE

  //Fake Database tables
  profile: Kompass.Profile = new Kompass.Profile("John Smith", "jsmith@me.com", 2314432456, "Jon Jon", "Tech Support")
  
  Records: Kompass.Record[] = [
    //Test Incomes
    new Kompass.Record('Tech Support', 0, '04-18-2020', 3, true, 2318.54, 'Main Source of Income'),
    new Kompass.Record('Web Designer', 0, '05-01-2020', 4, false, 943.22, 'Secondary Source of Income'),
    new Kompass.Record('Freelance WebSite', 0, '05-22-2020', 0, false, 1032.43, 'Freelance Webpage for Company X'),
    //test Bills from 
    new Kompass.Record('Rent', 1, '04-01-2020', 4, false, 850.00, 'Apartment Complex X Owned by Company Y'),
    new Kompass.Record('Electric', 1, '04-15-2020', 4, false, 82.43, 'Electric Copmany X'),
    new Kompass.Record('Netflix', 1, '04-04-2020', 4, true, 7.99, 'Basic Plan: Standard Quality'),
    new Kompass.Record('Hulu', 1, '04-04-2020', 4, true, 6.99, 'Basic Individual Plan: Standard Quality'),
    new Kompass.Record('Apple Music', 1, '04-24-2020', 4, true, 4.99, 'Student Apple Music Plan'),
    new Kompass.Record('Starz', 1, '04-14-2020', 4, true, 8.99, 'Individual Plan: Standard Quality'),
    new Kompass.Record('Student Loans', 1, '04-28-2020', 4, true, 278.65, 'Sallie Mae Student Loan')
  ];

  ManualBudgetItems: Kompass.ManualBudgetItem[] = [
    new Kompass.ManualBudgetItem('Groceries', 1, 200.00),
    new Kompass.ManualBudgetItem('Fun', 1, 30.00),
    new Kompass.ManualBudgetItem('Add To Saving', 1, 50.00)
  ]


  /**
   * Retrieve Profile of Logged in user
   */
  fetchProfile() {
    return this.profile;
  }

  /**
   * Retrieve All Income for user
   */
  fetchIncome() {
    return this.FindRecordType(this.Records, 0);
  }
  fetchIncomeTotal() {
    var total = 0.00;
    this.fetchIncome().forEach(income => {
      total = total + income.amount;
    })
    return total;
  }

  /**
   * Retrieve All Bills for user
   */
  fetchBills() {
    return this.FindRecordType(this.Records, 1);
  }
  fetchUpcomingBills() {
    var upcomingBills = [];
    let currentMonth = new Date().getMonth();
    this.fetchBills().forEach(bill => {
      var billDate = new Date(bill.nextOccurenceDate).getMonth();
      if (billDate === currentMonth) {
        upcomingBills.push(bill)
      }
    })
    return upcomingBills;
  }
  fetchBillTotal() {
    var total = 0.00;
    this.fetchBills().forEach(bill => {
      total = total + bill.amount;
    })
    return total;
  }

  /**
   * Retrieve all budget items for user
   */
  fetchBudgetItems() {
    return this.Records;
  }
  /**
   * Retrieve All Manual Budget Items for user
   */
  fetchManualBudgetItems() {
    return this.ManualBudgetItems;
  }

  /**
   * adds item to budget list
   * @param item item to add to budget list
   */
  SetItemInBudget(item) {
    item.inBudget = true;
    if(item.constructor.name === "Record"){
      this.Records[this.Records.indexOf(item)] = item;
    }
    else{
      this.ManualBudgetItems[this.ManualBudgetItems.indexOf(item)] = item;
    }
  }

  /**
   * removes item from budget list. 
   * @param item item to remove from budget
   */
  setItemOutBudget(item){
    item.inBudget = false;
    if(item.constructor.name === "Record"){
      this.Records[this.Records.indexOf(item)] = item;
    }
    else{
      this.ManualBudgetItems[this.ManualBudgetItems.indexOf(item)] = item;
    }
  }

  pushNewManualBudgetItem(item: Kompass.ManualBudgetItem){
    this.ManualBudgetItems.push(item);
  }

  /**
   * updates record in database with new information
   * @param record 'Record to be updated'
   */
  updateRecord(record: Kompass.Record) {
    this.Records[this.Records.indexOf(record)] = record;
  }

  /**updates maunal budget item in database
   * @param item 'Manual Budget Item to Be updated in database
   */
  updateManualBudgetItem(item: Kompass.ManualBudgetItem) {
    this.ManualBudgetItems[this.ManualBudgetItems.indexOf(item)] = item;
  }

  //Filter Functions

  /**
   * Take a list of records and filters for a specific type
   * @param recordList 'The list of records of various kinds'
   * @param recordType 'The specific kind to find'
   */
  FindRecordType(recordList: Kompass.Record[], recordType: number) {
    const filteredList = [];
    recordList.forEach(record => {
      if (record.kind === recordType) {
        filteredList.push(record);
      }
    }
    );
    return filteredList;
  }

}
