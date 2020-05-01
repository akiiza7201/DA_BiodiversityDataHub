(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<app-picture></app-picture>\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dialog works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-4\">\r\n  <div class=\"row\" style=\"width: 1500px;\">\r\n    <div class=\"col-12 col-md-6\">\r\n      <h5>Willkommen beim Wachau-Hub – dem Biodiversitätsportal für die Wachau!</h5>\r\n      <p>Hier finden Sie Informationen zur Artenvielfalt in der Weltkulturerbe-Region, entdecken Sie diverse Tiere, Pflanzen und Pilze.</p>\r\n      <p>Der Wachau-Hub wurde im Zuge eines Abschlussprojekts der HTL Krems 2019/2020 erstellt und gehört zum Biodiversitäts-Atlas Österreich. Die Funddaten werden vom Biodiversitäts-Atlas Österreich bezogen und laufend um neue Beobachtungen ergänzt.</p>\r\n      <p>Der Wachau-Hub wie auch der Biodiversitäts-Atlas basieren auf der Open-Source Softwarearchitektur des Atlas of Living Australia – der nationalen Biodiversitätsdatenbank von Australien</p>\r\n      <p>Viel Vergnügen beim Entdecken der Vielfalt!</p>\r\n    </div>\r\n    <div class=\"col-12 col-md-6\">\r\n      ​<picture>\r\n        <img src=\"images/schmetterling.jpg\" class=\"img-fluid\" alt=\"Bildunterschrift\" style=\"width: 400px; padding-left:100px;\">\r\n      </picture>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-4\">\r\n    <div class=\"row\" style=\"width: 1500px;\">\r\n        <div class=\"col-12 h-display--flex\">\r\n            <map-table class=\"table\"></map-table>\r\n            <app-species-map-table class=\"speciestable\" data-source=\"speciesTableData\" style=\"padding-right: 100px;\"></app-species-map-table>\r\n            <div id=\"mapbox\" class=\"map\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <div class=\"inside-header\">\n    <div class=\"logo-container\">\n      <a routerLink=\"/\">\n        <img src=\"images/Logo-Biodiversitaets-Atlas.png\" class=\"img-fluid\" width=\"230\"/>\n      </a>\n    </div>\n    <nav>\n      <ul>\n        <li><a routerLinkActive=\"active\" [routerLink]=\"['home']\">Home</a></li>\n        <li><a routerLinkActive=\"active\" [routerLink]=\"['search']\">Suche</a></li>\n        <li><a routerLinkActive=\"active\" [routerLink]=\"['map']\">Map</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/picture/picture.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/picture/picture.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <div class=\"picsum-img-wrapper\">\n      <img [src]=\"images[0]\">\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"picsum-img-wrapper\">\n      <img [src]=\"images[1]\">\n    </div>\n  </ng-template>\n</ngb-carousel>\n\n<div class=\"stripe\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-4\">\r\n  <div class=\"row\">\r\n      <div class=\"col-12 col-md-6\" style=\"height: 300px;\">\r\n        <div id=\"mapbox\" class=\"mapbox\" style=\"height: 100%;\"></div>\r\n      </div>\r\n      <div class=\"col-12 col-md-6\">\r\n        <div class=\"table-div\">\r\n          <h4>Datensatz</h4>\r\n          <app-dataset-table class=\"table\"></app-dataset-table>\r\n          <h4>Ereignis</h4>\r\n          <app-event-table class=\"table\"></app-event-table>\r\n          <h4>Taxonomie</h4>\r\n          <app-taxonomy-table class=\"table\"></app-taxonomy-table>\r\n          <h4>Geospatial</h4>\r\n          <app-geospatial-table class=\"table\"></app-geospatial-table>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-results/search-results.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-results/search-results.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js\"></script>\n</head>\n\n<div class=\"container-fluid container\">\n  <div class=\"row justify-content-center\" style=\"height: 20%;\">\n    <div class=\"col-sm-9\" style=\"background-color:lightgray; border: 1px solid darkgrey\">\n      <div class=\"col-sm-9\" style=\"height: 30%; margin-top: 50px;\">\n        <input type=\"text\" value=\"{{searched}}\" class=\"search-input\" style=\"height: 70%; width: 75%;\" #input>\n        <button style=\"height: 70%; width: 15%; margin-left: 3px;\" (click)=\"search(input.value)\">Suche</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\" style=\"height: 80%;\">\n    <div class=\"col-sm-9\" style=\"background-color:white; border: 1px solid darkgrey\">\n      <mat-list>\n        <ng-container *ngFor=\"let species of speciesList | slice: lowValue : highValue\">\n          <mat-list-item style=\"margin-left: 5%;\">\n            <p mat-line style=\"font-weight:bold;\">{{species.scientificName}} | {{species.vernacularName}}</p>\n            <p mat-line>{{species.dataResourceUid}}</p>\n            <button (click)=\"showProfile(species.uuid)\" style=\"float: right; margin-top: 5%; margin-right: 5%;\">mehr</button>\n           </mat-list-item>\n          <mat-divider></mat-divider>\n          </ng-container>\n      </mat-list>\n    </div>\n      <mat-paginator style=\"height: 7%; float: right;\" [length]=\"speciesList.length\" [pageSize]=\"pageSize\"\n      (page)=\"getPaginatorData($event)\">\n      </mat-paginator>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-center\">\r\n      <input type=\"text\" placeholder=\"Search\" class=\"search-input\" #input>\r\n      <input class=\"search-button\" type=\"image\" src=\"images/search.png\" (click)=\"searchEvent(input.value)\">\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/dataset-table/dataset-table.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/dataset-table/dataset-table.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.description}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"value\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Value</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.value}}</td>\n    </ng-container>\n\n   <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr> -->\n    <tr mat-header-row></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n<!--  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/event-table/event-table.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/event-table/event-table.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.description}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"value\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Value</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.value}}</td>\n    </ng-container>\n\n    <tr mat-header-row></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/geospatial-table/geospatial-table.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/geospatial-table/geospatial-table.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.description}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"value\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Value</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.value}}</td>\n    </ng-container>\n\n    <tr mat-header-row></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/map-table/map-table.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/map-table/map-table.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8 map-table\">\n  <table mat-table class=\"table\" matSort aria-label=\"Elements\">\n\n    <ng-container matColumnDef=\"group\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Group</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.group}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"speciesCount\" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Species Count</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.speciesCount}}</td>\n    </ng-container>\n\n\n    <!-- highlight the clicked row!! -->\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n    [ngClass]=\"{ 'selected': selection.isSelected(row)}\"\n    (click)=\"selection.select(row)\"\n     #selectedRow></tr>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/species-map-table/species-map-table.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/species-map-table/species-map-table.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8 map-table\">\n  <table mat-table class=\"table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"species\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Record</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.species}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"recordCount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Record Count</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.recordCount}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\" (click)=\"onRowClicked(row, i)\"></tr>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/taxonomy-table/taxonomy-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/taxonomy-table/taxonomy-table.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.description}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"value\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Value</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.value}}</td>\n    </ng-container>\n\n    <tr mat-header-row></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>\n");

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

