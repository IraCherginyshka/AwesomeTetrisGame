(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app\">\r\n  <atg-game-header></atg-game-header>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-board/game-board.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-board/game-board.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div *ngIf=\"!isPlaying || isLostGame\" class=\"overlay\">{{ textStateOverlay }}</div>\r\n  <canvas #canvas class=\"board-canvas\"></canvas>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-control-option/game-control-option.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-control-option/game-control-option.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container main center\">\r\n  <p>Option</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-controls/game-controls.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-controls/game-controls.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"state-controls\">\r\n  <button class=\"state-control rotation\" (click)=\"moveFigure(moveStep.ROTATE)\">\r\n    <img class=\"icon-arrow--secondary\" src=\"../../../assets/images/arrowsRotate.png\" alt=\"arrows\" />\r\n  </button>\r\n  <div class=\"horizontal\">\r\n    <button class=\"state-control left\" (click)=\"moveFigure(moveStep.LEFT)\">\r\n      <img class=\"icon-arrow\" src=\"../../../assets/images/arrowsLeft.png\" alt=\"arrows\" />\r\n    </button>\r\n    <button class=\"state-control right\" (click)=\"moveFigure(moveStep.RIGHT)\">\r\n      <img class=\"icon-arrow\" src=\"../../../assets/images/arrowsRight.png\" alt=\"arrows\" />\r\n    </button>\r\n  </div>\r\n  <button\r\n    class=\"state-control down\"\r\n    (mousedown)=\"moveFigure(moveStep.DOWN)\"\r\n    (mouseup)=\"moveFigure(moveStep.DOWN_OFF)\"\r\n  >\r\n    <img class=\"icon-arrow--secondary\" src=\"../../../assets/images/arrowsDown.png\" alt=\"arrows\" />\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-header/game-header.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-header/game-header.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\r\n  <div class=\"logo\">tetris</div>\r\n  <atg-player-profile *ngIf=\"userIsAuthenticated; else login\"></atg-player-profile>\r\n  <div class=\"wrap-links\">\r\n    <nav class=\"bar-links container\">\r\n      <a class=\"header-link\" [routerLink]=\"['/login']\">login</a>\r\n      <a class=\"header-link\" [routerLink]=\"['/game']\">game</a>\r\n      <a class=\"header-link\" [routerLink]=\"['/option']\">option</a>\r\n      <a class=\"header-link\" [routerLink]=\"['/leaderboard']\">leaderboard</a>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #login class=\"modal\">\r\n  <a class=\"header-link--button game-button header__logout\" [routerLink]=\"['/login']\">login</a>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-information/game-information.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-information/game-information.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"information\">\r\n  <div class=\"information-block\">\r\n    <p class=\"information-label\">level</p>\r\n    <div class=\"information-field\">{{ (gameStats$ | async).level }}</div>\r\n  </div>\r\n  <div class=\"information-block\">\r\n    <p class=\"information-label\">score</p>\r\n    <div class=\"information-field\">{{ (gameStats$ | async).score }}</div>\r\n  </div>\r\n  <div class=\"information-block\">\r\n    <p class=\"information-label\">lines</p>\r\n    <div class=\"information-field\">{{ (gameStats$ | async).lines }}</div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-leaderboard/game-leaderboard.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-leaderboard/game-leaderboard.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container main\">\r\n  <header class=\"leaderboard leaderboard__header\">\r\n    <ul class=\"leaderboard__list\">\r\n      <li class=\"leaderboard__field--index\">№</li>\r\n      <li class=\"leaderboard__field leaderboard__player-name\">name</li>\r\n      <li class=\"leaderboard__field\">score</li>\r\n      <li class=\"leaderboard__field\">level</li>\r\n      <li class=\"leaderboard__field\">lines</li>\r\n    </ul>\r\n  </header>\r\n  <ul class=\"leaderboard\" *ngFor=\"let result of gameResults; let i = index\">\r\n    <li class=\"leaderboard__list\" [ngClass]=\"{ active: currentPlayerName === result.username }\">\r\n      <span class=\"leaderboard__field--index\">{{ i + 1 }}</span>\r\n      <span class=\"leaderboard__field leaderboard__player-name\">{{ result.username }}</span>\r\n      <span class=\"leaderboard__field\">{{ result.score }}</span>\r\n      <span class=\"leaderboard__field\">{{ result.level }}</span>\r\n      <span class=\"leaderboard__field\">{{ result.lines }}</span>\r\n    </li>\r\n  </ul>\r\n  <div class=\"leaderboard__current-player\" *ngIf=\"isCurrentPlayerNotInTop\">\r\n    <div class=\"point\"></div>\r\n    <div class=\"point\"></div>\r\n    <div class=\"point\"></div>\r\n    <p>Your best score:</p>\r\n    <ul class=\"leaderboard\">\r\n      <li class=\"leaderboard__list\">\r\n        <span class=\"leaderboard_index\">{{ currentPlayerPlace }}</span>\r\n        <span class=\"leaderboard__field leaderboard__player-name\">{{\r\n          currentPlayerNotInTop.username\r\n        }}</span>\r\n        <span class=\"leaderboard__field\">{{ currentPlayerNotInTop.score }}</span>\r\n        <span class=\"leaderboard__field\">{{ currentPlayerNotInTop.level }}</span>\r\n        <span class=\"leaderboard__field\">{{ currentPlayerNotInTop.lines }}</span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-loader/game-loader.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-loader/game-loader.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>game-loader works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-login-form/game-login-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-login-form/game-login-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container main center login\">\r\n  <div>\r\n    <form\r\n      class=\"login__form\"\r\n      [formGroup]=\"logInForm\"\r\n      (ngSubmit)=\"onLogin()\"\r\n      *ngIf=\"!isSignUpForm; else registrationForm\"\r\n    >\r\n      <div class=\"login__group\">\r\n        <label for=\"username\" class=\"login__label\">Name*</label>\r\n        <input\r\n          class=\"login__input\"\r\n          type=\"text\"\r\n          id=\"username\"\r\n          name=\"username\"\r\n          formControlName=\"username\"\r\n        />\r\n        <span\r\n          class=\"login__text login__text--warning\"\r\n          *ngIf=\"logInForm.get('username').invalid && logInForm.get('username').touched\"\r\n          >Please enter the valid name\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"login__group\">\r\n        <label for=\"password\" class=\"login__label\">Password*</label>\r\n        <input\r\n          class=\"login__input\"\r\n          type=\"password\"\r\n          id=\"password\"\r\n          name=\"password\"\r\n          formControlName=\"password\"\r\n        />\r\n        <span\r\n          class=\"login__text login__text--warning\"\r\n          *ngIf=\"logInForm.get('password').invalid && logInForm.get('password').touched\"\r\n          >Please enter the valid password\r\n        </span>\r\n      </div>\r\n      <button\r\n        class=\"game-button login__button\"\r\n        type=\"submit\"\r\n        [disabled]=\"!logInForm.valid\"\r\n        [title]=\"!logInForm.valid ? 'Please complete all required fields' : 'Log In'\"\r\n      >\r\n        Log In\r\n      </button>\r\n      <br />\r\n      <span class=\"login__text\">Don't have an account? </span>\r\n      <a [routerLink]=\"\" [queryParams]=\"{ form: 'registration' }\"\r\n        ><button class=\"game-button login__button\" type=\"button\">\r\n          Sign up\r\n        </button></a\r\n      >\r\n    </form>\r\n\r\n    <ng-template #registrationForm>\r\n      <form class=\"login__form\" [formGroup]=\"signUpForm\" (ngSubmit)=\"onSignUp()\">\r\n        <div formGroupName=\"userInformation\">\r\n          <div class=\"login__group\">\r\n            <label for=\"usernameSignUp\" class=\"login__label\">Name*</label>\r\n            <input\r\n              class=\"login__input\"\r\n              type=\"text\"\r\n              id=\"usernameSignUp\"\r\n              name=\"username\"\r\n              formControlName=\"username\"\r\n              placeholder=\"Create a unique name\"\r\n            />\r\n            <span\r\n              class=\"login__text login__text--warning\"\r\n              *ngIf=\"\r\n                signUpForm.get('userInformation.username').invalid &&\r\n                signUpForm.get('userInformation.username').touched\r\n              \"\r\n              >Please enter the valid name\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"login__group\">\r\n            <label for=\"passwordSignUp\" class=\"login__label\">Password*</label>\r\n            <input\r\n              class=\"login__input\"\r\n              type=\"password\"\r\n              id=\"passwordSignUp\"\r\n              name=\"password\"\r\n              formControlName=\"password\"\r\n              placeholder=\"Create a password\"\r\n            />\r\n            <span\r\n              class=\"login__text login__text--warning\"\r\n              *ngIf=\"\r\n                signUpForm.get('userInformation.password').invalid &&\r\n                signUpForm.get('userInformation.password').touched\r\n              \"\r\n              >Password must contain at least one number and one uppercase and lowercase letter, and\r\n              at least 8 or more characters\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"login__group\">\r\n            <label for=\"confirmPassword\" class=\"login__label\">Confirm Password*</label>\r\n            <input\r\n              class=\"login__input\"\r\n              type=\"password\"\r\n              id=\"confirmPassword\"\r\n              name=\"confirmPassword\"\r\n              formControlName=\"confirmPassword\"\r\n              placeholder=\"Confirm a password\"\r\n            />\r\n            <span\r\n              class=\"login__text login__text--warning\"\r\n              *ngIf=\"\r\n                (signUpForm.get('userInformation.confirmPassword').invalid &&\r\n                  signUpForm.get('userInformation.confirmPassword').touched) ||\r\n                (signUpForm.get('userInformation.confirmPassword').touched &&\r\n                  signUpForm.get('userInformation.confirmPassword').value !==\r\n                    signUpForm.get('userInformation.password').value)\r\n              \"\r\n              >Please enter the same password\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div formGroupName=\"playerInformation\">\r\n          <div class=\"login__group--gender\">\r\n            <div class=\"login__group--radio\" *ngFor=\"let gender of genders\">\r\n              <label [for]=\"gender\">{{ gender }}</label>\r\n              <input\r\n                class=\"login__input\"\r\n                type=\"radio\"\r\n                [id]=\"gender\"\r\n                [value]=\"gender\"\r\n                formControlName=\"gender\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"login__group\">\r\n            <label for=\"dateOfBirth\" class=\"login__label\">Date of birth*</label>\r\n            <input\r\n              class=\"login__input\"\r\n              type=\"date\"\r\n              id=\"dateOfBirth\"\r\n              name=\"dateOfBirth\"\r\n              formControlName=\"dateOfBirth\"\r\n            />\r\n            <span\r\n              class=\"login__text login__text--warning\"\r\n              *ngIf=\"\r\n                signUpForm.get('playerInformation.dateOfBirth').invalid &&\r\n                signUpForm.get('playerInformation.dateOfBirth').touched\r\n              \"\r\n              >Please enter your birth date\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"login__group\">\r\n            <label for=\"country\" class=\"login__label\">country</label>\r\n            <input\r\n              class=\"login__input\"\r\n              type=\"text\"\r\n              id=\"country\"\r\n              name=\"country\"\r\n              formControlName=\"country\"\r\n              placeholder=\"Enter your country\"\r\n            />\r\n            <span\r\n              class=\"login__text login__text--warning\"\r\n              *ngIf=\"\r\n                signUpForm.get('playerInformation.country').invalid &&\r\n                signUpForm.get('playerInformation.country').touched\r\n              \"\r\n              >Please enter your country\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <button\r\n          class=\"game-button login__button\"\r\n          type=\"submit\"\r\n          [disabled]=\"!signUpForm.valid\"\r\n          [title]=\"!signUpForm.valid ? 'Please complete all required fields' : 'Create an account'\"\r\n        >\r\n          Sign Up\r\n        </button>\r\n      </form>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-main/game-main.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-main/game-main.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container main\">\r\n  <div class=\"game\">\r\n    <atg-game-information></atg-game-information>\r\n    <atg-game-board></atg-game-board>\r\n    <div>\r\n      <atg-game-next-figure></atg-game-next-figure>\r\n      <div class=\"wrap-controls\">\r\n        <atg-game-state-controls></atg-game-state-controls>\r\n        <atg-game-controls></atg-game-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-next-figure/game-next-figure.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-next-figure/game-next-figure.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"next-figure\">\r\n  <p class=\"next-figure__label\">next</p>\r\n  <div class=\"next-figure__field\">\r\n    <canvas #nextCanvas></canvas>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-state-controls/game-state-controls.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-state-controls/game-state-controls.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"controls\">\r\n  <div *ngIf=\"isPlaying; else pause\">\r\n    <button class=\"controls-action game-button pause\" (click)=\"pauseGame()\">\r\n      pause\r\n    </button>\r\n  </div>\r\n  <button class=\"controls-action game-button reset\" (click)=\"resetGame()\">\r\n    reset\r\n  </button>\r\n</div>\r\n\r\n<ng-template #pause>\r\n  <button class=\"controls-action game-button play\" (click)=\"playGame()\">\r\n    play\r\n  </button>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-profile/player-profile.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-profile/player-profile.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"player\">\r\n  <div class=\"player-inf\">\r\n    <p>{{ currentUser?.username }}</p>\r\n    <p>{{ currentUser?.country }}</p>\r\n    <p>{{ currentUser?.gender }}</p>\r\n  </div>\r\n  <img class=\"icon\" src=\"../../../assets/images/{{ iconSrc }}\" alt=\"icon\" />\r\n  <button class=\"game-button\" (click)=\"onLogout()\">\r\n    Logout\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  background-color: #000;\n  font-family: Impact, sans-serif;\n  color: #fff;\n  font-size: 1.33rem;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxpcnluYS5jaGVyaGluYVxcRGVza3RvcFxcVGV0cmlzXFxBd2Vzb21lVGV0cmlzR2FtZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGlyeW5hLmNoZXJoaW5hXFxEZXNrdG9wXFxUZXRyaXNcXEF3ZXNvbWVUZXRyaXNHYW1lL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkNGYztFREdkLCtCQ2dCYTtFRGZiLFdDRmM7RURHZCxrQkNla0I7RURkbEIseUJBQUE7QUVERiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmFwcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XHJcbiAgY29sb3I6ICRkZWZhdWx0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogJGRlZmF1bHQtZm9udC1zaXplO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIiwiLy9Db2xvciBQYWxldHRlXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjYmYwMTE3O1xyXG4kZGVmYXVsdC1jb2xvcjogI2ZmZjtcclxuJHNlcnZpY2UtY29sb3I6ICM5Nzk3OTc7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzYTQyO1xyXG5cclxuLy9GaWd1cmVzXHJcbiRmaWd1cmUtY29sb3ItZmlyc3Q6ICNmZDA0MDQ7XHJcbiRmaWd1cmUtY29sb3Itc2Vjb25kOiAjMmUzNmQ1O1xyXG4kZmlndXJlLWNvbG9yLXRoaXJkOiAjMTlhZjA5O1xyXG4kZmlndXJlLWNvbG9yLWZvdXJ0aDogI2Y4YWIwNTtcclxuJGZpZ3VyZS1jb2xvci1maWZ0aDogIzEzZTRlNztcclxuJGZpZ3VyZS1jb2xvci1zaXh0aDogI2ZmM2MwMDtcclxuJGZpZ3VyZS1jb2xvci1zZXZlbnRoOiAjMmUzNmQ1O1xyXG4kZmlndXJlLXNpemU6IDI1cHg7XHJcbiRmaWd1cmUtcXVhbnRpdHktd2lkdGg6IDEzO1xyXG4kZmlndXJlLXF1YW50aXR5LWhlaWdodDogMjA7XHJcblxyXG4vL0ZvbnRzXHJcbiRwcmltYXJ5LWZvbnQ6IEltcGFjdCwgc2Fucy1zZXJpZjtcclxuJGRlZmF1bHQtZm9udC1zaXplOiAxLjMzcmVtO1xyXG4kaDEtZm9udC1zaXplOiA1cmVtO1xyXG4kbGFiZWwtZm9udC1zaXplOiAycmVtO1xyXG4kdGV4dC1mb3JtLWZvbnQtc2l6ZTogMC44cmVtO1xyXG4kc2Vjb25kYXJ5LXRleHQtZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4vL1NpemVzXHJcbiRjZW50ZXI6IDAgYXV0bztcclxuJG1heC13aWR0aDogMTEwMHB4O1xyXG4kcHJpbWFyeS1pbmRlbnQ6IDJyZW07XHJcbiRzZWNvbmRhcnktaW5kZW50OiAwIDJyZW07XHJcbiRtaW4taGVpZ2h0LW1haW46IDc5LjV2aDtcclxuJG1heC13aWR0aC1pY29uOiA1cmVtO1xyXG4kd2lkdGgtbG9nbzogMTQuMnJlbTtcclxuJHdpZHRoLWZvcm06IDM1cmVtO1xyXG4kaGVpZ2h0LWJhci1saW5rczogM3JlbTtcclxuJHdpZHRoLWxpbmtzOiA3cmVtO1xyXG4kd2lkdGgtaW5mb3JtYXRpb246IDUwcmVtO1xyXG4kaW5mb3JtLWZpZWxkLXdpZHRoOiA3cmVtO1xyXG4kaW5mb3JtLWZpZWxkLWhlaWdodDogNTVweDtcclxuJGluZm9ybS1maWVsZC1tYXJnaW46IDFyZW07XHJcbiRjb250cm9scy1idXR0b24td2lkdGg6IDdyZW07XHJcbiRjb250cm9scy1idXR0b24taGVpZ2h0OiAzLjVyZW07XHJcbiRib2FyZC13aWR0aDogJGZpZ3VyZS1zaXplICogJGZpZ3VyZS1xdWFudGl0eS13aWR0aDtcclxuJGJvYXJkLWhlaWdodDogJGZpZ3VyZS1zaXplICogJGZpZ3VyZS1xdWFudGl0eS1oZWlnaHQ7XHJcblxyXG4vL0dlbmVyYWxcclxuJHByaW1hcnktYm9yZGVyOiAxLjVweCBzb2xpZCAkZGVmYXVsdC1jb2xvcjtcclxuJGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiRob3Zlci1ib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4kaG92ZXItYm9yZGVyLWNvbnRyb2xzOiAzcHggc29saWQ7XHJcbiIsIi5hcHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogSW1wYWN0LCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjMzcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AwesomeTetrisGame';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_authconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authconfig.interceptor */ "./src/app/services/authconfig.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_game_header_game_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/game-header/game-header.component */ "./src/app/components/game-header/game-header.component.ts");
/* harmony import */ var _components_game_main_game_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/game-main/game-main.component */ "./src/app/components/game-main/game-main.component.ts");
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/game-board/game-board.component */ "./src/app/components/game-board/game-board.component.ts");
/* harmony import */ var _components_game_controls_game_controls_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/game-controls/game-controls.component */ "./src/app/components/game-controls/game-controls.component.ts");
/* harmony import */ var _components_game_state_controls_game_state_controls_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/game-state-controls/game-state-controls.component */ "./src/app/components/game-state-controls/game-state-controls.component.ts");
/* harmony import */ var _components_game_information_game_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/game-information/game-information.component */ "./src/app/components/game-information/game-information.component.ts");
/* harmony import */ var _components_game_control_option_game_control_option_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/game-control-option/game-control-option.component */ "./src/app/components/game-control-option/game-control-option.component.ts");
/* harmony import */ var _components_game_leaderboard_game_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/game-leaderboard/game-leaderboard.component */ "./src/app/components/game-leaderboard/game-leaderboard.component.ts");
/* harmony import */ var _components_game_loader_game_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/game-loader/game-loader.component */ "./src/app/components/game-loader/game-loader.component.ts");
/* harmony import */ var _components_game_next_figure_game_next_figure_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/game-next-figure/game-next-figure.component */ "./src/app/components/game-next-figure/game-next-figure.component.ts");
/* harmony import */ var _components_game_login_form_game_login_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/game-login-form/game-login-form.component */ "./src/app/components/game-login-form/game-login-form.component.ts");
/* harmony import */ var _components_player_profile_player_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/player-profile/player-profile.component */ "./src/app/components/player-profile/player-profile.component.ts");























