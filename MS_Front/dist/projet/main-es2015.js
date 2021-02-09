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

/***/ "./node_modules/raw-loader/index.js!./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img class=\"banner d-none d-sm-block\" src=\"assets/img/cate.jpg\">\n   \n    <div class=\"banner-text d-none d-sm-block animate-box \" data-animate-effect=\"fadeInLeft\">\n<div class=\"container\">\n    <div class=\"col-md-9 colsm-6 col-xs-12\">\n    <div class=\"panel panel-default\">\n        <div class=\"wow fadeIn\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\n            <h1 class=\"block-title text-center\" class=\"p-3 mb-2 bg-secondary text-white\">\n        \n       Nouvelle Categorie\t\t\n        </h1></div>\n    <div class=\"panel-body\" *ngIf=\"mode==1\">\n    <form #f=\"ngForm\" (ngSubmit)=\"Onsavecat(f.value)\">\n    <div class=\"form-group\">\n    <label class=\"control-label text-danger\">Type</label>\n    <input class=\"form-control\" class=\"p-3 mb-2 bg-dark text-white\" type=\"text\" name=\"type\" ngModel>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label text-danger\">Description</label>\n        <input class=\"form-control\" class=\"p-3 mb-2 bg-dark text-white\" type=\"text\" name=\"description\" ngModel>\n        </div>\n       \n            \n   \n        <button class=\"btn btn-success\" type=\"submit\">Enregistrer</button>\n    </form>\n    </div>\n\n\n\n\n\n\n    <div class=\"panel-body\" *ngIf=\"mode==2\">\n      <div class=\"form-group\">\n      <label>Type: </label>\n      <label>{{ct.type}}</label>\n      </div>\n      <div class=\"form-group\">\n        <label>Description: </label>\n        <label>{{ct.description}}</label>\n        </div>\n      \n      \n          <button class=\"btn btn-success\" (click)=\"Onewcate()\">Ajouter</button>\n      </div>\n    </div>\n    </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Categerie/lister-categerie/lister-categerie.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Categerie/lister-categerie/lister-categerie.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img class=\"banner d-none d-sm-block\" src=\"assets/img/bib.jpg\">\n   \n    <div class=\"banner-text d-none d-sm-block animate-box \" data-animate-effect=\"fadeInLeft\">\n  \n  <div class=\"wow fadeIn\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\n      <h1 class=\"block-title text-center\" class=\"p-3 mb-2 bg-secondary text-white\">\n  \n  Liste des Catégories\t\t\n  </h1></div>\n  <div class=\"btn btn-outline-warning btn-sm mb-2\">\n    <a class=\"btn btn-primary\" (click)=\"ajoutercate()\">Ajouter </a>\n  \n  </div>\n  \n  \n  <div class=\"panel-body\">\n  <table *ngIf=\"cat\" class=\"table table-striped table-condensed table-hover\">\n      <thead>\n              <tr>\n              \n                  <th>&nbsp;<a ng-click=\"sort_by('type')\"><i class=\"icon-sort\"></i></a></th>\n                  <th>&nbsp;<a ng-click=\"sort_by('description')\"><i class=\"icon-sort\"></i></a></th>\n                \n              \n          </thead>\n   \n     <tbody>\n                               \n       <tr *ngFor=\"let c of cat\" >\n          <div class=\"col-md-9\">\n            \n              <ul class=\"mu-menu-item-nav\" >\n               \n                <li>\n                    \n                  <div class=\"media\">\n                    <div class=\"media-left\">\n           \n          </div>\n                    <div class=\"media-body\">\n                      <h2 class=\"media-heading text-primary\">{{c.type}}</h2>\n                     \n  \n                      <span class=\"mu-menu-price text-dark\">{{c.description}}</span>\n  \n  \n                  \n          \n      \n    \n  \n  \n  \n  \n                    </div>\n  \n                  </div>\n                </li>\n                 \n                 \n               \n                \n              </ul>   \n            </div>\n            <td> <a class=\"btn btn-sm btn-danger text-white ml-1\" (click)=\"onDeleteC(c._id)\"><i class=\"fa fa-trash\"></i></a></td>\n            <td> <a class=\"btn btn-sm btn-success text-white ml-3\" (click)=\"oncosult()\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a></td>\n            <td> <a class=\"btn btn-sm btn-primary text-white ml-1\" (click)=\"oneditCat(c._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a></td>\n  </tr>\n  \n  \n          </tbody>\n    \n        \n      </table>\n  \n  </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Categerie/modifier-categerie/modifier-categerie.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Categerie/modifier-categerie/modifier-categerie.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img class=\"banner d-none d-sm-block\" src=\"assets/img/modc.jpg\">\n   \n    <div class=\"banner-text d-none d-sm-block animate-box \" data-animate-effect=\"fadeInLeft\">\n\n<div class=\"container\">\n    <div class=\"panel panel-default\">\n   \n    <div class=\"wow fadeIn\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\n        <h1 class=\"block-title text-center\" class=\"p-3 mb-2 bg-secondary text-white\">\n    \n            Edition des Catégories\t\t\n    </h1></div>\n    <div class=\"panel-body\" *ngIf=\"mcat\">\n    \n    \n      <form #f=\"ngForm\" (ngSubmit)=\"updatecat(f.value)\">\n        <div class=\"form-group\">\n        <label class=\"control-label text-danger\">Type</label>\n        <input class=\"form-control\" type=\"text\" name=\"type\" ngModel [(ngModel)]=\"mcat.type\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label text-danger\">Description</label>\n          <input class=\"form-control\" type=\"text\" name=\"description\" ngModel [(ngModel)]=\"mcat.description\">\n          </div> \n           \n\n          \n            <button class=\"btn btn-success\" type=\"submit\">Enregistrer</button>\n        </form>\n    </div>\n    \n    </div>\n    \n    \n    </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Client/ajouter-client/ajouter-client.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Client/ajouter-client/ajouter-client.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>ajouter-client works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Client/lister-client/lister-client.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Client/lister-client/lister-client.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img class=\"banner d-none d-sm-block\" src=\"assets/img/bib.jpg\">\n   \n    <div class=\"banner-text d-none d-sm-block animate-box \" data-animate-effect=\"fadeInLeft\">\n  \n  <div class=\"wow fadeIn\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\n      <h1 class=\"block-title text-center\" class=\"p-3 mb-2 bg-secondary text-white\">\n  \n  Liste des clients\t\t\n  </h1></div>\n \n  \n  \n  <div class=\"panel-body\">\n  <table *ngIf=\"client\" class=\"table table-striped table-condensed table-hover\">\n      <thead>\n              <tr>\n              \n                  <th>&nbsp;<a ng-click=\"sort_by('Nom')\"><i class=\"icon-sort\"></i></a></th>\n                  <th>&nbsp;<a ng-click=\"sort_by('Prenom')\"><i class=\"icon-sort\"></i></a></th>\n                  <th>&nbsp;<a ng-click=\"sort_by('Adresse')\"><i class=\"icon-sort\"></i></a></th>\n                  <th>&nbsp;<a ng-click=\"sort_by('Tel')\"><i class=\"icon-sort\"></i></a></th>\n              \n          </thead>\n   \n     <tbody>\n                               \n       <tr *ngFor=\"let c of client\" >\n          <div class=\"col-md-9\">\n            \n              <ul class=\"mu-menu-item-nav\" >\n               \n                <li>\n                    \n                  <div class=\"media\">\n                    <div class=\"media-left\">\n           \n          </div>\n                    <div class=\"media-body\">\n                      <h2 class=\"media-heading text-primary\">Nom:{{c.Nom}}</h2>\n                      <h3 class=\"media-heading text-dark\">Prenom:{{c.Prenom}}</h3>\n                      <h4 class=\"media-heading text-dark\">Adresse:{{c.Adresse}}</h4>\n  \n                      <span class=\"mu-menu-price text-success\">Tel:{{c.Tel}}</span>\n  \n  \n                  \n          \n      \n    \n  \n  \n  \n  \n                    </div>\n  \n                  </div>\n                </li>\n                 \n                 \n               \n                \n              </ul>   \n            </div>\n          \n            <td> <a class=\"btn btn-sm btn-danger text-white ml-1\" (click)=\"onDeleteC(c.Id)\"><i class=\"fa fa-trash\"></i></a></td>\n            <td> <a class=\"btn btn-sm btn-primary text-white ml-1\" (click)=\"oneditC(c.Id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a></td>\n          \n  </tr>\n  \n  \n          </tbody>\n    \n        \n      </table>\n  \n  </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Client/modifier-client/modifier-client.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Client/modifier-client/modifier-client.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>modifier-client works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Commande/ajouter-commande/ajouter-commande.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Commande/ajouter-commande/ajouter-commande.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>ajouter-commande works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Commande/lister-commande/lister-commande.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Commande/lister-commande/lister-commande.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <tbody>\n                             \n    <tr *ngFor=\"let c of cmd\" >\n       <div class=\"col-md-9\">\n         \n           <ul class=\"mu-menu-item-nav\" >\n            \n             <li>\n                 \n               <div class=\"media\">\n                 <div class=\"media-left\">\n        \n       </div>\n                 <div class=\"media-body\">\n                   <h2 class=\"media-heading text-primary\">title:{{hi.etat}}</h2>\n                   <h3 class=\"media-heading text-dark\">author:{{hi.montant}}</h3>\n                 \n\n               \n       \n   \n \n\n\n\n\n                 </div>\n\n               </div>\n             </li>\n              \n              \n            \n             \n           </ul>   \n         </div>\n    \n</tr>\n\n\n       </tbody>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Commande/modifier-commande/modifier-commande.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Commande/modifier-commande/modifier-commande.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>modifier-commande works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Livre/ajouter-livre/ajouter-livre.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Livre/ajouter-livre/ajouter-livre.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img class=\"banner d-none d-sm-block\" src=\"assets/img/novc.jpg\">\n   \n    <div class=\"banner-text d-none d-sm-block animate-box \" data-animate-effect=\"fadeInLeft\">\n<div class=\"container\">\n    <div class=\"col-md-9 colsm-6 col-xs-12\">\n    <div class=\"panel panel-default\">\n        <div class=\"wow fadeIn\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\n            <h1 class=\"block-title text-center\" class=\"p-3 mb-2 bg-secondary text-white\">\n        \n       Nouvelle Livre\t\t\n        </h1></div>\n    <div class=\"panel-body\" *ngIf=\"mode==1\">\n    <form #f=\"ngForm\" (ngSubmit)=\"Onsavelivre(f.value)\">\n    <div class=\"form-group\">\n    <label class=\"control-label text-danger\">Title</label>\n    <input class=\"form-control\" class=\"p-3 mb-2 bg-dark text-white\" type=\"text\" name=\"title\" ngModel>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label text-danger\">Author</label>\n        <input class=\"form-control\" class=\"p-3 mb-2 bg-dark text-white\" type=\"text\" name=\"author\" ngModel>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label text-danger\">Price</label>\n            <input class=\"form-control\" class=\"p-3 mb-2 bg-dark text-white\" type=\"text\" name=\"price\" ngModel>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label text-danger\">Quantity</label>\n                <input class=\"form-control\" class=\"p-3 mb-2 bg-dark text-white\" type=\"text\" name=\"quantity\" ngModel>\n                </div>\n   \n        <button class=\"btn btn-success\" type=\"submit\">Enregistrer</button>\n    </form>\n    </div>\n\n\n\n\n\n\n    <div class=\"panel-body\" *ngIf=\"mode==2\">\n      <div class=\"form-group\">\n      <label>Title: </label>\n      <label>{{l.title}}</label>\n      </div>\n      <div class=\"form-group\">\n        <label>Author: </label>\n        <label>{{l.author}}</label>\n        </div>\n        <div class=\"form-group\">\n            <label>Price: </label>\n            <label>{{l.price}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label>Quantity: </label>\n                <label>{{l.quantity}}</label>\n                </div>\n      \n          <button class=\"btn btn-success\" (click)=\"Onewlivre()\">Ajouter</button>\n      </div>\n    </div>\n    </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Livre/lister-livre/lister-livre.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Livre/lister-livre/lister-livre.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"banner d-none d-sm-block\" src=\"assets/img/bib.jpg\">\n \n  <div class=\"banner-text d-none d-sm-block animate-box \" data-animate-effect=\"fadeInLeft\">\n\n<div class=\"wow fadeIn\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\n    <h1 class=\"block-title text-center\" class=\"p-3 mb-2 bg-secondary text-white\">\n\nListe des livres\t\t\n</h1></div>\n<div class=\"btn btn-outline-warning btn-sm mb-2\">\n  <a class=\"btn btn-primary\" (click)=\"ajouterlivre()\">Ajouter </a>\n\n</div>\n\n\n<div class=\"panel-body\">\n<table *ngIf=\"livre\" class=\"table table-striped table-condensed table-hover\">\n    <thead>\n            <tr>\n            \n                <th>&nbsp;<a ng-click=\"sort_by('title')\"><i class=\"icon-sort\"></i></a></th>\n                <th>&nbsp;<a ng-click=\"sort_by('author')\"><i class=\"icon-sort\"></i></a></th>\n                <th>&nbsp;<a ng-click=\"sort_by('price')\"><i class=\"icon-sort\"></i></a></th>\n                <th>&nbsp;<a ng-click=\"sort_by('quantity')\"><i class=\"icon-sort\"></i></a></th>\n            \n        </thead>\n \n   <tbody>\n                             \n     <tr *ngFor=\"let c of livre\" >\n        <div class=\"col-md-9\">\n          \n            <ul class=\"mu-menu-item-nav\" >\n             \n              <li>\n                  \n                <div class=\"media\">\n                  <div class=\"media-left\">\n         \n        </div>\n                  <div class=\"media-body\">\n                    <h2 class=\"media-heading text-primary\">title:{{c.title}}</h2>\n                    <h3 class=\"media-heading text-dark\">author:{{c.author}}</h3>\n                    <h4 class=\"media-heading text-dark\">price:{{c.price}}DT</h4>\n\n                    <span class=\"mu-menu-price text-success\">quantity:{{c.quantity}}</span>\n\n\n                \n        \n    \n  \n\n\n\n\n                  </div>\n\n                </div>\n              </li>\n               \n               \n             \n              \n            </ul>   \n          </div>\n        \n          <td> <a class=\"btn btn-sm btn-danger text-white ml-1\" (click)=\"onDeleteL(c._id)\"><i class=\"fa fa-trash\"></i></a></td>\n          <td> <a class=\"btn btn-sm btn-primary text-white ml-1\" (click)=\"oneditL(c._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a></td>\n          <td> <a class=\"btn btn-sm btn-success text-white ml-1\" (click)=\"command()\">Ajouter au panier</a></td>\n</tr>\n\n\n        </tbody>\n  \n      \n    </table>\n\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Livre/modifier-livre/modifier-livre.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Livre/modifier-livre/modifier-livre.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img class=\"banner d-none d-sm-block\" src=\"assets/img/edit.jpg\">\n   \n    <div class=\"banner-text d-none d-sm-block animate-box \" data-animate-effect=\"fadeInLeft\">\n\n<div class=\"container\">\n    <div class=\"panel panel-default\">\n   \n    <div class=\"wow fadeIn\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\n        <h1 class=\"block-title text-center\" class=\"p-3 mb-2 bg-secondary text-white\">\n    \n            Edition des Livres\t\t\n    </h1></div>\n    <div class=\"panel-body\" *ngIf=\"mlivre\">\n    \n    \n      <form #f=\"ngForm\" (ngSubmit)=\"updatelivre(f.value)\">\n        <div class=\"form-group\">\n        <label class=\"control-label text-danger\">Title</label>\n        <input class=\"form-control\" type=\"text\" name=\"title\" ngModel [(ngModel)]=\"mlivre.title\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label text-danger\">Author</label>\n          <input class=\"form-control\" type=\"text\" name=\"author\" ngModel [(ngModel)]=\"mlivre.author\">\n          </div>  <div class=\"form-group\">\n            <label class=\"control-label text-danger\">Quantity</label>\n            <input class=\"form-control\" type=\"text\" name=\"quantity\" ngModel [(ngModel)]=\"mlivre.quantity\">\n            </div>\n          \n            <div class=\"form-group\">\n                <label class=\"control-label text-danger\">Price</label>\n                <input class=\"form-control\" type=\"text\" name=\"price\" ngModel [(ngModel)]=\"mlivre.price\">\n                </div>\n                \n\n          \n            <button class=\"btn btn-success\" type=\"submit\">Enregistrer</button>\n        </form>\n    </div>\n    \n    </div>\n    \n    \n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg nav-bar navbar-light bg-light\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\"> Gestion de bibliothèque <span class=\"navbar-brand2\"> </span></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n                aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n  \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto navi\">\n              \n                \n              \n                    \n                   \n                \n  \n  \n                  <li class=\"nav-item\">\n                      \n                    <a class=\"nav-link nav-btn\" href=\"/Acces\" ><h2 class=\"text-muted\">Catalogue <img src=\"assets/img/123.png\" alt=\"\" width=\"50\" height=\"30\"></h2></a>\n                </li>\n                \n  \n                <li class=\"nav-item\">\n                      \n                    <a class=\"nav-link nav-btn\"  href=\"/clt\" ><h2 class=\"text-muted\" >Liste Clients <i class=\"fa fa-users\" aria-hidden=\"true\"></i></h2></a>\n                </li>\n                \n  \n            \n            </ul>\n        </div>\n    </div>\n  </nav>\n  <img class=\"banner d-none d-sm-block\" src=\"assets/img/bib.jpg\">\n"