/***/ "./src/TaxonGroup/subgroups.json":
/*!***************************************!*\
  !*** ./src/TaxonGroup/subgroups.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"speciesGroup\":\"Mammals\",\"taxonRank\":\"order\",\"taxa\":[{\"name\":\"DASYUROMORPHIA\",\"common\":\"Carnivorous Marsupials\"},{\"name\":\"DIPROTODONTIA\",\"common\":\"Herbivorous Marsupials\"},{\"name\":\"NOTORYCTEMORPHIA\",\"common\":\"Marsupial Moles\"},{\"name\":\"PERAMELEMORPHIA\",\"common\":\"Bandicoots, Bilbies\"},{\"name\":\"MONOTREMATA\",\"common\":\"Monotremes\"},{\"name\":\"ARTIODACTYLA\",\"common\":\"Even-toed hoofed\"},{\"name\":\"CARNIVORA\",\"common\":\"Carnivores\"},{\"name\":\"CETACEA\",\"common\":\"Dolphins, Porpoises, Whales\"},{\"name\":\"CHIROPTERA\",\"common\":\"Bats\"},{\"name\":\"INSECTIVORA\",\"common\":\"Shrews, Hedgehogs\"},{\"name\":\"LAGOMORPHA\",\"common\":\"Hares, Pikas, Rabbits\"},{\"name\":\"PERRISODACTYLA\",\"common\":\"Odd-toed hoofed\"},{\"name\":\"RODENTIA\",\"common\":\"Rodents\"},{\"name\":\"SIRENIA\",\"common\":\"Dugongs, Manatees, Sea Cows\"}]},{\"speciesGroup\":\"Birds\",\"taxonRank\":\"order\",\"taxa\":[{\"name\":\"ANSERIFORMES\",\"common\":\"Ducks, Geese, Swans\"},{\"name\":\"APODIFORMES\",\"common\":\"Hummingbirds, Swifts\"},{\"name\":\"CAPRIMULGIFORMES\",\"common\":\"Nightjars, Frogmouths, Potoos\"},{\"name\":\"CHARADRIIFORMES\",\"common\":\"Waders, Gulls, Auks\"},{\"name\":\"CICONIIFORMES\",\"common\":\"Bitterns, Ibises\"},{\"name\":\"COLUMBIFORMES\",\"common\":\"Doves\"},{\"name\":\"CORACIIFORMES\",\"common\":\"Kingfishers\"},{\"name\":\"CUCULIFORMES\",\"common\":\"Cuckoos\"},{\"name\":\"FALCONIFORMES\",\"common\":\"Falcons\"},{\"name\":\"GALLIFORMES\",\"common\":\"Fowls\"},{\"name\":\"GRUIFORMES\",\"common\":\"Cranes\"},{\"name\":\"PASSERIFORMES\",\"common\":\"Perching Birds\"},{\"name\":\"PELECANIFORMES\",\"common\":\"Large waterbirds\"},{\"name\":\"PHOENICOPTERIFORMES\",\"common\":\"Flamingos\"},{\"name\":\"PODICIPEDIFORMES\",\"common\":\"Grebes\"},{\"name\":\"PROCELLARIIFORMES\",\"common\":\"Petrels, Fulmars\"},{\"name\":\"PSITTACIFORMES\",\"common\":\"Parrots\"},{\"name\":\"SPHENISCIFORMES\",\"common\":\"Penguins\"},{\"name\":\"STRIGIFORMES\",\"common\":\"Owls\"},{\"name\":\"STRUTHIONIFORMES\",\"common\":\"Ostriches\"},{\"name\":\"TURNICIFORMES\",\"common\":\"Buttonquails\"}]},{\"speciesGroup\":\"Insects and Spiders\",\"taxonRank\":\"order\",\"taxa\":[{\"name\":\"ARCHAEOGNATHA\",\"common\":\"Bristletails\"},{\"name\":\"BLATTODEA\",\"common\":\"Cockroaches, Termites\"},{\"name\":\"COLEOPTERA\",\"common\":\"Beetles\"},{\"name\":\"DERMAPTERA\",\"common\":\"Earwigs\"},{\"name\":\"DIPTERA\",\"common\":\"Flies, Mosquitoes\"},{\"name\":\"EMBIOPTERA\",\"common\":\"Webspinners\"},{\"name\":\"EPHEMEROPTERA\",\"common\":\"Mayflies, Shadlfies\"},{\"name\":\"HEMIPTERA\",\"common\":\"Cicadas, Aphids, Planthoppers, Leafhoppers, Shield Bugs\"},{\"name\":\"HYMENOPTERA\",\"common\":\"Wasps, Ants, Bees, Sawflies\"},{\"name\":\"LEPIDOPTERA\",\"common\":\"Butterflies, Moths\"},{\"name\":\"MANTODEA\",\"common\":\"Mantises\"},{\"name\":\"MECOPTERA\",\"common\":\"Scorpionflies, Hangingflies\"},{\"name\":\"MEGALOPTERA\",\"common\":\"Alderflies, Dobsonflies, Fishflies\"},{\"name\":\"NEUROPTERA\",\"common\":\"Lacewings, Mantidflies, Antlions\"},{\"name\":\"ODONATA\",\"common\":\"Dragonflies, Damselflies\"},{\"name\":\"ORTHOPTERA\",\"common\":\"Grasshoppers, Crickets, Locusts, Katydids, Weta, Lubber\"},{\"name\":\"PHASMIDA\",\"common\":\"Stick Insects, Phasmids\"},{\"name\":\"PHTHIRAPTERA\",\"common\":\"Lice\"},{\"name\":\"PLECOPTERA\",\"common\":\"Stoneflies\"},{\"name\":\"PSOCOPTERA\",\"common\":\"Booklice, Barklice, Barkflies\"},{\"name\":\"SIPHONAPTERA\",\"common\":\"Fleas\"},{\"name\":\"STREPSIPTERA\",\"common\":\"Twisted-Wing Parasites\"},{\"name\":\"THYSANOPTERA\",\"common\":\"Thrips\"},{\"name\":\"TRICHOPTERA\",\"common\":\"Caddisflies, Sedge-flies or Rail-flies\"},{\"name\":\"ZORAPTERA\",\"common\":\"Zorapterans\"},{\"name\":\"ZYGENTOMA\",\"common\":\"Silverfish\"},{\"name\":\"ARANEAE\",\"common\":\"Spiders\"}]},{\"speciesGroup\":\"Amphibians\",\"taxonRank\":\"family\",\"taxa\":[{\"name\":\"BUFONIDAE\",\"common\":\"True Toads\"},{\"name\":\"HYLIDAE\",\"common\":\"Tree Frogs\"},{\"name\":\"MICROHYLIDAE\",\"common\":\"Narrow-Mouthed Frogs\"},{\"name\":\"MYOBATRACHIDAE\",\"common\":\"Australian Ground Frogs\"},{\"name\":\"RANIDAE\",\"common\":\"True Frogs\"}]},{\"speciesGroup\":\"Reptiles\",\"taxonRank\":\"order\",\"taxa\":[{\"name\":\"CROCODYLIA\",\"common\":\"Crocodiles\"},{\"name\":\"SQUAMATA\",\"common\":\"Lizards, Snakes\"},{\"name\":\"TESTUDINES\",\"common\":\"Tortoises, Turtles, Terrapins\"}]},{\"speciesGroup\":\"Fish\",\"taxonRank\":\"order\",\"taxa\":[{\"name\":\"MYXINIFORMES\",\"common\":\"Hagfishes\"},{\"name\":\"CARCHARHINIFORMES\",\"common\":\"Ground Sharks\"},{\"name\":\"HETERODONTIFORMES\",\"common\":\"Bullhead Sharks\"},{\"name\":\"HEXANCHIFORMES\",\"common\":\"Cow Sharks\"},{\"name\":\"LAMNIFORMES\",\"common\":\"Mackerel Sharks\"},{\"name\":\"MYLIOBATIFORMES\",\"common\":\"Batoids\"},{\"name\":\"ORECTOLOBIFORMES\",\"common\":\"Carpet Sharks\"},{\"name\":\"PRISTIFORMES\",\"common\":\"Sawfish\"},{\"name\":\"PRISTIOPHORIFORMES\",\"common\":\"Saw Sharks\"},{\"name\":\"RAJIFORMES\",\"common\":\"Softnose Skates\"},{\"name\":\"RHINOBATIFORMES\",\"common\":\"Guitarfish\"},{\"name\":\"SQUALIFORMES\",\"common\":\"Dogfish Sharks\"},{\"name\":\"SQUATINIFORMES\",\"common\":\"Angel Sharks\"},{\"name\":\"TORPEDINIFORMES\",\"common\":\"Electric Rays\"},{\"name\":\"CHIMAERIFORMES\",\"common\":\"Chimaeras\"},{\"name\":\"CERATODONTIFORMES\",\"common\":\"Lungfish\"},{\"name\":\"CLUPEIFORMES\",\"common\":\"Anchovies \"},{\"name\":\"ALBULIFORMES\",\"common\":\"Bonefishes\"},{\"name\":\"ANGUILLIFORMES\",\"common\":\"Eels\"},{\"name\":\"ELOPIFORMES\",\"common\":\"Tarpons\"},{\"name\":\"NOTACANTHIFORMES\",\"common\":\"Spiny Eels\"},{\"name\":\"SACCOPHARYNGIFORMES\",\"common\":\"Sackpharynx Fishes\"},{\"name\":\"ATHERINIFORMES\",\"common\":\"Rainbow Fishes\"},{\"name\":\"BELONIFORMES\",\"common\":\"Halfbeeks\"},{\"name\":\"BERYCIFORMES\",\"common\":\"Ray-finned fishes\"},{\"name\":\"CYPRINODONTIFORMES\",\"common\":\"Killifishes\"},{\"name\":\"GASTEROSTEIFORMES\",\"common\":\"Dragonfishes\"},{\"name\":\"MUGILIFORMES\",\"common\":\"Mullet fish\"},{\"name\":\"PERCIFORMES\",\"common\":\"Perch-like Fishes\"},{\"name\":\"PLEURONECTIFORMES\",\"common\":\"Flatfishes\"},{\"name\":\"SCORPAENIFORMES\",\"common\":\"Scorpion Fishes, Sculpins\"},{\"name\":\"STEPHANOBERYCIFORMES\",\"common\":\"Deep-sea ray-finned fishes\"},{\"name\":\"SYNBRANCHIFORMES\",\"common\":\"Swamp Eels\"},{\"name\":\"TETRAODONTIFORMES\",\"common\":\"Cowfishes\"},{\"name\":\"ZEIFORMES\",\"common\":\"Boarfishes\"},{\"name\":\"AULOPIFORMES\",\"common\":\"Marine ray-finned fish\"},{\"name\":\"LAMPRIDIFORMES\",\"common\":\"Opahs\"},{\"name\":\"CYPRINIFORMES\",\"common\":\"Minnows\"},{\"name\":\"GONORHYNCHIFORMES\",\"common\":\"Milkfishes\"},{\"name\":\"SILURIFORMES\",\"common\":\"Catfishes\"},{\"name\":\"BATRACHOIDIFORMES\",\"common\":\"Batrachoidiforms\"},{\"name\":\"GADIFORMES\",\"common\":\"Cods\"},{\"name\":\"LOPHIIFORMES\",\"common\":\"Anglerfishes\"},{\"name\":\"OPHIDIIFORMES\",\"common\":\"Ophidiiforms\"},{\"name\":\"POLYMIXIIFORMES\",\"common\":\"Beardfishes\"},{\"name\":\"ARGENTINIFORMES\",\"common\":\"Baldfishes,Tubeshoulders\"},{\"name\":\"SALMONIFORMES\",\"common\":\"Salmons\"},{\"name\":\"MYCTOPHIFORMES\",\"common\":\"Latern Fishes, Neoscopelids\"},{\"name\":\"ATELEOPODIFORMES\",\"common\":\"Jellynose Fishes\"},{\"name\":\"STOMIIFORMES\",\"common\":\"Deep-sea ray-finned fishes\"},{\"name\":\"OSTEOGLOSSIFORMES\",\"common\":\"Bonytongues\"}]},{\"speciesGroup\":\"Molluscs\",\"taxonRank\":\"class\",\"taxa\":[{\"name\":\"APLACOPHORA\",\"common\":\"Solenogasters\"},{\"name\":\"BIVALVIA\",\"common\":\"Mussels, Clams\"},{\"name\":\"CEPHALOPODA\",\"common\":\"Cuttlefish\"},{\"name\":\"GASTROPODA\",\"common\":\"Gastropods, Slugs, Snails\"},{\"name\":\"POLYPLACOPHORA\",\"common\":\"Chitons\"},{\"name\":\"SCAPHOPODA\",\"common\":\"Tooth Shells\"}]},{\"speciesGroup\":\"Crustaceans\",\"taxonRank\":\"class\",\"taxa\":[{\"name\":\"BRANCHIOPODA\",\"common\":\"Fairy shrimp, Clam shrimp\"},{\"name\":\"MALACOSTRACA\",\"common\":\"Crabs, Lobsters\"},{\"name\":\"MAXILLOPODA\",\"common\":\"Barnacles, Copepods\"},{\"name\":\"OSTRACODA\",\"common\":\"Seed shrimp\"}]},{\"speciesGroup\":\"Plants\",\"facetName\":\"species_group\",\"taxa\":[{\"name\":\"Monocots\",\"common\":\"Monocots\"},{\"name\":\"Dicots\",\"common\":\"Dicots\"},{\"name\":\"Angiosperms\",\"common\":\"Flowering plants\"},{\"name\":\"FernsAndAllies\",\"common\":\"Ferns and Allies\"},{\"name\":\"Gymnosperms\",\"common\":\"Conifers, Cycads\"}]},{\"speciesGroup\":\"Fungi\",\"taxonRank\":\"phylum\",\"taxa\":[{\"name\":\"Ascomycota\",\"common\":\"Asco's\"},{\"name\":\"Basidiomycota\",\"common\":\"Basidio's\"},{\"name\":\"Chytridiomycota\",\"common\":\"Chytrids\"},{\"name\":\"Zygomycota\",\"common\":\"Zygomycetes\"},{\"name\":\"Glomeromycota\",\"common\":\"Glomeromycota\"}]}]");

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");








const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"] },
    { path: 'profile/:uuid', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'searchResults/:searched', component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = "localhost:8080";
    }
    getPosts() {
        this.posts = this.http.get(this.ROOT_URL);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _nav_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.service */ "./src/app/nav/nav.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _picture_picture_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./picture/picture.component */ "./src/app/picture/picture.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _tables_map_table_map_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tables/map-table/map-table.component */ "./src/app/tables/map-table/map-table.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _tables_dataset_table_dataset_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tables/dataset-table/dataset-table.component */ "./src/app/tables/dataset-table/dataset-table.component.ts");