const appRouter = [
    { path: 'option', component: _components_game_control_option_game_control_option_component__WEBPACK_IMPORTED_MODULE_17__["GameControlOptionComponent"] },
    { path: 'leaderboard', component: _components_game_leaderboard_game_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["GameLeaderboardComponent"] },
    { path: 'game', component: _components_game_main_game_main_component__WEBPACK_IMPORTED_MODULE_12__["GameMainComponent"] },
    { path: 'login', component: _components_game_login_form_game_login_form_component__WEBPACK_IMPORTED_MODULE_21__["GameLoginFormComponent"] },
    { path: '**', redirectTo: '/game', pathMatch: 'full' },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_game_header_game_header_component__WEBPACK_IMPORTED_MODULE_11__["GameHeaderComponent"],
            _components_game_main_game_main_component__WEBPACK_IMPORTED_MODULE_12__["GameMainComponent"],
            _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_13__["GameBoardComponent"],
            _components_game_controls_game_controls_component__WEBPACK_IMPORTED_MODULE_14__["GameControlsComponent"],
            _components_game_state_controls_game_state_controls_component__WEBPACK_IMPORTED_MODULE_15__["GameStateControlsComponent"],
            _components_game_information_game_information_component__WEBPACK_IMPORTED_MODULE_16__["GameInformationComponent"],
            _components_game_control_option_game_control_option_component__WEBPACK_IMPORTED_MODULE_17__["GameControlOptionComponent"],
            _components_game_leaderboard_game_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["GameLeaderboardComponent"],
            _components_game_loader_game_loader_component__WEBPACK_IMPORTED_MODULE_19__["GameLoaderComponent"],
            _components_game_next_figure_game_next_figure_component__WEBPACK_IMPORTED_MODULE_20__["GameNextFigureComponent"],
            _components_game_login_form_game_login_form_component__WEBPACK_IMPORTED_MODULE_21__["GameLoginFormComponent"],
            _components_player_profile_player_profile_component__WEBPACK_IMPORTED_MODULE_22__["PlayerProfileComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRouter),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                timeOut: 5000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastContainerModule"],
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _services_authconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/game-board/game-board.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-board/game-board.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".board-canvas {\n  border: 1.5px solid #fff;\n  background-color: #2b3a42;\n}\n\n.overlay {\n  position: absolute;\n  width: 327px;\n  height: 503px;\n  background-color: rgba(0, 0, 0, 0.85);\n  border: 3px solid #fff;\n  text-align: center;\n  line-height: 500px;\n  color: #bf0117;\n  font-size: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWJvYXJkL0M6XFxVc2Vyc1xcaXJ5bmEuY2hlcmhpbmFcXERlc2t0b3BcXFRldHJpc1xcQXdlc29tZVRldHJpc0dhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWUtYm9hcmRcXGdhbWUtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1ib2FyZC9DOlxcVXNlcnNcXGlyeW5hLmNoZXJoaW5hXFxEZXNrdG9wXFxUZXRyaXNcXEF3ZXNvbWVUZXRyaXNHYW1lL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHdCQzZDZTtFRDVDZix5QkNDaUI7QUNGbkI7O0FGSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JDK0JhO0VEOUJiLGNDYmdCO0VEY2hCLGVDTWE7QUNQZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1ib2FyZC9nYW1lLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmJvYXJkLWNhbnZhcyB7XHJcbiAgYm9yZGVyOiAkcHJpbWFyeS1ib3JkZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6ICRib2FyZC13aWR0aCArIDJweDtcclxuICBoZWlnaHQ6ICRib2FyZC1oZWlnaHQgKyAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHJpbWFyeS1jb2xvciwgMC44NSk7XHJcbiAgYm9yZGVyOiAkaG92ZXItYm9yZGVyLWNvbnRyb2xzICRkZWZhdWx0LWNvbG9yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogJGJvYXJkLWhlaWdodDtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICBmb250LXNpemU6ICRoMS1mb250LXNpemU7XHJcbn1cclxuIiwiLy9Db2xvciBQYWxldHRlXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjYmYwMTE3O1xyXG4kZGVmYXVsdC1jb2xvcjogI2ZmZjtcclxuJHNlcnZpY2UtY29sb3I6ICM5Nzk3OTc7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzYTQyO1xyXG5cclxuLy9GaWd1cmVzXHJcbiRmaWd1cmUtY29sb3ItZmlyc3Q6ICNmZDA0MDQ7XHJcbiRmaWd1cmUtY29sb3Itc2Vjb25kOiAjMmUzNmQ1O1xyXG4kZmlndXJlLWNvbG9yLXRoaXJkOiAjMTlhZjA5O1xyXG4kZmlndXJlLWNvbG9yLWZvdXJ0aDogI2Y4YWIwNTtcclxuJGZpZ3VyZS1jb2xvci1maWZ0aDogIzEzZTRlNztcclxuJGZpZ3VyZS1jb2xvci1zaXh0aDogI2ZmM2MwMDtcclxuJGZpZ3VyZS1jb2xvci1zZXZlbnRoOiAjMmUzNmQ1O1xyXG4kZmlndXJlLXNpemU6IDI1cHg7XHJcbiRmaWd1cmUtcXVhbnRpdHktd2lkdGg6IDEzO1xyXG4kZmlndXJlLXF1YW50aXR5LWhlaWdodDogMjA7XHJcblxyXG4vL0ZvbnRzXHJcbiRwcmltYXJ5LWZvbnQ6IEltcGFjdCwgc2Fucy1zZXJpZjtcclxuJGRlZmF1bHQtZm9udC1zaXplOiAxLjMzcmVtO1xyXG4kaDEtZm9udC1zaXplOiA1cmVtO1xyXG4kbGFiZWwtZm9udC1zaXplOiAycmVtO1xyXG4kdGV4dC1mb3JtLWZvbnQtc2l6ZTogMC44cmVtO1xyXG4kc2Vjb25kYXJ5LXRleHQtZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4vL1NpemVzXHJcbiRjZW50ZXI6IDAgYXV0bztcclxuJG1heC13aWR0aDogMTEwMHB4O1xyXG4kcHJpbWFyeS1pbmRlbnQ6IDJyZW07XHJcbiRzZWNvbmRhcnktaW5kZW50OiAwIDJyZW07XHJcbiRtaW4taGVpZ2h0LW1haW46IDc5LjV2aDtcclxuJG1heC13aWR0aC1pY29uOiA1cmVtO1xyXG4kd2lkdGgtbG9nbzogMTQuMnJlbTtcclxuJHdpZHRoLWZvcm06IDM1cmVtO1xyXG4kaGVpZ2h0LWJhci1saW5rczogM3JlbTtcclxuJHdpZHRoLWxpbmtzOiA3cmVtO1xyXG4kd2lkdGgtaW5mb3JtYXRpb246IDUwcmVtO1xyXG4kaW5mb3JtLWZpZWxkLXdpZHRoOiA3cmVtO1xyXG4kaW5mb3JtLWZpZWxkLWhlaWdodDogNTVweDtcclxuJGluZm9ybS1maWVsZC1tYXJnaW46IDFyZW07XHJcbiRjb250cm9scy1idXR0b24td2lkdGg6IDdyZW07XHJcbiRjb250cm9scy1idXR0b24taGVpZ2h0OiAzLjVyZW07XHJcbiRib2FyZC13aWR0aDogJGZpZ3VyZS1zaXplICogJGZpZ3VyZS1xdWFudGl0eS13aWR0aDtcclxuJGJvYXJkLWhlaWdodDogJGZpZ3VyZS1zaXplICogJGZpZ3VyZS1xdWFudGl0eS1oZWlnaHQ7XHJcblxyXG4vL0dlbmVyYWxcclxuJHByaW1hcnktYm9yZGVyOiAxLjVweCBzb2xpZCAkZGVmYXVsdC1jb2xvcjtcclxuJGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiRob3Zlci1ib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4kaG92ZXItYm9yZGVyLWNvbnRyb2xzOiAzcHggc29saWQ7XHJcbiIsIi5ib2FyZC1jYW52YXMge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjNhNDI7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzI3cHg7XG4gIGhlaWdodDogNTAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwMHB4O1xuICBjb2xvcjogI2JmMDExNztcbiAgZm9udC1zaXplOiA1cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/game-board/game-board.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/game-board/game-board.component.ts ***!
  \***************************************************************/
/*! exports provided: GameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoardComponent", function() { return GameBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _models_figure_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/figure.model */ "./src/app/models/figure.model.ts");
/* harmony import */ var _models_board_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/board.model */ "./src/app/models/board.model.ts");
/* harmony import */ var _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enums/figures-colors.enum */ "./src/app/enums/figures-colors.enum.ts");
/* harmony import */ var _enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enums/figures-movement.enum */ "./src/app/enums/figures-movement.enum.ts");
/* harmony import */ var _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../enums/game-state.enum */ "./src/app/enums/game-state.enum.ts");
/* harmony import */ var _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/board-component.const */ "./src/app/constants/board-component.const.ts");











let GameBoardComponent = class GameBoardComponent {
    constructor(gameService, toastrService) {
        this.gameService = gameService;
        this.toastrService = toastrService;
    }
    ngOnInit() {
        this.canvas.nativeElement.width = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["CANVAS_WIDTH"];
        this.canvas.nativeElement.height = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["CANVAS_HEIGHT"];
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.boardMatrix = _models_board_model__WEBPACK_IMPORTED_MODULE_6__["BoardModel"].makeBoardEmptyMatrix(_constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_WIDTH"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_HEIGHT"]);
        this.isLostGame = false;
        this.isPlaying = true;
        this.gameService.updateFigures();
        this.duration = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["DELAY_DEFAULT"];
        this.currentLevel = 1;
        this.subscriptionState = this.gameService.getGameState().subscribe((gameState) => {
            this.textStateOverlay = _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_9__["GameState"].PAUSE;
            this.isPlaying = gameState !== _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_9__["GameState"].PAUSE;
            if (this.isLostGame) {
                this.gameService.setInitialInformation();
            }
            this.isLostGame = false;
            if (gameState === _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_9__["GameState"].RESET) {
                this.resetGame();
            }
            if (gameState === _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_9__["GameState"].PAUSE) {
                this.stopGame();
            }
            if (gameState === _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_9__["GameState"].PLAY) {
                this.playGame();
            }
        });
        this.subscriptionMove = this.gameService
            .onNextStep()
            .subscribe((nextPosition) => {
            if (nextPosition === _enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_8__["FiguresMovement"].LEFT) {
                if (this.checkCollisionDetection(-1, this.currentFigure)) {
                    this.figurePosition -= 1;
                    this.redrawBoard();
                }
            }
            if (nextPosition === _enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_8__["FiguresMovement"].RIGHT) {
                if (this.checkCollisionDetection(1, this.currentFigure)) {
                    this.figurePosition += 1;
                    this.redrawBoard();
                }
            }
            if (nextPosition === _enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_8__["FiguresMovement"].ROTATE) {
                const rotateFigure = this.rotateFigure(this.currentFigure);
                if (this.checkCollisionDetection(0, rotateFigure)) {
                    this.currentFigure = rotateFigure;
                    this.redrawBoard();
                }
            }
            if (nextPosition === _enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_8__["FiguresMovement"].DOWN) {
                clearInterval(this.timeInterval);
                this.duration = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["DELAY_DEFAULT"] / _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["ACCELERATION"];
                this.playGame();
            }
            if (nextPosition === _enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_8__["FiguresMovement"].DOWN_OFF) {
                clearInterval(this.timeInterval);
                this.duration = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["DELAY_DEFAULT"] - _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["DELAY_LEVEL_STEP"] * this.currentLevel;
                this.playGame();
            }
        });
        this.subscriptionNext = this.gameService
            .onNewFigureCreated()
            .subscribe(({ previousFigure }) => {
            this.currentFigure = previousFigure;
            this.setInitialBoardState();
        });
        this.subscriptionLevel = this.gameService
            .onUpdateGameInformation()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((gameStats) => this.currentLevel !== gameStats.level))
            .subscribe(({ level }) => {
            clearInterval(this.timeInterval);
            this.currentLevel = level;
            this.duration = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["DELAY_DEFAULT"] - _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["DELAY_LEVEL_STEP"] * this.currentLevel;
            this.playGame();
        });
        this.gameService.updateFigures();
    }
    ngOnDestroy() {
        this.subscriptionState.unsubscribe();
        this.subscriptionMove.unsubscribe();
        this.subscriptionNext.unsubscribe();
        this.subscriptionLevel.unsubscribe();
    }
    rotateFigure(figureMatrix) {
        const reverseMatrix = [...figureMatrix];
        reverseMatrix.reverse();
        return reverseMatrix[0].map((item, index) => reverseMatrix.map((line) => line[index]));
    }
    redrawBoard() {
        const newFigure = new _models_figure_model__WEBPACK_IMPORTED_MODULE_5__["FigureModel"]();
        const newBoard = new _models_board_model__WEBPACK_IMPORTED_MODULE_6__["BoardModel"](this.ctx, false);
        this.currentMatrix = newFigure.showFigure(this.lineWithFigure, this.currentFigure, this.boardMatrix, this.figurePosition);
        newBoard.drawBoard(this.currentMatrix);
    }
    setInitialBoardState() {
        this.lineWithFigure = 0;
        this.figurePosition = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["CENTRAL_ITEM"];
        this.duration = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["DELAY_DEFAULT"];
    }
    playGame() {
        this.timeInterval = window.setInterval(() => {
            if (this.checkCollisionDetection(0, this.currentFigure)) {
                this.redrawBoard();
                this.lineWithFigure += 1;
            }
            else if (!this.checkCollisionDetection(0, this.currentFigure) &&
                this.lineWithFigure === 0) {
                this.redrawBoard();
                this.lostGame();
            }
            else {
                this.deleteFilledLines();
                this.boardMatrix = this.currentMatrix;
                this.gameService.updateFigures();
                this.redrawBoard();
                this.setInitialBoardState();
            }
        }, this.duration);
    }
    checkCollisionDetection(step, figure) {
        return figure.every((line, indexY) => {
            return line.every((block, indexX) => {
                if (block === _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_7__["FiguresColors"].DEFAULT) {
                    return true;
                }
                const x = this.figurePosition + indexX + step;
                const y = this.lineWithFigure + indexY;
                if (x >= 0 && x <= _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_WIDTH"] && y < _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_HEIGHT"]) {
                    return this.boardMatrix[y][x] === _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_7__["FiguresColors"].DEFAULT;
                }
                return false;
            });
        });
    }
    deleteFilledLines() {
        const filledLineIndexes = _models_board_model__WEBPACK_IMPORTED_MODULE_6__["BoardModel"].findFilledLine(this.currentFigure, this.currentMatrix, this.lineWithFigure);
        if (filledLineIndexes.length > 0) {
            this.gameService.setNumberFilledLines(filledLineIndexes.length);
            filledLineIndexes.forEach((number) => {
                this.currentMatrix.splice(this.lineWithFigure - 1 + number, 1);
                this.currentMatrix.unshift(new Array(_constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_WIDTH"]).fill(_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_7__["FiguresColors"].DEFAULT));
            });
        }
    }
    stopGame() {
        clearInterval(this.timeInterval);
    }
    resetGame() {
        this.boardMatrix = _models_board_model__WEBPACK_IMPORTED_MODULE_6__["BoardModel"].makeBoardEmptyMatrix(_constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_WIDTH"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_HEIGHT"]);
        this.gameService.updateFigures();
        this.redrawBoard();
        clearInterval(this.timeInterval);
        this.setInitialBoardState();
        this.playGame();
    }
    lostGame() {
        this.isLostGame = true;
        this.isPlaying = false;
        this.gameService.setLostGame().subscribe(() => {
            this.toastrService.warning('You have successfully added your result to Leaderboard');
        });
        this.gameService.updateFigures();
        this.setInitialBoardState();
        clearInterval(this.timeInterval);
        this.textStateOverlay = _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_9__["GameState"].LOST;
        this.boardMatrix = _models_board_model__WEBPACK_IMPORTED_MODULE_6__["BoardModel"].makeBoardEmptyMatrix(_constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_WIDTH"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_10__["QUANTITY_BLOCKS_HEIGHT"]);
    }
};
GameBoardComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
], GameBoardComponent.prototype, "canvas", void 0);
GameBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-board/game-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-board.component.scss */ "./src/app/components/game-board/game-board.component.scss")).default]
    })
], GameBoardComponent);



