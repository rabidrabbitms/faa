(self["webpackChunkfirst_avenu"] = self["webpackChunkfirst_avenu"] || []).push([["src_app_shop_shop_module_ts"],{

/***/ 8098:
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shopPageRoutingModule": () => (/* binding */ shopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.page */ 900);




const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_0__.shopPage,
    }
];
let shopPageRoutingModule = class shopPageRoutingModule {
};
shopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], shopPageRoutingModule);



/***/ }),

/***/ 7838:
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shopPageModule": () => (/* binding */ shopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.page */ 900);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-routing.module */ 8098);








let shopPageModule = class shopPageModule {
};
shopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_2__.shopPageRoutingModule
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_0__.shopPage]
    })
], shopPageModule);



/***/ }),

/***/ 900:
/*!***********************************!*\
  !*** ./src/app/shop/shop.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shopPage": () => (/* binding */ shopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_shop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shop.page.html */ 5007);
/* harmony import */ var _shop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.page.scss */ 447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let shopPage = class shopPage {
    constructor() { }
};
shopPage.ctorParameters = () => [];
shopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-shop',
        template: _raw_loader_shop_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shop_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], shopPage);



/***/ }),

/***/ 447:
/*!*************************************!*\
  !*** ./src/app/shop/shop.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5007:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Shop\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"welcome-header\" >\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 style=\"color:darkblue\">Congratulations!</h1>\r\n          <h4>First Avenu VIP! Where do you want to get started?</h4>\r\n          <img src=\"../assets/Prequalify.png\" />\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div id=\"container\" style=\"align-content:center\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h3 style=\"color:darkblue\">Vacations</h3>\r\n          <img src=\"../assets/vacation1.png\" />\r\n          <ion-button expand=\"block\">Over 3000 Destinations!</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h3 style=\"color:darkblue\">Special Offers</h3>\r\n          <img style=\"padding-left: 2em\" src=\"../assets/specialoffers.png\" />\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <app-explore-container name=\"Shop page\"></app-explore-container>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_shop_shop_module_ts.js.map