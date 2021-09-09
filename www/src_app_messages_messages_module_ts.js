(self["webpackChunkfirst_avenu"] = self["webpackChunkfirst_avenu"] || []).push([["src_app_messages_messages_module_ts"],{

/***/ 9967:
/*!*****************************************************!*\
  !*** ./src/app/messages/messages-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesPageRoutingModule": () => (/* binding */ messagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _messages_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.landing */ 2719);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 3567);





const routes = [
    {
        path: 'messages',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_1__.messagesPage,
    },
    {
        path: 'messages-landing',
        component: _messages_landing__WEBPACK_IMPORTED_MODULE_0__.messagesLanding,
    },
    {
        path: '',
        redirectTo: 'messages-landing',
        pathMatch: 'full'
    }
];
let messagesPageRoutingModule = class messagesPageRoutingModule {
};
messagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], messagesPageRoutingModule);



/***/ }),

/***/ 2719:
/*!**********************************************!*\
  !*** ./src/app/messages/messages.landing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesLanding": () => (/* binding */ messagesLanding)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_messages_landing_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./messages.landing.html */ 9732);
/* harmony import */ var _messages_landing_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.landing.scss */ 5901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);






let messagesLanding = class messagesLanding {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        };
    }
    ngOnInit() {
        setTimeout(() => { this.showAlert(); }, 1000);
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Messages Landing',
                message: `
                 <ul>
                 <li>The notifications can be turned on at registration as well</li>
                 <li>The information about messaging does not have a corresponding page</li>
                 </ul>`,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    back() {
        this.location.back();
    }
};
messagesLanding.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
messagesLanding = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-messages-landing',
        template: _raw_loader_messages_landing_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_messages_landing_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], messagesLanding);



/***/ }),

/***/ 4812:
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesPageModule": () => (/* binding */ messagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 3567);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-routing.module */ 9967);
/* harmony import */ var _messages_landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.landing */ 2719);









let messagesPageModule = class messagesPageModule {
};
messagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__.messagesPageRoutingModule
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_0__.messagesPage, _messages_landing__WEBPACK_IMPORTED_MODULE_3__.messagesLanding]
    })
], messagesPageModule);



/***/ }),

/***/ 3567:
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesPage": () => (/* binding */ messagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./messages.page.html */ 3273);
/* harmony import */ var _messages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss */ 2969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);






let messagesPage = class messagesPage {
    constructor(alertController, location) {
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
        setTimeout(() => { this.showAlert(); }, 1000);
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Messages',
                message: `
                 <ul>
                 <li>This is the only point in the app so far where payment and increase of purchasing power is mentioned. seems like there would be a module for that some where.</li>
                 </ul>`,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    back() {
        this.location.back();
    }
};
messagesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
messagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-messages',
        template: _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], messagesPage);



/***/ }),

/***/ 5901:
/*!************************************************!*\
  !*** ./src/app/messages/messages.landing.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  border-radius: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmxhbmRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoibWVzc2FnZXMubGFuZGluZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2969:
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  border-radius: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoibWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 9732:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.landing.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"back()\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide>\r\n          <img src=\"../assets/message1.png\" />\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img src=\"../assets/message2.png\" />\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img src=\"../assets/message3.png\" />\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\" style=\"padding-top:4em;\">\r\n    <ion-col>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <a>Turn On Notifications</a>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-button color=\"tertiary\" routerLink=\"../messages\">Let's Go</ion-button>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <a>Information About Messaging</a>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n<ion-footer>\r\n \r\n</ion-footer>\r\n");

/***/ }),

/***/ 3273:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"back()\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <p>Hello & Welcome to the First Avenu Messages</p>\r\n            <p>To start a new conversation, select from the options below or begin typing a new message.</p>\r\n            <p>Please do not share any sensitive account information here, such as account password or expiration dates.</p>\r\n            <p>this session may be monitored</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col style=\"text-align:center\">\r\n        <ion-button color=\"light\" shape=\"round\" size=\"small\">Make a Payment</ion-button>\r\n        <ion-button color=\"light\" shape=\"round\" size=\"small\">Increase Purchase Power</ion-button>\r\n        <ion-button color=\"light\" shape=\"round\" size=\"small\">Vacations</ion-button>\r\n        <ion-button color=\"light\" shape=\"round\" size=\"small\">Special Offers</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-textarea class=\"message-input\" placeholder=\"Type a message here\" rows=\"1\" autocapitalize=\"off\"\r\n                  #messageInput\r\n                  (keydown.enter)=\"sendMessage();false\"></ion-textarea>\r\n    <ion-send-button slot=\"end\">\r\n      <ion-button (click)=\"sendMessage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"send-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-send-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_messages_messages_module_ts.js.map