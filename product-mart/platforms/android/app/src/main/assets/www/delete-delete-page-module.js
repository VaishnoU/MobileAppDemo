(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete-delete-page-module"],{

/***/ "./src/app/delete/delete.page.html":
/*!*****************************************!*\
  !*** ./src/app/delete/delete.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Delete Product\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"productForm\" (ngSubmit)=\"onFormSubmit(productForm.value.id)\">\n    <ion-item>\n      <ion-label position=\"floating\">Product Id</ion-label>\n      <ion-input type=\"number\" formControlName=\"id\"></ion-input>\n    </ion-item>\n    <ion-button type=\"submit\" shape=\"round\" color=\"primary\" expand=\"block\" [disabled]=\"!productForm.valid\">Submit</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/delete/delete.page.module.ts":
/*!**********************************************!*\
  !*** ./src/app/delete/delete.page.module.ts ***!
  \**********************************************/
/*! exports provided: DeletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePageModule", function() { return DeletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _delete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete.page */ "./src/app/delete/delete.page.ts");







var DeletePageModule = /** @class */ (function () {
    function DeletePageModule() {
    }
    DeletePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _delete_page__WEBPACK_IMPORTED_MODULE_6__["DeletePage"] }])
            ],
            declarations: [_delete_page__WEBPACK_IMPORTED_MODULE_6__["DeletePage"]]
        })
    ], DeletePageModule);
    return DeletePageModule;
}());



/***/ }),

/***/ "./src/app/delete/delete.page.scss":
/*!*****************************************!*\
  !*** ./src/app/delete/delete.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS9kZWxldGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delete/delete.page.ts":
/*!***************************************!*\
  !*** ./src/app/delete/delete.page.ts ***!
  \***************************************/
/*! exports provided: DeletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePage", function() { return DeletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _communicator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../communicator.service */ "./src/app/communicator.service.ts");






var DeletePage = /** @class */ (function () {
    function DeletePage(api, loadingController, alertController, route, router, formBuilder) {
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.id = null;
    }
    DeletePage.prototype.ngOnInit = function () {
        this.productForm = this.formBuilder.group({
            'id': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    DeletePage.prototype.onFormSubmit = function (id) {
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
                        return [4 /*yield*/, this.api.deleteRequest("/deleteproduct/" + id)
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
    DeletePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./delete.page.html */ "./src/app/delete/delete.page.html"),
            styles: [__webpack_require__(/*! ./delete.page.scss */ "./src/app/delete/delete.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_communicator_service__WEBPACK_IMPORTED_MODULE_5__["CommunicatorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DeletePage);
    return DeletePage;
}());



/***/ })

}]);
//# sourceMappingURL=delete-delete-page-module.js.map