/* harmony import */ var _tables_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tables/event-table/event-table.component */ "./src/app/tables/event-table/event-table.component.ts");
/* harmony import */ var _tables_taxonomy_table_taxonomy_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tables/taxonomy-table/taxonomy-table.component */ "./src/app/tables/taxonomy-table/taxonomy-table.component.ts");
/* harmony import */ var _tables_geospatial_table_geospatial_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tables/geospatial-table/geospatial-table.component */ "./src/app/tables/geospatial-table/geospatial-table.component.ts");
/* harmony import */ var _tables_species_map_table_species_map_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tables/species-map-table/species-map-table.component */ "./src/app/tables/species-map-table/species-map-table.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
            _picture_picture_component__WEBPACK_IMPORTED_MODULE_12__["PictureComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_14__["MapComponent"],
            _tables_map_table_map_table_component__WEBPACK_IMPORTED_MODULE_15__["MapTableComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
            _tables_dataset_table_dataset_table_component__WEBPACK_IMPORTED_MODULE_20__["DatasetTableComponent"],
            _tables_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_21__["EventTableComponent"],
            _tables_taxonomy_table_taxonomy_table_component__WEBPACK_IMPORTED_MODULE_22__["TaxonomyTableComponent"],
            _tables_geospatial_table_geospatial_table_component__WEBPACK_IMPORTED_MODULE_23__["GeospatialTableComponent"],
            _tables_species_map_table_species_map_table_component__WEBPACK_IMPORTED_MODULE_24__["SpeciesMapTableComponent"],
            _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_25__["SearchResultsComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_27__["DialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PathLocationStrategy"] }, _nav_nav_service__WEBPACK_IMPORTED_MODULE_6__["NavService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DialogComponent = class DialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DialogComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table, .speciestable {\r\n    width: 25%;\r\n    margin-left: 0%;\r\n    float: left;\r\n}\r\n\r\n.map {\r\n  width:40%;\r\n  height: 60%;\r\n  padding-left: 100px;\r\n  min-height: 400px;\r\n}\r\n\r\n.table {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/* Media Query for mobile only */\r\n\r\n@media (max-width: 768px) {\r\n    .table, .map, .speciestable{\r\n        width: 100%;\r\n    }\r\n    #mapbox {\r\n        min-height: 500px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsZ0NBQWdDOztBQUNoQztJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSwgLnNwZWNpZXN0YWJsZSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gIHdpZHRoOjQwJTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcnkgZm9yIG1vYmlsZSBvbmx5ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRhYmxlLCAubWFwLCAuc3BlY2llc3RhYmxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgI21hcGJveCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_record_req_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_geojson_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/geojson.service */ "./src/app/services/geojson.service.ts");





let MapComponent = class MapComponent {
    constructor(service, geojsonService) {
        this.service = service;
        this.geojsonService = geojsonService;
        this.featureCollection = [];
        this.latitude = 48.40914;
        this.longitude = 15.612974;
    }
    // map: any;
    ngOnInit() {
        // Vom Service die Daten holen und in einer Liste speichern
        this.initMap();
        var markerIcon = leaflet__WEBPACK_IMPORTED_MODULE_3__["icon"]({
            iconUrl: '/images/dot.png',
            iconSize: [15, 15],
        });
        this.service.getAllRecords().subscribe((data) => {
            // console.log(data);
            this.data = data;
            this.data.occurrences.forEach(element => {
                leaflet__WEBPACK_IMPORTED_MODULE_3__["marker"]([element.decimalLatitude, element.decimalLongitude], { icon: markerIcon }).addTo(this.map)
                    .bindPopup(element.scientificName)
                    .openPopup();
            });
        });
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_3__["map"]('mapbox').setView([48.35422, 15.42558], 10);
        leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        const myStyle = {
            "color": "#786f6e",
            "weight": 3,
            "opacity": 0.4
        };
        this.geojsonService.getGeoJson().subscribe(data => {
            console.log(data);
            leaflet__WEBPACK_IMPORTED_MODULE_3__["geoJson"](data, { style: myStyle }).addTo(this.map);
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _services_record_req_service__WEBPACK_IMPORTED_MODULE_2__["RecordReqService"] },
    { type: _services_geojson_service__WEBPACK_IMPORTED_MODULE_4__["GeojsonService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_record_req_service__WEBPACK_IMPORTED_MODULE_2__["RecordReqService"], _services_geojson_service__WEBPACK_IMPORTED_MODULE_4__["GeojsonService"]])
], MapComponent);



/***/ }),

/***/ "./src/app/models/Species.ts":
/*!***********************************!*\
  !*** ./src/app/models/Species.ts ***!
  \***********************************/
/*! exports provided: Species */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species", function() { return Species; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Species {
    constructor(speciesResponse, aufrufer) {
        // schauen ob der wert überhaupt da ist, wenn nicht dann 0 bzw. leer setzten
        if (aufrufer === 'profile' || aufrufer === 'searchResults' || aufrufer === 'SpeciesMapTable') {
            this.dataProviderName = speciesResponse.dataProviderName;
            this.dataResourceName = speciesResponse.dataRessourceName;
            this.dataResourceUid = speciesResponse.dataResourceUid;
            this.occurrenceId = speciesResponse.occurrenceID;
            this.collector = speciesResponse.collector;
            this.basisOfRecord = speciesResponse.basisOfRecord;
            this.occurrenceStatus = speciesResponse.occurrenceStatus;
            this.eventDate = speciesResponse.eventDate;
            this.datePrecision = speciesResponse.datePrecision;
            this.rawScientificName = speciesResponse.raw_scientificName;
            this.scientificName = speciesResponse.scientificName;
            this.taxonRank = speciesResponse.taxonRank;
            this.vernacularName = speciesResponse.vernacularName;
            this.kingdom = speciesResponse.kingdom;
            this.phylum = speciesResponse.phylum;
            this.classID = speciesResponse.classs;
            this.order = speciesResponse.order;
            this.family = speciesResponse.family;
            this.genus = speciesResponse.genus;
            this.genusId = speciesResponse.genusId;
            this.species = speciesResponse.species;
            this.decimalLatitude = speciesResponse.decimalLatitude;
            this.decimalLongitude = speciesResponse.decimalLongitude;
            this.geodeticDatum = speciesResponse.geodeticDatum;
            this.uuid = speciesResponse.uuid;
        }
        if (aufrufer === 'dataTable') {
            this.dataProviderName = speciesResponse.processed.attribution.dataProviderName;
            this.dataResourceName = speciesResponse.processed.attribution.dataResourceName;
            this.dataResourceUid = speciesResponse.processed.attribution.dataProviderUid;
            this.occurrenceId = speciesResponse.raw.occurrence.occurrenceID;
            this.collector = speciesResponse.collector;
            this.basisOfRecord = speciesResponse.processed.occurrence.basisOfRecord;
            this.occurrenceStatus = speciesResponse.processed.occurrence.occurrenceStatus;
        }
        if (aufrufer === 'geoTable') {
            this.decimalLatitude = speciesResponse.raw.location.decimalLatitude;
            this.decimalLongitude = speciesResponse.raw.location.decimalLongitude;
            this.geodeticDatum = speciesResponse.processed.location.geodeticDatum;
        }
        if (aufrufer === 'taxTable') {
            this.scientificName = speciesResponse.processed.classification.scientificName;
            this.taxonRank = speciesResponse.processed.classification.taxonRank;
            this.vernacularName = speciesResponse.processed.classification.vernacularName;
            this.kingdom = speciesResponse.processed.classification.kingdom;
            this.phylum = speciesResponse.processed.classification.phylum;
            this.classID = speciesResponse.processed.classification.classs;
            this.order = speciesResponse.processed.classification.order;
            this.family = speciesResponse.processed.classification.family;
            this.genus = speciesResponse.processed.classification.genus;
            this.genusId = speciesResponse.processed.classification.genusId;
            this.species = speciesResponse.processed.classification.species;
        }
        if (aufrufer === 'eventTable') {
            this.eventDate = speciesResponse.processed.event.eventDate;
            this.datePrecision = speciesResponse.processed.event.datePrecision;
        }
        if (aufrufer === 'profile') {
            this.decimalLatitude = speciesResponse.raw.location.decimalLatitude;
            this.decimalLongitude = speciesResponse.raw.location.decimalLongitude;
        }
    }
}


/***/ }),

/***/ "./src/app/models/Taxon.ts":
/*!*********************************!*\
  !*** ./src/app/models/Taxon.ts ***!
  \*********************************/
/*! exports provided: Taxon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Taxon", function() { return Taxon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Taxon {
    constructor(taxonResponse) {
        this.taxa = [];
        console.log(taxonResponse[1]);
        this.speciesGroup = taxonResponse[1].speciesGroup;
        taxonResponse[1].taxa.forEach(element => {
            this.taxa.push(element.common);
        });
    }
}


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inside-header {\n  max-width: 1140px;\n  padding: 20px 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.logo-container {\n  display: inline-block;\n  max-width: 100%;\n}\nnav {\n  margin-top: 55px;\n  float: right;\n  clear: right;\n}\nnav ul {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n}\nnav ul li {\n  float: left;\n  position: relative;\n}\nnav ul li a {\n  color: #0a0a0a;\n  padding-left: 25px;\n  padding-right: 25px;\n  font-size: 15px;\n  line-height: 50px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\nnav ul li a:hover {\n  color: #e8402c;\n  text-decoration: none;\n}\nnav ul li a.active {\n  color: #e8402c;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc2lkZS1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5uYXYge1xuICBtYXJnaW4tdG9wOiA1NXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNsZWFyOiByaWdodDtcbn1cbm5hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxubmF2IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm5hdiB1bCBsaSBhIHtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbm5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNlODQwMmM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbm5hdiB1bCBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZTg0MDJjO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() {
        this.appTitle = 'myapp';
    }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavComponent);



/***/ }),

/***/ "./src/app/nav/nav.service.ts":
/*!************************************!*\
  !*** ./src/app/nav/nav.service.ts ***!
  \************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let NavService = class NavService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getNavData() {
        if (!this._navData) {
            this._navData = this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + 'application')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["publishReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["refCount"])());
        }
        return this._navData;
    }
};
NavService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], NavService);



/***/ }),