/***/ }),

/***/ "./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NhdGVnZXJpZS9ham91dGVyLWNhdGVnZXJpZS9ham91dGVyLWNhdGVnZXJpZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.ts ***!
  \****************************************************************************/
/*! exports provided: AjouterCategerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterCategerieComponent", function() { return AjouterCategerieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");



let AjouterCategerieComponent = class AjouterCategerieComponent {
    constructor(ctService) {
        this.ctService = ctService;
        this.mode = 1;
    }
    ngOnInit() {
    }
    Onsavecat(data) {
        this.ctService.add_cat(data).subscribe(res => {
            this.ct = res;
            this.mode = 2;
        }, err => (console.log(err)));
    }
    Onewcate() {
        this.mode = 1;
    }
};
AjouterCategerieComponent.ctorParameters = () => [
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
AjouterCategerieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajouter-categerie',
        template: __webpack_require__(/*! raw-loader!./ajouter-categerie.component.html */ "./node_modules/raw-loader/index.js!./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.html"),
        styles: [__webpack_require__(/*! ./ajouter-categerie.component.scss */ "./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.scss")]
    })
], AjouterCategerieComponent);



/***/ }),

/***/ "./src/app/Categerie/lister-categerie/lister-categerie.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Categerie/lister-categerie/lister-categerie.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NhdGVnZXJpZS9saXN0ZXItY2F0ZWdlcmllL2xpc3Rlci1jYXRlZ2VyaWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Categerie/lister-categerie/lister-categerie.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Categerie/lister-categerie/lister-categerie.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListerCategerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListerCategerieComponent", function() { return ListerCategerieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");




let ListerCategerieComponent = class ListerCategerieComponent {
    constructor(catService, router) {
        this.catService = catService;
        this.router = router;
    }
    ngOnInit() {
        this.Affichercat();
    }
    Affichercat() {
        this.catService.tous_cat().subscribe(data => {
            this.cat = data;
            this.catall = data;
            console.log(data);
        }, err => { console.log(err); });
    }
    oncosult() {
        this.router.navigateByUrl("/voir");
    }
    onDeleteC(id) {
        let conf = confirm("etes vous sure?");
        if (conf)
            this.catService.deletecat(id).subscribe(data => {
                this.Affichercat();
            }, err => {
                console.log(err);
            });
    }
    ajoutercate() {
        this.router.navigateByUrl("/ajtcate");
    }
    oneditCat(id) {
        this.router.navigateByUrl("/modifierCat/" + id);
    }
};
ListerCategerieComponent.ctorParameters = () => [
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListerCategerieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lister-categerie',
        template: __webpack_require__(/*! raw-loader!./lister-categerie.component.html */ "./node_modules/raw-loader/index.js!./src/app/Categerie/lister-categerie/lister-categerie.component.html"),
        styles: [__webpack_require__(/*! ./lister-categerie.component.scss */ "./src/app/Categerie/lister-categerie/lister-categerie.component.scss")]
    })
], ListerCategerieComponent);



