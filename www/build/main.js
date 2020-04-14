webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaymentServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the PaymentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PaymentServiceProvider = /** @class */ (function () {
    function PaymentServiceProvider(modalCtrl, actionCtrl) {
        this.modalCtrl = modalCtrl;
        this.actionCtrl = actionCtrl;
        //console.log('Hello PaymentServiceProvider Provider');
    }
    PaymentServiceProvider.prototype.presentPaymentModal = function (item) {
        var paymentModal = this.modalCtrl.create(PaymentModal, item);
        paymentModal.present();
    };
    PaymentServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], PaymentServiceProvider);
    return PaymentServiceProvider;
}());

var PaymentModal = /** @class */ (function () {
    function PaymentModal(params, dataService, toastCtrl, viewCtrl, loadingCtrl) {
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.currentDate = new Date().toISOString();
        this.partialPayment = false;
        this.paymentDetails = { payAmount: 0, payDate: this.currentDate, conNum: "" };
        this.item = params.data;
    }
    PaymentModal.prototype.paymentChange = function () {
        if (this.partialPayment) {
            this.partialPayment = false;
        }
        else {
            this.partialPayment = true;
        }
    };
    PaymentModal.prototype.isPartialPayment = function () {
        return this.partialPayment;
    };
    //close payment modal
    PaymentModal.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PaymentModal.prototype.markPaid = function (item, payDetails) {
        var loader = this.loadingCtrl.create({
            content: "Marking Payment...",
        });
        loader.present();
        //this.dataService.payBill(item);
        loader.dismiss();
        this.viewCtrl.dismiss();
        var toast = this.toastCtrl.create({
            message: item.name + " Marked as Paid",
            duration: 5000,
            showCloseButton: true
        });
        toast.present();
    };
    PaymentModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/payment-service/payment.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        Payment to {{item.name}} \n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <span ion-text color="primary">Cancel</span>\n                <ion-icon name="close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n  \n<ion-content padding-top>\n    <ion-card>\n        <ion-card-header>\n          {{item.name}}\n        </ion-card-header>\n        <ion-card-content>\n          <p>Due Date: {{item.duedate}}</p>\n          <p>Amout Due: ${{item.amount}}</p>\n        </ion-card-content>\n    </ion-card>\n\n    <!--Payment details-->\n    <ion-item>\n        <ion-label>Paid Full Amount</ion-label>\n        <ion-toggle checked="true" (ionChange)=paymentChange()></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="isPartialPayment() === true">\n        <ion-input type="number" [(ngModel)]="paymentDetails.payAmount"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Date Paid</ion-label>\n        <ion-datetime [(ngModel)]="paymentDetails.payDate" displayFormat="MM/DD/YYYY" pickerFormat="MMMM/DD/YYYY"></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-label>Confirmation #</ion-label>\n        <ion-input type="text" [(ngModel)]="paymentDetails.conNum"></ion-input>\n    </ion-item>\n\n    <button ion-button block large (click)="markPaid(item, paymentDetails)">\n        Mark as Paid\n    </button>\n</ion-content>\n  '/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/payment-service/payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PaymentModal);
    return PaymentModal;
}());

