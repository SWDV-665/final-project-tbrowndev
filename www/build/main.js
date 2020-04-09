webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_service_record_service__ = __webpack_require__(42);
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
    function DialogServiceProvider(recordService, modalCtrl, actionCtrl) {
        this.recordService = recordService;
        this.modalCtrl = modalCtrl;
        this.actionCtrl = actionCtrl;
        //console.log('Hello DialogServiceProvider Provider');
    }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__record_service_record_service__["b" /* RecordServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], DialogServiceProvider);
    return DialogServiceProvider;
}());

//# sourceMappingURL=dialog-service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaymentServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(33);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
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
        this.dataService.payBill(item);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__records_records__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(204);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__ = __webpack_require__(101);
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
        this.title = "Dashboard";
        this.upcomingTitle = "Upcoming Bills Due";
    }
    DashboardPage.prototype.loadBills = function () {
        return this.dataService.getBills();
    };
    DashboardPage.prototype.markPaid = function (bill) {
        this.paymentService.presentPaymentModal(bill);
    };
    DashboardPage.prototype.viewItem = function (item) {
        this.recordService.presentRecordModal(item);
    };
    DashboardPage.prototype.create = function () {
        this.dialogService.presentCreateSheet();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="create()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h2 style="text-align: center;">\n    {{upcomingTitle}}\n  </h2>\n  <hr>\n  <ion-list>\n    <!--Display a list of item objects-->\n    <h6 class="no-item" *ngIf="loadBills().length === 0">Whoo! No Upcoming Bills!</h6>\n    <ion-item-sliding *ngFor="let bill of loadBills()">\n      <ion-item (click)="viewItem(bill)">\n        <ion-grid no-padding>\n          <ion-row style="height: 30px;">\n            <ion-col col-1>\n              <ion-avatar>\n                <ion-icon name="cash"></ion-icon>\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-7 style="font-size: medium;vertical-align: middle;">\n              {{bill.reference}}\n            </ion-col>\n            <ion-col col-4 style="text-align: right;font-size: small;">\n              {{bill.nextDueDate | date}}<br>\n              <h3 style="color: red; font-weight: bold;">{{bill.amount | currency}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="left" (ionSwipe)="markPaid(bill)">\n        <button ion-button expandable (click)="markPaid(bill)">\n          <!--ion-icon name="checkmark"></ion-icon>-->\n          Mark Paid\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_payment_service_payment_service__["b" /* PaymentServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_payment_service_payment_service__["b" /* PaymentServiceProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_record_service_record_service__["b" /* RecordServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_record_service_record_service__["b" /* RecordServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */]) === "function" && _f || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_record_service_record_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dialog_service_dialog_service__ = __webpack_require__(101);
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
    RecordsPage.prototype.loadBills = function () {
        return this.dataService.getBills();
    };
    RecordsPage.prototype.loadIncome = function () {
        return this.dataService.getIncome();
    };
    RecordsPage.prototype.getPayTotal = function () {
        return this.dataService.getPaystubTotal();
    };
    RecordsPage.prototype.getBillTotal = function () {
        return this.dataService.getBillTotal();
    };
    RecordsPage.prototype.RecordSelected = function (item) {
        var toast = this.toastCtrl.create({
            message: item.name + " Selected",
            duration: 2500,
        });
        toast.present();
    };
    RecordsPage.prototype.viewRecord = function (item) {
        this.recordService.presentRecordModal(item);
    };
    RecordsPage.prototype.create = function () {
        this.dialogService.presentCreateSheet();
    };
    RecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-records',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Records\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="create()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <!--Tabs for each section of records-->\n    <ion-segment [(ngModel)]="records">\n      <ion-segment-button value="income">\n        Income\n      </ion-segment-button>\n      <ion-segment-button value="bills">\n        Bills\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <!--Tab data -->\n  <div [ngSwitch]="records">\n    <ion-list *ngSwitchCase="\'income\'">\n      <button ion-item *ngFor="let item of loadIncome()" (click)="viewRecord(item)" no-padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-7 style="font-size: small;">\n              {{item.name}}\n            </ion-col>\n            <ion-col col-5 text-right style="text-align: right;font-size: small;">\n              {{item.pay | currency}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </button>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-7>\n            Total\n          </ion-col>\n          <ion-col col-5 text-right style="text-align: right;font-size: small;">\n            {{getPayTotal() | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'bills\'">\n      <button ion-item *ngFor="let item of loadBills()" (click)="viewRecord(item)" no-padding style="font-size: small;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-7>\n              {{item.name}}\n            </ion-col>\n            <ion-col col-5 text-right style="text-align: right;font-size: small;">\n              {{item.amount | currency}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </button>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-7>\n            Total\n          </ion-col>\n          <ion-col col-5 text-right>\n            {{getBillTotal() | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_record_service_record_service__["b" /* RecordServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_dialog_service_dialog_service__["a" /* DialogServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], RecordsPage);
    return RecordsPage;
}());