/***/ }),

/***/ "./src/app/components/game-control-option/game-control-option.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/game-control-option/game-control-option.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1jb250cm9sLW9wdGlvbi9nYW1lLWNvbnRyb2wtb3B0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/game-control-option/game-control-option.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/game-control-option/game-control-option.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GameControlOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameControlOptionComponent", function() { return GameControlOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameControlOptionComponent = class GameControlOptionComponent {
};
GameControlOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-control-option',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-control-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-control-option/game-control-option.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-control-option.component.scss */ "./src/app/components/game-control-option/game-control-option.component.scss")).default]
    })
], GameControlOptionComponent);



/***/ }),

/***/ "./src/app/components/game-controls/game-controls.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/game-controls/game-controls.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".state-controls {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 2rem;\n}\n.state-controls .state-control {\n  width: 7rem;\n  height: 3.5rem;\n  outline: none;\n  line-height: 3rem;\n  margin: 0.6666666667rem;\n  background-color: #2b3a42;\n  border: 3px solid #bf0117;\n  border-radius: 10px;\n  text-align: center;\n  font-size: inherit;\n  text-transform: inherit;\n  font-family: inherit;\n  color: #fff;\n}\n.state-controls .state-control:hover {\n  border-color: #000;\n  background-color: #bf0117;\n}\n.state-controls .horizontal {\n  display: flex;\n}\n.state-controls .icon-arrow {\n  padding-top: 0.5rem;\n  width: 3rem;\n}\n.state-controls .icon-arrow--secondary {\n  padding-top: 0.25rem;\n  width: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWNvbnRyb2xzL0M6XFxVc2Vyc1xcaXJ5bmEuY2hlcmhpbmFcXERlc2t0b3BcXFRldHJpc1xcQXdlc29tZVRldHJpc0dhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWUtY29udHJvbHNcXGdhbWUtY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1jb250cm9scy9DOlxcVXNlcnNcXGlyeW5hLmNoZXJoaW5hXFxEZXNrdG9wXFxUZXRyaXNcXEF3ZXNvbWVUZXRyaXNHYW1lL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtY29udHJvbHMvZ2FtZS1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJDd0JlO0FDekJqQjtBRkdFO0VBQ0UsV0NpQ29CO0VEaENwQixjQ2lDcUI7RURoQ3JCLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJDVGU7RURVZix5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQ2xCWTtBQ2lCaEI7QUZHSTtFQUNFLGtCQ3ZCVTtFRHdCVix5QkN2Qlk7QUNzQmxCO0FGSUU7RUFDRSxhQUFBO0FFRko7QUZJRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBRUZKO0FGSUU7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUVGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1jb250cm9scy9nYW1lLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLnN0YXRlLWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiAkcHJpbWFyeS1pbmRlbnQ7XHJcblxyXG4gICYgLnN0YXRlLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6ICRjb250cm9scy1idXR0b24td2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRjb250cm9scy1idXR0b24taGVpZ2h0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luOiAkcHJpbWFyeS1pbmRlbnQgLyAzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBib3JkZXI6ICRob3Zlci1ib3JkZXItY29udHJvbHMgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgY29sb3I6ICRkZWZhdWx0LWNvbG9yO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuICAmIC5ob3Jpem9udGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gICYgLmljb24tYXJyb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gIH1cclxuICAmIC5pY29uLWFycm93LS1zZWNvbmRhcnkge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW07XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gIH1cclxufVxyXG4iLCIvL0NvbG9yIFBhbGV0dGVcclxuJHByaW1hcnktY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNiZjAxMTc7XHJcbiRkZWZhdWx0LWNvbG9yOiAjZmZmO1xyXG4kc2VydmljZS1jb2xvcjogIzk3OTc5NztcclxuJGJhY2tncm91bmQtY29sb3I6ICMyYjNhNDI7XHJcblxyXG4vL0ZpZ3VyZXNcclxuJGZpZ3VyZS1jb2xvci1maXJzdDogI2ZkMDQwNDtcclxuJGZpZ3VyZS1jb2xvci1zZWNvbmQ6ICMyZTM2ZDU7XHJcbiRmaWd1cmUtY29sb3ItdGhpcmQ6ICMxOWFmMDk7XHJcbiRmaWd1cmUtY29sb3ItZm91cnRoOiAjZjhhYjA1O1xyXG4kZmlndXJlLWNvbG9yLWZpZnRoOiAjMTNlNGU3O1xyXG4kZmlndXJlLWNvbG9yLXNpeHRoOiAjZmYzYzAwO1xyXG4kZmlndXJlLWNvbG9yLXNldmVudGg6ICMyZTM2ZDU7XHJcbiRmaWd1cmUtc2l6ZTogMjVweDtcclxuJGZpZ3VyZS1xdWFudGl0eS13aWR0aDogMTM7XHJcbiRmaWd1cmUtcXVhbnRpdHktaGVpZ2h0OiAyMDtcclxuXHJcbi8vRm9udHNcclxuJHByaW1hcnktZm9udDogSW1wYWN0LCBzYW5zLXNlcmlmO1xyXG4kZGVmYXVsdC1mb250LXNpemU6IDEuMzNyZW07XHJcbiRoMS1mb250LXNpemU6IDVyZW07XHJcbiRsYWJlbC1mb250LXNpemU6IDJyZW07XHJcbiR0ZXh0LWZvcm0tZm9udC1zaXplOiAwLjhyZW07XHJcbiRzZWNvbmRhcnktdGV4dC1mb250LXNpemU6IDEuNXJlbTtcclxuXHJcbi8vU2l6ZXNcclxuJGNlbnRlcjogMCBhdXRvO1xyXG4kbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiRwcmltYXJ5LWluZGVudDogMnJlbTtcclxuJHNlY29uZGFyeS1pbmRlbnQ6IDAgMnJlbTtcclxuJG1pbi1oZWlnaHQtbWFpbjogNzkuNXZoO1xyXG4kbWF4LXdpZHRoLWljb246IDVyZW07XHJcbiR3aWR0aC1sb2dvOiAxNC4ycmVtO1xyXG4kd2lkdGgtZm9ybTogMzVyZW07XHJcbiRoZWlnaHQtYmFyLWxpbmtzOiAzcmVtO1xyXG4kd2lkdGgtbGlua3M6IDdyZW07XHJcbiR3aWR0aC1pbmZvcm1hdGlvbjogNTByZW07XHJcbiRpbmZvcm0tZmllbGQtd2lkdGg6IDdyZW07XHJcbiRpbmZvcm0tZmllbGQtaGVpZ2h0OiA1NXB4O1xyXG4kaW5mb3JtLWZpZWxkLW1hcmdpbjogMXJlbTtcclxuJGNvbnRyb2xzLWJ1dHRvbi13aWR0aDogN3JlbTtcclxuJGNvbnRyb2xzLWJ1dHRvbi1oZWlnaHQ6IDMuNXJlbTtcclxuJGJvYXJkLXdpZHRoOiAkZmlndXJlLXNpemUgKiAkZmlndXJlLXF1YW50aXR5LXdpZHRoO1xyXG4kYm9hcmQtaGVpZ2h0OiAkZmlndXJlLXNpemUgKiAkZmlndXJlLXF1YW50aXR5LWhlaWdodDtcclxuXHJcbi8vR2VuZXJhbFxyXG4kcHJpbWFyeS1ib3JkZXI6IDEuNXB4IHNvbGlkICRkZWZhdWx0LWNvbG9yO1xyXG4kYm9yZGVyLXJhZGl1czogMXJlbTtcclxuJGhvdmVyLWJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiRob3Zlci1ib3JkZXItY29udHJvbHM6IDNweCBzb2xpZDtcclxuIiwiLnN0YXRlLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5zdGF0ZS1jb250cm9scyAuc3RhdGUtY29udHJvbCB7XG4gIHdpZHRoOiA3cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIG1hcmdpbjogMC42NjY2NjY2NjY3cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzYTQyO1xuICBib3JkZXI6IDNweCBzb2xpZCAjYmYwMTE3O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zdGF0ZS1jb250cm9scyAuc3RhdGUtY29udHJvbDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmMDExNztcbn1cbi5zdGF0ZS1jb250cm9scyAuaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc3RhdGUtY29udHJvbHMgLmljb24tYXJyb3cge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICB3aWR0aDogM3JlbTtcbn1cbi5zdGF0ZS1jb250cm9scyAuaWNvbi1hcnJvdy0tc2Vjb25kYXJ5IHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHdpZHRoOiAyLjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/components/game-controls/game-controls.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/game-controls/game-controls.component.ts ***!
  \*********************************************************************/
/*! exports provided: GameControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameControlsComponent", function() { return GameControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/figures-movement.enum */ "./src/app/enums/figures-movement.enum.ts");
/* harmony import */ var _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/game-state.enum */ "./src/app/enums/game-state.enum.ts");





let GameControlsComponent = class GameControlsComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.moveStep = _enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_3__["FiguresMovement"];
    }
    ngOnInit() {
        this.subscriptionState = this.gameService.getGameState().subscribe((gameState) => {
            this.isPlaying = gameState !== _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_4__["GameState"].PAUSE;
            this.isLostGame = false;
        });
        this.subscriptionLost = this.gameService.onLostGame().subscribe(() => {
            this.isLostGame = true;
        });
    }
    ngOnDestroy() {
        this.subscriptionLost.unsubscribe();
        this.subscriptionState.unsubscribe();
    }
    keyBoardInput(event) {
        if (!this.isPlaying || this.isLostGame) {
            return;
        }
        event.preventDefault();
        switch (event.code) {
            case 'ArrowRight':
                this.gameService.setMoveStep(_enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_3__["FiguresMovement"].RIGHT);
                break;
            case 'ArrowLeft':
                this.gameService.setMoveStep(_enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_3__["FiguresMovement"].LEFT);
                break;
            case 'ArrowUp':
                this.gameService.setMoveStep(_enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_3__["FiguresMovement"].ROTATE);
                break;
            case 'ArrowDown':
                this.gameService.setMoveStep(_enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_3__["FiguresMovement"].DOWN);
                break;
            default:
                break;
        }
    }
    keyBoardUp(event) {
        if (!this.isPlaying || this.isLostGame) {
            return;
        }
        event.preventDefault();
        if (event.code === 'ArrowDown') {
            this.gameService.setMoveStep(_enums_figures_movement_enum__WEBPACK_IMPORTED_MODULE_3__["FiguresMovement"].DOWN_OFF);
        }
    }
    moveFigure(step) {
        this.gameService.setMoveStep(step);
    }
};
GameControlsComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event'])
], GameControlsComponent.prototype, "keyBoardInput", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event'])
], GameControlsComponent.prototype, "keyBoardUp", null);
GameControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-controls',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-controls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-controls/game-controls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-controls.component.scss */ "./src/app/components/game-controls/game-controls.component.scss")).default]
    })
], GameControlsComponent);



/***/ }),