//# sourceMappingURL=payment-service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__records_records__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.dashboardTab = __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__["a" /* DashboardPage */];
        this.recordTab = __WEBPACK_IMPORTED_MODULE_2__records_records__["a" /* RecordsPage */];
        this.budgetTab = __WEBPACK_IMPORTED_MODULE_3__budget_budget__["a" /* BudgetPage */];
        this.profileTab = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="dashboardTab" tabIcon="home"></ion-tab>\n  <ion-tab [root]="recordTab" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="budgetTab" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="profileTab" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_payment_service_payment_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_record_service_record_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardPage = /** @class */ (function () {
    function DashboardPage(paymentService, recordService, navCtrl, toastCtrl, dataService, dialogService) {
        this.paymentService = paymentService;
        this.recordService = recordService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.dialogService = dialogService;
    }
    //NEW CONCEPT SECTION TO REPLACE ABOVE - DONE
    /**
     * gathers all upcoming bills from data service
     */
    DashboardPage.prototype.fetchUpcomingBills = function () {
        return this.dataService.fetchUpcomingBills();
    };
    /**
     * send bill to payment service modal
     * @param item 'the item that will be paid'
     *
     */
    DashboardPage.prototype.onMarkPaid = function (item) {
        //this.paymentService.presentPaymentModal(item);
        this.dialogService.featureNotAvaliableAlert();
    };
    /**
     * send bill to record service modal
     * @param item 'the item that user has selected to view'
     */
    DashboardPage.prototype.onItemClick = function (item) {
        //this.recordService.presentRecordModal(item);
        this.dialogService.featureNotAvaliableAlert();
    };
    /**
     * starts command for creation of new record item
     */
    DashboardPage.prototype.onCreateNew = function () {
        //this.dialogService.presentCreateSheet();
        this.dialogService.featureNotAvaliableAlert();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onCreateNew()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h2 style="text-align: center;">\n    Remaining Bills Due this Month\n  </h2>\n  <hr>\n  <ion-list>\n    <!--Display a list of item objects-->\n    <h6 class="no-item" *ngIf="fetchUpcomingBills().length === 0">Whoo! No Upcoming Bills!</h6>\n    <ion-item-sliding *ngFor="let bill of fetchUpcomingBills()">\n      <ion-item (click)="onItemClick(bill)" class="item-layout">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-8 class="item-title">\n              {{bill.title}}<br>\n              <p class="item-note">{{bill.description}}</p>\n            </ion-col>\n            <ion-col col-4 class="right-align-small-text">\n              {{bill.nextOccurenceDate | date}}\n              <h3 class="bill-amount">{{bill.amount | currency}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="left" (ionSwipe)="onMarkPaid(bill)">\n        <button ion-button expandable (click)="onMarkPaid(bill)">\n          <!--ion-icon name="checkmark"></ion-icon>-->\n          Mark Paid\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_payment_service_payment_service__["b" /* PaymentServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_payment_service_payment_service__["b" /* PaymentServiceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_record_service_record_service__["b" /* RecordServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_record_service_record_service__["b" /* RecordServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */]) === "function" && _f || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kompass; });
var Kompass;
(function (Kompass) {
    // NEW CONCEPT TO REPLACE ABOVE - DONE
    /**
     * Creates all records utilized during runtime (Income, Bill, Manual Budget)
     * @param title 'name of record'
     * @param kind 'Type of record: 0: income; 1: bill'
     * @param nextOccurenceDate 'Next Date Record will occur: string formatted as mm-dd-yyyy'
     * @param occurenceLevel 'Frequency of record: 0:One Time:, 1: daily; 2: weekly; 3: bi-weekly; 4:monthly; 5:yearly'
     * @param isAuto 'is this record set for direct deposit/ auto pay?'
     * @param amount 'the amount set for the record'
     * @param desc 'quick description of the record'
     */
    var Record = /** @class */ (function () {
        function Record(title, kind, nextOccurenceDate, occurenceLevel, isAuto, amount, desc) {
            this.inBudget = false;
            this.title = title;
            this.kind = kind;
            this.nextOccurenceDate = nextOccurenceDate;
            this.occurenceLevel = occurenceLevel;
            this.isAuto = isAuto;
            this.amount = amount;
            this.description = desc;
        }
        return Record;
    }());
    Kompass.Record = Record;
    /**
     * create payment for use during runtime
     * @param title 'Name of Bill'
     * @param occurenceDate 'Occurence date of bill that user is paying for
     * @param amount 'amount of bill for occurence date'
     * @param payDate 'date user paid bill'
     * @param payAmount 'amount user paying bill for occurence date'
     * @param confNum 'Confirmation # of payment from external system'
     */
    var Payment = /** @class */ (function () {
        function Payment(title, occurenceDate, amount, payDate, payAmount, confNum) {
            this.title = title;
            this.occurenceDate = occurenceDate;
            this.amount = amount;
            this.payDate = payDate;
            this.payAmount = payAmount;
            this.confNum = confNum;
        }
        return Payment;
    }());
    Kompass.Payment = Payment;
    /**
     * Creates all records utilized during runtime (Income, Bill, Manual Budget)
     * @param title 'name of record'
     * @param kind 'Type of record: 0: income; 1: expense'
     * @param amount 'the amount set for the record'
     */
    var ManualBudgetItem = /** @class */ (function () {
        function ManualBudgetItem(title, kind, amount) {
            this.inBudget = false;
            this.title = title;
            this.kind = kind;
            this.amount = amount;
        }
        return ManualBudgetItem;
    }());
    Kompass.ManualBudgetItem = ManualBudgetItem;
    /**
     * Creates User Profile for runtime use
     */
    var Profile = /** @class */ (function () {
        function Profile(name, email, phone, nickname, jobtitle) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.nickname = nickname;
            this.jobTitle = jobtitle;
        }
        return Profile;
    }());
    Kompass.Profile = Profile;
})(Kompass || (Kompass = {}));
//# sourceMappingURL=kompass-objects.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_record_service_record_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dialog_service_dialog_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecordsPage = /** @class */ (function () {
    function RecordsPage(recordService, navCtrl, dialogService, toastCtrl, dataService) {
        this.recordService = recordService;
        this.navCtrl = navCtrl;
        this.dialogService = dialogService;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        //Sets income as the selected section
        this.records = "income";
    }
    //NEW CONCEPT TO REPLACE ABOVE - DONE
    RecordsPage.prototype.fetchBills = function () {
        return this.dataService.fetchBills();
    };
    RecordsPage.prototype.fetchBillTotal = function () {
        return this.dataService.fetchBillTotal();
    };
    RecordsPage.prototype.fetchIncome = function () {
        return this.dataService.fetchIncome();
    };
    RecordsPage.prototype.fetchIncomeTotal = function () {
        return this.dataService.fetchIncomeTotal();
    };
    /**
     * send bill to record service modal
     * @param item 'the item that user has selected to view'
     */
    RecordsPage.prototype.onItemClick = function (item) {
        //this.recordService.presentRecordModal(item);
        this.dialogService.featureNotAvaliableAlert();
    };
    /**
     * starts command for creation of new record item
     */
    RecordsPage.prototype.onCreateNew = function () {
        //this.dialogService.presentCreateSheet()
        this.dialogService.featureNotAvaliableAlert();
    };
    RecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-records',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Records\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onCreateNew()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <!--Tabs for each section of records-->\n    <ion-segment [(ngModel)]="records">\n      <ion-segment-button value="income">\n        Income\n      </ion-segment-button>\n      <ion-segment-button value="bills">\n        Bills\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <!--Tab data -->\n  <div [ngSwitch]="records">\n    <ion-list *ngSwitchCase="\'income\'">\n      <h6 class="no-item" *ngIf="fetchIncome().length === 0" padding-top>No Income added :(</h6>\n      <button ion-item *ngFor="let income of fetchIncome()" (click)="onItemClick(item)" class="item-layout">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-8 class="item-title">\n              {{income.title}}<br>\n            </ion-col>\n            <ion-col col-4 class="right-align-small-text">\n              <h3 class="income-amount">{{income.amount | currency}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </button>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-7>\n            Total\n          </ion-col>\n          <ion-col col-5 text-right>\n            {{fetchIncomeTotal() | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    <!--Bill Section-->\n    <ion-list *ngSwitchCase="\'bills\'">\n      <h6 class="no-item" *ngIf="fetchBills().length === 0" padding-top>No Bills added :(</h6>\n      <button ion-item *ngFor="let bill of fetchBills()" (click)="onItemClick(item)" no-padding style="font-size: small;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-8 class="item-title">\n              {{bill.title}}<br>\n            </ion-col>\n            <ion-col col-4 class="right-align-small-text">\n              <h3 class="bill-amount">{{bill.amount | currency}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </button>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-7>\n            Total\n          </ion-col>\n          <ion-col col-5 text-right>\n            {{fetchBillTotal() | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_record_service_record_service__["b" /* RecordServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_record_service_record_service__["b" /* RecordServiceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _e || Object])
    ], RecordsPage);
    return RecordsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=records.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_kompass_objects__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BudgetPage = /** @class */ (function () {
    function BudgetPage(actionCtrl, alertCtrl, navCtrl, dataService, dialogService) {
        this.actionCtrl = actionCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.dialogService = dialogService;
        this.activeBudgetItems = [];
        this.avaliableManualItems = [];
        this.avaliableIncomeItems = [];
        this.avaliableBillItems = [];
        this.allocateItems(this.dataService.fetchBudgetItems(), this.dataService.fetchManualBudgetItems());
    }
    //NEW CONCEPT SECTION TO REPLACE ABOVE - DONE
    BudgetPage.prototype.allocateItems = function (records, manuals) {
        var _this = this;
        records.forEach(function (item) {
            if (item.inBudget) {
                _this.activeBudgetItems.push(item);
            }
            else {
                if (item.kind === 0) {
                    _this.avaliableIncomeItems.push(item);
                }
                else {
                    _this.avaliableBillItems.push(item);
                }
            }
        });
        manuals.forEach(function (item) {
            if (item.inBudget) {
                _this.activeBudgetItems.push(item);
            }
            else {
                _this.avaliableManualItems.push(item);
            }
        });
    };
    BudgetPage.prototype.updateActiveBudgetTotal = function () {
        var total = 0.00;
        this.activeBudgetItems.forEach(function (item) {
            if (item.kind === 0) {
                total = total + item.amount;
            }
            else {
                total = total - item.amount;
            }
        });
        return total;
    };
    BudgetPage.prototype.onItemClick = function (item) {
        this.dataService.SetItemInBudget(item);
    };
    BudgetPage.prototype.onBudgetItemClick = function (item) {
        this.dataService.setItemOutBudget(item);
    };
    //TODO: create manual item and add to database. 
    BudgetPage.prototype.onNewManualItemClick = function () {
        this.presentManualTypeSheet();
    };
    //BUDGET ITEM ALERTS
    BudgetPage.prototype.presentBudgetManualAddPrompt = function (isExpense) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        //do nothing
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.dataService.pushNewManualBudgetItem(new __WEBPACK_IMPORTED_MODULE_4__providers_data_service_kompass_objects__["a" /* Kompass */].ManualBudgetItem(data.title, isExpense, data.amount));
                    }
                }
            ]
        });
        prompt.present();
    };
    BudgetPage.prototype.presentManualTypeSheet = function () {
        var _this = this;
        //return the type the manual item is
        var actionsheet = this.actionCtrl.create({
            title: "Manual Item Type",
            buttons: [
                {
                    text: 'Income',
                    handler: function () {
                        _this.presentBudgetManualAddPrompt(0);
                    }
                }, {
                    text: 'Expense',
                    handler: function () {
                        _this.presentBudgetManualAddPrompt(1);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //left blank on purpose
                    }
                }
            ]
        });
        actionsheet.present();
    };
    BudgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-budget',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/budget/budget.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Budget\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-card>\n    <!--Budget Section -->\n    <ion-item-group>\n      <h6 class="no-item" *ngIf="activeBudgetItems.length === 0" padding-top>No Items in your budget :(</h6>\n      <ion-item *ngFor="let item of activeBudgetItems">\n        <button ion-button clear item-start icon-only (click)="onBudgetItemClick(item)">\n          <ion-icon name="close" color="kred"></ion-icon>\n        </button>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-9 class="item-title">\n              {{item.title}}\n            </ion-col>\n            <ion-col col-2 class="right-align-small-text">\n              {{item.amount | currency}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <hr>\n      <ion-item>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-9 class="item-title">\n              Total\n            </ion-col>\n            <ion-col col-3 class="right-align-small-text">\n              {{updateActiveBudgetTotal() | currency}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n  <!--Manual Section-->\n  <ion-item-group>\n    <ion-item-divider color="light">Manual</ion-item-divider>\n    <ion-item *ngFor="let item of avaliableManualItems">\n      <button ion-button clear item-start icon-only (click)="onItemClick(item)">\n        <ion-icon name="add" color="green"></ion-icon>\n      </button>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-9 class="item-title">\n            {{item.title}}\n          </ion-col>\n          <ion-col col-3 class="right-align-small-text">\n            {{item.amount | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <button ion-button clear (click)="onNewManualItemClick()">\n      Add New Manual Item\n    </button>\n  </ion-item-group>\n  <!--Income Section-->\n  <ion-item-group>\n    <ion-item-divider color="light">Income</ion-item-divider>\n    <ion-item *ngFor="let item of avaliableIncomeItems">\n      <button ion-button clear item-start icon-only (click)="onItemClick(item)">\n        <ion-icon name="add" color="green"></ion-icon>\n      </button>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-9 class="item-title">\n            {{item.title}}\n          </ion-col>\n          <ion-col col-3 class="right-align-small-text">\n            {{item.amount | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-item-group>\n  <!--Bill Section-->\n  <ion-item-group>\n    <ion-item-divider color="light">Bills</ion-item-divider>\n    <ion-item *ngFor="let item of avaliableBillItems">\n      <button ion-button clear item-start icon-only (click)="onItemClick(item)">\n        <ion-icon name="add" color="green"></ion-icon>\n      </button>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-9 class="item-title">\n            {{item.title}}\n          </ion-col>\n          <ion-col col-3 class="right-align-small-text">\n            {{item.amount | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/budget/budget.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */]])
    ], BudgetPage);
    return BudgetPage;
}());

