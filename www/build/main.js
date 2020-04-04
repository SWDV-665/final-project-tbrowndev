webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__records_records__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(199);
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(41);
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
    function DashboardPage(navCtrl, toastCtrl, dataService, dialogService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.dialogService = dialogService;
        this.title = "Dashboard";
        this.upcomingTitle = "Upcoming Bills Due";
    }
    DashboardPage.prototype.loadCards = function () {
        return this.dataService.getCards();
    };
    DashboardPage.prototype.loadBills = function () {
        return this.dataService.getUpcomingBills();
    };
    DashboardPage.prototype.markPaid = function (bill) {
        this.dialogService.presentPaymentModal(bill);
    };
    DashboardPage.prototype.viewItem = function (item) {
        this.dialogService.presentRecordModal(item);
    };
    DashboardPage.prototype.create = function () {
        this.dialogService.presentCreateSheet();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="create()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-scroll scrollX="true" direction="x">\n    <ion-card class="ion-card-square" *ngFor="let card of loadCards()">\n      <button ion-button large style="height: 155pt; width: 180pt;" color={{card.color}}>\n        <div class="card-title">{{card.name}}</div>\n        <div class="card-subtitle">{{card.total | currency}}</div>\n      </button>\n    </ion-card>\n  </ion-scroll>\n\n  <h2 style="text-align: center;">\n    {{upcomingTitle}}\n  </h2>\n  <hr>\n  <ion-list>\n    <!--Display a list of item objects-->\n    <h6 class="no-item" *ngIf="loadBills().length === 0">Whoo! No Upcoming Bills!</h6>\n    <ion-item-sliding *ngFor="let bill of loadBills()">\n      <ion-item (click)="viewItem(bill)">\n        <ion-grid>\n          <ion-row style="height: 30px;">\n            <ion-col col-1>\n              <ion-avatar>\n                <ion-icon name="cash"></ion-icon>\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-7 style="font-size: medium;vertical-align: middle;">\n              {{bill.name}}\n            </ion-col>\n            <ion-col col-4 style="text-align: right;font-size: small;">\n              {{bill.duedate | date}}<br>\n              <h3 style="color: red; font-weight: bold;">{{bill.amount | currency}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="left" (ionSwipe)="markPaid(bill)">\n        <button ion-button expandable (click)="markPaid(bill)">\n          <!--ion-icon name="checkmark"></ion-icon>-->\n          Mark Paid\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(41);
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
    function RecordsPage(navCtrl, dialogService, toastCtrl, dataService) {
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
    RecordsPage.prototype.loadCreditCards = function () {
        return this.dataService.getCreditCards();
    };
    RecordsPage.prototype.loadSavings = function () {
        return this.dataService.getSavings();
    };
    RecordsPage.prototype.loadMisc = function () {
        return this.dataService.getMisc();
    };
    RecordsPage.prototype.RecordSelected = function (item) {
        var toast = this.toastCtrl.create({
            message: item.name + " Selected",
            duration: 2500,
        });
        toast.present();
    };
    RecordsPage.prototype.viewRecord = function (item) {
        this.dialogService.presentRecordModal(item);
    };
    RecordsPage.prototype.create = function () {
        this.dialogService.presentCreateSheet();
    };
    RecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-records',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Records\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="create()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <!--Tabs for each section of records-->\n    <ion-segment [(ngModel)]="records">\n      <ion-segment-button value="income">\n        Income\n      </ion-segment-button>\n      <ion-segment-button value="bills">\n        Bills\n      </ion-segment-button>\n      <ion-segment-button value="savings">\n        Savings\n      </ion-segment-button>\n      <ion-segment-button value="creditCards">\n        Cards\n      </ion-segment-button>\n      <ion-segment-button value="misc">\n        Misc.\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <!--Tab data -->\n  <div [ngSwitch]="records">\n    <ion-list *ngSwitchCase="\'income\'">\n      <button ion-item *ngFor="let item of loadIncome()" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'bills\'">\n      <button ion-item *ngFor="let item of loadBills()" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'savings\'">\n      <button ion-item *ngFor="let item of loadSavings()" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'creditCards\'">\n      <button ion-item *ngFor="let item of loadCreditCards()" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'misc\'">\n      <button ion-item *ngFor="let item of loadMisc()" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], RecordsPage);
    return RecordsPage;
}());

