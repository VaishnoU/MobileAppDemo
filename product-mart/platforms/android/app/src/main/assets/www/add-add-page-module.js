(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-add-page-module"],{

/***/ "./src/app/add/add.page.html":
/*!***********************************!*\
  !*** ./src/app/add/add.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Product\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"productForm\" (ngSubmit)=\"onFormSubmit(productForm.value)\">\n    <ion-item>\n      <ion-label position=\"floating\">Product Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"prod_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Product Price</ion-label>\n      <ion-input type=\"number\" formControlName=\"prod_price\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Product Description</ion-label>\n      <ion-textarea formControlName=\"prod_desc\"></ion-textarea>\n    </ion-item>\n    <ion-button type=\"submit\" shape=\"round\" color=\"primary\" expand=\"block\" [disabled]=\"!productForm.valid\">Submit</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/add/add.page.module.ts":
/*!****************************************!*\
  !*** ./src/app/add/add.page.module.ts ***!
  \****************************************/
/*! exports provided: AddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add.page */ "./src/app/add/add.page.ts");







var AddPageModule = /** @class */ (function () {
    function AddPageModule() {
    }
    AddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"] }])
            ],
            declarations: [_add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]]
        })
    ], AddPageModule);
    return AddPageModule;
}());



/***/ }),

/***/ "./src/app/add/add.page.scss":
/*!***********************************!*\
  !*** ./src/app/add/add.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/add/add.page.ts":
/*!*********************************!*\
  !*** ./src/app/add/add.page.ts ***!
  \*********************************/
/*! exports provided: AddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPage", function() { return AddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../communicator.service */ "./src/app/communicator.service.ts");






var AddPage = /** @class */ (function () {
    function AddPage(api, loadingController, alertController, route, router, formBuilder) {
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.prod_name = '';
        this.prod_desc = '';
        this.prod_price = null;
    }
    AddPage.prototype.ngOnInit = function () {
        this.productForm = this.formBuilder.group({
            'prod_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'prod_desc': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'prod_price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AddPage.prototype.onFormSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api.postRequest("/addproduct", form)
                                .subscribe(function (res) {
                                var id = res['_id'];
                                loading.dismiss();
                                console.log(_this.router);
                                _this.router.navigate(["main"]);
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./add.page.html */ "./src/app/add/add.page.html"),
            styles: [__webpack_require__(/*! ./add.page.scss */ "./src/app/add/add.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_communicator_service__WEBPACK_IMPORTED_MODULE_5__["CommunicatorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddPage);
    return AddPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-add-page-module.js.map