(self["webpackChunkfirst_avenu"] = self["webpackChunkfirst_avenu"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _login_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.register */ 9108);
/* harmony import */ var _login_signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.signin */ 5508);






const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: 'app-login-register',
        component: _login_register__WEBPACK_IMPORTED_MODULE_1__.LoginRegister
    },
    {
        path: 'signin',
        component: _login_signin__WEBPACK_IMPORTED_MODULE_2__.LoginSignin
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 2572:
/*!*******************************************!*\
  !*** ./src/app/login/login.foreground.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForeground": () => (/* binding */ LoginForeground)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_foreground_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.foreground.html */ 6541);
/* harmony import */ var _login_foreground_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.foreground.scss */ 6181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let LoginForeground = class LoginForeground {
    constructor(animationCtrl) {
        this.animationCtrl = animationCtrl;
    }
    ngOnInit() {
        this.createAnimation('.chat1', '', '0', '5', 950);
    }
    createAnimation(element, movementStyle, movementStart, movementEnd, duration) {
        if (movementStyle == 'vertical') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        if (movementStyle == 'horizontal') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        else {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration).keyframes([
                { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
                { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
                { offset: 1, transform: 'scale(1)', opacity: '1' }
            ]);
            animation.play();
        }
    }
};
LoginForeground.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AnimationController }
];
LoginForeground = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login-foreground',
        template: _raw_loader_login_foreground_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_foreground_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginForeground);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _login_foreground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.foreground */ 2572);
/* harmony import */ var _login_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.register */ 9108);
/* harmony import */ var _login_signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.signin */ 5508);










let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, _login_foreground__WEBPACK_IMPORTED_MODULE_2__.LoginForeground, _login_register__WEBPACK_IMPORTED_MODULE_3__.LoginRegister, _login_signin__WEBPACK_IMPORTED_MODULE_4__.LoginSignin]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let LoginPage = class LoginPage {
    constructor(animationCtrl, alertController) {
        this.animationCtrl = animationCtrl;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.createAnimation('.cloud', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.cloud2', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.cloud3', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.cloud4', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.cloud5', 'horizontal', '0', '1000', 200000);
        this.createAnimation('.balloon', 'horizontal', '0', '1000', 100000);
        this.createAnimation('.airplane', 'horizontal', '0', '-1000', 10000);
        this.createAnimation('.sailboat', 'horizontal', '0', '-1000', 100000);
        this.createAnimation('.boat', 'horizontal', '0', '10000', 100000);
        this.createAnimation('.palms', 'vertical', '0', '10', 20000);
        setTimeout(() => { this.showAlert(); }, 1000);
    }
    createAnimation(element, movementStyle, movementStart, movementEnd, duration) {
        if (movementStyle == 'vertical') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        if (movementStyle == 'horizontal') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        else {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .fromTo('transform', 'rotate(' + movementStart + 'deg)', 'rotate(' + movementEnd + 'deg)');
            animation.play();
        }
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Welcome!',
                subHeader: 'This is the walk through of the brand new First-Avenu App',
                message: 'Messages like this will appear from time to time with dev notes and important items such as... IT needs the full copy for the chat boxes here to finish animating this screen.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AnimationController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 9108:
/*!*****************************************!*\
  !*** ./src/app/login/login.register.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRegister": () => (/* binding */ LoginRegister)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_register_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.register.html */ 5161);
/* harmony import */ var _login_register_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.register.scss */ 2197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);






let LoginRegister = class LoginRegister {
    constructor(animationCtrl, alertController, formBuilder) {
        this.animationCtrl = animationCtrl;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            VerifyPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    ngOnInit() {
        this.createAnimation('.chat1', '', '0', '5', 950);
        setTimeout(() => { this.showAlert(); }, 1000);
    }
    createAnimation(element, movementStyle, movementStart, movementEnd, duration) {
        if (movementStyle == 'vertical') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        if (movementStyle == 'horizontal') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        else {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration).keyframes([
                { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
                { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
                { offset: 1, transform: 'scale(1)', opacity: '1' }
            ]);
            animation.play();
        }
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'registration',
                message: 'all the fields have form validation and are required. They are optimized by for autofill on devices (not shown here because web demos are dumb). For this demo you can skip ahead and click the buttons or links to continue',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginRegister.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
LoginRegister = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login-register',
        template: _raw_loader_login_register_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_register_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginRegister);



/***/ }),

/***/ 5508:
/*!***************************************!*\
  !*** ./src/app/login/login.signin.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginSignin": () => (/* binding */ LoginSignin)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_signin_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.signin.html */ 7342);
/* harmony import */ var _login_signin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.signin.scss */ 5163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);