/***/ "./src/app/picture/picture.component.css":
/*!***********************************************!*\
  !*** ./src/app/picture/picture.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n  width:100%;\r\n}\r\n\r\n.stripe{\r\n  background-color: #61963D;\r\n  width: 100%;\r\n  height: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdHVyZS9waWN0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BpY3R1cmUvcGljdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5zdHJpcGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxOTYzRDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/picture/picture.component.ts":
/*!**********************************************!*\
  !*** ./src/app/picture/picture.component.ts ***!
  \**********************************************/
/*! exports provided: PictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureComponent", function() { return PictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PictureComponent = class PictureComponent {
    constructor() {
        this.images = ["images/titelbild.png", "images/wein.jpg"];
    }
    ngOnInit() {
    }
};
PictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-picture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./picture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/picture/picture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./picture.component.css */ "./src/app/picture/picture.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PictureComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_record_req_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var _models_Species__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Species */ "./src/app/models/Species.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_geojson_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/geojson.service */ "./src/app/services/geojson.service.ts");








let ProfileComponent = class ProfileComponent {
    constructor(service, route, geojsonService) {
        this.service = service;
        this.route = route;
        this.geojsonService = geojsonService;
        this.latitude = 48.409140;
        this.longitude = 15.612974;
        this.uuidSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('bca43e78-5869-41e7-9a04-d556b62a5258');
        this.currentUuid = this.uuidSource.asObservable();
        this.speciesList = [];
    }
    ngOnInit() {
        const uuid = this.route.snapshot.paramMap.get('uuid');
        console.log('Gesucht:' + uuid);
        this.uuidSource.next(uuid);
        this.service.getOneRecord(uuid).subscribe((data) => {
            this.data = data;
            const spec = new _models_Species__WEBPACK_IMPORTED_MODULE_3__["Species"](data, 'profile');
            this.initMap(spec);
        });
    }
    initMap(species) {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_6__["map"]('mapbox').setView([species.decimalLatitude, species.decimalLongitude], 10);
        leaflet__WEBPACK_IMPORTED_MODULE_6__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        const myStyle = {
            "color": "#786f6e",
            "weight": 3,
            "opacity": 0.4
        };
        this.geojsonService.getGeoJson().subscribe(data => {
            console.log(data);
            leaflet__WEBPACK_IMPORTED_MODULE_6__["geoJson"](data, { style: myStyle }).addTo(this.map);
        });
        var markerIcon = leaflet__WEBPACK_IMPORTED_MODULE_6__["icon"]({
            iconUrl: '/images/dot.png',
            iconSize: [15, 15],
        });
        leaflet__WEBPACK_IMPORTED_MODULE_6__["marker"]([species.decimalLatitude, species.decimalLongitude], { icon: markerIcon }).addTo(this.map);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_record_req_service__WEBPACK_IMPORTED_MODULE_2__["RecordReqService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_geojson_service__WEBPACK_IMPORTED_MODULE_7__["GeojsonService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_record_req_service__WEBPACK_IMPORTED_MODULE_2__["RecordReqService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_geojson_service__WEBPACK_IMPORTED_MODULE_7__["GeojsonService"]])
], ProfileComponent);

function buildMap(species) {
    const mapboxgl = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.js */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
    // Map erstellen, Center in Spitz an der Donau
    mapboxgl.accessToken =
        'pk.eyJ1IjoianVsaWEwNDEyIiwiYSI6ImNrNjExYTBkMDBjdjQzZm9ha3VnZHZ6NzQifQ.4Hw-RyHSXwM7oNDxDbcu7w';
    const map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 11,
        center: [species.decimalLongitude, species.decimalLatitude]
    });
    map.on('load', function () {
        // Add zoom and rotation controls to the map. FUNKTIONIERT NICHT
        map.addControl(new mapboxgl.NavigationControl());
        // Add resize for loaded map so it doesnt look broken ;)
        map.resize();
        /* Image: An image is loaded and added to the map. */
        map.loadImage('images/dot.png', function (error, image) {
            if (error) {
                throw error;
            }
            // Marker zur Map hinzufügen
            map.addImage('custom-marker', image);
            map.addLayer({
                id: 'markers',
                type: 'symbol',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                properties: {
                                    description: '<strong>Krems an der Donau</strong>'
                                },
                                geometry: {
                                    type: 'Point',
                                    coordinates: [species.decimalLongitude, species.decimalLatitude]
                                }
                            },
                        ]
                    }
                },
                layout: {
                    'icon-image': 'custom-marker'
                }
            });
        });
        // Wachau-Polygon zur Map hinzufügen
        map.addSource('wachau', {
            type: 'geojson',
            // tslint:disable-next-line: max-line-length
            data: 'https://sdi.noe.gv.at/at.gv.noe.geoserver/OGD/wfs?request=GetFeature&version=1.1.0&typeName=OGD:RRU_UNESCO&srsName=EPSG:4326&outputFormat=application/json'
        });
        map.addLayer({
            id: 'maine',
            type: 'line',
            source: 'wachau',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#888',
                'line-width': 2
            }
        });
    });
}