//# sourceMappingURL=budget.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(alertCtrl, navCtrl, dataService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.inDarkMode = true;
        this.themes = [
            { title: "Theme 1", active: false },
            { title: "Theme 2", active: false },
            { title: "Theme 3", active: false },
            { title: "Theme 4", active: false },
            { title: "Theme 5", active: false },
            { title: "Theme 6", active: false },
            { title: "Theme 7", active: false },
        ];
        this.user = this.dataService.fetchProfile();
    }
    ProfilePage.prototype.onEditProfileDetails = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Profile Details',
            inputs: [{
                    name: 'name',
                    placeholder: 'Name',
                    value: this.user.name
                }, {
                    name: 'nickname',
                    placeholder: 'Nickname',
                    value: this.user.nickname
                }, {
                    name: 'jobtitle',
                    placeholder: 'Occupation',
                    value: this.user.jobTitle
                }, {
                    name: 'email',
                    placeholder: 'Email',
                    value: this.user.email
                }, {
                    name: 'phone',
                    placeholder: 'Phone',
                    value: this.user.phone
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel'
                }, {
                    text: 'Update',
                    handler: function (data) {
                        _this.user.name = data.name;
                        _this.user.nickname = data.nickname;
                        _this.user.jobTitle = data.jobtitle;
                        _this.user.email = data.email;
                        _this.user.phone = data.phone;
                    }
                }]
        });
        prompt.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Account\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-label class="user-name" text-center>{{user.name}}</ion-label>\n    <ion-label class="user-nickname" text-center>&nbsp;&nbsp;{{user.nickname}}</ion-label>\n    <ion-icon class="icon-user-detail" name="briefcase">&nbsp;&nbsp;{{user.jobTitle}}</ion-icon>\n    <ion-icon class="icon-user-detail" name="mail">&nbsp;&nbsp;{{user.email}}</ion-icon>\n    <ion-icon class="icon-user-detail" name="call">&nbsp;&nbsp;{{user.phone}}</ion-icon>\n    <button ion-button full clear (click)="onEditProfileDetails()">Edit Profile</button>\n  </ion-card>\n\n  <ion-item-group>\n    <ion-item-divider class="group-header">\n      <ion-label >Notifications</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>Reminder</ion-label>\n      <ion-select placeholder="Select" [(ngModel)]="reminderTime">\n        <ion-option value="1">1 Day</ion-option>\n        <ion-option value="2">2 Days</ion-option>\n        <ion-option value="3">3 Days</ion-option>\n        <ion-option value="7">1 Week</ion-option>\n        <ion-option value="14">2 Weeks</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item-divider class="group-header">\n      <ion-label >Theme</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>Dark Mode</ion-label>\n      <ion-toggle [(ngModel)]="inDarkMode" end></ion-toggle>\n    </ion-item>\n\n    <ion-list *ngIf="!inDarkMode">\n      <ion-item *ngFor="let theme of themes">\n        <ion-label>{{theme.title}}</ion-label>\n        <ion-checkbox slot="start" [(ngModel)]="theme.active"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _c || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_records_records__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_budget_service_budget_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_dialog_service_dialog_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_records_records__["a" /* RecordsPage */],
                __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__["a" /* RecordModal */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__["a" /* PaymentModal */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_records_records__["a" /* RecordsPage */],
                __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__["a" /* RecordModal */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__["a" /* PaymentModal */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__["b" /* PaymentServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__["b" /* RecordServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_budget_service_budget_service__["a" /* BudgetServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kompass_objects__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = /** @class */ (function () {
    function DataServiceProvider() {
        //NEW CONCEPT TO REPLCE ABOVE - DONE
        //Fake Database tables
        this.profile = new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Profile("John Smith", "jsmith@me.com", 2314432456, "Jon Jon", "Tech Support");
        this.Records = [
            //Test Incomes
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Tech Support', 0, '04-18-2020', 3, true, 2318.54, 'Main Source of Income'),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Web Designer', 0, '05-01-2020', 4, false, 943.22, 'Secondary Source of Income'),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Freelance WebSite', 0, '05-22-2020', 0, false, 1032.43, 'Freelance Webpage for Company X'),
            //test Bills from 
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Rent', 1, '04-01-2020', 4, false, 850.00, 'Apartment Complex X Owned by Company Y'),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Electric', 1, '04-15-2020', 4, false, 82.43, 'Electric Copmany X'),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Netflix', 1, '04-04-2020', 4, true, 7.99, 'Basic Plan: Standard Quality'),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Hulu', 1, '04-04-2020', 4, true, 6.99, 'Basic Individual Plan: Standard Quality'),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Apple Music', 1, '04-24-2020', 4, true, 4.99, 'Student Apple Music Plan'),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Starz', 1, '04-14-2020', 4, true, 8.99, 'Individual Plan: Standard Quality'),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Record('Student Loans', 1, '04-28-2020', 4, true, 278.65, 'Sallie Mae Student Loan')
        ];
        this.ManualBudgetItems = [
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].ManualBudgetItem('Groceries', 1, 200.00),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].ManualBudgetItem('Fun', 1, 30.00),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].ManualBudgetItem('Add To Saving', 1, 50.00)
        ];
    }
    /**
     * Retrieve Profile of Logged in user
     */
    DataServiceProvider.prototype.fetchProfile = function () {
        return this.profile;
    };
    /**
     * Retrieve All Income for user
     */
    DataServiceProvider.prototype.fetchIncome = function () {
        return this.FindRecordType(this.Records, 0);
    };
    DataServiceProvider.prototype.fetchIncomeTotal = function () {
        var total = 0.00;
        this.fetchIncome().forEach(function (income) {
            total = total + income.amount;
        });
        return total;
    };
    /**
     * Retrieve All Bills for user
     */
    DataServiceProvider.prototype.fetchBills = function () {
        return this.FindRecordType(this.Records, 1);
    };
    DataServiceProvider.prototype.fetchUpcomingBills = function () {
        var upcomingBills = [];
        var currentMonth = new Date().getMonth();
        this.fetchBills().forEach(function (bill) {
            var billDate = new Date(bill.nextOccurenceDate).getMonth();
            if (billDate === currentMonth) {
                upcomingBills.push(bill);
            }
        });
        return upcomingBills;
    };
    DataServiceProvider.prototype.fetchBillTotal = function () {
        var total = 0.00;
        this.fetchBills().forEach(function (bill) {
            total = total + bill.amount;
        });
        return total;
    };
    /**
     * Retrieve all budget items for user
     */
    DataServiceProvider.prototype.fetchBudgetItems = function () {
        return this.Records;
    };
    /**
     * Retrieve All Manual Budget Items for user
     */
    DataServiceProvider.prototype.fetchManualBudgetItems = function () {
        return this.ManualBudgetItems;
    };
    /**
     * adds item to budget list
     * @param item item to add to budget list
     */
    DataServiceProvider.prototype.SetItemInBudget = function (item) {
        item.inBudget = true;
        if (item.constructor.name === "Record") {
            this.Records[this.Records.indexOf(item)] = item;
        }
        else {
            this.ManualBudgetItems[this.ManualBudgetItems.indexOf(item)] = item;
        }
    };
    /**
     * removes item from budget list.
     * @param item item to remove from budget
     */
    DataServiceProvider.prototype.setItemOutBudget = function (item) {
        item.inBudget = false;
        if (item.constructor.name === "Record") {
            this.Records[this.Records.indexOf(item)] = item;
        }
        else {
            this.ManualBudgetItems[this.ManualBudgetItems.indexOf(item)] = item;
        }
    };
    DataServiceProvider.prototype.pushNewManualBudgetItem = function (item) {
        this.ManualBudgetItems.push(item);
    };
    /**
     * updates record in database with new information
     * @param record 'Record to be updated'
     */
    DataServiceProvider.prototype.updateRecord = function (record) {
        this.Records[this.Records.indexOf(record)] = record;
    };
    /**updates maunal budget item in database
     * @param item 'Manual Budget Item to Be updated in database
     */
    DataServiceProvider.prototype.updateManualBudgetItem = function (item) {
        this.ManualBudgetItems[this.ManualBudgetItems.indexOf(item)] = item;
    };
    //Filter Functions
    /**
     * Take a list of records and filters for a specific type
     * @param recordList 'The list of records of various kinds'
     * @param recordType 'The specific kind to find'
     */
    DataServiceProvider.prototype.FindRecordType = function (recordList, recordType) {
        var filteredList = [];
        recordList.forEach(function (record) {
            if (record.kind === recordType) {
                filteredList.push(record);
            }
        });
        return filteredList;
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the BudgetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BudgetServiceProvider = /** @class */ (function () {
    function BudgetServiceProvider(http) {
        this.http = http;
        console.log('Hello BudgetServiceProvider Provider');
    }
    BudgetServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BudgetServiceProvider);
    return BudgetServiceProvider;
}());