/***/ }),

/***/ "./src/app/Categerie/modifier-categerie/modifier-categerie.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/Categerie/modifier-categerie/modifier-categerie.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NhdGVnZXJpZS9tb2RpZmllci1jYXRlZ2VyaWUvbW9kaWZpZXItY2F0ZWdlcmllLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Categerie/modifier-categerie/modifier-categerie.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Categerie/modifier-categerie/modifier-categerie.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModifierCategerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierCategerieComponent", function() { return ModifierCategerieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_model_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/category */ "./src/app/model/category.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");





let ModifierCategerieComponent = class ModifierCategerieComponent {
    constructor(categService, activeRoute, router) {
        this.categService = categService;
        this.activeRoute = activeRoute;
        this.router = router;
    }
    ngOnInit() {
        this.get1categ();
    }
    get1categ() {
        this.categService.get1cat(this.activeRoute.snapshot.params.id).subscribe(data => { this.mcat = data; }, err => { console.log(err); });
    }
    updatecat(value) {
        let cg;
        cg = new src_app_model_category__WEBPACK_IMPORTED_MODULE_3__["Category"](this.activeRoute.snapshot.params.id, value.type, value.description);
        this.categService.modifier_cat(cg).subscribe(data => this.router.navigateByUrl("/categ1"));
    }
};
ModifierCategerieComponent.ctorParameters = () => [
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ModifierCategerieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifier-categerie',
        template: __webpack_require__(/*! raw-loader!./modifier-categerie.component.html */ "./node_modules/raw-loader/index.js!./src/app/Categerie/modifier-categerie/modifier-categerie.component.html"),
        styles: [__webpack_require__(/*! ./modifier-categerie.component.scss */ "./src/app/Categerie/modifier-categerie/modifier-categerie.component.scss")]
    })
], ModifierCategerieComponent);