//# sourceMappingURL=records.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(33);
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
    function BudgetPage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.budget = [];
        this.income = [];
        this.bills = [];
        this.income = this.dataService.getIncome();
        this.bills = this.dataService.getBills();
    }
    BudgetPage.prototype.getBudgetItems = function () {
        return this.budget;
    };
    BudgetPage.prototype.getIncomeItems = function () {
        return this.income;
    };
    BudgetPage.prototype.getBillItems = function () {
        return this.bills;
    };
    BudgetPage.prototype.onIncomeClick = function (item) {
        this.income.splice(this.income.indexOf(item), 1);
        this.budget.push(item);
    };
    BudgetPage.prototype.onBillClick = function (item) {
        this.bills.splice(this.bills.indexOf(item), 1);
        this.budget.push(item);
    };
    BudgetPage.prototype.onBudgetItemClick = function (item) {
        this.budget.splice(this.budget.indexOf(item), 1);
        console.log(item);
        if (item.constructor.name = 'Paystub') {
            this.income.push(item);
        }
        else {
            this.bills.push(item);
        }
    };
    BudgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-budget',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/budget/budget.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Budget\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-item-group>\n      <ion-item *ngFor="let item of getBudgetItems()">\n        <button ion-button clear item-start icon-only (click)="onBudgetItemClick(item)">\n          <ion-icon name="close" color="red"></ion-icon>\n        </button>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-9>\n              {{item.reference}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n  <ion-item-group>\n    <ion-item-divider color="light">Income</ion-item-divider>\n    <ion-item *ngFor="let item of getIncomeItems()">\n      <button ion-button clear item-start icon-only (click)="onIncomeClick(item)">\n        <ion-icon name="add" color="green"></ion-icon>\n      </button>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-9>\n            {{item.reference}}\n          </ion-col>\n          <ion-col col-3>\n            {{item.pay | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-item-group>\n  <ion-item-group>\n    <ion-item-divider color="light">Bills</ion-item-divider>\n    <ion-item *ngFor="let item of getBillItems()">\n      <button ion-button clear item-start icon-only (click)="onBillClick(item)">\n        <ion-icon name="add" color="green"></ion-icon>\n      </button>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-9>\n            {{item.reference}}\n          </ion-col>\n          <ion-col col-3>\n            {{item.amount | currency}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/budget/budget.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _b || Object])
    ], BudgetPage);
    return BudgetPage;
    var _a, _b;
}());