//# sourceMappingURL=records.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    function BudgetPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BudgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-budget',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/budget/budget.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Budget\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/budget/budget.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], BudgetPage);
    return BudgetPage;
}());

//# sourceMappingURL=budget.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(40);
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
            selector: 'page-profile',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      <!--<image src="">-->\n    </ion-list-header>\n    <ion-item>\n      <ion-input type="text" placeholder="Name" value="{{user.name}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="email" placeholder="Email" value="{{user.email}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="tel" placeholder="Phone" value="{{user.phone}}"></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_records_records__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_input_dialog_service_input_dialog_service__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_12__providers_input_dialog_service_input_dialog_service__["c" /* RecordModal */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__providers_input_dialog_service_input_dialog_service__["b" /* PaymentModal */],
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
                __WEBPACK_IMPORTED_MODULE_12__providers_input_dialog_service_input_dialog_service__["c" /* RecordModal */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__providers_input_dialog_service_input_dialog_service__["b" /* PaymentModal */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_input_dialog_service_input_dialog_service__["a" /* InputDialogServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.activeUser = {
            name: "John Smith",
            email: "jsmith@me.com",
            phone: 3428970856
        };
        //types - 1:Income, 2:Bills, 3:Savings, 4:Credit Cards, 5:Misc
        this.items = [
            { name: "Charter Tech Support", id: "CRTKCG", amount: 1756.04, autopay: false, type: 1 },
            { name: "Web Designer", id: "WD73R", amount: 465.87, autopay: false, type: 1 },
            { name: "NetFlix", id: "NETF865", duedate: "2020-03-28", amount: 10.99, autopay: false, type: 2 },
            { name: "Hulu", id: "HU56", duedate: "2020-03-28", amount: 7.99, autopay: true, type: 2 },
            { name: "Electric", id: "ELE867", duedate: "2020-03-28", amount: 103.25, autopay: true, type: 2 },
            { name: "Rent", id: "APRT124", duedate: "2020-03-28", amount: 1945.00, autopay: true, type: 2 },
            { name: "Gas", id: "GAS90", duedate: "2020-03-28", amount: 23.34, autopay: true, type: 2 },
            { name: "Water", id: "WT56", duedate: "2020-03-28", amount: 22.56, autopay: false, type: 2 },
            { name: "Sallie Mae (Student Loan)", id: "LODWS", duedate: "2020-03-28", amount: 264.23, autopay: true, type: 2 },
            { name: "Sewer", id: "SERHT5", duedate: "2020-03-28", amount: 42.00, autopay: true, type: 2 },
            { name: "Internet (Charter)", id: "INET43", duedate: "2020-03-28", amount: 78.00, autopay: true, type: 2 },
            { name: "Cell Phone (AT&T)", id: "CPATG6", duedate: "2020-03-28", amount: 143.54, autopay: false, type: 2 },
            { name: "Cable (Charter)", id: "CBL226", duedate: "2020-03-28", amount: 44.26, autopay: false, type: 2 },
            { name: "Christmas Fund", id: "CF845", amount: 2000.00, type: 3 },
            { name: "Primary Savings", id: "01PS", amount: 22432.84, type: 3 },
            { name: "Travel Fund", id: "TRAVEL", amount: 868.00, type: 3 },
            { name: "Emergency", id: "EMER911", amount: 4500.00, type: 3 },
            { name: "Travel Rewards", id: "REWARD39", amount: 0.00, duedate: "2020-03-28", type: 4 },
            { name: "Master Credit", id: "MASTERC", amount: 500.00, duedate: "2020-03-28", type: 4 },
            { name: "401K", id: "93G6", amount: 23000.00, type: 5 },
            { name: "Stock", id: "NJS3DF", amount: 6000.00, type: 5 },
            { name: "CDs", id: "BSWW612", amount: 800.00, type: 5 }
        ];
        //name, total, color
        this.cards = [
            { name: "Income", total: 0.00, color: "green" },
            { name: "Bills", total: 0.00, color: "red" },
            { name: "Savings", total: 0.00, color: "blue" },
            { name: "Credit Cards", total: 0.00, color: "orange" },
            { name: "Misc", total: 0.00, color: "light" },
        ];
        //console.log('Hello DataServiceProvider Provider');
        this.loadCards();
    }
    DataServiceProvider.prototype.loadCards = function () {
        var _this = this;
        this.items.forEach(function (item) {
            switch (item.type) {
                case 1:
                    _this.updateCard("Income", item.amount);
                    break;
                case 2:
                    _this.updateCard("Bills", item.amount);
                    break;
                case 3:
                    _this.updateCard("Savings", item.amount);
                    break;
                case 4:
                    _this.updateCard("Credit Cards", item.amount);
                    break;
                case 5:
                    _this.updateCard("Misc", item.amount);
                    break;
            }
        });
    };
    DataServiceProvider.prototype.updateCard = function (type, amount) {
        this.cards.forEach(function (card) {
            if (card.name == type) {
                card.total = card.total + amount;
            }
        });
    };
    DataServiceProvider.prototype.getUser = function () {
        return this.activeUser;
    };
    DataServiceProvider.prototype.getIncome = function () {
        var income = [];
        this.items.forEach(function (item) {
            if (item.type === 1) {
                income.push(item);
            }
            ;
        });
        return income;
    };
    DataServiceProvider.prototype.getBills = function () {
        var bills = [];
        this.items.forEach(function (item) {
            if (item.type === 2) {
                bills.push(item);
            }
            ;
        });
        return bills;
    };
    DataServiceProvider.prototype.getUpcomingBills = function () {
        //apply logic to check for bills that are due in the next 14 days.  
        var bills = [];
        this.items.forEach(function (item) {
            if (item.type === 2) {
                bills.push(item);
            }
            ;
        });
        return bills;
    };
    DataServiceProvider.prototype.getSavings = function () {
        var savings = [];
        this.items.forEach(function (item) {
            if (item.type === 3) {
                savings.push(item);
            }
            ;
        });
        return savings;
    };
    DataServiceProvider.prototype.getCreditCards = function () {
        var creditCards = [];
        this.items.forEach(function (item) {
            if (item.type === 4) {
                creditCards.push(item);
            }
            ;
        });
        return creditCards;
    };
    DataServiceProvider.prototype.getMisc = function () {
        var misc = [];
        this.items.forEach(function (item) {
            if (item.type === 5) {
                misc.push(item);
            }
            ;
        });
        return misc;
    };
    DataServiceProvider.prototype.getCards = function () {
        return this.cards;
    };
    DataServiceProvider.prototype.payBill = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    DataServiceProvider.prototype.updateItem = function (item) {
        this.items[this.items.indexOf(item)] = item;
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDialogServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaymentModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RecordModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(40);
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
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InputDialogServiceProvider = /** @class */ (function () {
    function InputDialogServiceProvider(modalCtrl, actionCtrl) {
        this.modalCtrl = modalCtrl;
        this.actionCtrl = actionCtrl;
        //console.log('Hello InputDialogServiceProvider Provider');
    }
    InputDialogServiceProvider.prototype.presentPaymentModal = function (item) {
        var paymentModal = this.modalCtrl.create(PaymentModal, item);
        paymentModal.present();
    };
    InputDialogServiceProvider.prototype.presentRecordModal = function (item) {
        var recordModal = this.modalCtrl.create(RecordModal, item);
        recordModal.present();
    };
    InputDialogServiceProvider.prototype.presentCreateSheet = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'Create',
            buttons: [
                {
                    text: 'Income',
                    handler: function () {
                        _this.presentRecordModal({ type: 1 });
                    }
                }, {
                    text: 'Bill',
                    handler: function () {
                        _this.presentRecordModal({ type: 2 });
                    }
                }, {
                    text: 'Saving',
                    handler: function () {
                        _this.presentRecordModal({ type: 3 });
                    }
                }, {
                    text: 'Credit Card',
                    handler: function () {
                        _this.presentRecordModal({ type: 4 });
                    }
                }, {
                    text: 'Misc',
                    handler: function () {
                        _this.presentRecordModal({ type: 5 });
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
    InputDialogServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object])
    ], InputDialogServiceProvider);
    return InputDialogServiceProvider;
    var _a, _b;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/input-dialog-service/payment.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        Payment to {{item.name}} \n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="cancel()">\n                <span ion-text color="primary">Cancel</span>\n                <ion-icon name="close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n  \n<ion-content padding-top>\n    <ion-card>\n        <ion-card-header>\n          {{item.name}} ({{item.id}})\n        </ion-card-header>\n        <ion-card-content>\n          <p>Due Date: {{item.duedate}}</p>\n          <p>Amout Due: ${{item.amount}}</p>\n        </ion-card-content>\n    </ion-card>\n\n    <!--Payment details-->\n    <ion-item>\n        <ion-label>Paid Full Amount</ion-label>\n        <ion-toggle checked="true" (ionChange)=paymentChange()></ion-toggle>\n    </ion-item>\n    <ion-item *ngIf="isPartialPayment() === true">\n        <ion-input type="number" [(ngModel)]="paymentDetails.payAmount"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Date Paid</ion-label>\n        <ion-datetime [(ngModel)]="paymentDetails.payDate" displayFormat="MM/DD/YYYY" pickerFormat="MMMM/DD/YYYY"></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-label>Confirmation #</ion-label>\n        <ion-input type="text" [(ngModel)]="paymentDetails.conNum"></ion-input>\n    </ion-item>\n\n    <button ion-button block large (click)="markPaid(item, paymentDetails)">\n        Mark as Paid\n    </button>\n</ion-content>\n  '/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/input-dialog-service/payment.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
    ], PaymentModal);
    return PaymentModal;
    var _a, _b, _c, _d, _e;
}());

//Viewer Modal For All Records.
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
        this.dataService.updateItem(item);
        this.close();
    };
    RecordModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/input-dialog-service/record.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        {{item.name}} \n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="close()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item>\n            <ion-input type="text" placeholder="Name" [(ngModel)]="item.name"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item *ngIf="item.type === 2 || item.type === 4">\n            <ion-label>Auto Pay</ion-label>\n            <ion-toggle [(ngModel)]="item.autopay"></ion-toggle>\n        </ion-item>\n        <ion-item *ngIf="item.type === 2 || item.type === 4">\n            <ion-label>Date Due</ion-label>\n            <ion-datetime pickerFormat="MMM DD, YYYY" displayFormat="MMM DD, YYYY" placeholder="Select Date" [(ngModel)]="item.duedate"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-input type="number" placeholder="Amount (Optional)" [(ngModel)]="item.amount"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf="item.type === 2 || item.type === 4"><!--if record is a bill or credit card-->\n        <ion-list-header>\n            Past Payments\n        </ion-list-header>\n        <ion-item>Previous Payment 1</ion-item>\n        <ion-item>Previous Payment 2</ion-item>\n        <ion-item>Previous Payment 3</ion-item>\n        <ion-item>Previous Payment 4</ion-item>\n    </ion-list>\n    <button ion-button block large (click)="updateRecord(item)">\n        Update\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/providers/input-dialog-service/record.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
    ], RecordModal);
    return RecordModal;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=input-dialog-service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map