/***/ }),

/***/ "./src/app/Client/ajouter-client/ajouter-client.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Client/ajouter-client/ajouter-client.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NsaWVudC9ham91dGVyLWNsaWVudC9ham91dGVyLWNsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Client/ajouter-client/ajouter-client.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Client/ajouter-client/ajouter-client.component.ts ***!
  \*******************************************************************/
/*! exports provided: AjouterClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterClientComponent", function() { return AjouterClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AjouterClientComponent = class AjouterClientComponent {
    constructor() { }
    ngOnInit() {
    }
};
AjouterClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajouter-client',
        template: __webpack_require__(/*! raw-loader!./ajouter-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/Client/ajouter-client/ajouter-client.component.html"),
        styles: [__webpack_require__(/*! ./ajouter-client.component.scss */ "./src/app/Client/ajouter-client/ajouter-client.component.scss")]
    })
], AjouterClientComponent);



/***/ }),

/***/ "./src/app/Client/lister-client/lister-client.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Client/lister-client/lister-client.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NsaWVudC9saXN0ZXItY2xpZW50L2xpc3Rlci1jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Client/lister-client/lister-client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Client/lister-client/lister-client.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListerClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListerClientComponent", function() { return ListerClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");




let ListerClientComponent = class ListerClientComponent {
    constructor(clientService, router) {
        this.clientService = clientService;
        this.router = router;
    }
    ngOnInit() {
        this.Afficherclient();
    }
    Afficherclient() {
        this.clientService.tous_clients().subscribe(data => {
            this.client = data;
            this.clientall = data;
            console.log(data);
        }, err => { console.log(err); });
    }
};
ListerClientComponent.ctorParameters = () => [
    { type: src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListerClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lister-client',
        template: __webpack_require__(/*! raw-loader!./lister-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/Client/lister-client/lister-client.component.html"),
        styles: [__webpack_require__(/*! ./lister-client.component.scss */ "./src/app/Client/lister-client/lister-client.component.scss")]
    })
], ListerClientComponent);



