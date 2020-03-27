import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { RecordsPage } from '../records/records';
import { BudgetPage } from '../budget/budget';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  dashboardTab = DashboardPage;
  recordTab = RecordsPage;
  budgetTab = BudgetPage;
  profileTab = ProfilePage;

  constructor() {

  }
}