/***/ "./src/app/components/game-header/game-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/game-header/game-header.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  text-align: center;\n  padding: 2rem 0;\n}\n.header .logo {\n  width: 14.2rem;\n  margin: 0 auto;\n  font-size: 5rem;\n  background-color: #bf0117;\n  line-height: 4.7rem;\n}\n.header .wrap-links {\n  margin-top: 2rem;\n  border-top: 1.5px solid #fff;\n  border-bottom: 1.5px solid #fff;\n  transition: 0.35s ease-out;\n}\n.header .wrap-links:hover {\n  border-color: #000;\n  box-shadow: inset 0 -3.5rem 0 0 #bf0117;\n}\n.header .bar-links {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 3rem;\n}\n.header__logout {\n  position: absolute;\n  top: 1.5rem;\n  right: 2rem;\n}\n.header-link {\n  flex-basis: 7rem;\n  color: #fff;\n  text-decoration: none;\n}\n.header-link--button {\n  text-align: center;\n  text-decoration: none;\n}\n.header-link--button:hover {\n  border-color: #000;\n  box-shadow: inset 0 -3.5rem 0 0 #bf0117;\n  cursor: pointer;\n}\n.header-link:first-child {\n  text-align: left;\n}\n.header-link:last-child {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWhlYWRlci9DOlxcVXNlcnNcXGlyeW5hLmNoZXJoaW5hXFxEZXNrdG9wXFxUZXRyaXNcXEF3ZXNvbWVUZXRyaXNHYW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnYW1lLWhlYWRlclxcZ2FtZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1oZWFkZXIvZ2FtZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1oZWFkZXIvQzpcXFVzZXJzXFxpcnluYS5jaGVyaGluYVxcRGVza3RvcFxcVGV0cmlzXFxBd2Vzb21lVGV0cmlzR2FtZS9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FER0U7RUFDRSxjRTJCUztFRjFCVCxjRW9CSztFRm5CTCxlRWFXO0VGWlgseUJFUmM7RUZTZCxtQkFBQTtBQ0RKO0FESUU7RUFDRSxnQkVlYTtFRmRiLDRCRWdDYTtFRi9CYiwrQkUrQmE7RUY5QmIsMEJBQUE7QUNGSjtBRElJO0VBQ0Usa0JFcEJVO0VGcUJWLHVDQUFBO0FDRk47QURNRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUVNZTtBRFZuQjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0U7RUFDRSxnQkVGVTtFRkdWLFdFckNZO0VGc0NaLHFCQUFBO0FDTEo7QURPSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNMTjtBRE1NO0VBQ0Usa0JFOUNRO0VGK0NSLHVDQUFBO0VBQ0EsZUFBQTtBQ0pSO0FEUUk7RUFDRSxnQkFBQTtBQ05OO0FEUUk7RUFDRSxpQkFBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWhlYWRlci9nYW1lLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcblxyXG4gICYgLmxvZ28ge1xyXG4gICAgd2lkdGg6ICR3aWR0aC1sb2dvO1xyXG4gICAgbWFyZ2luOiAkY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAkaDEtZm9udC1zaXplO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAkaDEtZm9udC1zaXplIC0gMC4zcmVtO1xyXG4gIH1cclxuXHJcbiAgJiAud3JhcC1saW5rcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAkcHJpbWFyeS1pbmRlbnQ7XHJcbiAgICBib3JkZXItdG9wOiAkcHJpbWFyeS1ib3JkZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAkcHJpbWFyeS1ib3JkZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlLW91dDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAoLSRjb250cm9scy1idXR0b24taGVpZ2h0KSAwIDAgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmJhci1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0LWJhci1saW5rcztcclxuICB9XHJcbiAgJl9fbG9nb3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMS41cmVtO1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAmLWxpbmsge1xyXG4gICAgZmxleC1iYXNpczogJHdpZHRoLWxpbmtzO1xyXG4gICAgY29sb3I6ICRkZWZhdWx0LWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICYtLWJ1dHRvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgKC0kY29udHJvbHMtYnV0dG9uLWhlaWdodCkgMCAwICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuLmhlYWRlciAubG9nbyB7XG4gIHdpZHRoOiAxNC4ycmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmYwMTE3O1xuICBsaW5lLWhlaWdodDogNC43cmVtO1xufVxuLmhlYWRlciAud3JhcC1saW5rcyB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNmZmY7XG4gIHRyYW5zaXRpb246IDAuMzVzIGVhc2Utb3V0O1xufVxuLmhlYWRlciAud3JhcC1saW5rczpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMy41cmVtIDAgMCAjYmYwMTE3O1xufVxuLmhlYWRlciAuYmFyLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogM3JlbTtcbn1cbi5oZWFkZXJfX2xvZ291dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjVyZW07XG4gIHJpZ2h0OiAycmVtO1xufVxuLmhlYWRlci1saW5rIHtcbiAgZmxleC1iYXNpczogN3JlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXItbGluay0tYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaGVhZGVyLWxpbmstLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMy41cmVtIDAgMCAjYmYwMTE3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyLWxpbms6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmhlYWRlci1saW5rOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iLCIvL0NvbG9yIFBhbGV0dGVcclxuJHByaW1hcnktY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNiZjAxMTc7XHJcbiRkZWZhdWx0LWNvbG9yOiAjZmZmO1xyXG4kc2VydmljZS1jb2xvcjogIzk3OTc5NztcclxuJGJhY2tncm91bmQtY29sb3I6ICMyYjNhNDI7XHJcblxyXG4vL0ZpZ3VyZXNcclxuJGZpZ3VyZS1jb2xvci1maXJzdDogI2ZkMDQwNDtcclxuJGZpZ3VyZS1jb2xvci1zZWNvbmQ6ICMyZTM2ZDU7XHJcbiRmaWd1cmUtY29sb3ItdGhpcmQ6ICMxOWFmMDk7XHJcbiRmaWd1cmUtY29sb3ItZm91cnRoOiAjZjhhYjA1O1xyXG4kZmlndXJlLWNvbG9yLWZpZnRoOiAjMTNlNGU3O1xyXG4kZmlndXJlLWNvbG9yLXNpeHRoOiAjZmYzYzAwO1xyXG4kZmlndXJlLWNvbG9yLXNldmVudGg6ICMyZTM2ZDU7XHJcbiRmaWd1cmUtc2l6ZTogMjVweDtcclxuJGZpZ3VyZS1xdWFudGl0eS13aWR0aDogMTM7XHJcbiRmaWd1cmUtcXVhbnRpdHktaGVpZ2h0OiAyMDtcclxuXHJcbi8vRm9udHNcclxuJHByaW1hcnktZm9udDogSW1wYWN0LCBzYW5zLXNlcmlmO1xyXG4kZGVmYXVsdC1mb250LXNpemU6IDEuMzNyZW07XHJcbiRoMS1mb250LXNpemU6IDVyZW07XHJcbiRsYWJlbC1mb250LXNpemU6IDJyZW07XHJcbiR0ZXh0LWZvcm0tZm9udC1zaXplOiAwLjhyZW07XHJcbiRzZWNvbmRhcnktdGV4dC1mb250LXNpemU6IDEuNXJlbTtcclxuXHJcbi8vU2l6ZXNcclxuJGNlbnRlcjogMCBhdXRvO1xyXG4kbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiRwcmltYXJ5LWluZGVudDogMnJlbTtcclxuJHNlY29uZGFyeS1pbmRlbnQ6IDAgMnJlbTtcclxuJG1pbi1oZWlnaHQtbWFpbjogNzkuNXZoO1xyXG4kbWF4LXdpZHRoLWljb246IDVyZW07XHJcbiR3aWR0aC1sb2dvOiAxNC4ycmVtO1xyXG4kd2lkdGgtZm9ybTogMzVyZW07XHJcbiRoZWlnaHQtYmFyLWxpbmtzOiAzcmVtO1xyXG4kd2lkdGgtbGlua3M6IDdyZW07XHJcbiR3aWR0aC1pbmZvcm1hdGlvbjogNTByZW07XHJcbiRpbmZvcm0tZmllbGQtd2lkdGg6IDdyZW07XHJcbiRpbmZvcm0tZmllbGQtaGVpZ2h0OiA1NXB4O1xyXG4kaW5mb3JtLWZpZWxkLW1hcmdpbjogMXJlbTtcclxuJGNvbnRyb2xzLWJ1dHRvbi13aWR0aDogN3JlbTtcclxuJGNvbnRyb2xzLWJ1dHRvbi1oZWlnaHQ6IDMuNXJlbTtcclxuJGJvYXJkLXdpZHRoOiAkZmlndXJlLXNpemUgKiAkZmlndXJlLXF1YW50aXR5LXdpZHRoO1xyXG4kYm9hcmQtaGVpZ2h0OiAkZmlndXJlLXNpemUgKiAkZmlndXJlLXF1YW50aXR5LWhlaWdodDtcclxuXHJcbi8vR2VuZXJhbFxyXG4kcHJpbWFyeS1ib3JkZXI6IDEuNXB4IHNvbGlkICRkZWZhdWx0LWNvbG9yO1xyXG4kYm9yZGVyLXJhZGl1czogMXJlbTtcclxuJGhvdmVyLWJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiRob3Zlci1ib3JkZXItY29udHJvbHM6IDNweCBzb2xpZDtcclxuIl19 */");

/***/ }),

/***/ "./src/app/components/game-header/game-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-header/game-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: GameHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameHeaderComponent", function() { return GameHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




let GameHeaderComponent = class GameHeaderComponent {
    constructor(userService, toastrService) {
        this.userService = userService;
        this.toastrService = toastrService;
        this.userIsAuthenticated = !!localStorage.getItem('access_user');
    }
    ngOnInit() {
        this.toastrService.overlayContainer = this.toastContainer;
        if (!this.userIsAuthenticated) {
            setTimeout(() => this.toastrService.info('Please login to save your score to leaderboard'));
        }
        this.authSubscription = this.userService
            .getAuthListener()
            .subscribe((user) => {
            if (user) {
                this.toastrService.success('Welcome to AwesomeTetrisGame!');
                this.userIsAuthenticated = true;
            }
            else {
                this.userIsAuthenticated = false;
            }
        });
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
};
GameHeaderComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"], { static: true })
], GameHeaderComponent.prototype, "toastContainer", void 0);
GameHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-header/game-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-header.component.scss */ "./src/app/components/game-header/game-header.component.scss")).default]
    })
], GameHeaderComponent);



/***/ }),

/***/ "./src/app/components/game-information/game-information.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/game-information/game-information.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".information-block {\n  margin-bottom: 2rem;\n}\n.information-label {\n  margin-bottom: 1rem;\n  font-size: 1.33rem;\n  text-align: center;\n  color: #979797;\n}\n.information-field {\n  margin: 0 auto;\n  height: 55px;\n  width: 7rem;\n  background-color: #2b3a42;\n  border: 1.5px solid #fff;\n  line-height: 55px;\n  font-size: 1.33rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWluZm9ybWF0aW9uL0M6XFxVc2Vyc1xcaXJ5bmEuY2hlcmhpbmFcXERlc2t0b3BcXFRldHJpc1xcQXdlc29tZVRldHJpc0dhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWUtaW5mb3JtYXRpb25cXGdhbWUtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1pbmZvcm1hdGlvbi9DOlxcVXNlcnNcXGlyeW5hLmNoZXJoaW5hXFxEZXNrdG9wXFxUZXRyaXNcXEF3ZXNvbWVUZXRyaXNHYW1lL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtaW5mb3JtYXRpb24vZ2FtZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG1CQzBCYTtBQzVCakI7QUZLRTtFQUNFLG1CQ2lDa0I7RURoQ2xCLGtCQ1lnQjtFRFhoQixrQkFBQTtFQUNBLGNDUFk7QUNJaEI7QUZNRTtFQUNFLGNDYUs7RURaTCxZQ3dCa0I7RUR2QmxCLFdDc0JpQjtFRHJCakIseUJDYmU7RURjZix3QkM2QmE7RUQ1QmIsaUJDb0JrQjtFRG5CbEIsa0JBQUE7RUFDQSxrQkFBQTtBRUpKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWluZm9ybWF0aW9uL2dhbWUtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4uaW5mb3JtYXRpb24ge1xyXG4gICYtYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHByaW1hcnktaW5kZW50O1xyXG4gIH1cclxuXHJcbiAgJi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkaW5mb3JtLWZpZWxkLW1hcmdpbjtcclxuICAgIGZvbnQtc2l6ZTogJGRlZmF1bHQtZm9udC1zaXplO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRzZXJ2aWNlLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJi1maWVsZCB7XHJcbiAgICBtYXJnaW46ICRjZW50ZXI7XHJcbiAgICBoZWlnaHQ6ICRpbmZvcm0tZmllbGQtaGVpZ2h0O1xyXG4gICAgd2lkdGg6ICRpbmZvcm0tZmllbGQtd2lkdGg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGJvcmRlcjogJHByaW1hcnktYm9yZGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRpbmZvcm0tZmllbGQtaGVpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAkZGVmYXVsdC1mb250LXNpemU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi8vQ29sb3IgUGFsZXR0ZVxyXG4kcHJpbWFyeS1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS1jb2xvcjogI2JmMDExNztcclxuJGRlZmF1bHQtY29sb3I6ICNmZmY7XHJcbiRzZXJ2aWNlLWNvbG9yOiAjOTc5Nzk3O1xyXG4kYmFja2dyb3VuZC1jb2xvcjogIzJiM2E0MjtcclxuXHJcbi8vRmlndXJlc1xyXG4kZmlndXJlLWNvbG9yLWZpcnN0OiAjZmQwNDA0O1xyXG4kZmlndXJlLWNvbG9yLXNlY29uZDogIzJlMzZkNTtcclxuJGZpZ3VyZS1jb2xvci10aGlyZDogIzE5YWYwOTtcclxuJGZpZ3VyZS1jb2xvci1mb3VydGg6ICNmOGFiMDU7XHJcbiRmaWd1cmUtY29sb3ItZmlmdGg6ICMxM2U0ZTc7XHJcbiRmaWd1cmUtY29sb3Itc2l4dGg6ICNmZjNjMDA7XHJcbiRmaWd1cmUtY29sb3Itc2V2ZW50aDogIzJlMzZkNTtcclxuJGZpZ3VyZS1zaXplOiAyNXB4O1xyXG4kZmlndXJlLXF1YW50aXR5LXdpZHRoOiAxMztcclxuJGZpZ3VyZS1xdWFudGl0eS1oZWlnaHQ6IDIwO1xyXG5cclxuLy9Gb250c1xyXG4kcHJpbWFyeS1mb250OiBJbXBhY3QsIHNhbnMtc2VyaWY7XHJcbiRkZWZhdWx0LWZvbnQtc2l6ZTogMS4zM3JlbTtcclxuJGgxLWZvbnQtc2l6ZTogNXJlbTtcclxuJGxhYmVsLWZvbnQtc2l6ZTogMnJlbTtcclxuJHRleHQtZm9ybS1mb250LXNpemU6IDAuOHJlbTtcclxuJHNlY29uZGFyeS10ZXh0LWZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuLy9TaXplc1xyXG4kY2VudGVyOiAwIGF1dG87XHJcbiRtYXgtd2lkdGg6IDExMDBweDtcclxuJHByaW1hcnktaW5kZW50OiAycmVtO1xyXG4kc2Vjb25kYXJ5LWluZGVudDogMCAycmVtO1xyXG4kbWluLWhlaWdodC1tYWluOiA3OS41dmg7XHJcbiRtYXgtd2lkdGgtaWNvbjogNXJlbTtcclxuJHdpZHRoLWxvZ286IDE0LjJyZW07XHJcbiR3aWR0aC1mb3JtOiAzNXJlbTtcclxuJGhlaWdodC1iYXItbGlua3M6IDNyZW07XHJcbiR3aWR0aC1saW5rczogN3JlbTtcclxuJHdpZHRoLWluZm9ybWF0aW9uOiA1MHJlbTtcclxuJGluZm9ybS1maWVsZC13aWR0aDogN3JlbTtcclxuJGluZm9ybS1maWVsZC1oZWlnaHQ6IDU1cHg7XHJcbiRpbmZvcm0tZmllbGQtbWFyZ2luOiAxcmVtO1xyXG4kY29udHJvbHMtYnV0dG9uLXdpZHRoOiA3cmVtO1xyXG4kY29udHJvbHMtYnV0dG9uLWhlaWdodDogMy41cmVtO1xyXG4kYm9hcmQtd2lkdGg6ICRmaWd1cmUtc2l6ZSAqICRmaWd1cmUtcXVhbnRpdHktd2lkdGg7XHJcbiRib2FyZC1oZWlnaHQ6ICRmaWd1cmUtc2l6ZSAqICRmaWd1cmUtcXVhbnRpdHktaGVpZ2h0O1xyXG5cclxuLy9HZW5lcmFsXHJcbiRwcmltYXJ5LWJvcmRlcjogMS41cHggc29saWQgJGRlZmF1bHQtY29sb3I7XHJcbiRib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4kaG92ZXItYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuJGhvdmVyLWJvcmRlci1jb250cm9sczogM3B4IHNvbGlkO1xyXG4iLCIuaW5mb3JtYXRpb24tYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmluZm9ybWF0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjMzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuLmluZm9ybWF0aW9uLWZpZWxkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjNhNDI7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMS4zM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/game-information/game-information.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/game-information/game-information.component.ts ***!
  \***************************************************************************/
/*! exports provided: GameInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInformationComponent", function() { return GameInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");



let GameInformationComponent = class GameInformationComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.gameStats$ = this.gameService.onUpdateGameInformation();
    }
};
GameInformationComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
GameInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-information/game-information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-information.component.scss */ "./src/app/components/game-information/game-information.component.scss")).default]
    })
], GameInformationComponent);



/***/ }),