/***/ }),

/***/ "./src/app/Client/modifier-client/modifier-client.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Client/modifier-client/modifier-client.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NsaWVudC9tb2RpZmllci1jbGllbnQvbW9kaWZpZXItY2xpZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Client/modifier-client/modifier-client.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Client/modifier-client/modifier-client.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModifierClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierClientComponent", function() { return ModifierClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModifierClientComponent = class ModifierClientComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModifierClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifier-client',
        template: __webpack_require__(/*! raw-loader!./modifier-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/Client/modifier-client/modifier-client.component.html"),
        styles: [__webpack_require__(/*! ./modifier-client.component.scss */ "./src/app/Client/modifier-client/modifier-client.component.scss")]
    })
], ModifierClientComponent);



/***/ }),

/***/ "./src/app/Commande/ajouter-commande/ajouter-commande.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Commande/ajouter-commande/ajouter-commande.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbW1hbmRlL2Fqb3V0ZXItY29tbWFuZGUvYWpvdXRlci1jb21tYW5kZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Commande/ajouter-commande/ajouter-commande.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Commande/ajouter-commande/ajouter-commande.component.ts ***!
  \*************************************************************************/
/*! exports provided: AjouterCommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterCommandeComponent", function() { return AjouterCommandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AjouterCommandeComponent = class AjouterCommandeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AjouterCommandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajouter-commande',
        template: __webpack_require__(/*! raw-loader!./ajouter-commande.component.html */ "./node_modules/raw-loader/index.js!./src/app/Commande/ajouter-commande/ajouter-commande.component.html"),
        styles: [__webpack_require__(/*! ./ajouter-commande.component.scss */ "./src/app/Commande/ajouter-commande/ajouter-commande.component.scss")]
    })
], AjouterCommandeComponent);



/***/ }),

/***/ "./src/app/Commande/lister-commande/lister-commande.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Commande/lister-commande/lister-commande.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbW1hbmRlL2xpc3Rlci1jb21tYW5kZS9saXN0ZXItY29tbWFuZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Commande/lister-commande/lister-commande.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Commande/lister-commande/lister-commande.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListerCommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListerCommandeComponent", function() { return ListerCommandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_commande_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commande.service */ "./src/app/services/commande.service.ts");





let ListerCommandeComponent = class ListerCommandeComponent {
    constructor(cmService, router, activeRoute) {
        this.cmService = cmService;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    transform(objects = []) {
        return Object.values(objects);
    }
    ngOnInit() {
        this.Affichercom();
    }
    Affichercom() {
        this.cmService.tous_commandes().subscribe(data => {
            this.cmd = data;
            this.cmdall = data;
            console.log(data);
        }, err => { console.log(err); });
    }
};
ListerCommandeComponent.ctorParameters = () => [
    { type: src_app_services_commande_service__WEBPACK_IMPORTED_MODULE_3__["CommandeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ListerCommandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lister-commande',
        template: __webpack_require__(/*! raw-loader!./lister-commande.component.html */ "./node_modules/raw-loader/index.js!./src/app/Commande/lister-commande/lister-commande.component.html"),
        styles: [__webpack_require__(/*! ./lister-commande.component.scss */ "./src/app/Commande/lister-commande/lister-commande.component.scss")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'valueArray',
    })
], ListerCommandeComponent);



/***/ }),

/***/ "./src/app/Commande/modifier-commande/modifier-commande.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/Commande/modifier-commande/modifier-commande.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbW1hbmRlL21vZGlmaWVyLWNvbW1hbmRlL21vZGlmaWVyLWNvbW1hbmRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Commande/modifier-commande/modifier-commande.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Commande/modifier-commande/modifier-commande.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModifierCommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierCommandeComponent", function() { return ModifierCommandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModifierCommandeComponent = class ModifierCommandeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModifierCommandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifier-commande',
        template: __webpack_require__(/*! raw-loader!./modifier-commande.component.html */ "./node_modules/raw-loader/index.js!./src/app/Commande/modifier-commande/modifier-commande.component.html"),
        styles: [__webpack_require__(/*! ./modifier-commande.component.scss */ "./src/app/Commande/modifier-commande/modifier-commande.component.scss")]
    })
], ModifierCommandeComponent);



