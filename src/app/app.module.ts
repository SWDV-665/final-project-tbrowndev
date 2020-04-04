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
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';
import { PaymentModal } from '../providers/input-dialog-service/input-dialog-service';
import { RecordModal } from '../providers/input-dialog-service/input-dialog-service';


@NgModule({
  declarations: [
    MyApp,
    RecordsPage,
    RecordModal,
    ProfilePage,
    BudgetPage,
    DashboardPage,
    PaymentModal,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecordsPage,
    RecordModal,
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
    InputDialogServiceProvider
  ]
})
export class AppModule {}