let LoginSignin = class LoginSignin {
    constructor(animationCtrl, alertController, formBuilder) {
        this.animationCtrl = animationCtrl;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            VerifyPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    ngOnInit() {
        this.createAnimation('.chat1', '', '0', '5', 950);
        setTimeout(() => { this.showAlert(); }, 1000);
    }
    createAnimation(element, movementStyle, movementStart, movementEnd, duration) {
        if (movementStyle == 'vertical') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        if (movementStyle == 'horizontal') {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration)
                .iterations(Infinity)
                .easing('ease-in')
                .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
            animation.play();
        }
        else {
            const animation = this.animationCtrl.create()
                .addElement(document.querySelector(element))
                .duration(duration).keyframes([
                { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
                { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
                { offset: 1, transform: 'scale(1)', opacity: '1' }
            ]);
            animation.play();
        }
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Sign In',
                message: 'One assumes there will be a forgot password page it was not included in the layout provided.The functionality for face and or biometric opening is still being worked on. For this demo you can enter any information and click log in to be taken to the main page.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginSignin.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
LoginSignin = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'signin',
        template: _raw_loader_login_signin_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_signin_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginSignin);



/***/ }),

/***/ 6181:
/*!*********************************************!*\
  !*** ./src/app/login/login.foreground.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".chat1 {\n  transform: scale(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmZvcmVncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4uZm9yZWdyb3VuZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQxIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".cloud {\n  z-index: 2;\n}\n\n.cloud2 {\n  z-index: 2;\n}\n\n.cloud3 {\n  z-index: 2;\n}\n\n.cloud4 {\n  z-index: 2;\n}\n\n.cloud4 {\n  z-index: 2;\n}\n\n.balloon {\n  z-index: 2;\n}\n\n.airplane {\n  z-index: 2;\n}\n\n.sailboat {\n  z-index: 2;\n}\n\n.boat {\n  z-index: 2;\n}\n\n.palms {\n  z-index: 2;\n}\n\n.outer {\n  overflow: hidden;\n  position: relative;\n}\n\n.inner {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  right: -100px;\n  top: 50px;\n  z-index: 3;\n}\n\n.inner2 {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  left: -30px;\n  top: 150px;\n  z-index: 3;\n}\n\n.inner3 {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  right: -10px;\n  top: 200px;\n  z-index: 3;\n}\n\n.inner4 {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  left: -50px;\n  top: 300px;\n  z-index: 3;\n}\n\n.inner5 {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  right: -31px;\n  top: 325px;\n  z-index: 3;\n}\n\n.foreground {\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNFLFVBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7QUFPRjs7QUFMQTtFQUNFLFVBQUE7QUFRRjs7QUFOQTtFQUNFLFVBQUE7QUFTRjs7QUFQQTtFQUNFLFVBQUE7QUFVRjs7QUFSQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFXRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFZRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFhRjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFlRjs7QUFiQTtFQUNJLFdBQUE7QUFnQkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3VkIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jbG91ZDIge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmNsb3VkMyB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uY2xvdWQ0IHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jbG91ZDQge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmJhbGxvb24ge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmFpcnBsYW5lIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zYWlsYm9hdCB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uYm9hdCB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ucGFsbXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLm91dGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlubmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcmlnaHQ6IC0xMDBweDtcclxuICB0b3A6IDUwcHg7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4uaW5uZXIyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbGVmdDogLTMwcHg7XHJcbiAgdG9wOiAxNTBweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi5pbm5lcjMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICByaWdodDogLTEwcHg7XHJcbiAgdG9wOiAyMDBweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi5pbm5lcjQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBsZWZ0OiAtNTBweDtcclxuICB0b3A6IDMwMHB4O1xyXG4gIHotaW5kZXg6MztcclxufVxyXG4uaW5uZXI1IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcmlnaHQ6IC0zMXB4O1xyXG4gIHRvcDogMzI1cHg7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4uZm9yZWdyb3VuZHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2197:
/*!*******************************************!*\
  !*** ./src/app/login/login.register.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".chat1 {\n  transform: scale(0);\n}\n\n.registration-input input {\n  max-height: 10px;\n  height: 10px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnJlZ2lzdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6ImxvZ2luLnJlZ2lzdGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdDEge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1pbnB1dCBpbnB1dCB7XHJcbiAgbWF4LWhlaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 5163:
/*!*****************************************!*\
  !*** ./src/app/login/login.signin.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".chat1 {\n  transform: scale(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnNpZ25pbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5zaWduaW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0MSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 6541:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.foreground.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-col>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <img class=\"chat1\" src=\"../assets/LookyTalk1.svg\" />\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <img src=\"../assets/Lookylooky.svg\" />\r\n    <img src=\"../assets/FirstAvenulogin.svg\" style=\"padding-top:1em\" />\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-button color=\"tertiary\" expand=\"block\" style=\"padding-top:1em\" routerLink=\"app-login-register\">Get Started!</ion-button>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\" style=\"padding-top:1em\">\r\n    <p>Already a member? <a href=\"signin\">Login here</a>.</p>\r\n  </ion-row>\r\n</ion-col>\r\n");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"body\">\r\n  <div class=\"outer\">\r\n    <div class=\"inner\">\r\n      <img class=\"airplane\" src=\"../assets/Airplane1.svg\" />\r\n    </div>\r\n    <div class=\"inner2\">\r\n      <img class=\"balloon\" src=\"../assets/HotAirBalloon.svg\" />\r\n    </div>\r\n    <div class=\"inner3\">\r\n      <img class=\"sailboat\" src=\"../assets/Sailboat1.svg\" style=\"padding-right:3em\" />\r\n    </div>\r\n    <div class=\"inner4\">\r\n      <img class=\"boat\" src=\"../assets/Boat.svg\" />\r\n    </div>\r\n    <div class=\"inner5\">\r\n      <img class=\"palms\" src=\"../assets/PalmTrees.svg\" />\r\n    </div>\r\n    <ion-grid style=\"height:600px\">\r\n      <ion-col size=\"3\">\r\n        <ion-row class=\"ion-justify-content-left\">\r\n          <ion-col size=\"3\">\r\n            <img class=\"cloud\" src=\"../assets/Cloud.svg\" style=\"padding-left:3em\" />\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-left\" style=\"padding-top:2em\">\r\n          <ion-col>\r\n          </ion-col>\r\n          <ion-col class=\"ion-justify-content-top\">\r\n            <img class=\"cloud2\" src=\"../assets/Cloud2.svg\" style=\"padding-top:2em\" />\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-row class=\"ion-justify-content-center\">\r\n              <img class=\"cloud3\" src=\"../assets/Cloud3.svg\" style=\"padding-right:3em\" />\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-row>\r\n            <ion-col>\r\n              <img class=\"cloud4\" src=\"../assets/Cloud.svg\" style=\"padding-left:3em\" />\r\n            </ion-col>\r\n            <ion-col>\r\n              <img class=\"cloud5\" src=\"../assets/Cloud2.svg\" style=\"padding-top:3em\" />\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top:2.5em\">\r\n          <app-login-foreground class=\"foreground\"></app-login-foreground>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 5161:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.register.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-col>\r\n    <ion-row class=\"ion-justify-content-center\" style=\"padding-top:.5em\">\r\n      <img class=\"chat1\" src=\"../assets/LookyTalkRegister.svg\"/>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <img class=\"looky\" src=\"../assets/Lookylooky.svg\" />\r\n      <img class=\"marquee\" src=\"../assets/FirstAvenulogin.svg\" style=\"padding-top:5px\" />\r\n    </ion-row>\r\n    <ion-row style=\"padding:0em\">\r\n      <ion-col  style=\"padding:0em\">\r\n        <ion-card>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-input class=\"registration-input\" placeholder=\"First Name\" style=\"border-bottom:1px solid lightgrey; height:min-content\"></ion-input>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-input class=\"registration-input\" placeholder=\"Last Name\" style=\"border-bottom:1px solid lightgrey;\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-input class=\"registration-input\" inputmode=\"email\" typeof=\"email\" max=\"100\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Email\">\r\n              </ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-input class=\"registration-input\" typeof=\"new-password\" min=\"8\" max=\"100\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Password\">\r\n              </ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-input class=\"registration-input\" typeof=\"new-password\" min=\"8\" max=\"100\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Confirm Password\">\r\n              </ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n              <ion-input class=\"registration-input\" typeof=\"postal-code\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Zip Code\">\r\n              </ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-text>There is no obligation to make any purchase</ion-text>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-button color=\"tertiary\" expand=\"full\" routerLink=\"../tabs/tabs/shop\">Show Me More!</ion-button>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-text>Already a member? <a href=\"signin\">Login here</a></ion-text>\r\n    </ion-row>\r\n  </ion-col>\r\n</ion-content>\r\n");

/***/ }),