/***/ }),

/***/ "./src/app/Livre/ajouter-livre/ajouter-livre.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Livre/ajouter-livre/ajouter-livre.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xpdnJlL2Fqb3V0ZXItbGl2cmUvYWpvdXRlci1saXZyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Livre/ajouter-livre/ajouter-livre.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Livre/ajouter-livre/ajouter-livre.component.ts ***!
  \****************************************************************/
/*! exports provided: AjouterLivreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterLivreComponent", function() { return AjouterLivreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_livre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/livre.service */ "./src/app/services/livre.service.ts");



let AjouterLivreComponent = class AjouterLivreComponent {
    constructor(lService) {
        this.lService = lService;
        this.mode = 1;
    }
    ngOnInit() {
    }
    Onsavelivre(data) {
        this.lService.add_livre(data).subscribe(res => {
            this.l = res;
            this.mode = 2;
        }, err => (console.log(err)));
    }
    Onewlivre() {
        this.mode = 1;
    }
};
AjouterLivreComponent.ctorParameters = () => [
    { type: src_app_services_livre_service__WEBPACK_IMPORTED_MODULE_2__["LivreService"] }
];
AjouterLivreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajouter-livre',
        template: __webpack_require__(/*! raw-loader!./ajouter-livre.component.html */ "./node_modules/raw-loader/index.js!./src/app/Livre/ajouter-livre/ajouter-livre.component.html"),
        styles: [__webpack_require__(/*! ./ajouter-livre.component.scss */ "./src/app/Livre/ajouter-livre/ajouter-livre.component.scss")]
    })
], AjouterLivreComponent);



/***/ }),

/***/ "./src/app/Livre/lister-livre/lister-livre.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Livre/lister-livre/lister-livre.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xpdnJlL2xpc3Rlci1saXZyZS9saXN0ZXItbGl2cmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Livre/lister-livre/lister-livre.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Livre/lister-livre/lister-livre.component.ts ***!
  \**************************************************************/
/*! exports provided: ListerLivreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListerLivreComponent", function() { return ListerLivreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_livre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/livre.service */ "./src/app/services/livre.service.ts");




let ListerLivreComponent = class ListerLivreComponent {
    constructor(livreService, router) {
        this.livreService = livreService;
        this.router = router;
    }
    ngOnInit() {
        this.Afficherlivre();
    }
    Afficherlivre() {
        this.livreService.tous_livres().subscribe(data => {
            this.livre = data;
            this.livreall = data;
            console.log(data);
        }, err => { console.log(err); });
    }
    ajouterlivre() {
        this.router.navigateByUrl("/ajtlivre");
    }
    onDeleteL(id) {
        let conf = confirm("etes vous sure?");
        if (conf)
            this.livreService.deletelivre(id).subscribe(data => {
                this.Afficherlivre();
            }, err => {
                console.log(err);
            });
    }
    oneditL(id) {
        this.router.navigateByUrl("/modifierL/" + id);
    }
    command() {
        this.router.navigateByUrl("/commande");
    }
};
ListerLivreComponent.ctorParameters = () => [
    { type: src_app_services_livre_service__WEBPACK_IMPORTED_MODULE_3__["LivreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListerLivreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lister-livre',
        template: __webpack_require__(/*! raw-loader!./lister-livre.component.html */ "./node_modules/raw-loader/index.js!./src/app/Livre/lister-livre/lister-livre.component.html"),
        styles: [__webpack_require__(/*! ./lister-livre.component.scss */ "./src/app/Livre/lister-livre/lister-livre.component.scss")]
    })
], ListerLivreComponent);



/***/ }),

/***/ "./src/app/Livre/modifier-livre/modifier-livre.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/Livre/modifier-livre/modifier-livre.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xpdnJlL21vZGlmaWVyLWxpdnJlL21vZGlmaWVyLWxpdnJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Livre/modifier-livre/modifier-livre.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Livre/modifier-livre/modifier-livre.component.ts ***!
  \******************************************************************/
/*! exports provided: ModifierLivreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierLivreComponent", function() { return ModifierLivreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_model_livre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/livre */ "./src/app/model/livre.ts");
/* harmony import */ var src_app_services_livre_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/livre.service */ "./src/app/services/livre.service.ts");