/***/ "./src/app/components/game-leaderboard/game-leaderboard.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/game-leaderboard/game-leaderboard.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".leaderboard {\n  padding: 1rem;\n  margin: 0.5rem 0;\n  border: 1px solid #fff;\n  border-radius: 1rem;\n  width: 100%;\n  transition: border-color 0.3s ease-out;\n  text-transform: none;\n}\n.leaderboard:hover {\n  border: 1px solid #bf0117;\n}\n.leaderboard .active {\n  background-color: #bf0117;\n}\n.leaderboard__header {\n  border: none;\n  color: #000;\n}\n.leaderboard__header:hover {\n  border: none;\n}\n.leaderboard__list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  border-radius: 1rem;\n  background-color: #2b3a42;\n  list-style: none;\n}\n.leaderboard__field {\n  flex-basis: 24%;\n  text-align: center;\n}\n.leaderboard__field--index {\n  flex-basis: 4%;\n}\n.leaderboard__player-name {\n  text-align: left;\n}\n.leaderboard__current-player {\n  text-align: center;\n}\n.point {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  margin: 2rem;\n  border: 2px solid #979797;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWxlYWRlcmJvYXJkL0M6XFxVc2Vyc1xcaXJ5bmEuY2hlcmhpbmFcXERlc2t0b3BcXFRldHJpc1xcQXdlc29tZVRldHJpc0dhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWUtbGVhZGVyYm9hcmRcXGdhbWUtbGVhZGVyYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1sZWFkZXJib2FyZC9DOlxcVXNlcnNcXGlyeW5hLmNoZXJoaW5hXFxEZXNrdG9wXFxUZXRyaXNcXEF3ZXNvbWVUZXRyaXNHYW1lL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbGVhZGVyYm9hcmQvZ2FtZS1sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJDMkNjO0VEMUNkLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0FFREY7QUZHRTtFQUNFLHlCQ3NDVztBQ3ZDZjtBRklFO0VBQ0UseUJDZGM7QUNZbEI7QUZLRTtFQUNFLFlBQUE7RUFDQSxXQ3BCWTtBQ2lCaEI7QUZJSTtFQUNFLFlBQUE7QUVGTjtBRk1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJDaUJZO0VEaEJaLHlCQzVCZTtFRDZCZixnQkFBQTtBRUpKO0FGT0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUVMSjtBRk1JO0VBQ0UsY0FBQTtBRUpOO0FGUUU7RUFDRSxnQkFBQTtBRU5KO0FGU0U7RUFDRSxrQkFBQTtBRVBKO0FGV0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FFUkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbGVhZGVyYm9hcmQvZ2FtZS1sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4ubGVhZGVyYm9hcmQge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZGVmYXVsdC1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLW91dDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXI6ICRob3Zlci1ib3JkZXI7XHJcbiAgfVxyXG5cclxuICAmIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gICZfX2ZpZWxkIHtcclxuICAgIGZsZXgtYmFzaXM6IDI0JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICYtLWluZGV4IHtcclxuICAgICAgZmxleC1iYXNpczogNCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19wbGF5ZXItbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgJl9fY3VycmVudC1wbGF5ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnBvaW50IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkc2VydmljZS1jb2xvcjtcclxufVxyXG4iLCIvL0NvbG9yIFBhbGV0dGVcclxuJHByaW1hcnktY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNiZjAxMTc7XHJcbiRkZWZhdWx0LWNvbG9yOiAjZmZmO1xyXG4kc2VydmljZS1jb2xvcjogIzk3OTc5NztcclxuJGJhY2tncm91bmQtY29sb3I6ICMyYjNhNDI7XHJcblxyXG4vL0ZpZ3VyZXNcclxuJGZpZ3VyZS1jb2xvci1maXJzdDogI2ZkMDQwNDtcclxuJGZpZ3VyZS1jb2xvci1zZWNvbmQ6ICMyZTM2ZDU7XHJcbiRmaWd1cmUtY29sb3ItdGhpcmQ6ICMxOWFmMDk7XHJcbiRmaWd1cmUtY29sb3ItZm91cnRoOiAjZjhhYjA1O1xyXG4kZmlndXJlLWNvbG9yLWZpZnRoOiAjMTNlNGU3O1xyXG4kZmlndXJlLWNvbG9yLXNpeHRoOiAjZmYzYzAwO1xyXG4kZmlndXJlLWNvbG9yLXNldmVudGg6ICMyZTM2ZDU7XHJcbiRmaWd1cmUtc2l6ZTogMjVweDtcclxuJGZpZ3VyZS1xdWFudGl0eS13aWR0aDogMTM7XHJcbiRmaWd1cmUtcXVhbnRpdHktaGVpZ2h0OiAyMDtcclxuXHJcbi8vRm9udHNcclxuJHByaW1hcnktZm9udDogSW1wYWN0LCBzYW5zLXNlcmlmO1xyXG4kZGVmYXVsdC1mb250LXNpemU6IDEuMzNyZW07XHJcbiRoMS1mb250LXNpemU6IDVyZW07XHJcbiRsYWJlbC1mb250LXNpemU6IDJyZW07XHJcbiR0ZXh0LWZvcm0tZm9udC1zaXplOiAwLjhyZW07XHJcbiRzZWNvbmRhcnktdGV4dC1mb250LXNpemU6IDEuNXJlbTtcclxuXHJcbi8vU2l6ZXNcclxuJGNlbnRlcjogMCBhdXRvO1xyXG4kbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiRwcmltYXJ5LWluZGVudDogMnJlbTtcclxuJHNlY29uZGFyeS1pbmRlbnQ6IDAgMnJlbTtcclxuJG1pbi1oZWlnaHQtbWFpbjogNzkuNXZoO1xyXG4kbWF4LXdpZHRoLWljb246IDVyZW07XHJcbiR3aWR0aC1sb2dvOiAxNC4ycmVtO1xyXG4kd2lkdGgtZm9ybTogMzVyZW07XHJcbiRoZWlnaHQtYmFyLWxpbmtzOiAzcmVtO1xyXG4kd2lkdGgtbGlua3M6IDdyZW07XHJcbiR3aWR0aC1pbmZvcm1hdGlvbjogNTByZW07XHJcbiRpbmZvcm0tZmllbGQtd2lkdGg6IDdyZW07XHJcbiRpbmZvcm0tZmllbGQtaGVpZ2h0OiA1NXB4O1xyXG4kaW5mb3JtLWZpZWxkLW1hcmdpbjogMXJlbTtcclxuJGNvbnRyb2xzLWJ1dHRvbi13aWR0aDogN3JlbTtcclxuJGNvbnRyb2xzLWJ1dHRvbi1oZWlnaHQ6IDMuNXJlbTtcclxuJGJvYXJkLXdpZHRoOiAkZmlndXJlLXNpemUgKiAkZmlndXJlLXF1YW50aXR5LXdpZHRoO1xyXG4kYm9hcmQtaGVpZ2h0OiAkZmlndXJlLXNpemUgKiAkZmlndXJlLXF1YW50aXR5LWhlaWdodDtcclxuXHJcbi8vR2VuZXJhbFxyXG4kcHJpbWFyeS1ib3JkZXI6IDEuNXB4IHNvbGlkICRkZWZhdWx0LWNvbG9yO1xyXG4kYm9yZGVyLXJhZGl1czogMXJlbTtcclxuJGhvdmVyLWJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiRob3Zlci1ib3JkZXItY29udHJvbHM6IDNweCBzb2xpZDtcclxuIiwiLmxlYWRlcmJvYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2Utb3V0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5sZWFkZXJib2FyZDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZjAxMTc7XG59XG4ubGVhZGVyYm9hcmQgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZjAxMTc7XG59XG4ubGVhZGVyYm9hcmRfX2hlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG59XG4ubGVhZGVyYm9hcmRfX2hlYWRlcjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5sZWFkZXJib2FyZF9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiM2E0MjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5sZWFkZXJib2FyZF9fZmllbGQge1xuICBmbGV4LWJhc2lzOiAyNCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sZWFkZXJib2FyZF9fZmllbGQtLWluZGV4IHtcbiAgZmxleC1iYXNpczogNCU7XG59XG4ubGVhZGVyYm9hcmRfX3BsYXllci1uYW1lIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sZWFkZXJib2FyZF9fY3VycmVudC1wbGF5ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb2ludCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbWFyZ2luOiAycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTc5Nzk3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/game-leaderboard/game-leaderboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/game-leaderboard/game-leaderboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: GameLeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLeaderboardComponent", function() { return GameLeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _constants_game_information_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/game-information.const */ "./src/app/constants/game-information.const.ts");





let GameLeaderboardComponent = class GameLeaderboardComponent {
    constructor(gameService, userService) {
        this.gameService = gameService;
        this.userService = userService;
        this.currentPlayerName = this.userService.getUserName();
    }
    ngOnInit() {
        this.gameService.getPlayerGameResult().subscribe((results) => {
            this.gameResults = results.slice(0, _constants_game_information_const__WEBPACK_IMPORTED_MODULE_4__["LEADERBOARD_MAX_WIDTH"]);
            this.currentPlayerPlace = results.findIndex((player) => player.username === this.currentPlayerName);
            this.isCurrentPlayerNotInTop = this.currentPlayerPlace > _constants_game_information_const__WEBPACK_IMPORTED_MODULE_4__["LEADERBOARD_MAX_WIDTH"];
            if (this.isCurrentPlayerNotInTop) {
                this.currentPlayerNotInTop = results[this.currentPlayerPlace];
            }
        });
        this.userService.getAuthListener().subscribe((user) => {
            if (!user) {
                this.isCurrentPlayerNotInTop = false;
                this.currentPlayerName = null;
            }
        });
    }
};
GameLeaderboardComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
GameLeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-leaderboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-leaderboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-leaderboard/game-leaderboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-leaderboard.component.scss */ "./src/app/components/game-leaderboard/game-leaderboard.component.scss")).default]
    })
], GameLeaderboardComponent);



/***/ }),

/***/ "./src/app/components/game-loader/game-loader.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/game-loader/game-loader.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1sb2FkZXIvZ2FtZS1sb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/game-loader/game-loader.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-loader/game-loader.component.ts ***!
  \*****************************************************************/
/*! exports provided: GameLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLoaderComponent", function() { return GameLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameLoaderComponent = class GameLoaderComponent {
};
GameLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-loader/game-loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-loader.component.scss */ "./src/app/components/game-loader/game-loader.component.scss")).default]
    })
], GameLoaderComponent);



/***/ }),

/***/ "./src/app/components/game-login-form/game-login-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/game-login-form/game-login-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login__form {\n  width: 35rem;\n  border: 1.5px solid #fff;\n  padding: 2rem;\n  background-color: #2b3a42;\n  text-align: right;\n  border-radius: 1rem;\n  font-size: 1.3rem;\n}\n.login__group {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.7rem 0;\n  flex-wrap: wrap;\n}\n.login__group--gender {\n  flex-direction: column;\n}\n.login__group--radio {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.login__group--radio label {\n  width: 7rem;\n  text-align: left;\n}\n.login__text {\n  text-transform: lowercase;\n  color: #979797;\n  font-size: 0.8rem;\n}\n.login__text--warning {\n  font-family: sans-serif;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: #bf0117;\n}\n.login__input {\n  height: 3rem;\n  background-color: #979797;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n.login__input:focus {\n  outline: none;\n}\n.login__input.ng-invalid.ng-touched {\n  border: 1px solid #bf0117;\n}\n.login__input[type=date] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.login__input[type=date]::-webkit-clear-button {\n  display: none;\n}\n.login__input[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n.login__input[type=date]::-webkit-calendar-picker-indicator {\n  color: #bf0117;\n}\n.login__button {\n  margin-top: 1rem;\n}\n.login__button:hover:enabled {\n  border-color: #bf0117;\n  box-shadow: inset 0 -3.5rem 0 0 #bf0117;\n  cursor: pointer;\n}\n.login__button:disabled {\n  cursor: no-drop;\n  color: #979797;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWxvZ2luLWZvcm0vQzpcXFVzZXJzXFxpcnluYS5jaGVyaGluYVxcRGVza3RvcFxcVGV0cmlzXFxBd2Vzb21lVGV0cmlzR2FtZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZ2FtZS1sb2dpbi1mb3JtXFxnYW1lLWxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1sb2dpbi1mb3JtL0M6XFxVc2Vyc1xcaXJ5bmEuY2hlcmhpbmFcXERlc2t0b3BcXFRldHJpc1xcQXdlc29tZVRldHJpc0dhbWUvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1sb2dpbi1mb3JtL2dhbWUtbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFlDK0JTO0VEOUJULHdCQzJDYTtFRDFDYixhQ3dCYTtFRHZCYix5QkNGZTtFREdmLGlCQUFBO0VBQ0EsbUJDd0NZO0VEdkNaLGlCQUFBO0FFRko7QUZLRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUVISjtBRklJO0VBQ0Usc0JBQUE7QUVGTjtBRklJO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUVGTjtBRkdNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FFRFI7QUZNRTtFQUNFLHlCQUFBO0VBQ0EsY0NoQ1k7RURpQ1osaUJDYmtCO0FDU3RCO0FGS0k7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQ3pDWTtBQ3NDbEI7QUZPRTtFQUNFLFlBQUE7RUFDQSx5QkM3Q1k7RUQ4Q1osZUFBQTtFQUNBLHFCQUFBO0FFTEo7QUZNSTtFQUNFLGFBQUE7QUVKTjtBRk1JO0VBQ0UseUJDTlM7QUNFZjtBRk1JO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0FFSk47QUZLTTtFQUNFLGFBQUE7QUVIUjtBRktNO0VBQ0UsYUFBQTtBRUhSO0FGS007RUFDRSxjQ2pFVTtBQzhEbEI7QUZRRTtFQUNFLGdCQUFBO0FFTko7QUZPSTtFQUNFLHFCQ3pFWTtFRDBFWix1Q0FBQTtFQUNBLGVBQUE7QUVMTjtBRk9JO0VBQ0UsZUFBQTtFQUNBLGNDN0VVO0FDd0VoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1sb2dpbi1mb3JtL2dhbWUtbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4ubG9naW4ge1xyXG4gICZfX2Zvcm0ge1xyXG4gICAgd2lkdGg6ICR3aWR0aC1mb3JtO1xyXG4gICAgYm9yZGVyOiAkcHJpbWFyeS1ib3JkZXI7XHJcbiAgICBwYWRkaW5nOiAkcHJpbWFyeS1pbmRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcblxyXG4gICZfX2dyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS43cmVtIDA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAmLS1nZW5kZXIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgJi0tcmFkaW8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICYgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIGNvbG9yOiAkc2VydmljZS1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogJHRleHQtZm9ybS1mb250LXNpemU7XHJcbiAgICAmLS13YXJuaW5nIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VydmljZS1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLzI7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgICAgYm9yZGVyOiAkaG92ZXItYm9yZGVyO1xyXG4gICAgfVxyXG4gICAgJlt0eXBlPSdkYXRlJ10ge1xyXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAmOjotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2J1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgJjpob3ZlcjplbmFibGVkIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwICgtJGNvbnRyb2xzLWJ1dHRvbi1oZWlnaHQpIDAgMCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgY3Vyc29yOiBuby1kcm9wO1xyXG4gICAgICBjb2xvcjogJHNlcnZpY2UtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vQ29sb3IgUGFsZXR0ZVxyXG4kcHJpbWFyeS1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS1jb2xvcjogI2JmMDExNztcclxuJGRlZmF1bHQtY29sb3I6ICNmZmY7XHJcbiRzZXJ2aWNlLWNvbG9yOiAjOTc5Nzk3O1xyXG4kYmFja2dyb3VuZC1jb2xvcjogIzJiM2E0MjtcclxuXHJcbi8vRmlndXJlc1xyXG4kZmlndXJlLWNvbG9yLWZpcnN0OiAjZmQwNDA0O1xyXG4kZmlndXJlLWNvbG9yLXNlY29uZDogIzJlMzZkNTtcclxuJGZpZ3VyZS1jb2xvci10aGlyZDogIzE5YWYwOTtcclxuJGZpZ3VyZS1jb2xvci1mb3VydGg6ICNmOGFiMDU7XHJcbiRmaWd1cmUtY29sb3ItZmlmdGg6ICMxM2U0ZTc7XHJcbiRmaWd1cmUtY29sb3Itc2l4dGg6ICNmZjNjMDA7XHJcbiRmaWd1cmUtY29sb3Itc2V2ZW50aDogIzJlMzZkNTtcclxuJGZpZ3VyZS1zaXplOiAyNXB4O1xyXG4kZmlndXJlLXF1YW50aXR5LXdpZHRoOiAxMztcclxuJGZpZ3VyZS1xdWFudGl0eS1oZWlnaHQ6IDIwO1xyXG5cclxuLy9Gb250c1xyXG4kcHJpbWFyeS1mb250OiBJbXBhY3QsIHNhbnMtc2VyaWY7XHJcbiRkZWZhdWx0LWZvbnQtc2l6ZTogMS4zM3JlbTtcclxuJGgxLWZvbnQtc2l6ZTogNXJlbTtcclxuJGxhYmVsLWZvbnQtc2l6ZTogMnJlbTtcclxuJHRleHQtZm9ybS1mb250LXNpemU6IDAuOHJlbTtcclxuJHNlY29uZGFyeS10ZXh0LWZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuLy9TaXplc1xyXG4kY2VudGVyOiAwIGF1dG87XHJcbiRtYXgtd2lkdGg6IDExMDBweDtcclxuJHByaW1hcnktaW5kZW50OiAycmVtO1xyXG4kc2Vjb25kYXJ5LWluZGVudDogMCAycmVtO1xyXG4kbWluLWhlaWdodC1tYWluOiA3OS41dmg7XHJcbiRtYXgtd2lkdGgtaWNvbjogNXJlbTtcclxuJHdpZHRoLWxvZ286IDE0LjJyZW07XHJcbiR3aWR0aC1mb3JtOiAzNXJlbTtcclxuJGhlaWdodC1iYXItbGlua3M6IDNyZW07XHJcbiR3aWR0aC1saW5rczogN3JlbTtcclxuJHdpZHRoLWluZm9ybWF0aW9uOiA1MHJlbTtcclxuJGluZm9ybS1maWVsZC13aWR0aDogN3JlbTtcclxuJGluZm9ybS1maWVsZC1oZWlnaHQ6IDU1cHg7XHJcbiRpbmZvcm0tZmllbGQtbWFyZ2luOiAxcmVtO1xyXG4kY29udHJvbHMtYnV0dG9uLXdpZHRoOiA3cmVtO1xyXG4kY29udHJvbHMtYnV0dG9uLWhlaWdodDogMy41cmVtO1xyXG4kYm9hcmQtd2lkdGg6ICRmaWd1cmUtc2l6ZSAqICRmaWd1cmUtcXVhbnRpdHktd2lkdGg7XHJcbiRib2FyZC1oZWlnaHQ6ICRmaWd1cmUtc2l6ZSAqICRmaWd1cmUtcXVhbnRpdHktaGVpZ2h0O1xyXG5cclxuLy9HZW5lcmFsXHJcbiRwcmltYXJ5LWJvcmRlcjogMS41cHggc29saWQgJGRlZmF1bHQtY29sb3I7XHJcbiRib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4kaG92ZXItYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuJGhvdmVyLWJvcmRlci1jb250cm9sczogM3B4IHNvbGlkO1xyXG4iLCIubG9naW5fX2Zvcm0ge1xuICB3aWR0aDogMzVyZW07XG4gIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiM2E0MjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLmxvZ2luX19ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxLjdyZW0gMDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmxvZ2luX19ncm91cC0tZ2VuZGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5sb2dpbl9fZ3JvdXAtLXJhZGlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luX19ncm91cC0tcmFkaW8gbGFiZWwge1xuICB3aWR0aDogN3JlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sb2dpbl9fdGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5sb2dpbl9fdGV4dC0td2FybmluZyB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiAjYmYwMTE3O1xufVxuLmxvZ2luX19pbnB1dCB7XG4gIGhlaWdodDogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4ubG9naW5fX2lucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5sb2dpbl9faW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmMDExNztcbn1cbi5sb2dpbl9faW5wdXRbdHlwZT1kYXRlXSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG4ubG9naW5fX2lucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dpbl9faW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9naW5fX2lucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGNvbG9yOiAjYmYwMTE3O1xufVxuLmxvZ2luX19idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmxvZ2luX19idXR0b246aG92ZXI6ZW5hYmxlZCB7XG4gIGJvcmRlci1jb2xvcjogI2JmMDExNztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMy41cmVtIDAgMCAjYmYwMTE3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9naW5fX2J1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgY29sb3I6ICM5Nzk3OTc7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/game-login-form/game-login-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/game-login-form/game-login-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: GameLoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLoginFormComponent", function() { return GameLoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");






let GameLoginFormComponent = class GameLoginFormComponent {
    constructor(route, userService, toastrService, router) {
        this.route = route;
        this.userService = userService;
        this.toastrService = toastrService;
        this.router = router;
        this.genders = ['male', 'female'];
    }
    ngOnInit() {
        this.toastrService.overlayContainer = this.toastContainer;
        this.logInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                ]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}'),
                ]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            }),
            playerInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('male'),
                dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Ukraine'),
            }),
        });
        this.querySubscription = this.route.queryParams.subscribe((queryParam) => {
            this.isSignUpForm = queryParam.form;
        });
    }
    onLogin() {
        if (this.logInForm.invalid) {
            return;
        }
        this.userService.loginUser(this.logInForm.value).subscribe(({ token, user }) => {
            localStorage.setItem('access_token', token);
            localStorage.setItem('access_user', JSON.stringify(user));
            localStorage.setItem('user_name', user.username);
            this.token = token;
            if (token) {
                this.currentUser = user;
                this.userService.setUser(user);
                this.router.navigate(['/game']);
            }
        }, () => {
            this.toastrService.error('Username and/or Password incorrect. Try again.', '', {
                timeOut: 3000,
            });
        });
    }
    onSignUp() {
        if (this.signUpForm.invalid) {
            return;
        }
        this.userService.createUser(this.signUpForm.value).subscribe((res) => {
            if (res) {
                this.toastrService.warning('You have successfully Signed Up! Please, LogIn');
                this.router.navigate(['/login']);
            }
        }, () => {
            this.signUpForm.patchValue({
                userInformation: {
                    username: null,
                },
            });
            this.toastrService.error('This name is already used. Please, choose another.', '', {
                timeOut: 3000,
            });
        });
    }
};
GameLoginFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastContainerDirective"], { static: true })
], GameLoginFormComponent.prototype, "toastContainer", void 0);
GameLoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-login-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-login-form/game-login-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-login-form.component.scss */ "./src/app/components/game-login-form/game-login-form.component.scss")).default]
    })
], GameLoginFormComponent);