/***/ }),

/***/ "./src/app/search-results/search-results.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  height: 700px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.row {\r\n  height: 100%;;\r\n}\r\n\r\n.col {\r\n  height: 100%;\r\n  border:2px;\r\n  border-color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGhlaWdodDogMTAwJTs7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6MnB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_record_req_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var _models_Species__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Species */ "./src/app/models/Species.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");






let SearchResultsComponent = class SearchResultsComponent {
    constructor(route, service, router, snackBar) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.snackBar = snackBar;
        this.speciesList = [];
        // Pagination
        this.pageIndex = 0;
        this.pageSize = 6;
        this.lowValue = 0;
        this.highValue = 7;
    }
    getPaginatorData(event) {
        console.log(event);
        if (event.pageIndex === this.pageIndex + 1) {
            this.lowValue = this.lowValue + this.pageSize;
            this.highValue = this.highValue + this.pageSize;
        }
        else if (event.pageIndex === this.pageIndex - 1) {
            this.lowValue = this.lowValue - this.pageSize;
            this.highValue = this.highValue - this.pageSize;
        }
        this.pageIndex = event.pageIndex;
    }
    ngOnInit() {
        const searched = this.route.snapshot.paramMap.get('searched');
        console.log('Gesucht:' + searched);
        this.searched = searched;
        this.search(this.searched);
    }
    showProfile(uuid) {
        this.router.navigate(['/profile', uuid]);
    }
    search(searched) {
        this.speciesList = [];
        this.service.getRecordBySearch(searched).subscribe((data) => {
            console.log(data);
            this.data = data;
            if (this.data.occurrences.length === 0) {
                this.snackBar.open('Keine Ergebnisse gefunden', 'OK');
            }
            this.data.occurrences.forEach(element => {
                const spec = new _models_Species__WEBPACK_IMPORTED_MODULE_4__["Species"](element, 'searchResults');
                this.speciesList.push(spec);
            });
        });
    }
};
SearchResultsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_record_req_service__WEBPACK_IMPORTED_MODULE_3__["RecordReqService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-results/search-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-results.component.css */ "./src/app/search-results/search-results.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_record_req_service__WEBPACK_IMPORTED_MODULE_3__["RecordReqService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], SearchResultsComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n  height: 50%;\r\n  width: 50%;\r\n}\r\n\r\n.search-input {\r\n  height: 100%;\r\n}\r\n\r\n.search-button {\r\n  width: 32px;\r\n  height: 32px;\r\n  margin-left: 1%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNlYXJjaC1idXR0b24ge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_record_req_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SearchComponent = class SearchComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.speciesList = [];
    }
    ngOnInit() {
    }
    searchEvent(searched) {
        // foreach element alle variablen durchgehen und schauen ob sie diesen wert irgendwo beinhalten (achtung großkleinschreibung)
        console.log('Es wurde gesucht:' + searched);
        this.router.navigate(['/searchResults', searched]);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _services_record_req_service__WEBPACK_IMPORTED_MODULE_2__["RecordReqService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_record_req_service__WEBPACK_IMPORTED_MODULE_2__["RecordReqService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/services/geojson.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/geojson.service.ts ***!
  \*********************************************/
/*! exports provided: GeojsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeojsonService", function() { return GeojsonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GeojsonService = class GeojsonService {
    constructor(http) {
        this.http = http;
        this.getGeoJson().subscribe(data => {
            console.log(data);
        });
    }
    getGeoJson() {
        return this.http.get('https://sdi.noe.gv.at/at.gv.noe.geoserver/OGD/wfs?request=GetFeature&version=1.1.0&typeName=OGD:RRU_UNESCO&srsName=EPSG:4326&outputFormat=application/json');
    }
};
GeojsonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeojsonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GeojsonService);



/***/ }),

/***/ "./src/app/services/interaction.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/interaction.service.ts ***!
  \*************************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let InteractionService = class InteractionService {
    constructor() {
        this.groupSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentGroup = this.groupSource.asObservable();
    }
    updateGroup(group) {
        this.groupSource.next(group);
    }
    getGroup() {
        return this.currentGroup;
    }
};
InteractionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InteractionService);



/***/ }),

/***/ "./src/app/services/record-req.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/record-req.service.ts ***!
  \************************************************/