let ModifierLivreComponent = class ModifierLivreComponent {
    constructor(lvService, activeRoute, router) {
        this.lvService = lvService;
        this.activeRoute = activeRoute;
        this.router = router;
    }
    ngOnInit() {
        this.get1livre();
    }
    get1livre() {
        this.lvService.get1livre(this.activeRoute.snapshot.params.id).subscribe(data => { this.mlivre = data; }, err => { console.log(err); });
    }
    updatelivre(value) {
        let uni;
        uni = new src_app_model_livre__WEBPACK_IMPORTED_MODULE_3__["Livre"](this.activeRoute.snapshot.params.id, value.title, value.author, value.price, value.quantity);
        this.lvService.modifier_l(uni).subscribe(data => this.router.navigateByUrl("/livre1"));
    }
};
ModifierLivreComponent.ctorParameters = () => [
    { type: src_app_services_livre_service__WEBPACK_IMPORTED_MODULE_4__["LivreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ModifierLivreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifier-livre',
        template: __webpack_require__(/*! raw-loader!./modifier-livre.component.html */ "./node_modules/raw-loader/index.js!./src/app/Livre/modifier-livre/modifier-livre.component.html"),
        styles: [__webpack_require__(/*! ./modifier-livre.component.scss */ "./src/app/Livre/modifier-livre/modifier-livre.component.scss")]
    })
], ModifierLivreComponent);



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
/* harmony import */ var _Categerie_ajouter_categerie_ajouter_categerie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categerie/ajouter-categerie/ajouter-categerie.component */ "./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.ts");
/* harmony import */ var _Categerie_lister_categerie_lister_categerie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Categerie/lister-categerie/lister-categerie.component */ "./src/app/Categerie/lister-categerie/lister-categerie.component.ts");
/* harmony import */ var _Categerie_modifier_categerie_modifier_categerie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Categerie/modifier-categerie/modifier-categerie.component */ "./src/app/Categerie/modifier-categerie/modifier-categerie.component.ts");
/* harmony import */ var _Client_lister_client_lister_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Client/lister-client/lister-client.component */ "./src/app/Client/lister-client/lister-client.component.ts");
/* harmony import */ var _Commande_lister_commande_lister_commande_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Commande/lister-commande/lister-commande.component */ "./src/app/Commande/lister-commande/lister-commande.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _Livre_ajouter_livre_ajouter_livre_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Livre/ajouter-livre/ajouter-livre.component */ "./src/app/Livre/ajouter-livre/ajouter-livre.component.ts");
/* harmony import */ var _Livre_lister_livre_lister_livre_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Livre/lister-livre/lister-livre.component */ "./src/app/Livre/lister-livre/lister-livre.component.ts");
/* harmony import */ var _Livre_modifier_livre_modifier_livre_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Livre/modifier-livre/modifier-livre.component */ "./src/app/Livre/modifier-livre/modifier-livre.component.ts");












const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
    },
    { path: "Acces", component: _Categerie_lister_categerie_lister_categerie_component__WEBPACK_IMPORTED_MODULE_4__["ListerCategerieComponent"]
    },
    { path: "voir", component: _Livre_lister_livre_lister_livre_component__WEBPACK_IMPORTED_MODULE_10__["ListerLivreComponent"]
    },
    { path: "clt", component: _Client_lister_client_lister_client_component__WEBPACK_IMPORTED_MODULE_6__["ListerClientComponent"]
    },
    { path: "ajtlivre", component: _Livre_ajouter_livre_ajouter_livre_component__WEBPACK_IMPORTED_MODULE_9__["AjouterLivreComponent"]
    },
    { path: "ajtcate", component: _Categerie_ajouter_categerie_ajouter_categerie_component__WEBPACK_IMPORTED_MODULE_3__["AjouterCategerieComponent"]
    },
    { path: "modifierL/:id", component: _Livre_modifier_livre_modifier_livre_component__WEBPACK_IMPORTED_MODULE_11__["ModifierLivreComponent"]
    },
    { path: "modifierCat/:id", component: _Categerie_modifier_categerie_modifier_categerie_component__WEBPACK_IMPORTED_MODULE_5__["ModifierCategerieComponent"]
    },
    { path: "commande", component: _Commande_lister_commande_lister_commande_component__WEBPACK_IMPORTED_MODULE_7__["ListerCommandeComponent"]
    },
    { path: "livre1", component: _Livre_lister_livre_lister_livre_component__WEBPACK_IMPORTED_MODULE_10__["ListerLivreComponent"]
    }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _services_get_ip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/get-ip.service */ "./src/app/services/get-ip.service.ts");



