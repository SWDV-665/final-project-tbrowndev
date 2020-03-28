webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__records_records__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(197);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="dashboardTab" tabTitle="Dashboard" tabIcon="home"></ion-tab>\n  <ion-tab [root]="recordTab" tabTitle="Records" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="budgetTab" tabTitle="Budget" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="profileTab" tabTitle="Profile" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    function DashboardPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.title = "Dashboard";
        this.upcomingTitle = "Upcoming Bills Due";
        this.bills = [
            { name: "NetFlix", id: "NETF865", duedate: "3/28/2020", amountdue: 10.99 },
            { name: "Hulu", id: "HU56", duedate: "3/28/2020", amountdue: 7.99 },
            { name: "Electric", id: "ELE867", duedate: "3/28/2020", amountdue: 103.25 },
            { name: "Rent", id: "APRT124", duedate: "3/28/2020", amountdue: 945.00 },
            { name: "Gas", id: "GAS90", duedate: "3/28/2020", amountdue: 23.34 },
            { name: "Water", id: "WT56", duedate: "3/28/2020", amountdue: 22.56 },
            { name: "Sallie Mae (Student Loan)", id: "LODWS", duedate: "3/28/2020", amountdue: 264.23 },
            { name: "Sewer", id: "SERHT5", duedate: "3/28/2020", amountdue: 42.00 },
            { name: "Internet (Charter)", id: "INET43", duedate: "3/28/2020", amountdue: 78.00 },
            { name: "Cell Phone (AT&T)", id: "CPATG6", duedate: "3/28/2020", amountdue: 143.54 },
            { name: "Cable (Charter)", id: "CBL226", duedate: "3/28/2020", amountdue: 44.26 }
        ];
        this.cards = [
            {
                name: "Income",
                total: 13452.54,
                color: "green"
            },
            {
                name: "Bills",
                total: 13452.54,
                color: "red"
            },
            {
                name: "Credit Cards",
                total: 13452.54,
                color: "blue"
            },
            {
                name: "Savings",
                total: 13452.54,
                color: "indigo"
            },
            {
                name: "Misc",
                total: 13452.54,
                color: "yellow"
            },
        ];
    }
    DashboardPage.prototype.markPaid = function (bill, index) {
        //console.log("Item Removed: ", bill)
        //this.bills.splice(index, 1);
        var toast = this.toastCtrl.create({
            message: bill.name + " Marked as Paid",
            duration: 5000,
            showCloseButton: true
        });
        toast.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-scroll scrollX="true" direction="x">\n    <ion-card class="ion-card-square" *ngFor="let card of cards">\n      <button ion-button large style="height: 155pt; width: 180pt;" color={{card.color}}>\n        <div class="card-title">{{card.name}}</div>\n        <div class="card-subtitle">${{card.total}}</div>\n      </button>\n    </ion-card>\n  </ion-scroll>\n\n  <h2 style="text-align: center;">\n    {{upcomingTitle}}\n  </h2>\n  <ion-list>\n    <!--Display a list of item objects-->\n    <ion-item-sliding *ngFor="let bill of bills; let i = index">\n      <ion-item>\n        <ion-grid>\n          <ion-row style="height: 30px;">\n            <ion-col col-1>\n              <ion-avatar>\n                <ion-icon name="cash"></ion-icon>\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-7 style="font-size: medium;vertical-align: middle;">\n              {{bill.name}}\n            </ion-col>\n            <ion-col col-4 style="text-align: right;font-size: small;">\n              {{bill.duedate}}<br>\n              <h3 style="color: red; font-weight: bold;">${{bill.amountdue}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="left" (ionSwipe)="markPaid(bill, index)">\n        <button ion-button expandable (click)="markPaid(bill, index)">\n          <!--ion-icon name="checkmark"></ion-icon>-->\n          Mark Paid\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _b || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    function RecordsPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        //Sets income as the selected section
        this.records = "income";
        this.income = [
            { name: "Charter Tech Support", id: "CRTKCG" },
            { name: "Web Designer", id: "WD73R" }
        ];
        this.bills = [
            { name: "NetFlix", id: "NETF865" },
            { name: "Hulu", id: "HU56" },
            { name: "Electric", id: "ELE867" },
            { name: "Rent", id: "APRT124" },
            { name: "Gas", id: "GAS90" },
            { name: "Water", id: "WT56" },
            { name: "Sallie Mae (Student Loan)", id: "LODWS" },
            { name: "Sewer", id: "SERHT5" },
            { name: "Internet (Charter)", id: "INET43" },
            { name: "Cell Phone (AT&T)", id: "CPATG6" },
            { name: "Cable (Charter)", id: "CBL226" }
        ];
        this.savings = [
            { name: "Christmas Fund", id: "CF845" },
            { name: "Primary Savings", id: "01PS" },
            { name: "Travel Fund", id: "TRAVEL" },
            { name: "Emergency", id: "EMER911" }
        ];
        this.creditCards = [
            { name: "Travel Rewards", id: "REWARD39" },
            { name: "Master Credit", id: "MASTERC" }
        ];
        this.misc = [
            { name: "401K", id: "93G6" },
            { name: "Stock", id: "NJS3DF" },
            { name: "CDs", id: "BSWW612" }
        ];
    }
    RecordsPage.prototype.RecordSelected = function (item) {
        var toast = this.toastCtrl.create({
            message: item.name + " Selected",
            duration: 2500,
        });
        toast.present();
    };
    RecordsPage.prototype.viewRecord = function (item) {
        this.navCtrl.push(ViewerPage, { record: item });
    };
    RecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-records',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Records\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <!--Tabs for each section of records-->\n    <ion-segment [(ngModel)]="records">\n      <ion-segment-button value="income">\n        Income\n      </ion-segment-button>\n      <ion-segment-button value="bills">\n        Bills\n      </ion-segment-button>\n      <ion-segment-button value="savings">\n        Savings\n      </ion-segment-button>\n      <ion-segment-button value="creditCards">\n        Cards\n      </ion-segment-button>\n      <ion-segment-button value="misc">\n        Misc.\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <!--Tab data -->\n  <div [ngSwitch]="records">\n    <ion-list *ngSwitchCase="\'income\'">\n      <button ion-item *ngFor="let item of income" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'bills\'">\n      <button ion-item *ngFor="let item of bills" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'savings\'">\n      <button ion-item *ngFor="let item of savings" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'creditCards\'">\n      <button ion-item *ngFor="let item of creditCards" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'misc\'">\n      <button ion-item *ngFor="let item of misc" (click) = "viewRecord(item)">\n        {{item.name}}\n      </button>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/records.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _b || Object])
    ], RecordsPage);
    return RecordsPage;
    var _a, _b;
}());