/*! exports provided: RecordReqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordReqService", function() { return RecordReqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RecordReqService = class RecordReqService {
    constructor(http) {
        this.http = http;
        this.URL = 'http://localhost:8080/data';
    }
    getAllRecords() {
        return this.http.get(this.URL + '/records/all');
    }
    getOneRecord(uuid) {
        console.log(uuid);
        return this.http.get(this.URL + '/records/' + uuid);
    }
    /*getRecordCountforTaxon() {
 
    }*/
    getTaxonRecords(taxon) {
        return this.http.get(this.URL + '/records/taxon/' + taxon);
    }
    getRecordBySearch(searched) {
        return this.http.get(this.URL + '/records/search/' + searched);
    }
    getWachauGrenzen() {
        // tslint:disable-next-line: max-line-length
        return this.http.get('https://sdi.noe.gv.at/at.gv.noe.geoserver/OGD/wfs?request=GetFeature&version=1.1.0&typeName=OGD:RRU_UNESCO&srsName=EPSG:4326&outputFormat=application/json');
    }
};
RecordReqService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RecordReqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RecordReqService);



/***/ }),

/***/ "./src/app/tables/dataset-table/dataset-table-datasource.ts":
/*!******************************************************************!*\
  !*** ./src/app/tables/dataset-table/dataset-table-datasource.ts ***!
  \******************************************************************/
/*! exports provided: DatasetTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetTableDataSource", function() { return DatasetTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' }
];
/**
 * Data source for the DatasetTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class DatasetTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(tableData) {
        super();
        this.tableData = tableData;
        this.data = EXAMPLE_DATA;
        this.tableData = tableData;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.tableData)
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return this.tableData;
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
}


/***/ }),

/***/ "./src/app/tables/dataset-table/dataset-table.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tables/dataset-table/dataset-table.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL2RhdGFzZXQtdGFibGUvZGF0YXNldC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL2RhdGFzZXQtdGFibGUvZGF0YXNldC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tables/dataset-table/dataset-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/dataset-table/dataset-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: DatasetTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetTableComponent", function() { return DatasetTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _dataset_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataset-table-datasource */ "./src/app/tables/dataset-table/dataset-table-datasource.ts");
/* harmony import */ var src_app_models_Species__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Species */ "./src/app/models/Species.ts");
/* harmony import */ var src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/profile/profile.component */ "./src/app/profile/profile.component.ts");







let DatasetTableComponent = class DatasetTableComponent {
    constructor(service, data) {
        this.service = service;
        this.data = data;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['description', 'value'];
    }
    ngOnInit() {
        this.data.currentUuid.subscribe(uuid => this.uuid = uuid);
        console.log('Empfangene Uuid:' + this.uuid);
        this.service.getOneRecord(this.uuid).subscribe((data) => {
            // console.log(data);
            this.speciesdata = data;
            console.log(this.speciesdata);
            const spec = new src_app_models_Species__WEBPACK_IMPORTED_MODULE_4__["Species"](this.speciesdata, 'dataTable');
            this.species = spec;
            this.tableData = fillTable(this.species);
            this.dataSource = new _dataset_table_datasource__WEBPACK_IMPORTED_MODULE_3__["DatasetTableDataSource"](this.tableData);
            console.log('Datasource:');
            console.log(this.dataSource);
            this.table.dataSource = this.dataSource;
        });
        this.dataSource = new _dataset_table_datasource__WEBPACK_IMPORTED_MODULE_3__["DatasetTableDataSource"](this.tableData);
    }
    ngAfterViewInit() {
    }
};
DatasetTableComponent.ctorParameters = () => [
    { type: src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"] },
    { type: src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
], DatasetTableComponent.prototype, "table", void 0);
DatasetTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dataset-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dataset-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/dataset-table/dataset-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dataset-table.component.css */ "./src/app/tables/dataset-table/dataset-table.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"], src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]])
], DatasetTableComponent);

function fillTable(species) {
    const data = [];
    data.push({ description: 'Datenpartner', value: species.dataProviderName });
    data.push({ description: 'Datenressourcen Name', value: species.dataResourceName });
    data.push({ description: 'Datenressourcen ID', value: species.dataResourceUid });
    data.push({ description: 'Vorkommens-ID', value: species.occurrenceId });
    data.push({ description: 'Beobachter', value: 'unbekannt' });
    data.push({ description: 'Basis der Aufzeicnnung', value: species.basisOfRecord });
    data.push({ description: 'Vorkommensstatus', value: species.occurrenceStatus });
    return data;
}


/***/ }),

/***/ "./src/app/tables/event-table/event-table-datasource.ts":
/*!**************************************************************!*\
  !*** ./src/app/tables/event-table/event-table-datasource.ts ***!
  \**************************************************************/
/*! exports provided: EventTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTableDataSource", function() { return EventTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' }
];
/**
 * Data source for the EventTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class EventTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(tableData) {
        super();
        this.tableData = tableData;
        this.data = EXAMPLE_DATA;
        this.tableData = tableData;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.tableData)
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return this.tableData;
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
}


/***/ }),

/***/ "./src/app/tables/event-table/event-table.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tables/event-table/event-table.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL2V2ZW50LXRhYmxlL2V2ZW50LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC90YWJsZXMvZXZlbnQtdGFibGUvZXZlbnQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tables/event-table/event-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/event-table/event-table.component.ts ***!
  \*************************************************************/
/*! exports provided: EventTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTableComponent", function() { return EventTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _event_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-table-datasource */ "./src/app/tables/event-table/event-table-datasource.ts");
/* harmony import */ var src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var src_app_models_Species__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/Species */ "./src/app/models/Species.ts");
/* harmony import */ var src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/profile/profile.component */ "./src/app/profile/profile.component.ts");







let EventTableComponent = class EventTableComponent {
    constructor(service, data) {
        this.service = service;
        this.data = data;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['description', 'value'];
    }
    ngOnInit() {
        this.data.currentUuid.subscribe(uuid => this.uuid = uuid);
        console.log('Empfangene Uuid:' + this.uuid);
        this.service.getOneRecord(this.uuid).subscribe((data) => {
            // console.log(data);
            this.speciesdata = data;
            const spec = new src_app_models_Species__WEBPACK_IMPORTED_MODULE_5__["Species"](this.speciesdata, 'eventTable');
            this.species = spec;
            this.tableData = fillTable(this.species);
            this.dataSource = new _event_table_datasource__WEBPACK_IMPORTED_MODULE_3__["EventTableDataSource"](this.tableData);
            console.log('Datasource:');
            console.log(this.dataSource);
            this.table.dataSource = this.dataSource;
        });
        this.dataSource = new _event_table_datasource__WEBPACK_IMPORTED_MODULE_3__["EventTableDataSource"](this.tableData);
    }
    ngAfterViewInit() {
    }
};
EventTableComponent.ctorParameters = () => [
    { type: src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_4__["RecordReqService"] },
    { type: src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
], EventTableComponent.prototype, "table", void 0);
EventTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/event-table/event-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event-table.component.css */ "./src/app/tables/event-table/event-table.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_4__["RecordReqService"], src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]])
], EventTableComponent);

function fillTable(species) {
    const data = [];
    data.push({ description: 'Aufzeichnungsdatum', value: species.eventDate });
    data.push({ description: 'Datumsgenauigkeit', value: species.datePrecision });
    return data;
}


/***/ }),

/***/ "./src/app/tables/geospatial-table/geospatial-table-datasource.ts":
/*!************************************************************************!*\
  !*** ./src/app/tables/geospatial-table/geospatial-table-datasource.ts ***!
  \************************************************************************/
/*! exports provided: GeospatialTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeospatialTableDataSource", function() { return GeospatialTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' }
];
/**
 * Data source for the GeospatialTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class GeospatialTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(tableData) {
        super();
        this.tableData = tableData;
        this.data = EXAMPLE_DATA;
        this.tableData = tableData;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.tableData)
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return this.tableData;
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
}


/***/ }),

/***/ "./src/app/tables/geospatial-table/geospatial-table.component.css":
/*!************************************************************************!*\
  !*** ./src/app/tables/geospatial-table/geospatial-table.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL2dlb3NwYXRpYWwtdGFibGUvZ2Vvc3BhdGlhbC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL2dlb3NwYXRpYWwtdGFibGUvZ2Vvc3BhdGlhbC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tables/geospatial-table/geospatial-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tables/geospatial-table/geospatial-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: GeospatialTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeospatialTableComponent", function() { return GeospatialTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _geospatial_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geospatial-table-datasource */ "./src/app/tables/geospatial-table/geospatial-table-datasource.ts");
/* harmony import */ var src_app_models_Species__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Species */ "./src/app/models/Species.ts");
/* harmony import */ var src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/profile/profile.component */ "./src/app/profile/profile.component.ts");







