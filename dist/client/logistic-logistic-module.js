(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistic-logistic-module"],{

/***/ "./src/app/logistic/logistic-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/logistic/logistic-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LogisticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticRoutingModule", function() { return LogisticRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _logistic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logistic.component */ "./src/app/logistic/logistic.component.ts");





const routes = [{ path: '', component: _logistic_component__WEBPACK_IMPORTED_MODULE_2__["LogisticComponent"] }];
class LogisticRoutingModule {
}
LogisticRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogisticRoutingModule });
LogisticRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogisticRoutingModule_Factory(t) { return new (t || LogisticRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogisticRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogisticRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/logistic/logistic.component.ts":
/*!************************************************!*\
  !*** ./src/app/logistic/logistic.component.ts ***!
  \************************************************/
/*! exports provided: LogisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticComponent", function() { return LogisticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LogisticComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogisticComponent.ɵfac = function LogisticComponent_Factory(t) { return new (t || LogisticComponent)(); };
LogisticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogisticComponent, selectors: [["app-logistic"]], decls: 2, vars: 0, template: function LogisticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logistic works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lzdGljL2xvZ2lzdGljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogisticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logistic',
                templateUrl: './logistic.component.html',
                styleUrls: ['./logistic.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/logistic/logistic.module.ts":
/*!*********************************************!*\
  !*** ./src/app/logistic/logistic.module.ts ***!
  \*********************************************/
/*! exports provided: LogisticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticModule", function() { return LogisticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _logistic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logistic-routing.module */ "./src/app/logistic/logistic-routing.module.ts");
/* harmony import */ var _logistic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logistic.component */ "./src/app/logistic/logistic.component.ts");





class LogisticModule {
}
LogisticModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogisticModule });
LogisticModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogisticModule_Factory(t) { return new (t || LogisticModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _logistic_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogisticRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogisticModule, { declarations: [_logistic_component__WEBPACK_IMPORTED_MODULE_3__["LogisticComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _logistic_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogisticRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogisticModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logistic_component__WEBPACK_IMPORTED_MODULE_3__["LogisticComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _logistic_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogisticRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=logistic-logistic-module.js.map