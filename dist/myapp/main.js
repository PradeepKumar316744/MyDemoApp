(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/CBS3/cmaction-code/cmaction-code.component.css":
/*!****************************************************************!*\
  !*** ./src/app/CBS3/cmaction-code/cmaction-code.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NCUzMvY21hY3Rpb24tY29kZS9jbWFjdGlvbi1jb2RlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/CBS3/cmaction-code/cmaction-code.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/CBS3/cmaction-code/cmaction-code.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align: center\">CMActionCode</h2>\n\n<div class=\"container\">\n  <div class=\"card card-body mb-sm-2\" style=\"background-color:darkgray;\">\n    <div class=\"row\" style=\"font-weight: bold\">\n      <div class=\"col-sm-4\">Action Code</div>\n      <div class=\"col-sm-4\">Action Suffix</div>\n      <div class=\"col-sm-4\">Description</div>\n    </div>\n  </div>\n\n  <div class=\"card\" *ngFor=\"let post of CMactionCode\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">{{ post.action_Code }}</div>\n        <div class=\"col-sm-4\">{{ post.action_Suffix }}</div>\n        <div class=\"col-sm-4\">{{ post.description }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/CBS3/cmaction-code/cmaction-code.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/CBS3/cmaction-code/cmaction-code.component.ts ***!
  \***************************************************************/
/*! exports provided: CMActionCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMActionCodeComponent", function() { return CMActionCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_cmaction_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/cmaction-api.service */ "./src/app/Services/cmaction-api.service.ts");



var CMActionCodeComponent = /** @class */ (function () {
    function CMActionCodeComponent(CMActionService) {
        this.CMActionService = CMActionService;
    }
    CMActionCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CMActionService
            .getCMActionCode()
            .subscribe(function (data) {
            _this.CMactionCode = data;
            // console.log(data);
        });
    };
    CMActionCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cmaction-code',
            template: __webpack_require__(/*! ./cmaction-code.component.html */ "./src/app/CBS3/cmaction-code/cmaction-code.component.html"),
            styles: [__webpack_require__(/*! ./cmaction-code.component.css */ "./src/app/CBS3/cmaction-code/cmaction-code.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_cmaction_api_service__WEBPACK_IMPORTED_MODULE_2__["CMActionAPIService"]])
    ], CMActionCodeComponent);
    return CMActionCodeComponent;
}());



/***/ }),

/***/ "./src/app/CBS3/plantrecipelog/plantrecipelog.component.css":
/*!******************************************************************!*\
  !*** ./src/app/CBS3/plantrecipelog/plantrecipelog.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting:after,\r\ntable.dataTable thead .sorting:before,\r\ntable.dataTable thead .sorting_asc:after,\r\ntable.dataTable thead .sorting_asc:before,\r\ntable.dataTable thead .sorting_asc_disabled:after,\r\ntable.dataTable thead .sorting_asc_disabled:before,\r\ntable.dataTable thead .sorting_desc:after,\r\ntable.dataTable thead .sorting_desc:before,\r\ntable.dataTable thead .sorting_desc_disabled:after,\r\ntable.dataTable thead .sorting_desc_disabled:before {\r\nbottom: .5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ0JTMy9wbGFudHJlY2lwZWxvZy9wbGFudHJlY2lwZWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBVUEsWUFBWTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvQ0JTMy9wbGFudHJlY2lwZWxvZy9wbGFudHJlY2lwZWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmFmdGVyLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmc6YmVmb3JlLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmFmdGVyLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmJlZm9yZSxcclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDphZnRlcixcclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDpiZWZvcmUsXHJcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmFmdGVyLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzpiZWZvcmUsXHJcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjX2Rpc2FibGVkOmFmdGVyLFxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDpiZWZvcmUge1xyXG5ib3R0b206IC41ZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/CBS3/plantrecipelog/plantrecipelog.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/CBS3/plantrecipelog/plantrecipelog.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align: center\">Plant Recipe Log</h2>\n\n<div class=\"container\">\n  <table\n    id=\"dtBasicExample\"\n    class=\"table table-striped table-dark\"\n    cellspacing=\"0\"\n    width=\"100%\"\n  >\n    <thead>\n      <tr>\n        <th class=\"th-sm\">Plant</th>\n        <th class=\"th-sm\">Compound</th>\n        <th class=\"th-sm\">Prv Var</th>\n        <th class=\"th-sm\">Prv Issue</th>\n        <th class=\"th-sm\">Rule Description</th>\n        <th class=\"th-sm\">User Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let post of plantRecipes\">\n        <td>{{ post.dotCode }}</td>\n        <td>{{ post.comId }}</td>\n        <td>{{ post.prvVar }}</td>\n        <td>{{ post.prvIssue }}</td>\n        <td>{{ post.ruleDescription }}</td>\n        <td>{{ post.userName }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/CBS3/plantrecipelog/plantrecipelog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/CBS3/plantrecipelog/plantrecipelog.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlantrecipelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantrecipelogComponent", function() { return PlantrecipelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_plantrecipeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/plantrecipeapi.service */ "./src/app/Services/plantrecipeapi.service.ts");