//# sourceMappingURL=budget-service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecordServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the RecordServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RecordServiceProvider = /** @class */ (function () {
    function RecordServiceProvider(modalCtrl, actionCtrl) {
        this.modalCtrl = modalCtrl;
        this.actionCtrl = actionCtrl;
        //console.log('Hello RecordServiceProvider Provider');
    }
    RecordServiceProvider.prototype.presentRecordModal = function (item) {
        var recordModal = this.modalCtrl.create(RecordModal, item ? item : null);
        recordModal.present();
    };
    RecordServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], RecordServiceProvider);
    return RecordServiceProvider;
}());

var RecordModal = /** @class */ (function () {
    function RecordModal(params, dataService, toastCtrl, viewCtrl, loadingCtrl) {
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.item = params.data;
    }
    //close payment modal
    RecordModal.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    RecordModal.prototype.updateRecord = function (item) {
        //this.dataService.updateItem(item);
        this.close();
    };
    RecordModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/record-service/record.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        {{item.name}} \n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<!--Bill Records Update-->\n<ion-content *ngIf="item.constructor.name === \'Bill\'">\n    <ion-list>\n        <ion-item>\n            <ion-input type="text" placeholder="Name" [(ngModel)]="item.reference"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n            <ion-label>Auto Pay</ion-label>\n            <ion-toggle [(ngModel)]="item.isAutopay"></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-label>Date Due</ion-label>\n            <ion-datetime pickerFormat="MMM DD, YYYY" displayFormat="MMM DD, YYYY" placeholder="Select Date" [(ngModel)]="item.nextDueDate"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" placeholder="Amount (Optional)" [(ngModel)]="item.amount"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list><!--if record is a bill or credit card-->\n        <ion-list-header>\n            Past Payments\n        </ion-list-header>\n        <ion-item>Previous Payment 1</ion-item>\n        <ion-item>Previous Payment 2</ion-item>\n        <ion-item>Previous Payment 3</ion-item>\n        <ion-item>Previous Payment 4</ion-item>\n    </ion-list>\n    <button ion-button block large (click)="updateRecord(item)">\n        Update Bill\n    </button>\n</ion-content>\n\n<!--Paystub Records Update-->\n<ion-content *ngIf="item.constructor.name === \'Paystub\'">\n    <ion-list>\n        <ion-item>\n            <ion-input type="text" placeholder="Name" [(ngModel)]="item.reference"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n            <ion-label>Direct Deposit</ion-label>\n            <ion-toggle [(ngModel)]="item.isDirectDeposit"></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-label>Next Pay Date</ion-label>\n            <ion-datetime pickerFormat="MMM DD, YYYY" displayFormat="MMM DD, YYYY" placeholder="Select Date" [(ngModel)]="item.nextPayDate"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" placeholder="Amount (Optional)" [(ngModel)]="item.pay"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list><!--if record is a bill or credit card-->\n        <ion-list-header>\n            Past Paystubs\n        </ion-list-header>\n        <ion-item>Previous Paystub 1</ion-item>\n        <ion-item>Previous Paystub 2</ion-item>\n        <ion-item>Previous Paystub 3</ion-item>\n        <ion-item>Previous Paystub 4</ion-item>\n    </ion-list>\n    <button ion-button block large (click)="updateRecord(item)">\n        Update Paystub\n    </button>\n</ion-content>\n\n<!--NEW CONCEPT SECTION TO REPLACE ABOVE-->'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/record-service/record.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RecordModal);
    return RecordModal;
}());

//# sourceMappingURL=record-service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_service_record_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service_data_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the DialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DialogServiceProvider = /** @class */ (function () {
    function DialogServiceProvider(dataService, recordService, modalCtrl, actionCtrl, alertCtrl) {
        this.dataService = dataService;
        this.recordService = recordService;
        this.modalCtrl = modalCtrl;
        this.actionCtrl = actionCtrl;
        this.alertCtrl = alertCtrl;
        //console.log('Hello DialogServiceProvider Provider');
    }
    DialogServiceProvider.prototype.featureNotAvaliableAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Feature Unavailable',
            message: 'Sorry, feature is not available!',
            buttons: ['OK']
        });
        alert.present();
    };
    DialogServiceProvider.prototype.presentCreateSheet = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'Create',
            buttons: [
                {
                    text: 'Income',
                    handler: function () {
                        _this.recordService.presentRecordModal();
                    }
                }, {
                    text: 'Bill',
                    handler: function () {
                        _this.recordService.presentRecordModal();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DialogServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__record_service_record_service__["b" /* RecordServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DialogServiceProvider);
    return DialogServiceProvider;
}());

//# sourceMappingURL=dialog-service.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map