let GeospatialTableComponent = class GeospatialTableComponent {
    constructor(service, data) {
        this.service = service;
        this.data = data;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['description', 'value'];
    }
    ngOnInit() {
        this.data.currentUuid.subscribe(uuid => this.uuid = uuid);
        console.log('Empfangene Uuid:' + this.uuid);
        this.service.getOneRecord(this.uuid).subscribe((data) => {
            // console.log(data);
            this.speciesdata = data;
            const spec = new src_app_models_Species__WEBPACK_IMPORTED_MODULE_4__["Species"](this.speciesdata, 'geoTable');
            this.species = spec;
            this.tableData = fillTable(this.species);
            this.dataSource = new _geospatial_table_datasource__WEBPACK_IMPORTED_MODULE_3__["GeospatialTableDataSource"](this.tableData);
            console.log('Datasource:');
            console.log(this.dataSource);
            this.table.dataSource = this.dataSource;
        });
        this.dataSource = new _geospatial_table_datasource__WEBPACK_IMPORTED_MODULE_3__["GeospatialTableDataSource"](this.tableData);
    }
    ngAfterViewInit() {
    }
};
GeospatialTableComponent.ctorParameters = () => [
    { type: src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"] },
    { type: src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
], GeospatialTableComponent.prototype, "table", void 0);
GeospatialTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geospatial-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geospatial-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/geospatial-table/geospatial-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geospatial-table.component.css */ "./src/app/tables/geospatial-table/geospatial-table.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"], src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]])
], GeospatialTableComponent);

function fillTable(species) {
    const data = [];
    data.push({ description: 'Longitude', value: species.decimalLongitude });
    data.push({ description: 'Latitude', value: species.decimalLatitude });
    data.push({ description: 'Geodätisches Datum', value: species.geodeticDatum });
    return data;
}


/***/ }),

/***/ "./src/app/tables/map-table/map-table-datasource.ts":
/*!**********************************************************!*\
  !*** ./src/app/tables/map-table/map-table-datasource.ts ***!
  \**********************************************************/
/*! exports provided: MapTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTableDataSource", function() { return MapTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Tiere', speciesCount: '1000' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' },
    { group: 'Pflanzen', speciesCount: '50' }
];
/**
 * Data source for the MapTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class MapTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(tableData) {
        super();
        this.tableData = tableData;
        this.data = EXAMPLE_DATA;
        this.tableData = tableData;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.tableData),
            this.sort.sortChange
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return this.getSortedData([...this.tableData]);
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'group': return compare(a.group, b.group, isAsc);
                case 'speciesCount': return compare(+a.speciesCount, +b.speciesCount, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/tables/map-table/map-table.component.css":
/*!**********************************************************!*\
  !*** ./src/app/tables/map-table/map-table.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\n  width: 100%;\n}\n\n.map-table{\n  width: 100%;\n  margin-right: 0%;\n  text-align: center;\n  box-shadow: none;\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  overflow-y: scroll;\n  max-height: 700px;\n}\n\nth {\n  vertical-align: middle!important;\n}\n\ntd {\n  padding: 10px!important;\n}\n\n.mat-row.selected {\n  background: rgb(161, 147, 147);\n}\n\n.mat-row:hover {\n  border-color: gray;\n  background: rgb(161, 147, 147);\n}\n\n.row {\n  width: 1500px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL21hcC10YWJsZS9tYXAtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL21hcC10YWJsZS9tYXAtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXAtdGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbn1cblxudGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlIWltcG9ydGFudDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxMHB4IWltcG9ydGFudDtcbn1cblxuLm1hdC1yb3cuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTYxLCAxNDcsIDE0Nyk7XG59XG5cbi5tYXQtcm93OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xuICBiYWNrZ3JvdW5kOiByZ2IoMTYxLCAxNDcsIDE0Nyk7XG59XG5cbi5yb3cge1xuICB3aWR0aDogMTUwMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tables/map-table/map-table.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tables/map-table/map-table.component.ts ***!
  \*********************************************************/
/*! exports provided: MapTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTableComponent", function() { return MapTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _map_table_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-table-datasource */ "./src/app/tables/map-table/map-table-datasource.ts");
/* harmony import */ var src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var src_app_models_Taxon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/Taxon */ "./src/app/models/Taxon.ts");
/* harmony import */ var src_TaxonGroup_subgroups_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/TaxonGroup/subgroups.json */ "./src/TaxonGroup/subgroups.json");
var src_TaxonGroup_subgroups_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/TaxonGroup/subgroups.json */ "./src/TaxonGroup/subgroups.json", 1);
/* harmony import */ var src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/interaction.service */ "./src/app/services/interaction.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");










let MapTableComponent = class MapTableComponent {
    constructor(service, intService) {
        this.service = service;
        this.intService = intService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](false, null);
        this.currentGroup = 'all';
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['group', 'speciesCount'];
        this.tableData = [];
        this.taxonGroup = [];
        this.allRecordCount = 10000;
    }
    ngOnInit() {
        this.tableData.push({ group: 'Alle', speciesCount: this.allRecordCount });
        this.service.getAllRecords().subscribe((data) => {
            this.recordData = data;
            const count = this.recordData.totalRecords;
            this.tableData[0].speciesCount = count;
            this.dataSource = new _map_table_datasource__WEBPACK_IMPORTED_MODULE_4__["MapTableDataSource"](this.tableData);
            this.dataSource.sort = this.sort;
            this.table.dataSource = this.dataSource;
        });
        this.taxonData = src_TaxonGroup_subgroups_json__WEBPACK_IMPORTED_MODULE_7__;
        this.selection.onChange.subscribe((a) => {
            if (a.added[0]) // will be undefined if no selection
             {
                this.intService.updateGroup(a.added[0].group);
                console.log(a.added[0].group);
            }
        });
        Object.entries(this.taxonData).forEach(el => {
            this.taxonGroup.push(new src_app_models_Taxon__WEBPACK_IMPORTED_MODULE_6__["Taxon"](el));
        });
        console.log(this.taxonGroup);
        this.taxonGroup.forEach(el => {
            this.service.getRecordBySearch(el.speciesGroup).subscribe((data) => {
                this.recordCountData2 = data;
                const count2 = this.recordCountData2.totalRecords;
                this.tableData.push({ group: el.speciesGroup, speciesCount: count2 });
            });
            el.taxa.forEach(elm => {
                this.service.getRecordBySearch(elm).subscribe((dta) => {
                    this.recordCountData = dta;
                    const count = this.recordCountData.totalRecords;
                    this.tableData.push({ group: '\t' + elm, speciesCount: count });
                });
            });
        });
    }
    ngAfterViewInit() {
        this.dataSource = new _map_table_datasource__WEBPACK_IMPORTED_MODULE_4__["MapTableDataSource"](this.tableData);
        console.log('Datasource:');
        console.log(this.dataSource);
        this.dataSource.sort = this.sort;
        this.table.dataSource = this.dataSource;
        this.dataSource = new _map_table_datasource__WEBPACK_IMPORTED_MODULE_4__["MapTableDataSource"](this.tableData);
    }
};
MapTableComponent.ctorParameters = () => [
    { type: src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"] },
    { type: src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_8__["InteractionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], MapTableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"])
], MapTableComponent.prototype, "table", void 0);
MapTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'map-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/map-table/map-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-table.component.css */ "./src/app/tables/map-table/map-table.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"], src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_8__["InteractionService"]])
], MapTableComponent);



/***/ }),

/***/ "./src/app/tables/species-map-table/species-map-table-datasource.ts":
/*!**************************************************************************!*\
  !*** ./src/app/tables/species-map-table/species-map-table-datasource.ts ***!
  \**************************************************************************/