/***/ }),

/***/ "./src/app/components/game-main/game-main.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/game-main/game-main.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".game {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n}\n.game .wrap-controls {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLW1haW4vQzpcXFVzZXJzXFxpcnluYS5jaGVyaGluYVxcRGVza3RvcFxcVGV0cmlzXFxBd2Vzb21lVGV0cmlzR2FtZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZ2FtZS1tYWluXFxnYW1lLW1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1tYWluL2dhbWUtbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLW1haW4vQzpcXFVzZXJzXFxpcnluYS5jaGVyaGluYVxcRGVza3RvcFxcVGV0cmlzXFxBd2Vzb21lVGV0cmlzR2FtZS9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDREY7QURHRTtFQUNFLGdCRXNCYTtBRHZCakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbWFpbi9nYW1lLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4uZ2FtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAmIC53cmFwLWNvbnRyb2xzIHtcclxuICAgIG1hcmdpbi10b3A6ICRwcmltYXJ5LWluZGVudDtcclxuICB9XHJcbn1cclxuIiwiLmdhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5nYW1lIC53cmFwLWNvbnRyb2xzIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn0iLCIvL0NvbG9yIFBhbGV0dGVcclxuJHByaW1hcnktY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNiZjAxMTc7XHJcbiRkZWZhdWx0LWNvbG9yOiAjZmZmO1xyXG4kc2VydmljZS1jb2xvcjogIzk3OTc5NztcclxuJGJhY2tncm91bmQtY29sb3I6ICMyYjNhNDI7XHJcblxyXG4vL0ZpZ3VyZXNcclxuJGZpZ3VyZS1jb2xvci1maXJzdDogI2ZkMDQwNDtcclxuJGZpZ3VyZS1jb2xvci1zZWNvbmQ6ICMyZTM2ZDU7XHJcbiRmaWd1cmUtY29sb3ItdGhpcmQ6ICMxOWFmMDk7XHJcbiRmaWd1cmUtY29sb3ItZm91cnRoOiAjZjhhYjA1O1xyXG4kZmlndXJlLWNvbG9yLWZpZnRoOiAjMTNlNGU3O1xyXG4kZmlndXJlLWNvbG9yLXNpeHRoOiAjZmYzYzAwO1xyXG4kZmlndXJlLWNvbG9yLXNldmVudGg6ICMyZTM2ZDU7XHJcbiRmaWd1cmUtc2l6ZTogMjVweDtcclxuJGZpZ3VyZS1xdWFudGl0eS13aWR0aDogMTM7XHJcbiRmaWd1cmUtcXVhbnRpdHktaGVpZ2h0OiAyMDtcclxuXHJcbi8vRm9udHNcclxuJHByaW1hcnktZm9udDogSW1wYWN0LCBzYW5zLXNlcmlmO1xyXG4kZGVmYXVsdC1mb250LXNpemU6IDEuMzNyZW07XHJcbiRoMS1mb250LXNpemU6IDVyZW07XHJcbiRsYWJlbC1mb250LXNpemU6IDJyZW07XHJcbiR0ZXh0LWZvcm0tZm9udC1zaXplOiAwLjhyZW07XHJcbiRzZWNvbmRhcnktdGV4dC1mb250LXNpemU6IDEuNXJlbTtcclxuXHJcbi8vU2l6ZXNcclxuJGNlbnRlcjogMCBhdXRvO1xyXG4kbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiRwcmltYXJ5LWluZGVudDogMnJlbTtcclxuJHNlY29uZGFyeS1pbmRlbnQ6IDAgMnJlbTtcclxuJG1pbi1oZWlnaHQtbWFpbjogNzkuNXZoO1xyXG4kbWF4LXdpZHRoLWljb246IDVyZW07XHJcbiR3aWR0aC1sb2dvOiAxNC4ycmVtO1xyXG4kd2lkdGgtZm9ybTogMzVyZW07XHJcbiRoZWlnaHQtYmFyLWxpbmtzOiAzcmVtO1xyXG4kd2lkdGgtbGlua3M6IDdyZW07XHJcbiR3aWR0aC1pbmZvcm1hdGlvbjogNTByZW07XHJcbiRpbmZvcm0tZmllbGQtd2lkdGg6IDdyZW07XHJcbiRpbmZvcm0tZmllbGQtaGVpZ2h0OiA1NXB4O1xyXG4kaW5mb3JtLWZpZWxkLW1hcmdpbjogMXJlbTtcclxuJGNvbnRyb2xzLWJ1dHRvbi13aWR0aDogN3JlbTtcclxuJGNvbnRyb2xzLWJ1dHRvbi1oZWlnaHQ6IDMuNXJlbTtcclxuJGJvYXJkLXdpZHRoOiAkZmlndXJlLXNpemUgKiAkZmlndXJlLXF1YW50aXR5LXdpZHRoO1xyXG4kYm9hcmQtaGVpZ2h0OiAkZmlndXJlLXNpemUgKiAkZmlndXJlLXF1YW50aXR5LWhlaWdodDtcclxuXHJcbi8vR2VuZXJhbFxyXG4kcHJpbWFyeS1ib3JkZXI6IDEuNXB4IHNvbGlkICRkZWZhdWx0LWNvbG9yO1xyXG4kYm9yZGVyLXJhZGl1czogMXJlbTtcclxuJGhvdmVyLWJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiRob3Zlci1ib3JkZXItY29udHJvbHM6IDNweCBzb2xpZDtcclxuIl19 */");

/***/ }),

/***/ "./src/app/components/game-main/game-main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game-main/game-main.component.ts ***!
  \*************************************************************/
/*! exports provided: GameMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMainComponent", function() { return GameMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameMainComponent = class GameMainComponent {
};
GameMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-main/game-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-main.component.scss */ "./src/app/components/game-main/game-main.component.scss")).default]
    })
], GameMainComponent);



/***/ }),

/***/ "./src/app/components/game-next-figure/game-next-figure.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/game-next-figure/game-next-figure.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".next-figure__label {\n  padding: 0 2rem;\n  margin-bottom: 1rem;\n  color: #979797;\n  text-align: center;\n}\n.next-figure__field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  width: 14rem;\n  height: 110px;\n  background-color: #2b3a42;\n  border: 1.5px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLW5leHQtZmlndXJlL0M6XFxVc2Vyc1xcaXJ5bmEuY2hlcmhpbmFcXERlc2t0b3BcXFRldHJpc1xcQXdlc29tZVRldHJpc0dhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWUtbmV4dC1maWd1cmVcXGdhbWUtbmV4dC1maWd1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1uZXh0LWZpZ3VyZS9DOlxcVXNlcnNcXGlyeW5hLmNoZXJoaW5hXFxEZXNrdG9wXFxUZXRyaXNcXEF3ZXNvbWVUZXRyaXNHYW1lL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbmV4dC1maWd1cmUvZ2FtZS1uZXh0LWZpZ3VyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGVDMkJlO0VEMUJmLG1CQUFBO0VBQ0EsY0NGWTtFREdaLGtCQUFBO0FFRko7QUZJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NlSztFRGRMLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJDWGU7RURZZix3QkMrQmE7QUNqQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lLW5leHQtZmlndXJlL2dhbWUtbmV4dC1maWd1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4ubmV4dC1maWd1cmUge1xyXG4gICZfX2xhYmVsIHtcclxuICAgIHBhZGRpbmc6ICRzZWNvbmRhcnktaW5kZW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHByaW1hcnktaW5kZW50IC8gMjtcclxuICAgIGNvbG9yOiAkc2VydmljZS1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgJl9fZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogJGNlbnRlcjtcclxuICAgIHdpZHRoOiAkaW5mb3JtLWZpZWxkLXdpZHRoICogMjtcclxuICAgIGhlaWdodDogJGluZm9ybS1maWVsZC1oZWlnaHQgKiAyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBib3JkZXI6ICRwcmltYXJ5LWJvcmRlcjtcclxuICB9XHJcbn1cclxuIiwiLy9Db2xvciBQYWxldHRlXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjYmYwMTE3O1xyXG4kZGVmYXVsdC1jb2xvcjogI2ZmZjtcclxuJHNlcnZpY2UtY29sb3I6ICM5Nzk3OTc7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzYTQyO1xyXG5cclxuLy9GaWd1cmVzXHJcbiRmaWd1cmUtY29sb3ItZmlyc3Q6ICNmZDA0MDQ7XHJcbiRmaWd1cmUtY29sb3Itc2Vjb25kOiAjMmUzNmQ1O1xyXG4kZmlndXJlLWNvbG9yLXRoaXJkOiAjMTlhZjA5O1xyXG4kZmlndXJlLWNvbG9yLWZvdXJ0aDogI2Y4YWIwNTtcclxuJGZpZ3VyZS1jb2xvci1maWZ0aDogIzEzZTRlNztcclxuJGZpZ3VyZS1jb2xvci1zaXh0aDogI2ZmM2MwMDtcclxuJGZpZ3VyZS1jb2xvci1zZXZlbnRoOiAjMmUzNmQ1O1xyXG4kZmlndXJlLXNpemU6IDI1cHg7XHJcbiRmaWd1cmUtcXVhbnRpdHktd2lkdGg6IDEzO1xyXG4kZmlndXJlLXF1YW50aXR5LWhlaWdodDogMjA7XHJcblxyXG4vL0ZvbnRzXHJcbiRwcmltYXJ5LWZvbnQ6IEltcGFjdCwgc2Fucy1zZXJpZjtcclxuJGRlZmF1bHQtZm9udC1zaXplOiAxLjMzcmVtO1xyXG4kaDEtZm9udC1zaXplOiA1cmVtO1xyXG4kbGFiZWwtZm9udC1zaXplOiAycmVtO1xyXG4kdGV4dC1mb3JtLWZvbnQtc2l6ZTogMC44cmVtO1xyXG4kc2Vjb25kYXJ5LXRleHQtZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4vL1NpemVzXHJcbiRjZW50ZXI6IDAgYXV0bztcclxuJG1heC13aWR0aDogMTEwMHB4O1xyXG4kcHJpbWFyeS1pbmRlbnQ6IDJyZW07XHJcbiRzZWNvbmRhcnktaW5kZW50OiAwIDJyZW07XHJcbiRtaW4taGVpZ2h0LW1haW46IDc5LjV2aDtcclxuJG1heC13aWR0aC1pY29uOiA1cmVtO1xyXG4kd2lkdGgtbG9nbzogMTQuMnJlbTtcclxuJHdpZHRoLWZvcm06IDM1cmVtO1xyXG4kaGVpZ2h0LWJhci1saW5rczogM3JlbTtcclxuJHdpZHRoLWxpbmtzOiA3cmVtO1xyXG4kd2lkdGgtaW5mb3JtYXRpb246IDUwcmVtO1xyXG4kaW5mb3JtLWZpZWxkLXdpZHRoOiA3cmVtO1xyXG4kaW5mb3JtLWZpZWxkLWhlaWdodDogNTVweDtcclxuJGluZm9ybS1maWVsZC1tYXJnaW46IDFyZW07XHJcbiRjb250cm9scy1idXR0b24td2lkdGg6IDdyZW07XHJcbiRjb250cm9scy1idXR0b24taGVpZ2h0OiAzLjVyZW07XHJcbiRib2FyZC13aWR0aDogJGZpZ3VyZS1zaXplICogJGZpZ3VyZS1xdWFudGl0eS13aWR0aDtcclxuJGJvYXJkLWhlaWdodDogJGZpZ3VyZS1zaXplICogJGZpZ3VyZS1xdWFudGl0eS1oZWlnaHQ7XHJcblxyXG4vL0dlbmVyYWxcclxuJHByaW1hcnktYm9yZGVyOiAxLjVweCBzb2xpZCAkZGVmYXVsdC1jb2xvcjtcclxuJGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiRob3Zlci1ib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4kaG92ZXItYm9yZGVyLWNvbnRyb2xzOiAzcHggc29saWQ7XHJcbiIsIi5uZXh0LWZpZ3VyZV9fbGFiZWwge1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmV4dC1maWd1cmVfX2ZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTRyZW07XG4gIGhlaWdodDogMTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjNhNDI7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/game-next-figure/game-next-figure.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/game-next-figure/game-next-figure.component.ts ***!
  \***************************************************************************/
/*! exports provided: GameNextFigureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameNextFigureComponent", function() { return GameNextFigureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_board_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/board.model */ "./src/app/models/board.model.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _constants_board_component_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/board-component.const */ "./src/app/constants/board-component.const.ts");





let GameNextFigureComponent = class GameNextFigureComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
        this.ctx = this.nextCanvas.nativeElement.getContext('2d');
        this.subscriptionNext = this.gameService
            .onNewFigureCreated()
            .subscribe(({ randomNextFigure }) => {
            this.setInitialState(randomNextFigure);
        });
        this.gameService.updateFigures();
    }
    ngOnDestroy() {
        this.subscriptionNext.unsubscribe();
    }
    setInitialState(nextFigure) {
        this.nextFigure = nextFigure;
        const newBoard = new _models_board_model__WEBPACK_IMPORTED_MODULE_2__["BoardModel"](this.ctx, true);
        this.nextCanvas.nativeElement.width = this.nextFigure[0].length * _constants_board_component_const__WEBPACK_IMPORTED_MODULE_4__["BLOCK_SIZE"];
        this.nextCanvas.nativeElement.height = this.nextFigure.length * _constants_board_component_const__WEBPACK_IMPORTED_MODULE_4__["BLOCK_SIZE"];
        newBoard.drawBoard(this.nextFigure);
    }
};
GameNextFigureComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nextCanvas', { static: true })
], GameNextFigureComponent.prototype, "nextCanvas", void 0);
GameNextFigureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-next-figure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-next-figure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-next-figure/game-next-figure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-next-figure.component.scss */ "./src/app/components/game-next-figure/game-next-figure.component.scss")).default]
    })
], GameNextFigureComponent);



