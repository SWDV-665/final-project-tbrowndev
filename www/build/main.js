webpackJsonp([0],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaymentServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(35);
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
        this.payDate = new Date().toISOString();
        this.record = params.data;
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
    PaymentModal.prototype.markRecordPaid = function () {
        var loader = this.loadingCtrl.create({
            content: "Marking Payment...",
        });
        loader.present();
        this.dataService.createPayment(this.record, {
            occurenceDate: this.record.nextOccurenceDate,
            amount: this.record.amount,
            payDate: this.payDate,
            payAmount: this.partialPayment ? this.payAmount : this.record.amount,
            confnum: this.confnum
        });
        loader.dismiss();
        this.viewCtrl.dismiss();
        var toast = this.toastCtrl.create({
            message: this.record.name + " Marked as Paid",
            duration: 5000,
            showCloseButton: true
        });
        toast.present();
    };
    PaymentModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/payment-service/payment.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        Payment for {{record.name}} \n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n  \n<ion-content padding-top>\n    <ion-card>\n        <ion-card-header>\n          {{record.name}}\n        </ion-card-header>\n        <ion-card-content>\n          <p>Due Date:  {{record.nextOccurenceDate | date: \'fullDate\'}}</p>\n          <p>Amout Due:  ${{record.amount}}</p>\n        </ion-card-content>\n    </ion-card>\n\n    <!--Payment details-->\n    <ion-item>\n        <ion-label>Paid Full Amount</ion-label>\n        <ion-toggle checked="true" (ionChange)=paymentChange()></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="isPartialPayment() === true">\n        <ion-input type="number" [(ngModel)]="payAmount"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Date Paid</ion-label>\n        <ion-datetime [(ngModel)]="payDate" displayFormat="MM/DD/YYYY" pickerFormat="MMMM/DD/YYYY"></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-label>Confirmation #</ion-label>\n        <ion-input type="text" [(ngModel)]="confnum"></ion-input>\n    </ion-item>\n\n    <button ion-button block large (click)="markRecordPaid()">\n        Mark as Paid\n    </button>\n</ion-content>\n  '/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/payment-service/payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PaymentModal);
    return PaymentModal;
}());

//# sourceMappingURL=payment-service.js.map

/***/ }),