var PlantrecipelogComponent = /** @class */ (function () {
    function PlantrecipelogComponent(plantRecipeService) {
        this.plantRecipeService = plantRecipeService;
    }
    PlantrecipelogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plantRecipeService.getPlantRecipe().subscribe(function (data) {
            _this.plantRecipes = data;
        });
    };
    PlantrecipelogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plantrecipelog',
            template: __webpack_require__(/*! ./plantrecipelog.component.html */ "./src/app/CBS3/plantrecipelog/plantrecipelog.component.html"),
            styles: [__webpack_require__(/*! ./plantrecipelog.component.css */ "./src/app/CBS3/plantrecipelog/plantrecipelog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_plantrecipeapi_service__WEBPACK_IMPORTED_MODULE_2__["PlantrecipeapiService"]])
    ], PlantrecipelogComponent);
    return PlantrecipelogComponent;
}());



/***/ }),

/***/ "./src/app/Services/cmaction-api.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/cmaction-api.service.ts ***!
  \**************************************************/
/*! exports provided: CMActionAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMActionAPIService", function() { return CMActionAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'Application/jason' })
};
var CMActionAPIService = /** @class */ (function () {
    function CMActionAPIService(http) {
        this.http = http;
        this.postsUrl = 'https://localhost:44362/api/values';
    }
    CMActionAPIService.prototype.getCMActionCode = function () {
        return this.http.get(this.postsUrl);
    };
    CMActionAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CMActionAPIService);
    return CMActionAPIService;
}());



/***/ }),

/***/ "./src/app/Services/plantrecipeapi.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/plantrecipeapi.service.ts ***!
  \****************************************************/
/*! exports provided: PlantrecipeapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantrecipeapiService", function() { return PlantrecipeapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'Application/jason' })
};
var PlantrecipeapiService = /** @class */ (function () {
    function PlantrecipeapiService(http) {
        this.http = http;
        this.postsUrl = 'https://localhost:44362/api/PlantRecipeLog/22/jher';
    }
    PlantrecipeapiService.prototype.getPlantRecipe = function () {
        return this.http.get(this.postsUrl);
    };
    PlantrecipeapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlantrecipeapiService);
    return PlantrecipeapiService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _CBS3_plantrecipelog_plantrecipelog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CBS3/plantrecipelog/plantrecipelog.component */ "./src/app/CBS3/plantrecipelog/plantrecipelog.component.ts");
/* harmony import */ var _CBS3_cmaction_code_cmaction_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CBS3/cmaction-code/cmaction-code.component */ "./src/app/CBS3/cmaction-code/cmaction-code.component.ts");





var routes = [
    {
        path: 'CMActionCode',
        component: _CBS3_cmaction_code_cmaction_code_component__WEBPACK_IMPORTED_MODULE_4__["CMActionCodeComponent"]
    },
    {
        path: 'PlantRecipe',
        component: _CBS3_plantrecipelog_plantrecipelog_component__WEBPACK_IMPORTED_MODULE_3__["PlantrecipelogComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <!-- <app-plantrecipelog></app-plantrecipelog> -->\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _CBS3_cmaction_code_cmaction_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CBS3/cmaction-code/cmaction-code.component */ "./src/app/CBS3/cmaction-code/cmaction-code.component.ts");
/* harmony import */ var _Services_cmaction_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/cmaction-api.service */ "./src/app/Services/cmaction-api.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _CBS3_plantrecipelog_plantrecipelog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CBS3/plantrecipelog/plantrecipelog.component */ "./src/app/CBS3/plantrecipelog/plantrecipelog.component.ts");
/* harmony import */ var _Services_plantrecipeapi_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/plantrecipeapi.service */ "./src/app/Services/plantrecipeapi.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _CBS3_cmaction_code_cmaction_code_component__WEBPACK_IMPORTED_MODULE_6__["CMActionCodeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _CBS3_plantrecipelog_plantrecipelog_component__WEBPACK_IMPORTED_MODULE_9__["PlantrecipelogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [_Services_cmaction_api_service__WEBPACK_IMPORTED_MODULE_7__["CMActionAPIService"], _Services_plantrecipeapi_service__WEBPACK_IMPORTED_MODULE_10__["PlantrecipeapiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand  navbar-dark bg-primary\" >\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: white\">CBS3</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" >\n    <ul class=\"navbar-nav mr-auto\" >\n      <li class=\"nav-item active dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Services\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/PlantRecipe']\">Plant Recipe Log</a>\n          <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/CMActionCode']\">CM Action Code</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular 4\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map