var ViewerPage = /** @class */ (function () {
    function ViewerPage(params) {
        this.record = params.data.record;
    }
    ViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/recordDetails.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{record.name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  I am the Item Viewer Page!<br>\n  Nice to meet you :)\n</ion-content>'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/records/recordDetails.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _a || Object])
    ], ViewerPage);
    return ViewerPage;
    var _a;
}());

//# sourceMappingURL=records.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BudgetPage);
    return BudgetPage;
}());

//# sourceMappingURL=budget.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_records_records__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(192);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_records_records__["b" /* ViewerPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_records_records__["a" /* RecordsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_records_records__["b" /* ViewerPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/app/app.html"*/'<ion-menu [content]="mycontent">\n    <ion-header padding>\n        <ion-title>Create</ion-title>\n    </ion-header>\n    <ion-content padding>\n        <button ion-button block clear><ion-icon name="cash"></ion-icon>Income</button>\n        <button ion-button block clear><ion-icon name="receipt"></ion-icon>Bill</button>\n        <button ion-button block clear><ion-icon name="card"></ion-icon>Credit Card</button>\n        <button ion-button block clear><ion-icon name="wallet"></ion-icon>Savings</button>\n        <button ion-button block clear><ion-icon name="star"></ion-icon>Misc.</button>\n    </ion-content>\n    <ion-footer>\n        <ion-toolbar>\n            <button ion-button full clear><ion-icon name="settings"></ion-icon> Settings</button>\n        </ion-toolbar>\n    </ion-footer>\n</ion-menu>\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/tbrown/Documents/SWDV665/final-project-tbrowndev/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map