/***/ 139:
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
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__records_records__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(249);
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

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_payment_service_payment_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_record_service_record_service__ = __webpack_require__(45);
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
        var _this = this;
        this.paymentService = paymentService;
        this.recordService = recordService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.dialogService = dialogService;
        this.billDueTitle = "Bills This Month";
        this.billsDue = [];
        dataService.dataChanged$.subscribe(function (dataChanged) {
            _this.loadBills();
        });
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        this.loadBills();
    };
    DashboardPage.prototype.loadBills = function () {
        var _this = this;
        this.dataService.getRecords().subscribe(function (allRecords) { return _this.billsDue = allRecords.filter(
        //@ts-ignore
        function (record) { return record.kind === 1 //filters data for only bills 
            //@ts-ignore
            && new Date(record.nextOccurenceDate).getUTCMonth() === new Date().getUTCMonth()
            //@ts-ignore
            && new Date(record.nextOccurenceDate).getUTCFullYear() === new Date().getUTCFullYear()
            //@ts-ignore
            && record.occurenceLevel != 0 //filters for bills due in the current month
            //@ts-ignore
            || (record.kind === 1 && new Date(record.nextOccurenceDate).getUTCMonth() === new Date().getUTCMonth()
                //@ts-ignore
                && new Date(record.nextOccurenceDate).getUTCFullYear() === new Date().getUTCFullYear()
                //@ts-ignore
                && record.occurenceLevel === 0
                //@ts-ignore
                && record.payments.length === 0); }); }, function (error) { return _this.errorMessage = error; });
    };
    DashboardPage.prototype.onRecordClick = function (record) {
        this.recordService.presentRecordModal(record);
    };
    /**
     * send bill to payment service modal
     * @param record 'the item that will be paid'
     *
     */
    DashboardPage.prototype.onMarkRecordPaid = function (record) {
        this.paymentService.presentPaymentModal(record);
    };
    /**
     * starts command for creation of new record
     */
    DashboardPage.prototype.onCreateNew = function () {
        //this.dialogService.presentCreateSheet();
        this.dialogService.presentCreateSheet();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onCreateNew()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h2 style="text-align: center;">\n    {{billDueTitle}}\n  </h2>\n  <hr>\n  <ion-list>\n    <!--Display a list of item objects-->\n    <h6 class="no-item" *ngIf="billsDue.length === 0">Whoo! No Unpaid Bills!</h6>\n    <ion-item-sliding *ngFor="let bill of billsDue">\n      <ion-item (click)="onRecordClick(bill)" class="item-layout">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-8 class="item-title">\n              {{bill.name}}<br>\n              <p class="item-note">{{bill.description}}</p>\n            </ion-col>\n            <ion-col col-4 class="right-align-small-text">\n              {{bill.nextOccurenceDate | date}}\n              <h3 class="bill-amount">{{bill.amount | currency}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="left" (ionSwipe)="onMarkRecordPaid(bill)">\n        <button ion-button expandable (click)="onMarkRecordPaid(bill)">\n          <!--ion-icon name="checkmark"></ion-icon>-->\n          Mark Paid\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_payment_service_payment_service__["b" /* PaymentServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_record_service_record_service__["c" /* RecordServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_record_service_record_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dialog_service_dialog_service__ = __webpack_require__(68);
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
        var _this = this;
        this.recordService = recordService;
        this.navCtrl = navCtrl;
        this.dialogService = dialogService;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        //Sets income as the selected section
        this.records = "income";
        this.income = [];
        this.bills = [];
        dataService.dataChanged$.subscribe(function (dataChanged) {
            _this.loadRecords();
        });
    }
    RecordsPage.prototype.ionViewDidLoad = function () {
        this.loadRecords();
    };
    RecordsPage.prototype.loadRecords = function () {
        var _this = this;
        this.dataService.getRecords().subscribe(
        //@ts-ignore
        function (allRecords) { return _this.income = allRecords.filter(function (record) { return record.kind === 0; }); }, function (error) { return _this.errorMessage = error; });
        this.dataService.getRecords().subscribe(
        //@ts-ignore
        function (allRecords) { return _this.bills = allRecords.filter(function (record) { return record.kind === 1; }); }, function (error) { return _this.errorMessage = error; });
    };
    RecordsPage.prototype.calcBillTotal = function () {
        var total = 0.00;
        this.bills.forEach(function (bill) {
            total = total + parseFloat(bill.amount);
        });
        return total;
    };
    RecordsPage.prototype.calcIncomeTotal = function () {
        var total = 0.00;
        this.income.forEach(function (income) {
            total = total + parseFloat(income.amount);
        });
        return total;
    };
    /**
     * send bill to record service modal
     * @param item 'the item that user has selected to view'
     */
    RecordsPage.prototype.onItemClick = function (record) {
        this.recordService.presentRecordModal(record);
    };
    /**
     * starts command for creation of new record item
     */
    RecordsPage.prototype.onCreateNew = function () {
        this.dialogService.presentCreateSheet();
    };
    RecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-records',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Records\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onCreateNew()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <!--Tabs for each section of records-->\n    <ion-segment [(ngModel)]="records">\n      <ion-segment-button value="income">\n        Income\n      </ion-segment-button>\n      <ion-segment-button value="bills">\n        Bills\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <!--Tab data -->\n  <div [ngSwitch]="records">\n    <ion-list *ngSwitchCase="\'income\'">\n      <h6 class="no-item" *ngIf="income.length === 0" padding-top>No Income added :(</h6>\n      <button ion-item *ngFor="let record of income" (click)="onItemClick(record)" class="item-layout">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-8 class="item-title">\n              {{record.name}}<br>\n            </ion-col>\n            <ion-col col-4 class="right-align-small-text">\n              <h3 class="income-amount">{{record.amount | currency}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </button>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-7>\n            Total\n          </ion-col>\n          <ion-col col-5 text-right>\n            {{calcIncomeTotal() | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    <!--Bill Section-->\n    <ion-list *ngSwitchCase="\'bills\'">\n      <h6 class="no-item" *ngIf="bills.length === 0" padding-top>No Bills added :(</h6>\n      <button ion-item *ngFor="let record of bills" (click)="onItemClick(record)" no-padding style="font-size: small;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-8 class="item-title">\n              {{record.name}}<br>\n            </ion-col>\n            <ion-col col-4 class="right-align-small-text">\n              <h3 class="bill-amount">{{record.amount | currency}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </button>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-7>\n            Total\n          </ion-col>\n          <ion-col col-5 text-right>\n            {{calcBillTotal() | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_record_service_record_service__["c" /* RecordServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], RecordsPage);
    return RecordsPage;
}());

//# sourceMappingURL=records.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__ = __webpack_require__(68);
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
        var _this = this;
        this.actionCtrl = actionCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.dialogService = dialogService;
        this.income = [];
        this.bills = [];
        this.manuals = [];
        this.budget = [];
        dataService.dataChanged$.subscribe(function (dataChanged) {
            _this.loadRecords();
        });
    }
    BudgetPage.prototype.ionViewDidLoad = function () {
        this.loadRecords();
    };
    BudgetPage.prototype.loadRecords = function () {
        var _this = this;
        this.dataService.getRecords().subscribe(
        //@ts-ignore
        function (items) { return _this.manuals = items.filter(function (record) { return (record.kind === 2 || record.kind === 3) && record.inBudget === false; }); }, function (error) { return _this.errorMessage = error; });
        this.dataService.getRecords().subscribe(
        //@ts-ignore
        function (items) { return _this.income = items.filter(function (record) { return record.kind === 0 && record.inBudget === false; }); }, function (error) { return _this.errorMessage = error; });
        this.dataService.getRecords().subscribe(
        //@ts-ignore
        function (items) { return _this.bills = items.filter(function (record) { return record.kind === 1 && record.inBudget === false; }); }, function (error) { return _this.errorMessage = error; });
        this.dataService.getRecords().subscribe(
        //@ts-ignore
        function (items) { return _this.budget = items.filter(function (record) { return record.inBudget === true; }); }, function (error) { return _this.errorMessage = error; });
    };
    BudgetPage.prototype.calcBudgetExcess = function () {
        var total = 0.00;
        this.budget.forEach(function (record) {
            if (record.kind === 0 || record.kind === 2) {
                total = total + parseFloat(record.amount);
            }
            else {
                total = total - parseFloat(record.amount);
            }
        });
        return total;
    };
    BudgetPage.prototype.addToBudget = function (record) {
        record.inBudget = true;
        this.dataService.updateRecord(record);
    };
    BudgetPage.prototype.removeFromBudget = function (record) {
        record.inBudget = false;
        this.dataService.updateRecord(record);
    };
    BudgetPage.prototype.onEditManualItem = function (record) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Manual Record',
            inputs: [{
                    name: 'name',
                    placeholder: 'Name',
                    value: record.name
                }, {
                    name: 'amount',
                    placeholder: 'Amount',
                    type: "Number",
                    value: record.amount
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel'
                }, {
                    text: 'Update',
                    handler: function (data) {
                        record.name = data.name;
                        record.amount = data.amount;
                        _this.dataService.updateRecord(record);
                    }
                }]
        });
        prompt.present();
    };
    BudgetPage.prototype.presentBudgetManualAddPrompt = function (isExpense) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        //do nothing
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.dataService.createRecord({
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
                        _this.presentBudgetManualAddPrompt(2);
                    }
                }, {
                    text: 'Expense',
                    handler: function () {
                        _this.presentBudgetManualAddPrompt(3);
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
            selector: 'page-budget',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/budget/budget.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Budget\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-card>\n    <!--Budget Section -->\n    <ion-item-group>\n      <h6 class="no-item" *ngIf="budget.length === 0" padding-top>No Items in your budget :(</h6>\n      <ion-item *ngFor="let item of budget.sort()">\n        <button ion-button clear item-start icon-only (click)="removeFromBudget(item)">\n          <ion-icon name="close" color="kred"></ion-icon>\n        </button>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-9 class="item-title">\n              {{item.name}}\n            </ion-col>\n            <ion-col col-2 class="right-align-small-text">\n              {{item.amount | currency}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <hr>\n      <ion-item>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-9 class="item-title">\n              Total\n            </ion-col>\n            <ion-col col-3 class="right-align-small-text">\n              {{calcBudgetExcess() | currency}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n  <!--Manual Section-->\n  <ion-item-group>\n    <ion-item-divider color="light">Manual</ion-item-divider>\n    <h6 class="no-item" *ngIf="manuals.length === 0" padding-top>No Items Avaliable</h6>\n    <ion-item *ngFor="let item of manuals">\n      <button ion-button clear item-start icon-only (click)="addToBudget(item)">\n        <ion-icon name="add" color="green"></ion-icon>\n      </button>\n      <ion-grid no-padding (click)="onEditManualItem(item)">\n        <ion-row>\n          <ion-col col-9 class="item-title">\n            {{item.name}}\n          </ion-col>\n          <ion-col col-3 class="right-align-small-text">\n            {{item.amount | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <button ion-button clear (click)="presentManualTypeSheet()">\n      Add New Manual Item\n    </button>\n  </ion-item-group>\n  <!--Income Section-->\n  <ion-item-group>\n    <ion-item-divider color="light">Income</ion-item-divider>\n    <h6 class="no-item" *ngIf="income.length === 0" padding-top>No Items Avaliable</h6>\n    <ion-item *ngFor="let item of income">\n      <button ion-button clear item-start icon-only (click)="addToBudget(item)">\n        <ion-icon name="add" color="green"></ion-icon>\n      </button>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-9 class="item-title">\n            {{item.name}} ({{item.nextOccurenceDate | date:\'shortDate\'}})\n          </ion-col>\n          <ion-col col-3 class="right-align-small-text">\n            {{item.amount | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-item-group>\n  <!--Bill Section-->\n  <ion-item-group>\n    <ion-item-divider color="light">Bills</ion-item-divider>\n    <h6 class="no-item" *ngIf="bills.length === 0" padding-top>No Items Avaliable</h6>\n    <ion-item *ngFor="let item of bills">\n      <button ion-button clear item-start icon-only (click)="addToBudget(item)">\n        <ion-icon name="add" color="green"></ion-icon>\n      </button>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-9 class="item-title">\n            {{item.name}} ({{item.nextOccurenceDate | date:\'shortDate\'}})\n          </ion-col>\n          <ion-col col-3 class="right-align-small-text">\n            {{item.amount | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/budget/budget.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */]])
    ], BudgetPage);
    return BudgetPage;
}());

//# sourceMappingURL=budget.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(35);
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
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.profile = [];
        this.inDarkMode = false;
        dataService.dataChanged$.subscribe(function (dataChanged) {
            _this.loadProfile();
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.loadProfile();
    };
    ProfilePage.prototype.loadProfile = function () {
        var _this = this;
        this.dataService.getProfile().subscribe(function (profile) { return _this.profile = profile; }, function (error) { return _this.errorMessage = error; });
    };
    ProfilePage.prototype.onEditProfileDetails = function (profileData) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Profile Details',
            inputs: [{
                    name: 'name',
                    placeholder: 'Name',
                    value: profileData.name
                }, {
                    name: 'nickname',
                    placeholder: 'Nickname',
                    value: profileData.nickname
                }, {
                    name: 'jobtitle',
                    placeholder: 'Occupation',
                    value: profileData.jobtitle
                }, {
                    name: 'email',
                    placeholder: 'Email',
                    value: profileData.email
                }, {
                    name: 'phone',
                    placeholder: 'Phone',
                    value: profileData.phone
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel'
                }, {
                    text: 'Update',
                    handler: function (data) {
                        _this.dataService.updateProfile(profileData._id, data);
                    }
                }]
        });
        prompt.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Account\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let profileData of profile">\n    <ion-label class="user-name" text-center>{{profileData.name}}</ion-label>\n    <ion-label class="user-nickname" text-center>&nbsp;&nbsp;{{profileData.nickname}}</ion-label>\n    <ion-icon class="icon-user-detail" name="briefcase">&nbsp;&nbsp;{{profileData.jobtitle}}</ion-icon>\n    <ion-icon class="icon-user-detail" name="mail">&nbsp;&nbsp;{{profileData.email}}</ion-icon>\n    <ion-icon class="icon-user-detail" name="call">&nbsp;&nbsp;{{profileData.phone}}</ion-icon>\n    <button ion-button full clear (click)="onEditProfileDetails(profileData)">Edit Profile</button>\n  </ion-card>\n\n  <ion-item lines="full">\n    <ion-icon slot="start" name="moon"></ion-icon>\n    <ion-label>\n      Dark mode\n    </ion-label>\n    <ion-toggle id="themeToggle" slot="end"></ion-toggle>\n  </ion-item>\n\n  <ion-list *ngIf="1===0">\n    <button ion-button full outline large style="margin: 0em;">\n      <ion-icon name="color-palette" style="margin-right: 1em;"></ion-icon>\n      <ion-label text-left>Themes</ion-label>\n    </button>\n\n    <button ion-button full clear large style="margin: 0em;">\n      <ion-icon name="calendar" style="margin-right: 1em;"></ion-icon>\n      <ion-label text-left>Calendar</ion-label>\n    </button>\n    <button ion-button full outline large style="margin: 0em;">\n      <ion-icon name="stats" style="margin-right: 1em;"></ion-icon>\n      <ion-label text-left>Stats</ion-label>\n    </button>\n    <button ion-button full clear large style="margin: 0em;">\n      <ion-icon name="lock" style="margin-right: 1em;"></ion-icon>\n      <ion-label text-left>Security</ion-label>\n    </button>\n    <button ion-button full outline large style="margin: 0em;">\n      <ion-icon name="information-circle" style="margin-right: 1em;"></ion-icon>\n      <ion-label text-left>About</ion-label>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _c || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_records_records__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_dialog_service_dialog_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_calendar__ = __webpack_require__(246);
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
                __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__["b" /* RecordModal */],
                __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__["a" /* NewRecordModal */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__["a" /* PaymentModal */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_records_records__["a" /* RecordsPage */],
                __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__["b" /* RecordModal */],
                __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__["a" /* NewRecordModal */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__["a" /* PaymentModal */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__["b" /* PaymentServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__["c" /* RecordServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(226);
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__ = __webpack_require__(246);
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
    function DataServiceProvider(http, cal) {
        this.http = http;
        this.cal = cal;
        this.Records = [];
        this.Payments = [];
        this.ManualBudgetItems = [];
        this.baseURL = 'http://localhost:8080';
        //console.log('Data Service Provider Initialized');
        this.dataChangeSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
        this.setUpCalendar();
    }
    DataServiceProvider.prototype.setUpCalendar = function () {
        var _this = this;
        if (this.cal.hasReadWritePermission()) {
            this.cal.createCalendar("Kompass").then(function (msg) { _this.calendarMsg = msg; }, function (err) { _this.calendarErr = err; });
        }
        else {
            this.cal.requestReadWritePermission().then(function (msg) { _this.cal.createCalendar("Kompass"); });
            this.cal.createCalendar("Kompass").then(function (msg) { _this.calendarMsg = msg; }, function (err) { _this.calendarErr = err; });
        }
    };
    DataServiceProvider.prototype.addToCalendar = function (record) {
        var _this = this;
        var year = new Date(record.nextOccurenceDate).getUTCFullYear();
        var month = new Date(record.nextOccurenceDate).getUTCMonth();
        var day = new Date(record.nextOccurenceDate).getUTCDate();
        var startDate = new Date(year, month, day, 0, 0, 0, 0);
        var endDate = new Date(year, month, day, 24, 0, 0, 0);
        this.cal.createEventWithOptions(record.name, null, record.description, startDate, endDate, { calendarName: "Kompass" })
            .then(function (msg) { return _this.cal.openCalendar(new Date(year, month, day)); });
    };
    //handles extracting only the body of the server response
    DataServiceProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    //handles errors that occur
    DataServiceProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    /**
     * DATA RETRIEVALS
     */
    //PROFILE DATA
    DataServiceProvider.prototype.getProfile = function () {
        return this.http.get(this.baseURL + '/api/kompass/profile').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    DataServiceProvider.prototype.createProfile = function (profile) {
        var _this = this;
        this.http.post(this.baseURL + "/api/kompass/profile", profile).subscribe(function (res) {
            _this.profile = res,
                _this.dataChangeSubject.next(true);
        });
    };
    DataServiceProvider.prototype.updateProfile = function (id, profile) {
        var _this = this;
        this.http.put(this.baseURL + "/api/kompass/profile/" + id, profile).subscribe(function (res) {
            _this.profile = res,
                _this.dataChangeSubject.next(true);
        });
    };
    DataServiceProvider.prototype.deleteProfile = function (profile) {
        var _this = this;
        this.http.delete(this.baseURL + "/api/kompass/profile/" + profile._id).subscribe(function (res) {
            _this.profile = res,
                _this.dataChangeSubject.next(true);
        });
    };
    //RECORD DATA
    DataServiceProvider.prototype.getRecords = function () {
        return this.http.get(this.baseURL + '/api/kompass/records').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    DataServiceProvider.prototype.createRecord = function (record) {
        var _this = this;
        this.http.post(this.baseURL + "/api/kompass/records", record).subscribe(function (res) {
            _this.Records = res,
                _this.dataChangeSubject.next(true);
        });
    };
    DataServiceProvider.prototype.updateRecord = function (record) {
        var _this = this;
        this.http.put(this.baseURL + "/api/kompass/records/" + record._id, record).subscribe(function (res) {
            _this.Records = res,
                _this.dataChangeSubject.next(true);
        });
    };
    DataServiceProvider.prototype.deleteRecord = function (record) {
        var _this = this;
        this.http.delete(this.baseURL + "/api/kompass/records/" + record._id).subscribe(function (res) {
            _this.Records = res,
                _this.dataChangeSubject.next(true);
        });
    };
    //PAYMENT DATA
    DataServiceProvider.prototype.getRecordPayments = function (recordID) {
        var record = this.http.get(this.baseURL + "/api/kompass/records/" + recordID).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
        //@ts-ignore
        return record.payments;
    };
    //@ts-ignore
    DataServiceProvider.prototype.getPayment = function (id) {
        return this.http.get(this.baseURL + '/api/kompass/payments/' + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    DataServiceProvider.prototype.createPayment = function (record, payment) {
        var _this = this;
        var date = new Date(record.nextOccurenceDate);
        switch (record.occurenceLevel) {
            case 0://One Time
                //no change in occurence date
                break;
            case 1:// Daily
                date.setDate(date.getUTCDate() + 1);
                break;
            case 2:// Weekly
                date.setDate(date.getUTCDate() + 7);
                break;
            case 3://Bi-Weekly
                date.setDate(date.getUTCDate() + 14);
                break;
            case 4://Monthly
                date.setMonth(date.getUTCMonth() + 1);
                break;
            case 5://Yearly
                date.setFullYear(date.getUTCFullYear() + 1);
                break;
        }
        //record.nextOccurenceDate = date.toLocaleDateString().split("/").join("-");
        if (date.getUTCMonth() < 10) {
            if (date.getUTCDate() < 10) {
                record.nextOccurenceDate = date.getUTCFullYear() + "-0" + date.getUTCMonth() + "-0" + date.getUTCDate();
            }
            else {
                record.nextOccurenceDate = date.getUTCFullYear() + "-0" + date.getUTCMonth() + "-" + date.getUTCDate();
            }
        }
        else {
            if (date.getUTCDate() < 10) {
                record.nextOccurenceDate = date.getUTCFullYear() + "-" + date.getUTCMonth() + "-0" + date.getUTCDate();
            }
            else {
                record.nextOccurenceDate = date.getUTCFullYear() + "-" + date.getUTCMonth() + "-" + date.getUTCDate();
            }
        }
        this.http.post(this.baseURL + "/api/kompass/payments", payment).subscribe(function (res) {
            _this.Payments = res,
                //@ts-ignore
                record.payments.push(res._id),
                _this.updateRecord(record),
                _this.dataChangeSubject.next(true);
        });
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__["a" /* Calendar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__["a" /* Calendar */]) === "function" && _b || Object])
    ], DataServiceProvider);
    return DataServiceProvider;
    var _a, _b;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RecordServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecordModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRecordModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(35);
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
        var recordModal = this.modalCtrl.create(RecordModal, item);
        recordModal.present();
    };
    RecordServiceProvider.prototype.presentNewRecordModal = function (kind) {
        var newModal = this.modalCtrl.create(NewRecordModal, { kind: kind });
        newModal.present();
    };
    RecordServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object])
    ], RecordServiceProvider);
    return RecordServiceProvider;
    var _a, _b;
}());

var RecordModal = /** @class */ (function () {
    function RecordModal(params, alertCtrl, dataService, toastCtrl, viewCtrl, loadingCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        //formattedDate = new Date().toISOString();
        this.payments = [];
        this.record = params.data;
        //formats date for use on page
        //this.formattedDate = new Date( this.record.nextOccurenceDate ).toISOString();
        this.record.payments.forEach(function (id) {
            _this.dataService.getPayment(id).subscribe(function (payment) {
                _this.payments.push(payment);
            });
        });
    }
    //close record modal
    RecordModal.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    RecordModal.prototype.addToCalendar = function () {
        this.dataService.addToCalendar(this.record);
    };
    // updateDate(e){
    //   this.record.nextOccurenceDate = new Date(e).toLocaleDateString().split("/").join("-");
    // }
    RecordModal.prototype.updateRecord = function () {
        this.dataService.updateRecord(this.record);
        this.close();
    };
    RecordModal.prototype.deleteRecord = function () {
        this.dataService.deleteRecord(this.record);
        this.close();
    };
    RecordModal.prototype.presentDeletePrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Delete ' + this.record.name,
            message: "Are You Sure?",
            buttons: [
                {
                    text: 'No',
                    handler: function (data) {
                        //do nothing
                    }
                },
                {
                    text: 'Yes',
                    handler: function (data) {
                        _this.deleteRecord();
                    }
                }
            ]
        });
        prompt.present();
    };
    RecordModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/record-service/record.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        {{record.name}} \n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-input [(ngModel)]="record.name" type="text" placeholder="Name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Next Occurence Date</ion-label>\n            <ion-datetime [(ngModel)]="record.nextOccurenceDate" pickerFormat="MMM DD, YYYY" displayFormat="MMM DD, YYYY" placeholder="Select Date"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label>Occurence Level</ion-label>\n            <ion-select [(ngModel)]="record.occurenceLevel" placeholder="Select">\n                <ion-option value="0">One Time</ion-option>\n                <ion-option value="1">Daily</ion-option>\n                <ion-option value="2">Weekly</ion-option>\n                <ion-option value="3">Bi-Weekly</ion-option>\n                <ion-option value="4">Monthly</ion-option>\n                <ion-option value="5">Yearly</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label *ngIf="record.kind == 0">Direct Deposit</ion-label>\n            <ion-label *ngIf="record.kind == 1">Auto Pay</ion-label>\n            <ion-toggle [(ngModel)]="record.isAuto"></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" [(ngModel)]="record.amount" placeholder="Amount (Optional)"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-textarea [(ngModel)]="record.description" placeholder="Enter more information here..."></ion-textarea>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf="record.kind == 1">\n        <ion-list-header>Past Payments</ion-list-header>\n        <p *ngIf="payments.length === 0" text-center color="klightgray">No Past Payments :(</p>\n        <ion-item *ngFor="let payment of payments" style="height: 30px;">\n            <ion-grid>\n                <ion-row>\n                  <ion-col col-8>\n                    Payment<br>\n                    <p>{{payment.confnum}}</p>\n                  </ion-col>\n                  <ion-col col-4 text-right>\n                    {{payment.payDate | date}}\n                    <h3>{{payment.payAmount | currency}}</h3>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n        </ion-item>\n    </ion-list>\n    <button ion-button block large (click)="updateRecord()">\n        Update\n    </button>\n    <button ion-button block large (click)="addToCalendar()">\n        Send To Calendar\n    </button>\n    <button ion-button color="kred" block large (click)="presentDeletePrompt()">\n        Delete Record\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/record-service/record.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], RecordModal);
    return RecordModal;
    var _a, _b, _c, _d, _e, _f;
}());