//# sourceMappingURL=budget.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(33);
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
    function ProfilePage(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.user = this.dataService.getUser();
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Name" value="{{user.fullName}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="Occupation" value="{{user.occupation}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="email" placeholder="Email" value="{{user.email}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="tel" placeholder="Phone" value="{{user.phone}}"></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_records_records__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_payment_service_payment_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_record_service_record_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_budget_service_budget_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_dialog_service_dialog_service__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
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

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kompass; });
var Kompass;
(function (Kompass) {
    var ActiveUser = /** @class */ (function () {
        function ActiveUser(fullName, occupation, email, phone) {
            this.fullName = fullName;
            this.occupation = occupation;
            this.email = email;
            this.phone = phone;
        }
        return ActiveUser;
    }());
    Kompass.ActiveUser = ActiveUser;
    var Paystub = /** @class */ (function () {
        function Paystub(reference, nextPayDate, occurenceLevel, isDirectDeposit, pay) {
            this.reference = reference;
            this.nextPayDate = nextPayDate;
            this.occurenceLevel = occurenceLevel;
            this.isDirectDeposit = isDirectDeposit;
            this.pay = pay;
        }
        return Paystub;
    }());
    Kompass.Paystub = Paystub;
    var Bill = /** @class */ (function () {
        function Bill(reference, nextDueDate, occurenceLevel, isAutopay, amount) {
            this.reference = reference;
            this.nextDueDate = nextDueDate;
            this.occurenceLevel = occurenceLevel;
            this.isAutopay = isAutopay;
            this.amount = amount;
        }
        return Bill;
    }());
    Kompass.Bill = Bill;
})(Kompass || (Kompass = {}));
//# sourceMappingURL=kompass-objects.js.map

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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kompass_objects__ = __webpack_require__(276);
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
        this.activeUser = new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].ActiveUser("John Smith", "Web Designer", "jdesign@smithdesigns.com", 2317683325);
        this.paystubs = [
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Paystub("Charter Tech Support", "2020-04-22", 2, true, 1632.85),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Paystub("Web Designer", "2020-04-29", 4, false, 2000.00)
        ];
        this.bills = [
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Netflix", "2020-03-28", 4, true, 15.99),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Hulu", "2020-03-28", 4, true, 7.99),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Electric", "2020-03-28", 4, false, 86.45),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Rent", "2020-03-28", 4, false, 1240.00),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Gas", "2020-03-28", 4, false, 23.65),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Water", "2020-03-28", 4, false, 30.00),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Sallie Mae (Student Loan)", "2020-03-28", 4, true, 259.98),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Sewer", "2020-03-28", 4, false, 42.00),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Internet", "2020-03-28", 4, true, 76.34),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Cell Phone", "2020-03-28", 4, true, 122.42),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].Bill("Cable", "2020-03-28", 4, true, 43.67)
        ];
        this.SummaryCards = [
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].SummaryCard("Income", this.getPaystubTotal(), "yellow"),
            new __WEBPACK_IMPORTED_MODULE_1__kompass_objects__["a" /* Kompass */].SummaryCard("Bills", this.getBillTotal(), "purple")
        ];
        //console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.getUser = function () {
        return this.activeUser;
    };
    DataServiceProvider.prototype.getCards = function () {
        return this.SummaryCards;
    };
    DataServiceProvider.prototype.getIncome = function () {
        return this.paystubs;
    };
    DataServiceProvider.prototype.getBills = function () {
        return this.bills;
    };
    DataServiceProvider.prototype.payBill = function (item) {
        this.bills.splice(this.bills.indexOf(item), 1);
    };
    DataServiceProvider.prototype.updateItem = function (item) {
        //this.items[this.items.indexOf(item)] = item;
    };
    DataServiceProvider.prototype.getPaystubTotal = function () {
        var total = 0.00;
        this.paystubs.forEach(function (stub) {
            total += stub.pay;
        });
        return total;
    };
    DataServiceProvider.prototype.getBillTotal = function () {
        var total = 0.00;
        this.bills.forEach(function (bill) {
            total += bill.amount;
        });
        return total;
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecordServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(33);
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
    RecordServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
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
        this.type = this.item.constructor.name;
    }
    //close payment modal
    RecordModal.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    RecordModal.prototype.updateRecord = function (item) {
        this.dataService.updateItem(item);
        this.close();
    };
    RecordModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/record-service/record.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        {{item.name}} \n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<!--Bill Records Update-->\n<ion-content *ngIf="type === \'Bill\'">\n    <ion-list>\n        <ion-item>\n            <ion-input type="text" placeholder="Name" [(ngModel)]="item.name"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n            <ion-label>Auto Pay</ion-label>\n            <ion-toggle [(ngModel)]="item.isAutopay"></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-label>Date Due</ion-label>\n            <ion-datetime pickerFormat="MMM DD, YYYY" displayFormat="MMM DD, YYYY" placeholder="Select Date" [(ngModel)]="item.nextDueDate"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" placeholder="Amount (Optional)" [(ngModel)]="item.amount"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list><!--if record is a bill or credit card-->\n        <ion-list-header>\n            Past Payments\n        </ion-list-header>\n        <ion-item>Previous Payment 1</ion-item>\n        <ion-item>Previous Payment 2</ion-item>\n        <ion-item>Previous Payment 3</ion-item>\n        <ion-item>Previous Payment 4</ion-item>\n    </ion-list>\n    <button ion-button block large (click)="updateRecord(item)">\n        Update Bill\n    </button>\n</ion-content>\n\n<!--Paystub Records Update-->\n<ion-content *ngIf="type === \'Paystub\'">\n    <ion-list>\n        <ion-item>\n            <ion-input type="text" placeholder="Name" [(ngModel)]="item.name"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item>\n            <ion-label>Direct Deposit</ion-label>\n            <ion-toggle [(ngModel)]="item.isDirectDeposit"></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-label>Next Pay Date</ion-label>\n            <ion-datetime pickerFormat="MMM DD, YYYY" displayFormat="MMM DD, YYYY" placeholder="Select Date" [(ngModel)]="item.nextPayDate"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" placeholder="Amount (Optional)" [(ngModel)]="item.pay"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list><!--if record is a bill or credit card-->\n        <ion-list-header>\n            Past Paystubs\n        </ion-list-header>\n        <ion-item>Previous Paystub 1</ion-item>\n        <ion-item>Previous Paystub 2</ion-item>\n        <ion-item>Previous Paystub 3</ion-item>\n        <ion-item>Previous Paystub 4</ion-item>\n    </ion-list>\n    <button ion-button block large (click)="updateRecord(item)">\n        Update Paystub\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/record-service/record.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RecordModal);
    return RecordModal;
}());

//# sourceMappingURL=record-service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map