/***/ }),

/***/ "./src/app/components/game-state-controls/game-state-controls.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/game-state-controls/game-state-controls.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".controls {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.controls-action:hover {\n  border-color: #000;\n  box-shadow: inset 0 -3.5rem 0 0 #bf0117;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXN0YXRlLWNvbnRyb2xzL0M6XFxVc2Vyc1xcaXJ5bmEuY2hlcmhpbmFcXERlc2t0b3BcXFRldHJpc1xcQXdlc29tZVRldHJpc0dhbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWUtc3RhdGUtY29udHJvbHNcXGdhbWUtc3RhdGUtY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1zdGF0ZS1jb250cm9scy9nYW1lLXN0YXRlLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtc3RhdGUtY29udHJvbHMvQzpcXFVzZXJzXFxpcnluYS5jaGVyaGluYVxcRGVza3RvcFxcVGV0cmlzXFxBd2Vzb21lVGV0cmlzR2FtZS9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREY7QURJSTtFQUNFLGtCRVJVO0VGU1YsdUNBQUE7RUFDQSxlQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtc3RhdGUtY29udHJvbHMvZ2FtZS1zdGF0ZS1jb250cm9scy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5jb250cm9scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmLWFjdGlvbiB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAoLSRjb250cm9scy1idXR0b24taGVpZ2h0KSAwIDAgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250cm9scy1hY3Rpb246aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMwMDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTMuNXJlbSAwIDAgI2JmMDExNztcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi8vQ29sb3IgUGFsZXR0ZVxyXG4kcHJpbWFyeS1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS1jb2xvcjogI2JmMDExNztcclxuJGRlZmF1bHQtY29sb3I6ICNmZmY7XHJcbiRzZXJ2aWNlLWNvbG9yOiAjOTc5Nzk3O1xyXG4kYmFja2dyb3VuZC1jb2xvcjogIzJiM2E0MjtcclxuXHJcbi8vRmlndXJlc1xyXG4kZmlndXJlLWNvbG9yLWZpcnN0OiAjZmQwNDA0O1xyXG4kZmlndXJlLWNvbG9yLXNlY29uZDogIzJlMzZkNTtcclxuJGZpZ3VyZS1jb2xvci10aGlyZDogIzE5YWYwOTtcclxuJGZpZ3VyZS1jb2xvci1mb3VydGg6ICNmOGFiMDU7XHJcbiRmaWd1cmUtY29sb3ItZmlmdGg6ICMxM2U0ZTc7XHJcbiRmaWd1cmUtY29sb3Itc2l4dGg6ICNmZjNjMDA7XHJcbiRmaWd1cmUtY29sb3Itc2V2ZW50aDogIzJlMzZkNTtcclxuJGZpZ3VyZS1zaXplOiAyNXB4O1xyXG4kZmlndXJlLXF1YW50aXR5LXdpZHRoOiAxMztcclxuJGZpZ3VyZS1xdWFudGl0eS1oZWlnaHQ6IDIwO1xyXG5cclxuLy9Gb250c1xyXG4kcHJpbWFyeS1mb250OiBJbXBhY3QsIHNhbnMtc2VyaWY7XHJcbiRkZWZhdWx0LWZvbnQtc2l6ZTogMS4zM3JlbTtcclxuJGgxLWZvbnQtc2l6ZTogNXJlbTtcclxuJGxhYmVsLWZvbnQtc2l6ZTogMnJlbTtcclxuJHRleHQtZm9ybS1mb250LXNpemU6IDAuOHJlbTtcclxuJHNlY29uZGFyeS10ZXh0LWZvbnQtc2l6ZTogMS41cmVtO1xyXG5cclxuLy9TaXplc1xyXG4kY2VudGVyOiAwIGF1dG87XHJcbiRtYXgtd2lkdGg6IDExMDBweDtcclxuJHByaW1hcnktaW5kZW50OiAycmVtO1xyXG4kc2Vjb25kYXJ5LWluZGVudDogMCAycmVtO1xyXG4kbWluLWhlaWdodC1tYWluOiA3OS41dmg7XHJcbiRtYXgtd2lkdGgtaWNvbjogNXJlbTtcclxuJHdpZHRoLWxvZ286IDE0LjJyZW07XHJcbiR3aWR0aC1mb3JtOiAzNXJlbTtcclxuJGhlaWdodC1iYXItbGlua3M6IDNyZW07XHJcbiR3aWR0aC1saW5rczogN3JlbTtcclxuJHdpZHRoLWluZm9ybWF0aW9uOiA1MHJlbTtcclxuJGluZm9ybS1maWVsZC13aWR0aDogN3JlbTtcclxuJGluZm9ybS1maWVsZC1oZWlnaHQ6IDU1cHg7XHJcbiRpbmZvcm0tZmllbGQtbWFyZ2luOiAxcmVtO1xyXG4kY29udHJvbHMtYnV0dG9uLXdpZHRoOiA3cmVtO1xyXG4kY29udHJvbHMtYnV0dG9uLWhlaWdodDogMy41cmVtO1xyXG4kYm9hcmQtd2lkdGg6ICRmaWd1cmUtc2l6ZSAqICRmaWd1cmUtcXVhbnRpdHktd2lkdGg7XHJcbiRib2FyZC1oZWlnaHQ6ICRmaWd1cmUtc2l6ZSAqICRmaWd1cmUtcXVhbnRpdHktaGVpZ2h0O1xyXG5cclxuLy9HZW5lcmFsXHJcbiRwcmltYXJ5LWJvcmRlcjogMS41cHggc29saWQgJGRlZmF1bHQtY29sb3I7XHJcbiRib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4kaG92ZXItYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuJGhvdmVyLWJvcmRlci1jb250cm9sczogM3B4IHNvbGlkO1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/game-state-controls/game-state-controls.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/game-state-controls/game-state-controls.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GameStateControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStateControlsComponent", function() { return GameStateControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/game-state.enum */ "./src/app/enums/game-state.enum.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");




let GameStateControlsComponent = class GameStateControlsComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
        this.subscriptionLost = this.gameService.onLostGame().subscribe(() => {
            this.isPlaying = false;
        });
        this.subscriptionState = this.gameService.getGameState().subscribe((action) => {
            this.isPlaying = action !== _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].PAUSE;
        });
    }
    ngOnDestroy() {
        this.subscriptionState.unsubscribe();
    }
    keyBoardInput(event) {
        event.preventDefault();
        switch (event.code) {
            case 'KeyP':
                this.pauseGame();
                break;
            case 'KeyR':
                this.resetGame();
                break;
            case 'Enter':
                this.playGame();
                break;
            default:
                break;
        }
    }
    resetGame() {
        this.gameService.setInitialInformation();
        this.gameService.setGameState(_enums_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].RESET);
    }
    pauseGame() {
        this.gameService.setGameState(_enums_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].PAUSE);
    }
    playGame() {
        if (this.isPlaying) {
            return;
        }
        this.gameService.setGameState(_enums_game_state_enum__WEBPACK_IMPORTED_MODULE_2__["GameState"].PLAY);
    }
};
GameStateControlsComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event'])
], GameStateControlsComponent.prototype, "keyBoardInput", null);
GameStateControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-game-state-controls',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-state-controls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-state-controls/game-state-controls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-state-controls.component.scss */ "./src/app/components/game-state-controls/game-state-controls.component.scss")).default]
    })
], GameStateControlsComponent);



/***/ }),

/***/ "./src/app/components/player-profile/player-profile.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/player-profile/player-profile.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".player {\n  position: absolute;\n  top: 1.5rem;\n  right: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.player .icon {\n  max-width: 5rem;\n  margin: 0 1rem;\n}\n.player-inf {\n  display: inline-block;\n  font-size: 1rem;\n  text-align: right;\n  text-transform: none;\n}\n.player-inf span {\n  font-size: 1.33rem;\n}\n.player .game-button:hover {\n  border-color: #000;\n  box-shadow: inset 0 -3.5rem 0 0 #bf0117;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXItcHJvZmlsZS9DOlxcVXNlcnNcXGlyeW5hLmNoZXJoaW5hXFxEZXNrdG9wXFxUZXRyaXNcXEF3ZXNvbWVUZXRyaXNHYW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwbGF5ZXItcHJvZmlsZVxccGxheWVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyLXByb2ZpbGUvcGxheWVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyLXByb2ZpbGUvQzpcXFVzZXJzXFxpcnluYS5jaGVyaGluYVxcRGVza3RvcFxcVGV0cmlzXFxBd2Vzb21lVGV0cmlzR2FtZS9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0RGO0FER0U7RUFDRSxlRXNCYTtFRnJCYixjQUFBO0FDREo7QURJRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNGSjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBRE1JO0VBQ0Usa0JFMUJVO0VGMkJWLHVDQUFBO0VBQ0EsZUFBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXItcHJvZmlsZS9wbGF5ZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4ucGxheWVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxLjVyZW07XHJcbiAgcmlnaHQ6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJiAuaWNvbiB7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGgtaWNvbjtcclxuICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gIH1cclxuXHJcbiAgJi1pbmYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGRlZmF1bHQtZm9udC1zaXplO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAuZ2FtZS1idXR0b24ge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgKC0kY29udHJvbHMtYnV0dG9uLWhlaWdodCkgMCAwICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBsYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjVyZW07XG4gIHJpZ2h0OiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucGxheWVyIC5pY29uIHtcbiAgbWF4LXdpZHRoOiA1cmVtO1xuICBtYXJnaW46IDAgMXJlbTtcbn1cbi5wbGF5ZXItaW5mIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5wbGF5ZXItaW5mIHNwYW4ge1xuICBmb250LXNpemU6IDEuMzNyZW07XG59XG4ucGxheWVyIC5nYW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMy41cmVtIDAgMCAjYmYwMTE3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLy9Db2xvciBQYWxldHRlXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjYmYwMTE3O1xyXG4kZGVmYXVsdC1jb2xvcjogI2ZmZjtcclxuJHNlcnZpY2UtY29sb3I6ICM5Nzk3OTc7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzYTQyO1xyXG5cclxuLy9GaWd1cmVzXHJcbiRmaWd1cmUtY29sb3ItZmlyc3Q6ICNmZDA0MDQ7XHJcbiRmaWd1cmUtY29sb3Itc2Vjb25kOiAjMmUzNmQ1O1xyXG4kZmlndXJlLWNvbG9yLXRoaXJkOiAjMTlhZjA5O1xyXG4kZmlndXJlLWNvbG9yLWZvdXJ0aDogI2Y4YWIwNTtcclxuJGZpZ3VyZS1jb2xvci1maWZ0aDogIzEzZTRlNztcclxuJGZpZ3VyZS1jb2xvci1zaXh0aDogI2ZmM2MwMDtcclxuJGZpZ3VyZS1jb2xvci1zZXZlbnRoOiAjMmUzNmQ1O1xyXG4kZmlndXJlLXNpemU6IDI1cHg7XHJcbiRmaWd1cmUtcXVhbnRpdHktd2lkdGg6IDEzO1xyXG4kZmlndXJlLXF1YW50aXR5LWhlaWdodDogMjA7XHJcblxyXG4vL0ZvbnRzXHJcbiRwcmltYXJ5LWZvbnQ6IEltcGFjdCwgc2Fucy1zZXJpZjtcclxuJGRlZmF1bHQtZm9udC1zaXplOiAxLjMzcmVtO1xyXG4kaDEtZm9udC1zaXplOiA1cmVtO1xyXG4kbGFiZWwtZm9udC1zaXplOiAycmVtO1xyXG4kdGV4dC1mb3JtLWZvbnQtc2l6ZTogMC44cmVtO1xyXG4kc2Vjb25kYXJ5LXRleHQtZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4vL1NpemVzXHJcbiRjZW50ZXI6IDAgYXV0bztcclxuJG1heC13aWR0aDogMTEwMHB4O1xyXG4kcHJpbWFyeS1pbmRlbnQ6IDJyZW07XHJcbiRzZWNvbmRhcnktaW5kZW50OiAwIDJyZW07XHJcbiRtaW4taGVpZ2h0LW1haW46IDc5LjV2aDtcclxuJG1heC13aWR0aC1pY29uOiA1cmVtO1xyXG4kd2lkdGgtbG9nbzogMTQuMnJlbTtcclxuJHdpZHRoLWZvcm06IDM1cmVtO1xyXG4kaGVpZ2h0LWJhci1saW5rczogM3JlbTtcclxuJHdpZHRoLWxpbmtzOiA3cmVtO1xyXG4kd2lkdGgtaW5mb3JtYXRpb246IDUwcmVtO1xyXG4kaW5mb3JtLWZpZWxkLXdpZHRoOiA3cmVtO1xyXG4kaW5mb3JtLWZpZWxkLWhlaWdodDogNTVweDtcclxuJGluZm9ybS1maWVsZC1tYXJnaW46IDFyZW07XHJcbiRjb250cm9scy1idXR0b24td2lkdGg6IDdyZW07XHJcbiRjb250cm9scy1idXR0b24taGVpZ2h0OiAzLjVyZW07XHJcbiRib2FyZC13aWR0aDogJGZpZ3VyZS1zaXplICogJGZpZ3VyZS1xdWFudGl0eS13aWR0aDtcclxuJGJvYXJkLWhlaWdodDogJGZpZ3VyZS1zaXplICogJGZpZ3VyZS1xdWFudGl0eS1oZWlnaHQ7XHJcblxyXG4vL0dlbmVyYWxcclxuJHByaW1hcnktYm9yZGVyOiAxLjVweCBzb2xpZCAkZGVmYXVsdC1jb2xvcjtcclxuJGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiRob3Zlci1ib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4kaG92ZXItYm9yZGVyLWNvbnRyb2xzOiAzcHggc29saWQ7XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/player-profile/player-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/player-profile/player-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: PlayerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerProfileComponent", function() { return PlayerProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




let PlayerProfileComponent = class PlayerProfileComponent {
    constructor(userService, toastrService) {
        this.userService = userService;
        this.toastrService = toastrService;
    }
    ngOnInit() {
        this.showCurrentUser();
    }
    showCurrentUser() {
        this.currentUser = JSON.parse(localStorage.getItem('access_user'));
        if (this.currentUser) {
            this.iconSrc = this.currentUser.gender === 'male' ? 'Mask.ico' : 'Spiderwoman.ico';
        }
    }
    onLogout() {
        this.toastrService.warning('You have logged out!');
        this.userService.logoutUser().subscribe();
        this.showCurrentUser();
    }
};
PlayerProfileComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"], { static: true })
], PlayerProfileComponent.prototype, "toastContainer", void 0);
PlayerProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'atg-player-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-profile/player-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player-profile.component.scss */ "./src/app/components/player-profile/player-profile.component.scss")).default]
    })
], PlayerProfileComponent);



/***/ }),