let AppComponent = class AppComponent {
    constructor(clientService) {
        this.clientService = clientService;
        this.title = 'Get client IP';
    }
    ngOnInit() {
        //this.getClientIP();  
    }
    getClientIP() {
        this.clientService.getClientIPAddress().subscribe((res) => {
            this.clientIP = res.ip;
            console.log("testttttt");
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_get_ip_service__WEBPACK_IMPORTED_MODULE_2__["GetIPService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Livre_ajouter_livre_ajouter_livre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Livre/ajouter-livre/ajouter-livre.component */ "./src/app/Livre/ajouter-livre/ajouter-livre.component.ts");
/* harmony import */ var _Livre_modifier_livre_modifier_livre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Livre/modifier-livre/modifier-livre.component */ "./src/app/Livre/modifier-livre/modifier-livre.component.ts");
/* harmony import */ var _Livre_lister_livre_lister_livre_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Livre/lister-livre/lister-livre.component */ "./src/app/Livre/lister-livre/lister-livre.component.ts");
/* harmony import */ var _Categerie_modifier_categerie_modifier_categerie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Categerie/modifier-categerie/modifier-categerie.component */ "./src/app/Categerie/modifier-categerie/modifier-categerie.component.ts");
/* harmony import */ var _Categerie_ajouter_categerie_ajouter_categerie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Categerie/ajouter-categerie/ajouter-categerie.component */ "./src/app/Categerie/ajouter-categerie/ajouter-categerie.component.ts");
/* harmony import */ var _Commande_ajouter_commande_ajouter_commande_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Commande/ajouter-commande/ajouter-commande.component */ "./src/app/Commande/ajouter-commande/ajouter-commande.component.ts");
/* harmony import */ var _Commande_modifier_commande_modifier_commande_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Commande/modifier-commande/modifier-commande.component */ "./src/app/Commande/modifier-commande/modifier-commande.component.ts");
/* harmony import */ var _Commande_lister_commande_lister_commande_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Commande/lister-commande/lister-commande.component */ "./src/app/Commande/lister-commande/lister-commande.component.ts");
/* harmony import */ var _Client_lister_client_lister_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Client/lister-client/lister-client.component */ "./src/app/Client/lister-client/lister-client.component.ts");
/* harmony import */ var _Client_modifier_client_modifier_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Client/modifier-client/modifier-client.component */ "./src/app/Client/modifier-client/modifier-client.component.ts");
/* harmony import */ var _Client_ajouter_client_ajouter_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Client/ajouter-client/ajouter-client.component */ "./src/app/Client/ajouter-client/ajouter-client.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Categerie_lister_categerie_lister_categerie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Categerie/lister-categerie/lister-categerie.component */ "./src/app/Categerie/lister-categerie/lister-categerie.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _Livre_ajouter_livre_ajouter_livre_component__WEBPACK_IMPORTED_MODULE_6__["AjouterLivreComponent"],
            _Livre_modifier_livre_modifier_livre_component__WEBPACK_IMPORTED_MODULE_7__["ModifierLivreComponent"],
            _Livre_lister_livre_lister_livre_component__WEBPACK_IMPORTED_MODULE_8__["ListerLivreComponent"],
            _Categerie_lister_categerie_lister_categerie_component__WEBPACK_IMPORTED_MODULE_18__["ListerCategerieComponent"],
            _Categerie_modifier_categerie_modifier_categerie_component__WEBPACK_IMPORTED_MODULE_9__["ModifierCategerieComponent"],
            _Categerie_ajouter_categerie_ajouter_categerie_component__WEBPACK_IMPORTED_MODULE_10__["AjouterCategerieComponent"],
            _Commande_ajouter_commande_ajouter_commande_component__WEBPACK_IMPORTED_MODULE_11__["AjouterCommandeComponent"],
            _Commande_modifier_commande_modifier_commande_component__WEBPACK_IMPORTED_MODULE_12__["ModifierCommandeComponent"],
            _Commande_lister_commande_lister_commande_component__WEBPACK_IMPORTED_MODULE_13__["ListerCommandeComponent"],
            _Client_lister_client_lister_client_component__WEBPACK_IMPORTED_MODULE_14__["ListerClientComponent"],
            _Client_modifier_client_modifier_client_component__WEBPACK_IMPORTED_MODULE_15__["ModifierClientComponent"],
            _Client_ajouter_client_ajouter_client_component__WEBPACK_IMPORTED_MODULE_16__["AjouterClientComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/model/category.ts":
/*!***********************************!*\
  !*** ./src/app/model/category.ts ***!
  \***********************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor(_id, nom, description) {
        this.type = nom;
        this.description = description;
        this._id = _id;
    }
}
Category.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/model/livre.ts":
/*!********************************!*\
  !*** ./src/app/model/livre.ts ***!
  \********************************/
/*! exports provided: Livre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Livre", function() { return Livre; });
class Livre {
    constructor(_id, price, quantity, author, title) {
        this.quantity = quantity;
        this.price = price;
        this.author = author;
        this.title = title;
        this._id = _id;
    }
}
Livre.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: Number },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CategoryService = class CategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = "http://" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + ":8888/categoryservice";
    }
    add_cat(objet) {
        return this.httpClient.post(this.host + "/category", objet);
    }
    tous_cat() {
        return this.httpClient.get(this.host + "/category");
    }
    get1cat(id) {
        return this.httpClient.get(this.host + "/category/" + id);
    }
    deletecat(id) {
        return this.httpClient.delete(this.host + "/category/" + id);
    }
    modifier_cat(objet) {
        return this.httpClient.put(this.host + "/category/", objet);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ClientService = class ClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = "http://" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + ":8888/clientservice";
    }
    add_client(objet) {
        return this.httpClient.post(this.host + "/clients", objet);
    }
    tous_clients() {
        return this.httpClient.get(this.host + "/clients");
    }
    get1client(id) {
        return this.httpClient.get(this.host + "/clients/" + id);
    }
    deleteclient(id) {
        return this.httpClient.delete(this.host + "/clients/" + id);
    }
    modifier_l(objet) {
        return this.httpClient.put(this.host + "/clients/", objet);
    }
};
ClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientService);



/***/ }),

/***/ "./src/app/services/commande.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/commande.service.ts ***!
  \**********************************************/
/*! exports provided: CommandeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeService", function() { return CommandeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CommandeService = class CommandeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = "http://" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + ":8888/commande-service";
    }
    add_commande(objet) {
        return this.httpClient.post(this.host + "/commandes", objet);
    }
    tous_commandes() {
        return this.httpClient.get(this.host + "/commandes");
    }
    deletecommande(id) {
        return this.httpClient.delete(this.host + "/commandes/" + id);
    }
};
CommandeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommandeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommandeService);



/***/ }),

/***/ "./src/app/services/get-ip.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/get-ip.service.ts ***!
  \********************************************/
/*! exports provided: GetIPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetIPService", function() { return GetIPService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let GetIPService = class GetIPService {
    constructor(http) {
        this.http = http;
    }
    getClientIPAddress() {
        return this.http.get("http://MSZuul.aliases");
    }
};
GetIPService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GetIPService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GetIPService);



/***/ }),

/***/ "./src/app/services/livre.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/livre.service.ts ***!
  \*******************************************/
/*! exports provided: LivreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivreService", function() { return LivreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let LivreService = class LivreService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = "http://" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + ":8888/livreservice";
    }
    add_livre(objet) {
        return this.httpClient.post(this.host + "/books", objet);
    }
    tous_livres() {
        return this.httpClient.get(this.host + "/books");
    }
    get1livre(id) {
        return this.httpClient.get(this.host + "/books/" + id);
    }
    deletelivre(id) {
        return this.httpClient.delete(this.host + "/books/" + id);
    }
    modifier_l(objet) {
        return this.httpClient.put(this.host + "/books/", objet);
    }
};
LivreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LivreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LivreService);



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
const environment = {
    production: false,
    apiUrl: window["env"]["apiUrl"] || "default",
    debug: window["env"]["debug"] || false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wafaa\Downloads\Architecture\Architecture\MS_Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map