var NewRecordModal = /** @class */ (function () {
    function NewRecordModal(params, dataService, toastCtrl, viewCtrl, loadingCtrl) {
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.kind = params.data.kind;
    }
    //close payment modal
    NewRecordModal.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NewRecordModal.prototype.createRecord = function () {
        // var year = this.nextOccurenceDate.substring(0,4);
        // var month = parseInt(this.nextOccurenceDate.substring(5,7)) - 1; //Jan starts at 0
        // var day = this.nextOccurenceDate.substring(8, this.nextOccurenceDate.length);
        // var date = new Date(parseInt(year), month, parseInt(day)).toLocaleDateString().split("/").join("-");
        this.dataService.createRecord({
            name: this.name,
            kind: this.kind,
            nextOccurenceDate: this.nextOccurenceDate,
            occurenceLevel: this.occurenceLevel,
            isAuto: this.isAuto,
            amount: this.amount,
            description: this.description,
            inBudget: false
        });
        this.close();
    };
    NewRecordModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/record-service/newRecord.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        {{name}} \n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-input [(ngModel)]="name" type="text" placeholder="Name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Next Occurence Date</ion-label>\n            <ion-datetime [(ngModel)]="nextOccurenceDate" pickerFormat="MMM DD, YYYY" displayFormat="MMM DD, YYYY" placeholder="Select Date"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label>Occurence Level</ion-label>\n            <ion-select [(ngModel)]="occurenceLevel" placeholder="Select">\n                <ion-option value="0">One Time</ion-option>\n                <ion-option value="1">Daily</ion-option>\n                <ion-option value="2">Weekly</ion-option>\n                <ion-option value="3">Bi-Weekly</ion-option>\n                <ion-option value="4">Monthly</ion-option>\n                <ion-option value="5">Yearly</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label *ngIf="kind == 0">Direct Deposit</ion-label>\n            <ion-label *ngIf="kind == 1">Auto Pay</ion-label>\n            <ion-toggle [(ngModel)]="isAuto"></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" [(ngModel)]="amount" placeholder="Amount (Optional)"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-textarea [(ngModel)]="description" placeholder="Enter more information here..."></ion-textarea>\n        </ion-item>\n    </ion-list>\n    <button ion-button block large (click)="createRecord()">\n        Create Record\n    </button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/record-service/newRecord.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], NewRecordModal);
    return NewRecordModal;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=record-service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_service_record_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service_data_service__ = __webpack_require__(35);
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
                        _this.recordService.presentNewRecordModal(0);
                    }
                }, {
                    text: 'Bill',
                    handler: function () {
                        _this.recordService.presentNewRecordModal(1);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__record_service_record_service__["c" /* RecordServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DialogServiceProvider);
    return DialogServiceProvider;
}());

//# sourceMappingURL=dialog-service.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.js.map