/***/ "./src/app/constants/board-component.const.ts":
/*!****************************************************!*\
  !*** ./src/app/constants/board-component.const.ts ***!
  \****************************************************/
/*! exports provided: QUANTITY_BLOCKS_WIDTH, QUANTITY_BLOCKS_HEIGHT, BLOCK_SIZE, BORDER_COLOR, CENTRAL_ITEM, DELAY_DEFAULT, DELAY_LEVEL_STEP, ACCELERATION, CANVAS_WIDTH, CANVAS_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUANTITY_BLOCKS_WIDTH", function() { return QUANTITY_BLOCKS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUANTITY_BLOCKS_HEIGHT", function() { return QUANTITY_BLOCKS_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_SIZE", function() { return BLOCK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_COLOR", function() { return BORDER_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENTRAL_ITEM", function() { return CENTRAL_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY_DEFAULT", function() { return DELAY_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY_LEVEL_STEP", function() { return DELAY_LEVEL_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCELERATION", function() { return ACCELERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_WIDTH", function() { return CANVAS_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS_HEIGHT", function() { return CANVAS_HEIGHT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const QUANTITY_BLOCKS_WIDTH = 13;
const QUANTITY_BLOCKS_HEIGHT = 20;
const BLOCK_SIZE = 25;
const BORDER_COLOR = '#979797';
const CENTRAL_ITEM = 5;
const DELAY_DEFAULT = 700;
const DELAY_LEVEL_STEP = 100;
const ACCELERATION = 22;
const CANVAS_WIDTH = QUANTITY_BLOCKS_WIDTH * BLOCK_SIZE;
const CANVAS_HEIGHT = QUANTITY_BLOCKS_HEIGHT * BLOCK_SIZE;


/***/ }),

/***/ "./src/app/constants/figures-matrix.const.ts":
/*!***************************************************!*\
  !*** ./src/app/constants/figures-matrix.const.ts ***!
  \***************************************************/
/*! exports provided: FiguresMatrixConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguresMatrixConst", function() { return FiguresMatrixConst; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/figures-colors.enum */ "./src/app/enums/figures-colors.enum.ts");


const FiguresMatrixConst = [
    [
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FIRST, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FIRST, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FIRST, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FIRST, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
    ],
    [
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SECOND, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SECOND],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SECOND, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SECOND],
    ],
    [
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].THIRD, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].THIRD, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].THIRD, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].THIRD],
    ],
    [
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FOURTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FOURTH],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FOURTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FOURTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
    ],
    [
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FIFTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FIFTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FIFTH],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].FIFTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
    ],
    [
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SIXTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SIXTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SIXTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SIXTH],
    ],
    [
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SEVENTH],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SEVENTH],
        [_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SEVENTH, _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].SEVENTH],
    ],
];


/***/ }),

/***/ "./src/app/constants/game-information.const.ts":
/*!*****************************************************!*\
  !*** ./src/app/constants/game-information.const.ts ***!
  \*****************************************************/
/*! exports provided: DEFAULT_LINE_SCORE, DEFAULT_STEP, GAME_STEP_LEVEL, LEADERBOARD_MAX_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LINE_SCORE", function() { return DEFAULT_LINE_SCORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STEP", function() { return DEFAULT_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_STEP_LEVEL", function() { return GAME_STEP_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEADERBOARD_MAX_WIDTH", function() { return LEADERBOARD_MAX_WIDTH; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DEFAULT_LINE_SCORE = 5;
const DEFAULT_STEP = 2;
const GAME_STEP_LEVEL = 3;
const LEADERBOARD_MAX_WIDTH = 10;


/***/ }),

/***/ "./src/app/enums/figures-colors.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/enums/figures-colors.enum.ts ***!
  \**********************************************/
/*! exports provided: FiguresColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguresColors", function() { return FiguresColors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FiguresColors;
(function (FiguresColors) {
    FiguresColors["DEFAULT"] = "#2b3a42";
    FiguresColors["FIRST"] = "#fd0404";
    FiguresColors["SECOND"] = "#0d21d5";
    FiguresColors["THIRD"] = "#19af09";
    FiguresColors["FOURTH"] = "#f8ed20";
    FiguresColors["FIFTH"] = "#13e4e7";
    FiguresColors["SIXTH"] = "#ff7300";
    FiguresColors["SEVENTH"] = "#d131c4";
})(FiguresColors || (FiguresColors = {}));


/***/ }),

/***/ "./src/app/enums/figures-movement.enum.ts":
/*!************************************************!*\
  !*** ./src/app/enums/figures-movement.enum.ts ***!
  \************************************************/
/*! exports provided: FiguresMovement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiguresMovement", function() { return FiguresMovement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FiguresMovement;
(function (FiguresMovement) {
    FiguresMovement["LEFT"] = "left";
    FiguresMovement["RIGHT"] = "right";
    FiguresMovement["ROTATE"] = "rotate";
    FiguresMovement["DOWN"] = "down";
    FiguresMovement["DOWN_OFF"] = "down_off";
})(FiguresMovement || (FiguresMovement = {}));


/***/ }),

/***/ "./src/app/enums/game-state.enum.ts":
/*!******************************************!*\
  !*** ./src/app/enums/game-state.enum.ts ***!
  \******************************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var GameState;
(function (GameState) {
    GameState["PLAY"] = "play";
    GameState["PAUSE"] = "pause";
    GameState["RESET"] = "reset";
    GameState["LOST"] = "game over";
})(GameState || (GameState = {}));


/***/ }),

/***/ "./src/app/models/block.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/block.model.ts ***!
  \***************************************/
/*! exports provided: BlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockModel", function() { return BlockModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/board-component.const */ "./src/app/constants/board-component.const.ts");


class BlockModel {
    constructor(ctx, color) {
        this.ctx = ctx;
        this.color = color;
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BORDER_COLOR"];
    }
    fillBoardBlock(x, y) {
        this.ctx.fillRect(x * _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], y * _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
        this.fillStroke(x, y);
    }
}


/***/ }),

/***/ "./src/app/models/board.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/board.model.ts ***!
  \***************************************/
/*! exports provided: BoardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModel", function() { return BoardModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/figures-colors.enum */ "./src/app/enums/figures-colors.enum.ts");
/* harmony import */ var _next_block_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./next-block.model */ "./src/app/models/next-block.model.ts");
/* harmony import */ var _game_block_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-block.model */ "./src/app/models/game-block.model.ts");
/* harmony import */ var _constants_board_component_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/board-component.const */ "./src/app/constants/board-component.const.ts");





class BoardModel {
    constructor(ctx, isNextFigure) {
        this.ctx = ctx;
        this.isNextFigure = isNextFigure;
    }
    static makeBoardEmptyMatrix(width, height) {
        return new Array(height).fill(new Array(width).fill(_enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT));
    }
    static findFilledLine(figure, board, lineIndex) {
        return figure
            .map((item, index) => {
            return lineIndex - 1 + index < _constants_board_component_const__WEBPACK_IMPORTED_MODULE_4__["QUANTITY_BLOCKS_HEIGHT"] &&
                board[lineIndex - 1 + index].every((block) => block !== _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT)
                ? index
                : -1;
        })
            .filter((index) => index !== -1);
    }
    drawBoard(matrix) {
        matrix.forEach((line, indexY) => {
            line.forEach((item, indexX) => {
                (this.isNextFigure
                    ? new _next_block_model__WEBPACK_IMPORTED_MODULE_2__["NextBlockModel"](this.ctx, item)
                    : new _game_block_model__WEBPACK_IMPORTED_MODULE_3__["GameBlockModel"](this.ctx, item)).fillBoardBlock(indexX, indexY);
            });
        });
    }
}


/***/ }),

/***/ "./src/app/models/figure.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/figure.model.ts ***!
  \****************************************/
/*! exports provided: FigureModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigureModel", function() { return FigureModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/figures-colors.enum */ "./src/app/enums/figures-colors.enum.ts");
/* harmony import */ var _constants_figures_matrix_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/figures-matrix.const */ "./src/app/constants/figures-matrix.const.ts");
/* harmony import */ var _constants_board_component_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/board-component.const */ "./src/app/constants/board-component.const.ts");




class FigureModel {
    static getRandomFigure() {
        return _constants_figures_matrix_const__WEBPACK_IMPORTED_MODULE_2__["FiguresMatrixConst"][Math.floor(Math.random() * _constants_figures_matrix_const__WEBPACK_IMPORTED_MODULE_2__["FiguresMatrixConst"].length)];
    }
    showFigure(lineHeight, figureMatrix, boardMatrix, figurePosition) {
        const matrixWithFigure = [...boardMatrix];
        figureMatrix.forEach((line, indexLine) => {
            let activePosition = 0;
            let hasActiveBlock = false;
            if (indexLine + lineHeight < _constants_board_component_const__WEBPACK_IMPORTED_MODULE_3__["QUANTITY_BLOCKS_HEIGHT"]) {
                const targetLine = [...boardMatrix[indexLine + lineHeight]];
                const activeBlocksLine = line.filter((block, blockPosition) => {
                    if (block !== _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT && !hasActiveBlock) {
                        activePosition = blockPosition;
                        hasActiveBlock = true;
                    }
                    return block !== _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_1__["FiguresColors"].DEFAULT;
                });
                targetLine.splice(figurePosition + activePosition, activeBlocksLine.length, ...activeBlocksLine);
                matrixWithFigure[indexLine + lineHeight] = [...targetLine];
            }
        });
        return matrixWithFigure;
    }
}


/***/ }),

/***/ "./src/app/models/game-block.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/game-block.model.ts ***!
  \********************************************/
/*! exports provided: GameBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBlockModel", function() { return GameBlockModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/board-component.const */ "./src/app/constants/board-component.const.ts");
/* harmony import */ var _block_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.model */ "./src/app/models/block.model.ts");



class GameBlockModel extends _block_model__WEBPACK_IMPORTED_MODULE_2__["BlockModel"] {
    fillStroke(x, y) {
        this.ctx.strokeRect(x * _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], y * _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_1__["BLOCK_SIZE"]);
    }
}


/***/ }),

/***/ "./src/app/models/game-result.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/game-result.model.ts ***!
  \*********************************************/
/*! exports provided: GameResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameResult", function() { return GameResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GameResult {
    constructor(result) {
        this.username = result.username;
        this.lines = result.lines;
        this.score = result.score;
        this.level = result.level;
    }
}


/***/ }),

/***/ "./src/app/models/next-block.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/next-block.model.ts ***!
  \********************************************/
/*! exports provided: NextBlockModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextBlockModel", function() { return NextBlockModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _block_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.model */ "./src/app/models/block.model.ts");
/* harmony import */ var _constants_board_component_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/board-component.const */ "./src/app/constants/board-component.const.ts");
/* harmony import */ var _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/figures-colors.enum */ "./src/app/enums/figures-colors.enum.ts");




class NextBlockModel extends _block_model__WEBPACK_IMPORTED_MODULE_1__["BlockModel"] {
    fillStroke(x, y) {
        if (this.ctx.fillStyle !== _enums_figures_colors_enum__WEBPACK_IMPORTED_MODULE_3__["FiguresColors"].DEFAULT) {
            this.ctx.strokeRect(x * _constants_board_component_const__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"], y * _constants_board_component_const__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"], _constants_board_component_const__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"]);
        }
    }
}


/***/ }),

/***/ "./src/app/services/authconfig.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authconfig.interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(req, next) {
        const token = this.userService.getToken();
        const username = this.userService.getUserName();
        let authRequest;
        if (token && username) {
            authRequest = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`).set('Name', `${username}`),
            });
        }
        else {
            authRequest = req.clone({});
        }
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/game-state.enum */ "./src/app/enums/game-state.enum.ts");
/* harmony import */ var _models_figure_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/figure.model */ "./src/app/models/figure.model.ts");
/* harmony import */ var _constants_game_information_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/game-information.const */ "./src/app/constants/game-information.const.ts");
/* harmony import */ var _models_game_result_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/game-result.model */ "./src/app/models/game-result.model.ts");
var GameService_1;










let GameService = GameService_1 = class GameService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.endpoint = 'http://localhost:3000';
        this.isPlaying = false;
        this.isLostGame = false;
        this.nextFigure = _models_figure_model__WEBPACK_IMPORTED_MODULE_7__["FigureModel"].getRandomFigure();
        this.currentLevel = 1;
        this.currentNumberLines = 0;
        this.currentScore = 0;
        this.movementSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.gameStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.nextFigureSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.numberLinesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({
            lines: 0,
            score: 0,
            level: 1,
        });
        this.lostGameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    static calculateScore(lines, level) {
        return ((lines / 2) *
            (2 * (_constants_game_information_const__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_LINE_SCORE"] + _constants_game_information_const__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_LINE_SCORE"] * level) + _constants_game_information_const__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_STEP"] * (lines - 1)));
    }
    setLostGame() {
        this.isLostGame = true;
        const gameResult = {
            username: localStorage.getItem('user_name'),
            lines: this.currentNumberLines,
            score: this.currentScore,
            level: this.currentLevel,
        };
        this.lostGameSubject.next();
        return this.http.post(`${this.endpoint}/add_result`, gameResult);
    }
    getPlayerGameResult() {
        return this.http
            .get(`${this.endpoint}/result`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.map((el) => new _models_game_result_model__WEBPACK_IMPORTED_MODULE_9__["GameResult"](el))));
    }
    onLostGame() {
        return this.lostGameSubject.asObservable();
    }
    setMoveStep(step) {
        if (this.isPlaying && !this.isLostGame) {
            this.movementSubject.next(step);
        }
    }
    onNextStep() {
        return this.movementSubject.asObservable();
    }
    setGameState(action) {
        this.isPlaying = action !== _enums_game_state_enum__WEBPACK_IMPORTED_MODULE_6__["GameState"].PAUSE;
        this.isLostGame = false;
        this.gameStateSubject.next(action);
    }
    getGameState() {
        return this.gameStateSubject.asObservable();
    }
    updateFigures() {
        this.currentFigure = this.nextFigure;
        const previousFigure = this.currentFigure;
        const randomNextFigure = _models_figure_model__WEBPACK_IMPORTED_MODULE_7__["FigureModel"].getRandomFigure();
        this.nextFigure = randomNextFigure;
        this.nextFigureSubject.next({
            previousFigure,
            randomNextFigure,
        });
    }
    onNewFigureCreated() {
        return this.nextFigureSubject.asObservable();
    }
    setNumberFilledLines(numberLines) {
        const initialScore = numberLines * _constants_game_information_const__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_STEP"];
        this.currentNumberLines = numberLines ? this.currentNumberLines + numberLines : numberLines;
        this.currentScore = initialScore
            ? this.currentScore + GameService_1.calculateScore(numberLines, this.currentLevel)
            : initialScore;
        if (this.currentNumberLines >= _constants_game_information_const__WEBPACK_IMPORTED_MODULE_8__["GAME_STEP_LEVEL"] * this.currentLevel) {
            this.currentLevel += 1;
        }
        const lines = this.currentNumberLines;
        const score = this.currentScore;
        const level = this.currentLevel;
        this.numberLinesSubject.next({ lines, score, level });
    }
    setInitialInformation() {
        this.currentLevel = 1;
        this.currentScore = 0;
        this.currentNumberLines = 0;
        const lines = this.currentNumberLines;
        const score = this.currentScore;
        const level = this.currentLevel;
        this.numberLinesSubject.next({ lines, score, level });
    }
    onUpdateGameInformation() {
        return this.numberLinesSubject.asObservable();
    }
};
GameService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GameService = GameService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GameService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let UserService = class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.endpoint = 'http://localhost:3000';
        this.authListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('access_user')));
    }
    createUser(user) {
        const md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
        const newUser = {
            username: user.userInformation.username,
            password: `${md5.appendStr(user.userInformation.password).end()}`,
            gender: user.playerInformation.gender,
            dateOfBirth: user.playerInformation.dateOfBirth,
            country: user.playerInformation.country,
        };
        return this.http.post(`${this.endpoint}/sign_up`, newUser);
    }
    loginUser(userInform) {
        const md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
        const userData = {
            username: userInform.username,
            password: md5.appendStr(userInform.password).end(),
        };
        return this.http.post(`${this.endpoint}/login`, userData);
    }
    logoutUser() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('access_user');
        localStorage.removeItem('user_name');
        this.token = null;
        this.authListener.next(null);
        return this.http.get(`${this.endpoint}/logout`);
    }
    setUser(user) {
        this.authListener.next(user);
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    getUserName() {
        return localStorage.getItem('user_name');
    }
    getAuthListener() {
        return this.authListener.asObservable();
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\iryna.cherhina\Desktop\Tetris\AwesomeTetrisGame\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map