/***/ 7342:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.signin.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-col>\r\n    <ion-row class=\"ion-justify-content-center\" style=\"padding-top:.25em\">\r\n      <img class=\"chat1\" src=\"../assets/LookyTalkSignIn.svg\" />\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\" style=\"padding:0em\">\r\n      <img class=\"looky\" src=\"../assets/Lookylooky.svg\" />\r\n      <img class=\"marquee\" src=\"../assets/FirstAvenulogin.svg\" style=\"padding-top:5px\" />\r\n      <ion-button color=\"tertiary\" expand=\"block\" style=\"padding-top:0em\">Get Started!</ion-button>\r\n    </ion-row>\r\n    <ion-row style=\"padding:0em\">\r\n      <ion-col style=\"padding:0em\">\r\n        <ion-card>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-input inputmode=\"username\" typeof=\"email\" max=\"100\" pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Email\">\r\n              </ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-input typeof=\"current-password\" min=\"8\" max=\"100\" style=\"border-bottom:1px solid lightgrey;\" placeholder=\"Password\">\r\n              </ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\"  style=\"padding-top:.25em\">\r\n      Forgot your sign in?\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\"  style=\"padding-top:.25em\">\r\n      <ion-button color=\"tertiary\" expand=\"block\" style=\"padding-top:0em\" routerLink=\"../tabs/tabs/shop\">Log In</ion-button>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\"  style=\"padding-top:.25em\">\r\n      <p>Don't Have an account? <a href=\"app-login-register\">Register here</a></p>\r\n    </ion-row>\r\n  </ion-col>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map