/*! exports provided: SpeciesMapTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesMapTableDataSource", function() { return SpeciesMapTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Butterfly', recordCount: '100' },
    { species: 'Fish', recordCount: '39' },
    { species: 'Fish', recordCount: '39' },
    { species: 'Fish', recordCount: '39' },
    { species: 'Fish', recordCount: '39' },
    { species: 'Fish', recordCount: '39' },
    { species: 'Fish', recordCount: '39' }
];
/**
 * Data source for the SpeciesMapTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class SpeciesMapTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(tableData) {
        super();
        this.tableData = tableData;
        this.data = tableData;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data),
            this.sort.sortChange
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return this.getSortedData([...this.data]);
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.species, b.species, isAsc);
                case 'id': return compare(+a.recordCount, +b.recordCount, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/tables/species-map-table/species-map-table.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/tables/species-map-table/species-map-table.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\n  width: 100%;\n}\n\n.map-table{\n  width: 100%;\n  margin-right: 0%;\n  text-align: center;\n  box-shadow: none;\n  border-right: 1px solid #dee2e6;\n  overflow-y: scroll;\n  max-height: 700px;\n}\n\nth {\n  vertical-align: middle!important;\n}\n\ntd {\n  padding: 10px!important;\n}\n\n.mat-row:hover {\n  border-color: gray;\n  background: rgb(161, 147, 147);\n}\n\n.mat-row:active {\n  background: rgb(161, 147, 147);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL3NwZWNpZXMtbWFwLXRhYmxlL3NwZWNpZXMtbWFwLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL3NwZWNpZXMtbWFwLXRhYmxlL3NwZWNpZXMtbWFwLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFwLXRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xufVxuXG50aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUhaW1wb3J0YW50O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDEwcHghaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdzpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZDogcmdiKDE2MSwgMTQ3LCAxNDcpO1xufVxuXG4ubWF0LXJvdzphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTYxLCAxNDcsIDE0Nyk7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/tables/species-map-table/species-map-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tables/species-map-table/species-map-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: SpeciesMapTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesMapTableComponent", function() { return SpeciesMapTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _species_map_table_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./species-map-table-datasource */ "./src/app/tables/species-map-table/species-map-table-datasource.ts");
/* harmony import */ var src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var src_app_models_Species__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/Species */ "./src/app/models/Species.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/interaction.service */ "./src/app/services/interaction.service.ts");









let SpeciesMapTableComponent = class SpeciesMapTableComponent {
    constructor(service, router, intService) {
        this.service = service;
        this.router = router;
        this.intService = intService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['species', 'recordCount'];
        this.tableData = [];
        this.group = 'all';
        this.speciesList = [];
    }
    ngOnInit() {
        this.service.getTaxonRecords(this.group).subscribe((data) => {
            // console.log(data);
            this.speciesdata = data;
            this.speciesdata.occurrences.forEach(element => {
                const spec = new src_app_models_Species__WEBPACK_IMPORTED_MODULE_6__["Species"](element, 'SpeciesMapTable');
                this.speciesList.push(spec);
                this.fillTable(spec);
            });
            this.dataSource = new _species_map_table_datasource__WEBPACK_IMPORTED_MODULE_4__["SpeciesMapTableDataSource"](this.tableData);
            this.dataSource.sort = this.sort;
            this.table.dataSource = this.dataSource;
        });
        this.dataSource = new _species_map_table_datasource__WEBPACK_IMPORTED_MODULE_4__["SpeciesMapTableDataSource"](this.tableData);
        this.intService.currentGroup.subscribe(currGroup => {
            this.groupChanged(currGroup);
        });
    }
    groupChanged(currGroup) {
        if (currGroup === 'Alle') {
            currGroup = '*';
        }
        this.tableData = [];
        this.speciesList = [];
        this.service.getTaxonRecords(currGroup).subscribe((data) => {
            this.speciesdata = data;
            this.speciesdata.occurrences.forEach(element => {
                const spec = new src_app_models_Species__WEBPACK_IMPORTED_MODULE_6__["Species"](element, 'SpeciesMapTable');
                this.speciesList.push(spec);
                this.fillTable(spec);
            });
            this.dataSource = new _species_map_table_datasource__WEBPACK_IMPORTED_MODULE_4__["SpeciesMapTableDataSource"](this.tableData);
            this.dataSource.sort = this.sort;
            this.table.dataSource = this.dataSource;
        });
        this.dataSource = new _species_map_table_datasource__WEBPACK_IMPORTED_MODULE_4__["SpeciesMapTableDataSource"](this.tableData);
    }
    ngAfterViewInit() {
    }
    fillTable(species) {
        this.tableData.push({ species: species.rawScientificName, recordCount: '1' });
    }
    onRowClicked(row, index) {
        console.log(index);
        this.router.navigate(['/profile', this.speciesList[index].uuid]);
    }
};
SpeciesMapTableComponent.ctorParameters = () => [
    { type: src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_8__["InteractionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], SpeciesMapTableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"])
], SpeciesMapTableComponent.prototype, "table", void 0);
SpeciesMapTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-species-map-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./species-map-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/species-map-table/species-map-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./species-map-table.component.css */ "./src/app/tables/species-map-table/species-map-table.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_services_interaction_service__WEBPACK_IMPORTED_MODULE_8__["InteractionService"]])
], SpeciesMapTableComponent);



/***/ }),

/***/ "./src/app/tables/taxonomy-table/taxonomy-table-datasource.ts":
/*!********************************************************************!*\
  !*** ./src/app/tables/taxonomy-table/taxonomy-table-datasource.ts ***!
  \********************************************************************/
/*! exports provided: TaxonomyTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyTableDataSource", function() { return TaxonomyTableDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' },
    { description: 'Data partner', value: 'Hydrogen' }
];
/**
 * Data source for the TaxonomyTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class TaxonomyTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(tableData) {
        super();
        this.tableData = tableData;
        this.data = EXAMPLE_DATA;
        this.tableData = tableData;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.tableData)
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return this.tableData;
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
}


/***/ }),

/***/ "./src/app/tables/taxonomy-table/taxonomy-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/tables/taxonomy-table/taxonomy-table.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL3RheG9ub215LXRhYmxlL3RheG9ub215LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC90YWJsZXMvdGF4b25vbXktdGFibGUvdGF4b25vbXktdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tables/taxonomy-table/taxonomy-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tables/taxonomy-table/taxonomy-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: TaxonomyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyTableComponent", function() { return TaxonomyTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _taxonomy_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxonomy-table-datasource */ "./src/app/tables/taxonomy-table/taxonomy-table-datasource.ts");
/* harmony import */ var src_app_models_Species__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Species */ "./src/app/models/Species.ts");
/* harmony import */ var src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/record-req.service */ "./src/app/services/record-req.service.ts");
/* harmony import */ var src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/profile/profile.component */ "./src/app/profile/profile.component.ts");







let TaxonomyTableComponent = class TaxonomyTableComponent {
    constructor(service, data) {
        this.service = service;
        this.data = data;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['description', 'value'];
    }
    ngOnInit() {
        this.data.currentUuid.subscribe(uuid => this.uuid = uuid);
        console.log('Empfangene Uuid:' + this.uuid);
        this.service.getOneRecord(this.uuid).subscribe((data) => {
            // console.log(data);
            this.speciesdata = data;
            const spec = new src_app_models_Species__WEBPACK_IMPORTED_MODULE_4__["Species"](this.speciesdata, 'taxTable');
            this.species = spec;
            this.tableData = fillTable(this.species);
            this.dataSource = new _taxonomy_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TaxonomyTableDataSource"](this.tableData);
            console.log('Datasource:');
            console.log(this.dataSource);
            this.table.dataSource = this.dataSource;
        });
        this.dataSource = new _taxonomy_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TaxonomyTableDataSource"](this.tableData);
    }
    ngAfterViewInit() {
    }
};
TaxonomyTableComponent.ctorParameters = () => [
    { type: src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"] },
    { type: src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
], TaxonomyTableComponent.prototype, "table", void 0);
TaxonomyTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-taxonomy-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./taxonomy-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/taxonomy-table/taxonomy-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./taxonomy-table.component.css */ "./src/app/tables/taxonomy-table/taxonomy-table.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_record_req_service__WEBPACK_IMPORTED_MODULE_5__["RecordReqService"], src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]])
], TaxonomyTableComponent);

function fillTable(species) {
    const data = [];
    data.push({ description: 'Wissenschaftlicher Name', value: species.scientificName });
    data.push({ description: 'Taxon-Rang', value: species.taxonRank });
    data.push({ description: 'Gebräuchlicher Name', value: species.vernacularName });
    data.push({ description: 'Reich', value: species.kingdom });
    data.push({ description: 'Stamm', value: species.phylum });
    data.push({ description: 'Klasse', value: species.classID });
    data.push({ description: 'Ordnung', value: species.order });
    data.push({ description: 'Familie', value: species.family });
    data.push({ description: 'Gattung', value: species.genus });
    data.push({ description: 'Spezies', value: species.species });
    return data;
}


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
    serverUrl: 'http://localhost:8080/'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nadine Gebharter\Documents\Schule\Diplomarbeit\WachauHub\src\main\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map