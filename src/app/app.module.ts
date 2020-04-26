import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { RecordsPage } from '../pages/records/records';
import { BudgetPage } from '../pages/budget/budget';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { PaymentModal } from '../providers/payment-service/payment-service';
import { RecordModal } from '../providers/record-service/record-service';
import { NewRecordModal } from '../providers/record-service/record-service';
import { PaymentServiceProvider } from '../providers/payment-service/payment-service';
import { RecordServiceProvider } from '../providers/record-service/record-service';
import { BudgetServiceProvider } from '../providers/budget-service/budget-service';
import { DialogServiceProvider } from '../providers/dialog-service/dialog-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    RecordsPage,
    RecordModal,
    NewRecordModal,
    ProfilePage,
    BudgetPage,
    DashboardPage,
    PaymentModal,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecordsPage,
    RecordModal,
    NewRecordModal,
    ProfilePage,
    BudgetPage,
    DashboardPage,
    PaymentModal,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    PaymentServiceProvider,
    RecordServiceProvider,
    BudgetServiceProvider,
    DialogServiceProvider
  ]
})
export class AppModule {}
