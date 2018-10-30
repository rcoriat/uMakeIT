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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ProyectoAngular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _olvido_olvido_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./olvido/olvido.component */ "./src/app/olvido/olvido.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./encabezado/encabezado.component */ "./src/app/encabezado/encabezado.component.ts");
/* harmony import */ var _piedepagina_piedepagina_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./piedepagina/piedepagina.component */ "./src/app/piedepagina/piedepagina.component.ts");
/* harmony import */ var _contactaradmin_contactaradmin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactaradmin/contactaradmin.component */ "./src/app/contactaradmin/contactaradmin.component.ts");
/* harmony import */ var _editarperfil_editarperfil_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editarperfil/editarperfil.component */ "./src/app/editarperfil/editarperfil.component.ts");
/* harmony import */ var _historial_historial_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./historial/historial.component */ "./src/app/historial/historial.component.ts");
/* harmony import */ var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./carrito/carrito.component */ "./src/app/carrito/carrito.component.ts");
/* harmony import */ var _estado_estado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./estado/estado.component */ "./src/app/estado/estado.component.ts");
/* harmony import */ var _encabezadoadmin_encabezadoadmin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./encabezadoadmin/encabezadoadmin.component */ "./src/app/encabezadoadmin/encabezadoadmin.component.ts");
/* harmony import */ var _menuadmin_menuadmin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menuadmin/menuadmin.component */ "./src/app/menuadmin/menuadmin.component.ts");
/* harmony import */ var _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pendientes/pendientes.component */ "./src/app/pendientes/pendientes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'registro', component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"] },
    { path: 'olvido', component: _olvido_olvido_component__WEBPACK_IMPORTED_MODULE_8__["OlvidoComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"] },
    { path: 'contacto', component: _contactaradmin_contactaradmin_component__WEBPACK_IMPORTED_MODULE_12__["ContactaradminComponent"] },
    { path: 'editar-perfil', component: _editarperfil_editarperfil_component__WEBPACK_IMPORTED_MODULE_13__["EditarperfilComponent"] },
    { path: 'carrito', component: _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_15__["CarritoComponent"] },
    { path: 'historial', component: _historial_historial_component__WEBPACK_IMPORTED_MODULE_14__["HistorialComponent"] },
    { path: 'estado', component: _estado_estado_component__WEBPACK_IMPORTED_MODULE_16__["EstadoComponent"] },
    { path: 'admin', component: _menuadmin_menuadmin_component__WEBPACK_IMPORTED_MODULE_18__["MenuadminComponent"] },
    { path: 'pendientes', component: _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_19__["PendientesComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"],
                _registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"],
                _olvido_olvido_component__WEBPACK_IMPORTED_MODULE_8__["OlvidoComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_10__["EncabezadoComponent"],
                _piedepagina_piedepagina_component__WEBPACK_IMPORTED_MODULE_11__["PiedepaginaComponent"],
                _contactaradmin_contactaradmin_component__WEBPACK_IMPORTED_MODULE_12__["ContactaradminComponent"],
                _editarperfil_editarperfil_component__WEBPACK_IMPORTED_MODULE_13__["EditarperfilComponent"],
                _historial_historial_component__WEBPACK_IMPORTED_MODULE_14__["HistorialComponent"],
                _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_15__["CarritoComponent"],
                _estado_estado_component__WEBPACK_IMPORTED_MODULE_16__["EstadoComponent"],
                _encabezadoadmin_encabezadoadmin_component__WEBPACK_IMPORTED_MODULE_17__["EncabezadoadminComponent"],
                _menuadmin_menuadmin_component__WEBPACK_IMPORTED_MODULE_18__["MenuadminComponent"],
                _pendientes_pendientes_component__WEBPACK_IMPORTED_MODULE_19__["PendientesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carrito/carrito.component.css":
/*!***********************************************!*\
  !*** ./src/app/carrito/carrito.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenido {\n  width: 70%;\n  margin: 2% auto;\n}\n\n#tablas{\n  width: 100%;\n}\n\n#tablaitems{\n  width: 60%;\n  display: inline-block;\n}\n\n#tablatotal {\n  margin-left: 5%;\n  width: 30%;\n  display: inline-block;\n  text-align: right;\n  vertical-align: top;\n}\n\n#tablatotal img {\n  width: 100%;\n}\n\n#tablatotal img:hover {\n  opacity: 0.98;\n  cursor: pointer;\n  \n}\n\n#thapaypal{\n  background-color: black;\n  border-radius: 8px 8px 8px 8px;\n}\n\n#tablaitems table td, #tablaitems table th,   #tablaitems table tr td,  #tablaitems table tr th {\n  vertical-align: middle !important;\n}\n\na{\n  text-decoration: none !important;\n}\n\n\n"

/***/ }),

/***/ "./src/app/carrito/carrito.component.html":
/*!************************************************!*\
  !*** ./src/app/carrito/carrito.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n\n<div class=\"contenido\">\n  <h3 style=\"margin-bottom:3%;\">Carrito</h3>\n  <div class=\"tablas\">\n    <div id=\"tablaitems\">\n      <table class=\"table table-hover\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Tipo</th>\n            <th scope=\"col\">Plato</th>\n            <th scope=\"col\">Extras</th>\n            <th scope=\"col\">Precio (Bs.S)</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">cake</i></td>\n            <td>Tres Leches</td>\n            <td>N/A</td>\n            <td>300</td>\n            <td><button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"eliminarPlato.show()\"><i class=\"material-icons\"\n                  style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">local_dining</i></td>\n            <td>Tequeños</td>\n            <td>Frito</td>\n            <td>200</td>\n            <td><button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"eliminarPlato.show()\"><i class=\"material-icons\"\n                  style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">fastfood</i></td>\n            <td>Hamburguesa</td>\n            <td>Queso Cheddar, Tocineta, Jalapeño</td>\n            <td>550</td>\n            <td><button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"eliminarPlato.show()\"><i class=\"material-icons\"\n                  style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">4</th>\n            <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">cake</i></td>\n            <td>Quesillo</td>\n            <td>N/A</td>\n            <td>250</td>\n            <td><button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"eliminarPlato.show()\"><i class=\"material-icons\"\n                  style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">5</th>\n            <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">fastfood</i></td>\n            <td>Sandwich</td>\n            <td>Pan con parmesano y orégano</td>\n            <td>600</td>\n            <td><button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"eliminarPlato.show()\"><i class=\"material-icons\"\n                  style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">6</th>\n            <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">fastfood</i></td>\n            <td>Perro caliente</td>\n            <td>Estilo Choripán, salsa pesto, queso gratinado</td>\n            <td>400</td>\n            <td><button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"eliminarPlato.show()\"><i class=\"material-icons\"\n                  style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n          </tr>\n          <tr>\n            <th scope=\"row\">7</th>\n            <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">local_dining</i></td>\n            <td>Patacones</td>\n            <td>Queso llanero, salsas</td>\n            <td>200</td>\n            <td><button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"eliminarPlato.show()\"><i class=\"material-icons\"\n                  style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n\n\n    <div id=\"tablatotal\">\n      <table class=\"table table-striped table-dark\" style=\"margin-bottom: 0px;\">\n        <tbody>\n          <tr>\n            <td style=\"font-weight:bold;\">Subtotal</td>\n            <td>Bs.S 2700</td>\n          </tr>\n          <tr>\n            <td style=\"font-weight:bold;\">IVA</td>\n            <td>Bs.S 432</td>\n          </tr>\n          <tr>\n            <td style=\"font-weight:bold;\">Total</td>\n            <td>Bs.S 3132</td>\n          </tr>\n        </tbody>\n      </table>\n      <div id=\"thapaypal\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/botonPayPal.png?alt=media&token=4bbe2ac9-90bc-46a5-8df9-036eba9f323e\"></div>\n    </div>\n  </div>\n  \n  <a [routerLink]=\"['/menu']\"><button type=\"submit\" class=\"btn btn-dark\" style=\"display: block; margin-left:0; margin-right: auto;\">Regresar</button></a>\n\n</div>\n  <!-- Modal eliminar del carrito -->\n  <div bsModal #eliminarPlato=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n    <div class=\"modal-dialog\" style=\"width: 70%;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Eliminar Plato del Carrito</h4>\n          <button type=\"button\" class=\"close pull-right\" (click)=\"eliminarPlato.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row align-items-start\">\n            <div class=\"col\">\n              <div class=\"descripcion\">\n                <h5 style=\"display:inline-block; margin-right: 2%;\">¿Desea eliminar?</h5>\n              </div>\n              <div id=\"alerta\">\n                <i class=\"material-icons md-48\">alert</i>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-warning\" style=\"vertical-align: middle; margin-right: auto; color:white;\"\n            (click)=\"eliminarPlato.hide()\">\n            Cancelar\n          </button>\n          <a [routerLink]=\"['/carrito']\"><button type=\"submit\" class=\"btn btn-danger\" (click)=\"confirmacion.show(); eliminarPlato.hide();\"><i class=\"material-icons\" style=\"vertical-align: middle; margin-right: 2%; margin-left: auto;\">check</i>\n              Confirmar\n            </button></a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal confirmar cambios -->\n<div bsModal #confirmacion=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Confirmación</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"confirmacion.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row align-items-start\">\n          <div class=\"col\">\n            <div class=\"descripcion\">\n              <h5 style=\"display:inline-block; margin-right: 2%;\">¿Desea realizar los cambios?</h5>\n            </div>\n            <div id=\"alerta\">\n              <i class=\"material-icons md-48\">alert</i>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" style=\"vertical-align: middle; margin-right: auto; color:white;\"\n          (click)=\"confirmacion.hide()\">\n          Cancelar\n        </button>\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"confirmacion.hide(); eliminarPlato.hide();\"><i class=\"material-icons\" style=\"vertical-align: middle; margin-right: 2%; margin-left: auto;\">check</i>\n            Confirmar\n          </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n  <!--REVISAR <div class=\"botonPayPal\">\n\n    <script src=\"https://www.paypalobjects.com/api/checkout.js\"></script>\n\n    <div id=\"paypal-button-container\"></div>\n\n    <script>\n      // Render the PayPal button\n\n      paypal.Button.render({\n\n        // Set your environment\n\n        env: 'sandbox', // sandbox | production\n\n        // Specify the style of the button\n\n        style: {\n          label: 'checkout',\n          size: 'small', // small | medium | large | responsive\n          shape: 'pill', // pill | rect\n          color: 'gold' // gold | blue | silver | black\n        },\n\n        // PayPal Client IDs - replace with your own\n        // Create a PayPal app: https://developer.paypal.com/developer/applications/create\n\n        client: {\n          sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',\n          production: '<insert production client id>'\n        },\n\n        payment: function (data, actions) {\n          return actions.payment.create({\n            payment: {\n              transactions: [{\n                amount: {\n                  total: '0.01',\n                  currency: 'USD'\n                }\n              }]\n            }\n          });\n        },\n\n        onAuthorize: function (data, actions) {\n          return actions.payment.execute().then(function () {\n            window.alert('Payment Complete!');\n          });\n        }\n\n      }, '#paypal-button-container');\n\n    </script>\n\n  </div> -->\n\n\n  <!-- <table class=\"table table-striped table-dark\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Subtotal</th>\n        <th scope=\"col\">IVA</th>\n        <th scope=\"col\">Total</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Bs.S 2700</td>\n        <td>Bs.S 432</td>\n        <td style=\"font-weight:bold\">Bs.S 3132</td>\n      </tr>\n    </tbody>\n  </table> -->\n\n\n\n\n\n\n\n\n\n<app-piedepagina></app-piedepagina>\n"

/***/ }),

/***/ "./src/app/carrito/carrito.component.ts":
/*!**********************************************!*\
  !*** ./src/app/carrito/carrito.component.ts ***!
  \**********************************************/
/*! exports provided: CarritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoComponent", function() { return CarritoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarritoComponent = /** @class */ (function () {
    function CarritoComponent() {
    }
    CarritoComponent.prototype.ngOnInit = function () {
    };
    CarritoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrito',
            template: __webpack_require__(/*! ./carrito.component.html */ "./src/app/carrito/carrito.component.html"),
            styles: [__webpack_require__(/*! ./carrito.component.css */ "./src/app/carrito/carrito.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarritoComponent);
    return CarritoComponent;
}());



/***/ }),

/***/ "./src/app/contactaradmin/contactaradmin.component.css":
/*!*************************************************************!*\
  !*** ./src/app/contactaradmin/contactaradmin.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contactoadmin{\n    width: 35%;\n    border: 4px solid #000000;\n    border-radius: 30px 30px 30px 30px;\n    display: block;\n    margin: 2% auto;\n    padding: 2% 0;\n}\n\nform{\n    padding-top: 1%;\n    width: 80%;\n    display:block;\n    margin: 0 auto;\n}\n"

/***/ }),

/***/ "./src/app/contactaradmin/contactaradmin.component.html":
/*!**************************************************************!*\
  !*** ./src/app/contactaradmin/contactaradmin.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div id=\"contenido\">\n    <div id=\"contactoadmin\">\n      <form>\n        <h3>Atención al Cliente</h3>\n        <div class=\"form-group\">\n            <label for=\"inputNombre\">Asunto</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputAsunto\" placeholder=\"Motivo del contacto\" required> \n\n        </div>\n          <div class=\"form-group\">\n            <label for=\"inputEdad\">Número de Pedido</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputNumPedido\" placeholder=\"Ingrese el numero de pedido\" required>\n          </div>    \n          \n        <div class=\"form-group\">\n          <div class=\"form-group\">\n            <label for=\"inputDireccion\">Mensaje</label>\n            <textarea class=\"form-control\" id=\"inputMensaje\" rows=\"4\" required></textarea>\n          </div>\n        </div>\n        <div style=\"text-align: right;\">\n          <button type=\"reset\" class=\"btn btn-warning\" style=\"display: inline-block; margin-right: 10px;\">Limpiar</button>\n          <button type=\"submit\" class=\"btn btn-danger\" style=\"display: inline-block; margin-right: 0;\">Enviar</button>\n        </div>\n      </form>\n    </div>\n    <a [routerLink]=\"['/menu']\"><button type=\"submit\" class=\"btn btn-dark\" style=\"display: block; margin: 0 auto;\">Regresar</button></a>\n</div>\n<app-piedepagina></app-piedepagina>\n"

/***/ }),

/***/ "./src/app/contactaradmin/contactaradmin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/contactaradmin/contactaradmin.component.ts ***!
  \************************************************************/
/*! exports provided: ContactaradminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactaradminComponent", function() { return ContactaradminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactaradminComponent = /** @class */ (function () {
    function ContactaradminComponent() {
    }
    ContactaradminComponent.prototype.ngOnInit = function () {
    };
    ContactaradminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactaradmin',
            template: __webpack_require__(/*! ./contactaradmin.component.html */ "./src/app/contactaradmin/contactaradmin.component.html"),
            styles: [__webpack_require__(/*! ./contactaradmin.component.css */ "./src/app/contactaradmin/contactaradmin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactaradminComponent);
    return ContactaradminComponent;
}());



/***/ }),

/***/ "./src/app/editarperfil/editarperfil.component.css":
/*!*********************************************************!*\
  !*** ./src/app/editarperfil/editarperfil.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fondo{\n    background-color: white;\n    width: 100%;\n    padding-bottom: 2%;\n}\n\n#contenedor-perfil{\n    width:45%;\n    border: 4px solid #000000;\n    border-radius: 30px 30px 30px 30px;\n    display: block;\n    margin: 2% auto;\n    padding: 2% 0;\n}\n\nform{\n    padding-top: 1%;\n    width: 80%;\n    display:block;\n    margin: 0 auto;\n}\n\na{\n    text-decoration: none !important;\n}\n"

/***/ }),

/***/ "./src/app/editarperfil/editarperfil.component.html":
/*!**********************************************************!*\
  !*** ./src/app/editarperfil/editarperfil.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n\n<div id=\"fondo\">\n\n    <div id=\"contenedor-perfil\">\n      <form>\n        <h3>Editar Perfil</h3>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputNombre\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputNombre\" placeholder=\"John\" required> \n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputApellido\">Apellido</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputApellido\" placeholder=\"Appleseed\" required>\n          </div>\n          <div class=\"form-group col-md-4\">\n              <label for=\"inputSexo\">Sexo</label>\n              <select class=\"form-control\" id=\"inputSexo\" required>\n                <option>Femenino</option>\n                <option selected>Masculino</option>\n                <option>Otro</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-2\">\n              <label for=\"inputEdad\">Edad</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputEdad\" placeholder=\"21\" required>\n            </div> \n            <div class=\"form-group col-md-6\">\n              <label for=\"inputUsuario\">Usuario</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputUsuario\" placeholder=\"macintosh120\" required>\n            </div>  \n        </div>\n         \n          \n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"inputContra\">Nueva contraseña</label>\n              <input type=\"password\" class=\"form-control\" id=\"inputContra\" placeholder=\"*******\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"inputContra\">Confirmar</label>\n              <input type=\"password\" class=\"form-control\" id=\"inputConfirm\" placeholder=\"*******\" required>\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <div class=\"form-group\">\n            <label for=\"inputDireccion\">Dirección</label>\n            <textarea class=\"form-control\" id=\"inputDireccion\" rows=\"3\" placeholder=\"La segunda estrella a la izquierda, y hacia la derecha.\" required></textarea>\n          </div>\n        </div>\n        <div style=\"text-align: center;\">\n          <button type=\"submit\" class=\"btn btn-danger\" style=\"display: inline-block; margin-right: 0;\">Actualizar</button>\n        </div>\n      </form>\n    </div>\n    <a [routerLink]=\"['/menu']\"><button type=\"submit\" class=\"btn btn-dark\" style=\"display: block; margin: 0 auto;\">Regresar</button></a>\n    \n  </div>\n\n\n\n\n\n\n<app-piedepagina></app-piedepagina>\n\n\n\n"

/***/ }),

/***/ "./src/app/editarperfil/editarperfil.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editarperfil/editarperfil.component.ts ***!
  \********************************************************/
/*! exports provided: EditarperfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarperfilComponent", function() { return EditarperfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditarperfilComponent = /** @class */ (function () {
    function EditarperfilComponent() {
    }
    EditarperfilComponent.prototype.ngOnInit = function () {
    };
    EditarperfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editarperfil',
            template: __webpack_require__(/*! ./editarperfil.component.html */ "./src/app/editarperfil/editarperfil.component.html"),
            styles: [__webpack_require__(/*! ./editarperfil.component.css */ "./src/app/editarperfil/editarperfil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditarperfilComponent);
    return EditarperfilComponent;
}());



/***/ }),

/***/ "./src/app/encabezado/encabezado.component.css":
/*!*****************************************************!*\
  !*** ./src/app/encabezado/encabezado.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\n    width: 100%;\n    background-color: rgb(220, 53, 69);\n}\n\n#hizq, #hder{\n    display: inline-block;\n    width: 50%;\n    height: 100%;\n    padding: 0.05% 2% 0.05% 2%;\n}\n\n#hizq{\n    text-align: left;\n}\n\n#hizq img{\n    width: 15%;\n}\n\n#hder{\n    text-align: right;\n}\n\n.btn-group{\n    width: 40%;\n    text-align: right;\n}\n\n.btn-group button{\n    display: inline-block;\n    padding:5%\n}\n\n#botonname{\n    min-width: 85%;\n    font-size: 2vw;\n}\n\n#botonname:focus{\n    box-shadow: none !important;\n}\n\n#button-split{\n    min-width: 15%;\n    font-size: 1.5vw;\n}\n\n#button-split:focus{\n    box-shadow: none !important;\n    \n}\n\n#dropdown-split{\n    width: 100%;\n    background: rgba(255, 255, 255,0.7);\n}\n\n#dropdown-split:hover{\n    width: 100%;\n    background: rgba(255, 255, 255,0.7);\n}\n\n.dropdown-item:hover{\n    background: rgba(247, 84, 84, 0.5) ;\n}\n"

/***/ }),

/***/ "./src/app/encabezado/encabezado.component.html":
/*!******************************************************!*\
  !*** ./src/app/encabezado/encabezado.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div id=\"hizq\">\n      <a [routerLink]=\"['/menu']\"><img class=\"logo\" src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/logo.png?alt=media&token=33880303-3c3e-468c-8fd2-caea026302e3\"></a>\n  </div>\n  <div id=\"hder\">\n    <div class=\"btn-group\" dropdown>\n        <button id=\"botonname\" type=\"button\" class=\"btn btn-danger\" [routerLink]=\"['/editar-perfil']\">John Appleseed</button>\n        <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" aria-controls=\"dropdown-split\">\n\n        </button>\n        <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-split\">\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/editar-perfil']\" >Editar Perfil</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/carrito']\" >Ver Carrito</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/estado']\">Estado de Pedidos</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/historial']\">Historial de Pedidos</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/contacto']\">Atención al Cliente</a></li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/inicio']\">Cerrar Sesión</a>\n          </li>\n        </ul>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/encabezado/encabezado.component.ts":
/*!****************************************************!*\
  !*** ./src/app/encabezado/encabezado.component.ts ***!
  \****************************************************/
/*! exports provided: EncabezadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncabezadoComponent", function() { return EncabezadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EncabezadoComponent = /** @class */ (function () {
    function EncabezadoComponent() {
    }
    EncabezadoComponent.prototype.ngOnInit = function () {
    };
    EncabezadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encabezado',
            template: __webpack_require__(/*! ./encabezado.component.html */ "./src/app/encabezado/encabezado.component.html"),
            styles: [__webpack_require__(/*! ./encabezado.component.css */ "./src/app/encabezado/encabezado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EncabezadoComponent);
    return EncabezadoComponent;
}());



/***/ }),

/***/ "./src/app/encabezadoadmin/encabezadoadmin.component.css":
/*!***************************************************************!*\
  !*** ./src/app/encabezadoadmin/encabezadoadmin.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\n    width: 100%;\n}\n\n#hizq, #hder{\n    display: inline-block;\n    width: 50%;\n    height: 100%;\n    padding: 0.05% 2% 0.05% 2%;\n}\n\n#hizq{\n    text-align: left;\n}\n\n#hizq img{\n    width: 15%;\n}\n\n#hder{\n    text-align: right;\n}\n\n.btn-group{\n    width: 40%;\n    text-align: right;\n}\n\n.btn-group button{\n    display: inline-block;\n    padding:5%\n}\n\n#botonname{\n    min-width: 85%;\n    font-size: 2vw;\n}\n\n#botonname:focus{\n    box-shadow: none !important;\n}\n\n#button-split{\n    min-width: 15%;\n    font-size: 1.5vw;\n}\n\n#button-split:focus{\n    box-shadow: none !important;\n    \n}\n\n#dropdown-split{\n    width: 100%;\n    background: rgba(255, 255, 255,0.7);\n}\n\n#dropdown-split:hover{\n    width: 100%;\n    background: rgba(255, 255, 255,0.7);\n}\n\n.dropdown-item:hover{\n    background: rgba(247, 84, 84, 0.5) ;\n}\n"

/***/ }),

/***/ "./src/app/encabezadoadmin/encabezadoadmin.component.html":
/*!****************************************************************!*\
  !*** ./src/app/encabezadoadmin/encabezadoadmin.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"bg-warning\">\n  <div id=\"hizq\">\n      <a [routerLink]=\"['/admin']\"><img class=\"logo\" src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/logo.png?alt=media&token=33880303-3c3e-468c-8fd2-caea026302e3\"></a>\n  </div>\n  <div id=\"hder\">\n    <div class=\"btn-group\" dropdown>\n        <button id=\"botonname\" type=\"button\" class=\"btn btn-danger\" [routerLink]=\"['/editar-perfil']\">Administrador</button>\n        <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" aria-controls=\"dropdown-split\">\n\n        </button>\n        <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-split\">\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/admin']\">Agregar al menu</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/pendientes']\">Pedidos pendientes</a></li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/inicio']\">Cerrar Sesión</a>\n          </li>\n        </ul>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/encabezadoadmin/encabezadoadmin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/encabezadoadmin/encabezadoadmin.component.ts ***!
  \**************************************************************/
/*! exports provided: EncabezadoadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncabezadoadminComponent", function() { return EncabezadoadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EncabezadoadminComponent = /** @class */ (function () {
    function EncabezadoadminComponent() {
    }
    EncabezadoadminComponent.prototype.ngOnInit = function () {
    };
    EncabezadoadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encabezadoadmin',
            template: __webpack_require__(/*! ./encabezadoadmin.component.html */ "./src/app/encabezadoadmin/encabezadoadmin.component.html"),
            styles: [__webpack_require__(/*! ./encabezadoadmin.component.css */ "./src/app/encabezadoadmin/encabezadoadmin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EncabezadoadminComponent);
    return EncabezadoadminComponent;
}());



/***/ }),

/***/ "./src/app/estado/estado.component.css":
/*!*********************************************!*\
  !*** ./src/app/estado/estado.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor{\n    width:45%;\n    border: 4px solid #000000;\n    border-radius: 30px 30px 30px 30px;\n    display: block;\n    margin: 2% auto;\n    padding: 2%;\n}\n\n#imagenEstado{\n    display: block;\n    margin:0 auto;\n    width:40%;\n}\n\n#imagenEstado img{\n    width:100%;\n}\n\n"

/***/ }),

/***/ "./src/app/estado/estado.component.html":
/*!**********************************************!*\
  !*** ./src/app/estado/estado.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n<div id=\"contenido\">\n  <div id=\"contenedor\">\n    <h3>Estado de Pedido</h3>\n    <div style=\"text-align: center; margin-top: 5%\">\n      <h4>Ingrese el número de pedido que desea revisar:</h4>\n      <div style=\"display: flex; flex-direction: row; margin-top: 5%\">\n        <div style=\"width: 70%;\">\n          <input type=\"text\" class=\"form-control\" style=\"display: inline-block; width: 75%;\" id=\"inputIDPedido\"\n            required>\n        </div>\n        <div style=\"width: 30%; padding-right: 5%;\">\n          <button type=\"submit\" class=\"btn btn-danger\" (click)=\"busqueda.show()\" style=\"display: inline-block;\"><i\n              class=\"material-icons\" style=\"vertical-align: middle; margin-right: 2%; margin-left: auto;\">search</i>\n            Revisar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a [routerLink]=\"['/menu']\"><button type=\"submit\" class=\"btn btn-dark\" style=\"display: block; margin: 0 auto 2% auto;\">Regresar</button></a>\n</div>\n\n\n<div bsModal #busqueda=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Pedido #4623 Ubicado</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"busqueda.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row align-items-start\">\n          <div class=\"col\">\n            <div class=\"descripcion\">\n              <h5 style=\"display:inline-block; margin-right: 2%;\">Estado:</h5>\n              <h5 style=\"font-weight:light; display:inline-block;\">Ve bajando</h5>\n            </div>\n            <div id=\"imagenEstado\">\n              <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/estado%2Fdelivery2.jpg?alt=media&token=7a9dde60-8fc1-4a52-8961-bbc64646ec1e\" alt=\"estado pedido\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" style=\"vertical-align: middle; margin-right: auto; color:white;\"\n          (click)=\"busqueda.hide()\">\n          Cerrar\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n<app-piedepagina></app-piedepagina>"

/***/ }),

/***/ "./src/app/estado/estado.component.ts":
/*!********************************************!*\
  !*** ./src/app/estado/estado.component.ts ***!
  \********************************************/
/*! exports provided: EstadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoComponent", function() { return EstadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EstadoComponent = /** @class */ (function () {
    function EstadoComponent() {
    }
    EstadoComponent.prototype.ngOnInit = function () {
    };
    EstadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estado',
            template: __webpack_require__(/*! ./estado.component.html */ "./src/app/estado/estado.component.html"),
            styles: [__webpack_require__(/*! ./estado.component.css */ "./src/app/estado/estado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EstadoComponent);
    return EstadoComponent;
}());



/***/ }),

/***/ "./src/app/historial/historial.component.css":
/*!***************************************************!*\
  !*** ./src/app/historial/historial.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenido{\n    width: 60%;\n    display: block;\n    margin: 0 auto;\n    padding-top: 2%\n}\n\naccordion{\n    margin: 3% auto;\n    width: 90%\n}\n\naccordion-group:hover{\n    cursor: pointer;\n}\n\n.pedido{\n    padding: 2% 4%;\n    border: 4px solid #000000;\n    border-radius: 20px 20px 20px 20px;\n    width: 100%;\n    margin: 5% 0;\n}\n\n.foto, .descripcion{\n    display: table-cell;\n    width: 50%\n\n}\n\n.foto img{\n    display: block;\n    width: 60%;\n    margin: 0 auto;\n}\n\n.descripcion{\n    vertical-align: top;\n    margin: 0 auto;\n}\n\n.descripcion ul{\n    margin: 5% auto;\n    font-size: 1vw;\n}\n"

/***/ }),

/***/ "./src/app/historial/historial.component.html":
/*!****************************************************!*\
  !*** ./src/app/historial/historial.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n  <div id=\"contenido\">\n      <h3>Historial de Pedidos</h3>\n      <div class=\"pedido\">\n          <h3 style=\"display: inline-block; width: 50%; text-align: left;\">Pedido #20141110638</h3>\n          <h5 style=\"display: inline-block; width: 50%; text-align: right; vertical-align: top;\">14/10/2018</h5>\n          <accordion>\n            <accordion-group>\n              <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                <div style=\"display: inline-block; width: 50%; text-align: left\">Entrada</div>\n                <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n              </button>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Tequeños</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Harina de trigo</li>\n                      <li>Queso</li>\n                      <li>Frito</li>\n                      <li>Salsa de tomate</li>\n                      <li>Mermelada</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n                <accordion-group>\n                    <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                      <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Empanaditas</div>\n                      <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                    </button>\n                    <div class=\"foto\">\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                    </div>\n                    <div class=\"descripcion\">\n                      <h5>Descripción:</h5>\n                      <ul>\n                        <li>Fritas</li>\n                        <li>Carne</li>\n                        <li>Salsa de tomate</li>\n                      </ul>\n                    </div>\n                  </accordion-group>\n            </accordion-group>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <div style=\"display: inline-block; width: 50%; text-align: left\">Plato Principal</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <accordion-group>\n                    <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                      <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Hamburguesa</div>\n                      <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                    </button>\n                    <div class=\"foto\">\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                    </div>\n                    <div class=\"descripcion\">\n                      <h5>Descripción:</h5>\n                      <ul>\n                        <li>Pan integral</li>\n                        <li>200gr de carne</li>\n                        <li>Queso</li>\n                        <li>Salsa de tomate</li>\n                        <li>Salsa de barbecue</li>\n                      </ul>\n                    </div>\n                  </accordion-group>\n              </accordion-group>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <div style=\"display: inline-block; width: 50%; text-align: left\">Postre</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <accordion-group>\n                      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                        <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                        <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Torta de Tres Leches</div>\n                        <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                      </button>\n                      <div class=\"foto\">\n                        <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                      </div>\n                      <div class=\"descripcion\">\n                        <h5>Descripción:</h5>\n                        <ul>\n                          <li>Leche descremada</li>\n                        </ul>\n                      </div>\n                    </accordion-group>\n                </accordion-group>\n          </accordion>\n          <button type=\"submit\" class=\"btn btn-danger\" style=\"width: 100%;\">Repetir orden</button>\n        </div>\n      <div class=\"pedido\">\n          <h3 style=\"display: inline-block; width: 50%; text-align: left;\">Pedido #20141110638</h3>\n          <h5 style=\"display: inline-block; width: 50%; text-align: right; vertical-align: top;\">14/10/2018</h5>\n          <accordion>\n            <accordion-group>\n              <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                <div style=\"display: inline-block; width: 50%; text-align: left\">Entrada</div>\n                <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n              </button>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Tequeños</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Harina de trigo</li>\n                      <li>Queso</li>\n                      <li>Frito</li>\n                      <li>Salsa de tomate</li>\n                      <li>Mermelada</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n                <accordion-group>\n                    <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                      <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Empanaditas</div>\n                      <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                    </button>\n                    <div class=\"foto\">\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                    </div>\n                    <div class=\"descripcion\">\n                      <h5>Descripción:</h5>\n                      <ul>\n                        <li>Fritas</li>\n                        <li>Carne</li>\n                        <li>Salsa de tomate</li>\n                      </ul>\n                    </div>\n                  </accordion-group>\n            </accordion-group>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <div style=\"display: inline-block; width: 50%; text-align: left\">Plato Principal</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <accordion-group>\n                    <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                      <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Hamburguesa</div>\n                      <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                    </button>\n                    <div class=\"foto\">\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                    </div>\n                    <div class=\"descripcion\">\n                      <h5>Descripción:</h5>\n                      <ul>\n                        <li>Pan integral</li>\n                        <li>200gr de carne</li>\n                        <li>Queso</li>\n                        <li>Salsa de tomate</li>\n                        <li>Salsa de barbecue</li>\n                      </ul>\n                    </div>\n                  </accordion-group>\n              </accordion-group>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <div style=\"display: inline-block; width: 50%; text-align: left\">Postre</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <accordion-group>\n                      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                        <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                        <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Torta de Tres Leches</div>\n                        <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                      </button>\n                      <div class=\"foto\">\n                        <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                      </div>\n                      <div class=\"descripcion\">\n                        <h5>Descripción:</h5>\n                        <ul>\n                          <li>Leche descremada</li>\n                        </ul>\n                      </div>\n                    </accordion-group>\n                </accordion-group>\n          </accordion>\n          <button type=\"submit\" class=\"btn btn-danger\" style=\"width: 100%;\">Repetir orden</button>\n        </div>\n    <div class=\"pedido\">\n      <h3 style=\"display: inline-block; width: 50%; text-align: left;\">Pedido #20141110638</h3>\n      <h5 style=\"display: inline-block; width: 50%; text-align: right; vertical-align: top;\">14/10/2018</h5>\n      <accordion>\n        <accordion-group>\n          <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n            <div style=\"display: inline-block; width: 50%; text-align: left\">Entrada</div>\n            <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n          </button>\n          <accordion-group>\n              <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Tequeños</div>\n                <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n              </button>\n              <div class=\"foto\">\n                <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n              </div>\n              <div class=\"descripcion\">\n                <h5>Descripción:</h5>\n                <ul>\n                  <li>Harina de trigo</li>\n                  <li>Queso</li>\n                  <li>Frito</li>\n                  <li>Salsa de tomate</li>\n                  <li>Mermelada</li>\n                </ul>\n              </div>\n            </accordion-group>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                  <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Empanaditas</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <div class=\"foto\">\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                </div>\n                <div class=\"descripcion\">\n                  <h5>Descripción:</h5>\n                  <ul>\n                    <li>Fritas</li>\n                    <li>Carne</li>\n                    <li>Salsa de tomate</li>\n                  </ul>\n                </div>\n              </accordion-group>\n        </accordion-group>\n        <accordion-group>\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <div style=\"display: inline-block; width: 50%; text-align: left\">Plato Principal</div>\n              <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n            </button>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                  <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Hamburguesa</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <div class=\"foto\">\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                </div>\n                <div class=\"descripcion\">\n                  <h5>Descripción:</h5>\n                  <ul>\n                    <li>Pan integral</li>\n                    <li>200gr de carne</li>\n                    <li>Queso</li>\n                    <li>Salsa de tomate</li>\n                    <li>Salsa de barbecue</li>\n                  </ul>\n                </div>\n              </accordion-group>\n          </accordion-group>\n          <accordion-group>\n              <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                <div style=\"display: inline-block; width: 50%; text-align: left\">Postre</div>\n                <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n              </button>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Torta de Tres Leches</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Leche descremada</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n            </accordion-group>\n      </accordion>\n      <button type=\"submit\" class=\"btn btn-danger\" style=\"width: 100%;\">Repetir orden</button>\n    </div>\n    <div style=\"display: flexbox; justify-content: center; position: relative; margin-bottom: 3%;\">\n      \n      <a [routerLink]=\"['/menu']\"><button type=\"submit\" class=\"btn btn-dark\">Regresar</button></a>\n      <pagination [totalItems]=\"30\" style=\"position: absolute; right: 0;\"></pagination>\n    </div>\n    \n  </div>\n<app-piedepagina></app-piedepagina>"

/***/ }),

/***/ "./src/app/historial/historial.component.ts":
/*!**************************************************!*\
  !*** ./src/app/historial/historial.component.ts ***!
  \**************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistorialComponent = /** @class */ (function () {
    function HistorialComponent() {
    }
    HistorialComponent.prototype.ngOnInit = function () {
    };
    HistorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historial',
            template: __webpack_require__(/*! ./historial.component.html */ "./src/app/historial/historial.component.html"),
            styles: [__webpack_require__(/*! ./historial.component.css */ "./src/app/historial/historial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HistorialComponent);
    return HistorialComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fondo{\n    background-color: white;\n    width: 100%;\n}\n.logo{\n    display: block;\n    margin: 1% auto 0 auto;\n    width: 14%;\n    min-width: 145px;\n}\n#slider{\n    display: block;\n    width: 55%;\n    margin: 0 auto;\n    box-shadow: 9px 3px 24px -13px rgba(28,28,28,0.51);\n    border-radius: 10px;\n    min-width: 320px;\n}\n#slider img{\n    border-radius: 10px;\n}\n.flex-container {\n    padding: 0;\n    margin: 0.5%;\n    display: flex;\n    justify-content: center;\n}\na{\n    display:flex;    \n    margin: 1%;\n    text-decoration: none !important;\n}\n@media only screen and (max-width: 768px){\n\n    #slider{\n        display: block; \n        width: 100%;\n        margin: 0 auto;\n        box-shadow: 9px 3px 24px -13px rgba(28,28,28,0.51);\n\n    }\n\n    #slider img{\n        border-radius: 0px;\n    }\n\n    .flex-container {\n        padding: 0;\n        margin: 0;\n    }\n\n    a{\n        display: block;\n        width: 100%;   \n        margin: 1% 0;\n        text-decoration: none !important;\n    }\n\n    a button{\n        width: 100%\n    }\n\n}\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fondo\">\n  <img class=\"logo\" src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/logo.png?alt=media&token=33880303-3c3e-468c-8fd2-caea026302e3\">\n\n  <carousel id=\"slider\">\n    <slide>\n      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/prueba1.jpg?alt=media&token=77065d8c-8652-4ffa-820b-c6edd380edde\" alt=\"first slide\" style=\"width: 100%;\">\n    </slide>\n    <slide>\n      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/prueba2.jpg?alt=media&token=fd2adc55-730c-4754-96c8-f28248ea8e59\" alt=\"second slide\" style=\"width: 100%;\">\n    </slide>\n    <slide>\n      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/prueba3.jpg?alt=media&token=4bd8b6ab-f3d9-4dbc-aa5d-de145d14ce27\" alt=\"third slide\" style=\"width: 100%;\">\n    </slide>\n  </carousel>\n\n  <div class=\"flex-container center\">\n    <a [routerLink]=\"['/login']\"><button type=\"button\" class=\"flex-item btn btn-danger\">Iniciar sesión</button></a>\n    <a [routerLink]=\"['/registro']\"><button type=\"button\" class=\"flex-item btn btn-danger\">Registrarse</button></a>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent(elementRef) {
        this.elementRef = elementRef;
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\n    display: block;\n    margin: 1% auto 0 auto;\n    width: 14%;\n    min-width: 145px;\n}\n\n#fondo{\n    background-color: white;\n    width: 100%;\n    padding-bottom: 2%;\n}\n\n#contenedorlog{\n    width: 35%;\n    border: 4px solid #000000;\n    border-radius: 30px 30px 30px 30px;\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 2%;\n    padding-bottom: 2%;\n}\n\n.selectores{\n    padding: 3% 0;\n    width: 50%;\n    display: inline-block;\n    text-align: center;\n}\n\nform{\n    padding-top: 1%;\n    width: 80%;\n    display:block;\n    margin: 0 auto;\n}\n\na label:hover{\n    cursor: pointer;\n}\n\na{\n    text-decoration: none !important;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fondo\">\n\n  <img class=\"logo\" src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/logo.png?alt=media&token=33880303-3c3e-468c-8fd2-caea026302e3\">\n\n  <div id=\"contenedorlog\">\n    <label class=\"selectores\">Iniciar Sesión</label>\n    <a [routerLink]=\"['/registro']\"><label class=\"selectores\" style=\"border-bottom: 4px solid #000000; border-left: 4px solid #000000; border-radius: 0 0 0 5px;\">Registrarse</label></a>\n    <form>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Correo</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail1\" placeholder=\"Ingrese su correo\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputContra\">Contraseña</label>\n          <input type=\"password\" class=\"form-control\" id=\"inputContra\" placeholder=\"Ingrese su contraseña\"  style=\"margin-bottom: 2%;\">\n          <a [routerLink]=\"['/olvido']\"><label>¿Olvidó su contraseña?</label></a>\n        </div>\n        <div style=\"text-align: right\">\n          <a [routerLink]=\"['/menu']\"><button type=\"submit\" class=\"btn btn-danger\" style=\"display: inline-block;\">Ingresar</button></a>\n        </div>\n    </form>\n  </div>\n  <a [routerLink]=\"['/inicio']\"><button type=\"submit\" class=\"btn btn-dark\" style=\"display: block; margin: 0 auto;\">Regresar</button></a>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#menuprincipal{\n    width: 70%;\n    padding: 2% 0;\n    display: block;\n    margin: 0 auto;\n}\n\n.headerplato{\n    width: 100%;\n    background-color: black;\n    background-image: url('https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/prueba3.jpg?alt=media&token=4bd8b6ab-f3d9-4dbc-aa5d-de145d14ce27');\n    display: block;\n    margin: 0 auto;\n    position: relative;\n}\n\n.headerplato p{\n    background: rgba(0,0,0,0.4);\n    padding: 3%;\n    color: white;\n    font-size: 2vw;\n}\n\n.contenedorplato{\n    width: 100%;\n    text-align: center;\n}\n\n.plato{\n    display: inline-block;\n    width: 25%;\n    margin: 3%;\n    background-color: black;\n}\n\n.plato img{\n    width: 100%;\n}\n\n.plato img:hover{\n    opacity: 0.7;\n}\n\na:hover{\n    cursor: pointer;\n    background: rgba(0,0,0,0.4);\n\n}\n\n.foto, .foto img{\n    width: 100%;\n}\n\n.descripcion{\n    padding: 4%;\n    border: 3px solid #000000;\n    border-radius: 10px 10px 10px 10px;\n    width: 100%;\n\n}\n\n.precio{\n    padding: 2%;\n    width: 100%;\n    border-radius: 10px 10px 10px 10px;\n    background: darkslategray;\n}\n\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado></app-encabezado>\n\n<div id=\"menuprincipal\">\n  <div class=\"headerplato\">\n    <p>Entradas</p>\n  </div>\n  <div class=\"contenedorplato\">\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/entradas%2Ftequenos.png?alt=media&token=91a5d723-c2ba-4f81-afe8-c713688e703b\"></a></div>\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/entradas%2Fplatanos.png?alt=media&token=1ee76219-b959-4792-a75f-63a53be1f95b\"></a></div>\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/entradas%2Fempanada.png?alt=media&token=af0d8079-d9b4-481f-9eab-3f2e33459285\"></a></div>\n  </div>\n  <div class=\"headerplato\">\n    <p>Platos principales</p>\n  </div>\n  <div class=\"contenedorplato\">\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/principales%2Fhamburguesa.png?alt=media&token=73b80165-3cfb-4aef-8646-b07ad460de74\"></a></div>\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/principales%2Fhotdog2.png?alt=media&token=5c03a15b-6deb-4df2-8015-c0e30a3e8833\"></a></div>\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/principales%2Fsandwich.png?alt=media&token=6051da5e-e5f6-42a9-b9be-23044da75521\"></a></div>\n  </div>\n  <div class=\"headerplato\">\n    <p>Postres</p>\n  </div>\n  <div class=\"contenedorplato\">\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/postres%2Fflan.png?alt=media&token=7572b8dc-ec5f-4502-89a3-c99d875afaed\"></a></div>\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/postres%2Fprofiterol.png?alt=media&token=79ad6100-a14c-409b-bd36-9d62f9dd6038\"></a></div>\n    <div class=\"plato\"><a (click)=\"verPlato.show()\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/postres%2Ftresleches.png?alt=media&token=356dcf2f-cb69-4f1a-ae93-a5bd61efff52\"></a></div>\n  </div>\n</div>\n\n<!-- Modal de ver plato al hacer click en la imagen -->\n<div bsModal #verPlato=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Platos Principales</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"verPlato.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row align-items-start\">\n          <div class=\"col\">\n            <div class=\"foto\">\n              <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"descripcion\">\n              <h5 style=\"display:inline-block; margin-right: 2%;\">Nombre</h5>\n              <label>Hamburguesa</label>\n              <h5>Descripción</h5>\n              <label style=\"text-align:justify\"> Nuestra deliciosa hamburguesa con carne, queso fundido,\n                vegetales frescos y pan producido por uMakeIT!.\n              </label>\n              <h5>Extras:</h5>\n              <ul>\n                <div class=\"checkbox\"><input type=\"checkbox\" ><label>&nbsp; Pan c/ parmesano y orégano</label></div>\n                <div class=\"checkbox\"><input type=\"checkbox\" ><label>&nbsp; Jalapeño</label></div>\n                <div class=\"checkbox\"><input type=\"checkbox\" ><label>&nbsp; Salsa BBQ</label></div>\n                <div class=\"checkbox\"><input type=\"checkbox\" ><label>&nbsp; Tocineta</label></div>\n                <div class=\"checkbox\"><input type=\"checkbox\" ><label>&nbsp; Queso Cheddar</label></div>\n              </ul>\n              <br>\n            </div>\n\n            <div class=\"precio bg-dark text-white\" style=\"margin-top: 3%; margin-bottom: 0; height: 100%; text-align: center;\">\n              <h5 style=\"display: inline-block; margin-bottom: 0; vertical-align: middle;\">Bs.S 300</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" style=\"vertical-align: middle; margin-right: auto; color:white;\"\n          (click)=\"verPlato.hide()\">\n          Cerrar\n        </button>\n        <a [routerLink]=\"['/carrito']\"><button type=\"submit\" class=\"btn btn-danger\"><i class=\"material-icons\" style=\"vertical-align: middle; margin-right: 2%; margin-left: auto;\">shopping_cart</i>\n            Agregar al carrito\n          </button></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-piedepagina></app-piedepagina>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(elementRef, modalService) {
        this.elementRef = elementRef;
        this.modalService = modalService;
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
    };
    MenuComponent.prototype.openModal = function (verplato) {
        this.modalRef = this.modalService.show(verplato);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menuadmin/menuadmin.component.css":
/*!***************************************************!*\
  !*** ./src/app/menuadmin/menuadmin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenido {\n  width: 90%;\n  margin: 2% auto;\n}\n\n#tablaitems {\n  width: 100%;\n}\n\n#tablaitems table td,\n#tablaitems table th,\n#tablaitems table tr td,\n#tablaitems table tr th {\n  vertical-align: middle !important;\n}\n\n.colimg {\n  width: 20%;\n}\n\n#tablaitems img {\n  width: 60%;\n}\n\naccordion, #botonpers{\n  margin: 3% auto;\n  width: 100%\n}\n\naccordion-group:hover{\n  cursor: pointer;\n}\n\n.foto{\n  width:60%;\n  margin: 0 auto;\n}\n\n.foto img{\n  width:100%;\n}\n\n#alerta{\n  display: block;\n  margin:0 auto;\n  width:40%;\n}\n"

/***/ }),

/***/ "./src/app/menuadmin/menuadmin.component.html":
/*!****************************************************!*\
  !*** ./src/app/menuadmin/menuadmin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezadoadmin></app-encabezadoadmin>\n<div class=\"contenido\">\n  <button class=\"btn btn-warning\" (click)=\"agregarPlato.show()\" style=\"display:block; margin-right:0; margin-left:auto\"><i\n      class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">add</i></button>\n  <div id=\"tablaitems\">\n    <table class=\"table table-hover\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">#<i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">arrow_drop_down</i></th>\n          <th scope=\"col\">Imagen</th>\n          <th scope=\"col\">Tipo<i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">arrow_drop_down</i></th>\n          <th scope=\"col\">Plato<i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">arrow_drop_down</i></th>\n          <th scope=\"col\">Extras<i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">arrow_drop_down</i></th>\n          <th scope=\"col\">Disponible<i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">arrow_drop_down</i></th>\n          <th scope=\"col\">Precio (Bs.S)<i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">arrow_drop_down</i></th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">1</th>\n          <th class=\"colimg\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/entradas%2Ftequenos.png?alt=media&token=91a5d723-c2ba-4f81-afe8-c713688e703b\" alt=\"tequeños\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">local_dining</i></td>\n          <td>Tequeños</td>\n          <td>Frito</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>200</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n\n        <tr>\n          <th scope=\"row\">2</th>\n          <th class=\"colimg2\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/entradas%2Fplatanos.png?alt=media&token=1ee76219-b959-4792-a75f-63a53be1f95b\" alt=\"patacones\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">local_dining</i></td>\n          <td>Patacones</td>\n          <td>Frito</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>200</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n\n        <tr>\n          <th scope=\"row\">3</th>\n          <th class=\"colimg2\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/entradas%2Fempanada.png?alt=media&token=af0d8079-d9b4-481f-9eab-3f2e33459285\" alt=\"empanaditas\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">local_dining</i></td>\n          <td>Empanaditas</td>\n          <td>Frito</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>200</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n\n        <tr>\n          <th scope=\"row\">4</th>\n          <th class=\"colimg2\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/principales%2Fhamburguesa.png?alt=media&token=73b80165-3cfb-4aef-8646-b07ad460de74\" alt=\"hamburguesa\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">fastfood</i></td>\n          <td>Hamburguesa</td>\n          <td>Queso Cheddar, Tocineta, Jalapeño</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>550</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n\n        <tr>\n          <th scope=\"row\">5</th>\n          <th class=\"colimg2\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/principales%2Fhotdog2.png?alt=media&token=5c03a15b-6deb-4df2-8015-c0e30a3e8833\" alt=\"perro\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">fastfood</i></td>\n          <td>Perro Caliente</td>\n          <td>Queso Cheddar, Tocineta, Jalapeño</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>550</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n\n        <tr>\n          <th scope=\"row\">6</th>\n          <th class=\"colimg2\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/principales%2Fsandwich.png?alt=media&token=6051da5e-e5f6-42a9-b9be-23044da75521\" alt=\"sandwich\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">fastfood</i></td>\n          <td>Sandwich</td>\n          <td>Queso Cheddar, Tocineta, Jalapeño</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>550</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n\n        <tr>\n          <th scope=\"row\">7</th>\n          <th class=\"colimg2\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/postres%2Fflan.png?alt=media&token=7572b8dc-ec5f-4502-89a3-c99d875afaed\" alt=\"quesillo\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">cake</i></td>\n          <td>Quesillo</td>\n          <td>N/A</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>300</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n\n        <tr>\n          <th scope=\"row\">8</th>\n          <th class=\"colimg2\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/postres%2Fprofiterol.png?alt=media&token=79ad6100-a14c-409b-bd36-9d62f9dd6038\" alt=\"profiterol\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">cake</i></td>\n          <td>Profiterol</td>\n          <td>N/A</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>300</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n\n        <tr>\n          <th scope=\"row\">9</th>\n          <th class=\"colimg2\"><img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/postres%2Ftresleches.png?alt=media&token=356dcf2f-cb69-4f1a-ae93-a5bd61efff52\" alt=\"tresleches\"></th>\n          <td><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">cake</i></td>\n          <td>Tres Leches</td>\n          <td>N/A</td>\n          <td><div class=\"checkbox\"><input type=\"checkbox\" value=\"\"></div></td>\n          <td>300</td>\n          <td><button type=\"button\" class=\"close\" (click)=\"editarPlato.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">edit</i></button></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"eliminarPlato.show()\" aria-label=\"Close\"><i class=\"material-icons\"\n                style=\"vertical-align: middle; position: relative; text-align: center\">close</i></button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n<!-- Modal agregar -->\n<div bsModal #agregarPlato=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Agregar al menú</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"agregarPlato.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row align-items-start\">\n          <div class=\"col\">\n            <div class=\"foto\">\n              <img style=\"margin-top: 25%; margin-bottom: 25%;\" src=\"../../assets/iconoscomida/hamburguesa.png\">\n              <div class=\"custom-file\">\n                  <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n                  <label class=\"custom-file-label\" for=\"customFile\">Subir imagen</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"descripcion\">\n              <h5 for=\"nombre\">Nombre:</h5>\n              <input type=\"text\" class=\"form-control\" id=\"nombre\">\n              <h5 for=\"desc\">Descripción:</h5>\n              <textarea type=\"text\" class=\"form-control\" rows=\"4\" id=\"desc\"></textarea>\n              <button type=\"submit\" id=\"botonpers\" class=\"btn btn-danger\" (click)=\"isFirstDisabled = !isFirstDisabled\">\n                Personalizable\n              </button>\n              <accordion>\n                <accordion-group [isDisabled]=\"isFirstDisabled\">\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"../../assets/prueba4.jpg\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Agregar</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"descripcion\">\n                    <h5>Extras:</h5>\n                    <ul>\n                      <li>Pan integral</li>\n                      <li>Pan c/ parmesano y orégano</li>\n                      <li>Queso Brie</li>\n                      <li>Queso de Cabra</li>\n                      <li>Jalapeño</li>\n                      <li>Salsa BBQ</li>\n                      <li>Tocineta</li>\n                      <li>Cebolla caramelizada</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n              </accordion>\n              <br>\n            </div>\n\n            <div class=\"precio bg-dark text-white\" style=\"margin-top: 3%; margin-bottom: 0; height: 100%; text-align: center;\">\n              <h5 style=\"display: inline-block; margin-bottom: 0; vertical-align: middle;\">Bs.S 300</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" style=\"vertical-align: middle; margin-right: auto; color:white;\"\n          (click)=\"agregarPlato.hide()\">\n          Cerrar\n        </button>\n        <a [routerLink]=\"['/admin']\"><button type=\"submit\" class=\"btn btn-danger\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">add</i>\n            Agregar plato\n          </button></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal editar -->\n\n<div bsModal #editarPlato=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Editar Plato</h4>\n          <button type=\"button\" class=\"close pull-right\" (click)=\"editarPlato.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row align-items-start\">\n            <div class=\"col\">\n              <div class=\"foto\">\n                <img src=\"../../assets/iconoscomida/hamburguesa.png\">\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"descripcion\">\n                  <label for=\"inputNombre\">Nombre</label>\n                  <input type=\"text\" class=\"form-control\" id=\"inputNombre\" placeholder=\"Hamburguesa\"> \n                  <label for=\"inputDescripcion\">Descripción</label>\n                  <textarea type=\"text\" class=\"form-control\" id=\"inputDescripcion\">Nuestra deliciosa hamburguesa con carne, queso fundido, vegetales frescos y pan producido por uMakeIT!.</textarea> \n                  <label for=\"inputPrecio\">Precio(Bs.S)</label>\n                  <input type=\"text\" class=\"form-control\" id=\"inputPrecio\" placeholder=\"300\"> \n                  <button type=\"submit\" id=\"botonpers\" class=\"btn btn-danger\" (click)=\"isFirstDisabled = !isFirstDisabled\">\n                      Personalizable\n                    </button>\n                <accordion>\n                  <accordion-group [isDisabled]=\"isFirstDisabled\">\n                    <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                      <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Agregar</div>\n                      <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                    </button>\n                    <div class=\"descripcion\">\n                      <h5>Extras:</h5>\n                        <label><input type=\"checkbox\">Pan integral </label>\n                        <label><input type=\"checkbox\">Pan c/ parmesano y orégano </label>\n                        <label><input type=\"checkbox\">Queso Brie </label>\n                        <label><input type=\"checkbox\">Queso de Cabra </label>\n                        <label><input type=\"checkbox\">Jalapeño </label>\n                        <label><input type=\"checkbox\">Salsa BBQ </label>\n                        <label><input type=\"checkbox\">Tocineta </label>\n                        <label><input type=\"checkbox\">Cebolla caramelizada </label>\n                    </div>\n                  </accordion-group>\n                </accordion>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-warning\" style=\"vertical-align: middle; margin-right: auto; color:white;\"\n            (click)=\"editarPlato.hide()\">\n            Cerrar\n          </button>\n          <a [routerLink]=\"['/admin']\"><button type=\"submit\" class=\"btn btn-danger\" (click)=\"confirmacion.show()\"><i class=\"material-icons\" style=\"vertical-align: middle; position: relative; text-align: center\">add</i>\n              Actualizar\n            </button></a>\n        </div>\n      </div>\n    </div>\n  </div>\n   \n\n\n  <!-- Modal eliminar cambios -->\n<div bsModal #eliminarPlato=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog\" style=\"width:70%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Eliminar Plato</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"eliminarPlato.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row align-items-start\">\n          <div class=\"col\">\n            <div class=\"descripcion\">\n              <h5 style=\"display:inline-block; margin-right: 2%;\">¿Desea eliminar la Hamburguesa?</h5>\n            </div>\n            <div id=\"alerta\">\n              <i class=\"material-icons md-48\">alert</i>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" style=\"vertical-align: middle; margin-right: auto; color:white;\"\n          (click)=\"eliminarPlato.hide()\">\n          Cancelar\n        </button>\n        <a [routerLink]=\"['/admin']\"><button type=\"submit\" class=\"btn btn-danger\" (click)=\"confirmacion.show(); eliminarPlato.hide();\"><i class=\"material-icons\" style=\"vertical-align: middle; margin-right: 2%; margin-left: auto;\">check</i>\n            Confirmar\n          </button></a>\n      </div>\n    </div>\n  </div>\n</div>\n  \n\n<!-- Modal confirmar cambios -->\n<div bsModal #confirmacion=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Confirmación</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"confirmacion.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row align-items-start\">\n          <div class=\"col\">\n            <div class=\"descripcion\">\n              <h5 style=\"display:inline-block; margin-right: 2%;\">¿Desea realizar los cambios?</h5>\n            </div>\n            <div id=\"alerta\">\n              <i class=\"material-icons md-48\">alert</i>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" style=\"vertical-align: middle; margin-right: auto; color:white;\"\n          (click)=\"confirmacion.hide();\">\n          Cancelar\n        </button>\n        <button type=\"submit\" class=\"btn btn-danger\" (click)=\"confirmacion.hide(); eliminarPlato.hide(); editarPlato.hide();\"><i class=\"material-icons\" style=\"vertical-align: middle; margin-right: 2%; margin-left: auto;\">check</i>\n            Confirmar\n          </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<app-piedepagina></app-piedepagina>"

/***/ }),

/***/ "./src/app/menuadmin/menuadmin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menuadmin/menuadmin.component.ts ***!
  \**************************************************/
/*! exports provided: MenuadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuadminComponent", function() { return MenuadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuadminComponent = /** @class */ (function () {
    function MenuadminComponent() {
        this.isFirstDisabled = false;
    }
    MenuadminComponent.prototype.ngOnInit = function () {
    };
    MenuadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menuadmin',
            template: __webpack_require__(/*! ./menuadmin.component.html */ "./src/app/menuadmin/menuadmin.component.html"),
            styles: [__webpack_require__(/*! ./menuadmin.component.css */ "./src/app/menuadmin/menuadmin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuadminComponent);
    return MenuadminComponent;
}());



/***/ }),

/***/ "./src/app/olvido/olvido.component.css":
/*!*********************************************!*\
  !*** ./src/app/olvido/olvido.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.logo{\n    display: block;\n    margin: 1% auto 0 auto;\n    width: 14%;\n    min-width: 145px;\n}\n\n#fondo{\n    background-color: white;\n    width: 100%;\n    padding-bottom: 2%;\n}\n\n#contenedorlog{\n    width: 35%;\n    border: 4px solid #000000;\n    border-radius: 30px 30px 30px 30px;\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 2%;\n    padding-bottom: 2%;\n}\n\n.selectores{\n    padding: 3% 0;\n    width: 50%;\n    display: inline-block;\n    text-align: center;\n}\n\nform{\n    padding-top: 1%;\n    width: 80%;\n    display:block;\n    margin: 0 auto;\n}\n\na label:hover{\n    cursor: pointer;\n}\n\na{\n    text-decoration: none !important;\n}"

/***/ }),

/***/ "./src/app/olvido/olvido.component.html":
/*!**********************************************!*\
  !*** ./src/app/olvido/olvido.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"fondo\">\n\n<img class=\"logo\" src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/logo.png?alt=media&token=33880303-3c3e-468c-8fd2-caea026302e3\">\n  <div id=\"contenedorlog\">\n    <label class=\"selectores\">Olvidé mi contraseña</label>\n    <a [routerLink]=\"['/registro']\"><label class=\"selectores\" style=\"border-bottom: 4px solid #000000; border-left: 4px solid #000000; border-radius: 0 0 0 5px;\">Registrarse</label></a>\n    <form>\n        <div class=\"form-group\">\n          <h5 style=\"margin: 2% auto 8% auto;\">Ingrese el correo asociado a su cuenta y le enviaremos su contraseña.</h5>\n          <label for=\"exampleInputEmail1\">Correo</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Ingrese su correo\" required>\n        </div>\n        <div style=\"text-align: right\">\n          <a [routerLink]=\"['/inicio']\"><button type=\"submit\" class=\"btn btn-danger\" (click)=\"openModal(contraenviada)\" style=\"display: inline-block;\">Enviar contraseña a mi correo</button></a>\n        </div>\n    </form>\n  </div>\n  <a [routerLink]=\"['/inicio']\"><button type=\"submit\" class=\"btn btn-dark\" style=\"display: block; margin: 0 auto;\">Regresar</button></a>\n   <!-- Modal de que se envió la contraseña al usuario. Se crea en el olvido.components.ts -->\n  <ng-template #contraenviada >\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Contraseña enviada</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      Revise el buzon de entrada de su correo:<h6 style=\"text-align: center; margin-top: 2%;\">cguillen@unimet.edu.ve</h6>Si no lo encuentra, por favor revise el buzon de mensajes no deseados o spam.\n    </div>\n  </ng-template>\n\n</div>"

/***/ }),

/***/ "./src/app/olvido/olvido.component.ts":
/*!********************************************!*\
  !*** ./src/app/olvido/olvido.component.ts ***!
  \********************************************/
/*! exports provided: OlvidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidoComponent", function() { return OlvidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OlvidoComponent = /** @class */ (function () {
    function OlvidoComponent(modalService) {
        this.modalService = modalService;
    }
    OlvidoComponent.prototype.openModal = function (contraenviada) {
        this.modalRef = this.modalService.show(contraenviada);
    };
    OlvidoComponent.prototype.ngOnInit = function () {
    };
    OlvidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-olvido',
            template: __webpack_require__(/*! ./olvido.component.html */ "./src/app/olvido/olvido.component.html"),
            styles: [__webpack_require__(/*! ./olvido.component.css */ "./src/app/olvido/olvido.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], OlvidoComponent);
    return OlvidoComponent;
}());



/***/ }),

/***/ "./src/app/pendientes/pendientes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pendientes/pendientes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenido{\n    width: 60%;\n    display: block;\n    margin: 0 auto;\n    padding-top: 2%\n}\n\naccordion{\n    margin: 3% 0;\n    width: 100%\n}\n\naccordion-group:hover{\n    cursor: pointer;\n}\n\n.pedido{\n    padding: 2% 4%;\n    border: 4px solid #000000;\n    border-radius: 20px 20px 20px 20px;\n    width: 100%;\n    margin: 5% 0;\n}\n\n.foto, .descripcion{\n    display: table-cell;\n    width: 50%\n\n}\n\n.foto img{\n    display: block;\n    width: 60%;\n    margin: 0 auto;\n}\n\n.descripcion{\n    vertical-align: top;\n    margin: 0 auto;\n}\n\n.descripcion ul{\n    margin: 5% auto;\n    font-size: 1vw;\n}\n\n.select button{\n    width: 90%;\n    display:block;\n    margin-right: 0;\n    margin-left: auto;\n}\n\nselect{\n    display: block;\n    margin-right:0;\n    margin-left: auto;\n    width: 90%;\n    cursor: pointer;\n    padding: 10px 15px;\n    outline: 0;\n    border: 0;\n    border-radius: 0;\n    background: lightgrey;\n    color: black;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    font-weight: bold;\n}\n\nselect::-ms-expand{\n    display: none;\n}\n\nselect:disabled{\n    opacity: 0.5;\n    pointer-events: none;\n}\n\na{\n    text-decoration: none !important;\n}\n\n.btn-dark{\n    display:block; \n    margin: 0 auto;\n}\n\n.btn{\n    margin-bottom: 2%;\n}"

/***/ }),

/***/ "./src/app/pendientes/pendientes.component.html":
/*!******************************************************!*\
  !*** ./src/app/pendientes/pendientes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezadoadmin></app-encabezadoadmin>\n<div id=\"contenido\">\n    <h3>Pedidos Pendientes</h3> \n    <div class=\"pedido\">\n        <h3 style=\"display: inline-block; width: 50%; text-align: left;\">Pedido #20141110638</h3>\n        <h5 style=\"display: inline-block; width: 50%; text-align: right; vertical-align: top;\">14/10/2018</h5>\n        <div style=\"display: inline-block; width: 65%;\">\n        <accordion>\n          <accordion-group>\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <div style=\"display: inline-block; width: 50%; text-align: left\">Entrada</div>\n              <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n            </button>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                  <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Tequeños</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <div class=\"foto\">\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                </div>\n                <div class=\"descripcion\">\n                  <h5>Descripción:</h5>\n                  <ul>\n                    <li>Harina de trigo</li>\n                    <li>Queso</li>\n                    <li>Frito</li>\n                    <li>Salsa de tomate</li>\n                    <li>Mermelada</li>\n                  </ul>\n                </div>\n              </accordion-group>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Empanaditas</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Fritas</li>\n                      <li>Carne</li>\n                      <li>Salsa de tomate</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n          </accordion-group>\n          <accordion-group>\n              <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                <div style=\"display: inline-block; width: 50%; text-align: left\">Plato Principal</div>\n                <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n              </button>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Hamburguesa</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Pan integral</li>\n                      <li>200gr de carne</li>\n                      <li>Queso</li>\n                      <li>Salsa de tomate</li>\n                      <li>Salsa de barbecue</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n            </accordion-group>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <div style=\"display: inline-block; width: 50%; text-align: left\">Postre</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <accordion-group>\n                    <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                      <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Torta de Tres Leches</div>\n                      <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                    </button>\n                    <div class=\"foto\">\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                    </div>\n                    <div class=\"descripcion\">\n                      <h5>Descripción:</h5>\n                      <ul>\n                        <li>Leche</li>\n                      </ul>\n                    </div>\n                  </accordion-group>\n              </accordion-group>\n        </accordion>\n        </div>\n        <div style=\"display: inline-block; width: 35%; position: relative;\">\n            <div class=\"select\">\n              <select>\n                <option>En preparacion</option>\n                <option>Enviado</option>\n                <option selected>Entregado</option>\n              </select>\n              <button type=\"submit\" class=\"btn btn-danger\">Actualizar</button>\n            </div>\n        </div>\n      </div>\n      <div class=\"pedido\">\n        <h3 style=\"display: inline-block; width: 50%; text-align: left;\">Pedido #20141110638</h3>\n        <h5 style=\"display: inline-block; width: 50%; text-align: right; vertical-align: top;\">14/10/2018</h5>\n        <div style=\"display: inline-block; width: 65%;\">\n        <accordion>\n          <accordion-group>\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <div style=\"display: inline-block; width: 50%; text-align: left\">Entrada</div>\n              <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n            </button>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                  <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Tequeños</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <div class=\"foto\">\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                </div>\n                <div class=\"descripcion\">\n                  <h5>Descripción:</h5>\n                  <ul>\n                    <li>Harina de trigo</li>\n                    <li>Queso</li>\n                    <li>Frito</li>\n                    <li>Salsa de tomate</li>\n                    <li>Mermelada</li>\n                  </ul>\n                </div>\n              </accordion-group>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Empanaditas</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Fritas</li>\n                      <li>Carne</li>\n                      <li>Salsa de tomate</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n          </accordion-group>\n          <accordion-group>\n              <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                <div style=\"display: inline-block; width: 50%; text-align: left\">Plato Principal</div>\n                <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n              </button>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Hamburguesa</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Pan integral</li>\n                      <li>200gr de carne</li>\n                      <li>Queso</li>\n                      <li>Salsa de tomate</li>\n                      <li>Salsa de barbecue</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n            </accordion-group>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <div style=\"display: inline-block; width: 50%; text-align: left\">Postre</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <accordion-group>\n                    <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                      <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Torta de Tres Leches</div>\n                      <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                    </button>\n                    <div class=\"foto\">\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                    </div>\n                    <div class=\"descripcion\">\n                      <h5>Descripción:</h5>\n                      <ul>\n                        <li>Leche descremada</li>\n                      </ul>\n                    </div>\n                  </accordion-group>\n              </accordion-group>\n        </accordion>\n        </div>\n        <div style=\"display: inline-block; width: 35%; position: relative;\">\n            <div class=\"select\">\n              <select>\n                <option>En preparacion</option>\n                <option>Enviado</option>\n                <option>Entregado</option>\n              </select>\n              <button type=\"submit\" class=\"btn btn-danger\">Actualizar</button>\n            </div>\n        </div>\n      </div>\n      <div class=\"pedido\">\n        <h3 style=\"display: inline-block; width: 50%; text-align: left;\">Pedido #20141110638</h3>\n        <h5 style=\"display: inline-block; width: 50%; text-align: right; vertical-align: top;\">14/10/2018</h5>\n        <div style=\"display: inline-block; width: 65%;\">\n        <accordion>\n          <accordion-group>\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n              <div style=\"display: inline-block; width: 50%; text-align: left\">Entrada</div>\n              <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n            </button>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                  <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Tequeños</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <div class=\"foto\">\n                  <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                </div>\n                <div class=\"descripcion\">\n                  <h5>Descripción:</h5>\n                  <ul>\n                    <li>Harina de trigo</li>\n                    <li>Queso</li>\n                    <li>Frito</li>\n                    <li>Salsa de tomate</li>\n                    <li>Mermelada</li>\n                  </ul>\n                </div>\n              </accordion-group>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Empanaditas</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Fritas</li>\n                      <li>Carne</li>\n                      <li>Salsa de tomate</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n          </accordion-group>\n          <accordion-group>\n              <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                <div style=\"display: inline-block; width: 50%; text-align: left\">Plato Principal</div>\n                <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n              </button>\n              <accordion-group>\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                    <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Hamburguesa</div>\n                    <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                  </button>\n                  <div class=\"foto\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                  </div>\n                  <div class=\"descripcion\">\n                    <h5>Descripción:</h5>\n                    <ul>\n                      <li>Pan integral</li>\n                      <li>200gr de carne</li>\n                      <li>Queso</li>\n                      <li>Salsa de tomate</li>\n                      <li>Salsa de barbecue</li>\n                    </ul>\n                  </div>\n                </accordion-group>\n            </accordion-group>\n            <accordion-group>\n                <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                  <div style=\"display: inline-block; width: 50%; text-align: left\">Postre</div>\n                  <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                </button>\n                <accordion-group>\n                    <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\" style=\"display: inline-block; width: 5%; border-radius: 100%\">\n                      <div style=\"display: inline-block; width: 45%; text-align: left; padding-left: 3%\">Torta de Tres Leches</div>\n                      <i class=\"material-icons\" style=\"display: inline-block; width: 50%; text-align: right; vertical-align: middle;\">arrow_drop_down</i>\n                    </button>\n                    <div class=\"foto\">\n                      <img src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/plato2.png?alt=media&token=3b1e37ab-b454-47ad-af29-e030aa44ae85\">\n                    </div>\n                    <div class=\"descripcion\">\n                      <h5>Descripción:</h5>\n                      <ul>\n                        <li>Leche descremada</li>\n                      </ul>\n                    </div>\n                  </accordion-group>\n              </accordion-group>\n        </accordion>\n        </div>\n        <div style=\"display: inline-block; width: 35%; position: relative;\">\n            <div class=\"select\">\n              <select>\n                <option>En preparacion</option>\n                <option selected>Enviado</option>\n                <option>Entregado</option>\n              </select>\n              <button type=\"submit\" class=\"btn btn-danger\">Actualizar</button>\n            </div>\n        </div>\n      </div>\n      <a [routerLink]=\"['/admin']\"><button type=\"submit\" class=\"btn btn-dark\">Regresar</button></a>\n</div>\n<app-piedepagina></app-piedepagina>"

/***/ }),

/***/ "./src/app/pendientes/pendientes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pendientes/pendientes.component.ts ***!
  \****************************************************/
/*! exports provided: PendientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendientesComponent", function() { return PendientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PendientesComponent = /** @class */ (function () {
    function PendientesComponent() {
    }
    PendientesComponent.prototype.ngOnInit = function () {
    };
    PendientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pendientes',
            template: __webpack_require__(/*! ./pendientes.component.html */ "./src/app/pendientes/pendientes.component.html"),
            styles: [__webpack_require__(/*! ./pendientes.component.css */ "./src/app/pendientes/pendientes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PendientesComponent);
    return PendientesComponent;
}());



/***/ }),

/***/ "./src/app/piedepagina/piedepagina.component.css":
/*!*******************************************************!*\
  !*** ./src/app/piedepagina/piedepagina.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    padding: 0;\n    margin: 0;\n}\n\n.pie { \n    position:relative;\n    bottom:0;\n    width:100% !important;\n    \n    display:flex;\n    flex-direction:row;\n    \n}\n\n.pie div{\n    text-align:center;\n    width: 33.33%;\n    line-height: 300%;\n    \n}"

/***/ }),

/***/ "./src/app/piedepagina/piedepagina.component.html":
/*!********************************************************!*\
  !*** ./src/app/piedepagina/piedepagina.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pie bg-warning\">\n  <div>Contáctanos: 0-500-umakeit - admin@umakeit.com</div>\n  <div>uMakeIT!™</div>\n  <div>Todos los derechos reservados ©</div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/piedepagina/piedepagina.component.ts":
/*!******************************************************!*\
  !*** ./src/app/piedepagina/piedepagina.component.ts ***!
  \******************************************************/
/*! exports provided: PiedepaginaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedepaginaComponent", function() { return PiedepaginaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PiedepaginaComponent = /** @class */ (function () {
    function PiedepaginaComponent() {
    }
    PiedepaginaComponent.prototype.ngOnInit = function () {
    };
    PiedepaginaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-piedepagina',
            template: __webpack_require__(/*! ./piedepagina.component.html */ "./src/app/piedepagina/piedepagina.component.html"),
            styles: [__webpack_require__(/*! ./piedepagina.component.css */ "./src/app/piedepagina/piedepagina.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PiedepaginaComponent);
    return PiedepaginaComponent;
}());



/***/ }),

/***/ "./src/app/registro/registro.component.css":
/*!*************************************************!*\
  !*** ./src/app/registro/registro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\n    display: block;\n    margin: 1% auto 0 auto;\n    width: 14%;\n    min-width: 145px;\n}\n\n#fondo{\n    background-color: white;\n    width: 100%;\n    padding-bottom: 2%;\n}\n\n#contenedorlog{\n    width: 35%;\n    border: 4px solid #000000;\n    border-radius: 30px 30px 30px 30px;\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 2%;\n    padding-bottom: 2%\n}\n\n.selectores{\n    padding: 3% 0;\n    width: 50%;\n    display: inline-block;\n    text-align: center;\n}\n\nform{\n    padding-top: 1%;\n    width: 80%;\n    display:block;\n    margin: 0 auto;\n}\n\na label:hover{\n    cursor: pointer;\n}\n\na{\n    text-decoration: none !important;\n}"

/***/ }),

/***/ "./src/app/registro/registro.component.html":
/*!**************************************************!*\
  !*** ./src/app/registro/registro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fondo\">\n\n    <img class=\"logo\" src=\"https://firebasestorage.googleapis.com/v0/b/umakeitbd.appspot.com/o/logo.png?alt=media&token=33880303-3c3e-468c-8fd2-caea026302e3\">\n\n    <div id=\"contenedorlog\">\n        <a [routerLink]=\"['/login']\"><label class=\"selectores\" style=\"border-bottom: 4px solid #000000; border-right: 4px solid #000000; border-radius: 0 0 5px 0;\">Iniciar Sesión</label></a>\n        <label class=\"selectores\">Registrarse</label>\n      <form>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputNombre\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputNombre\" placeholder=\"Ingrese su nombre\" required> \n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputApellido\">Apellido</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputApellido\" placeholder=\"Ingrese su apellido\" required>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputSexo\">Sexo</label>\n          <select class=\"form-control\" id=\"inputSexo\" required>\n            <option value=\"\" selected disabled hidden>Elija aquí</option>\n            <option>Femenino</option>\n            <option>Masculino</option>\n            <option>Otro</option>\n          </select>\n        </div>\n          <div class=\"form-group\">\n            <label for=\"inputEdad\">Edad</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputEdad\" placeholder=\"Ingrese su edad\" required>\n          </div>    \n          <div class=\"form-group\">\n            <label for=\"inputUsuario\">Usuario</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputUsuario\" placeholder=\"Ingrese su usuario\" required>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"inputContra\">Contraseña</label>\n              <input type=\"password\" class=\"form-control\" id=\"inputContra\" placeholder=\"Ingrese su contraseña\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"inputContra\">Confirmar</label>\n              <input type=\"password\" class=\"form-control\" id=\"inputConfirm\" placeholder=\"Confirme su contraseña\" required>\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <div class=\"form-group\">\n            <label for=\"inputDireccion\">Dirección</label>\n            <textarea class=\"form-control\" id=\"inputDireccion\" rows=\"3\" required></textarea>\n          </div>\n        </div>\n        <div style=\"text-align: right;\">\n          <button type=\"reset\" class=\"btn btn-warning\" style=\"display: inline-block; margin-right: 10px;\">Limpiar</button>\n          <button type=\"submit\" class=\"btn btn-danger\" style=\"display: inline-block; margin-right: 0;\">Ingresar</button>\n        </div>\n      </form>\n    </div>\n    <a [routerLink]=\"['/inicio']\"><button type=\"submit\" class=\"btn btn-dark\" style=\"display: block; margin: 0 auto;\">Regresar</button></a>\n    \n  </div>"

/***/ }),

/***/ "./src/app/registro/registro.component.ts":
/*!************************************************!*\
  !*** ./src/app/registro/registro.component.ts ***!
  \************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(elementRef) {
        this.elementRef = elementRef;
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'whitesmoke';
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], RegistroComponent);
    return RegistroComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raquelcoriat/Documents/UNIMET/TRIMESTRES/TRIM 13/Sistemas de Informacion/Repositorio Proyecto/uMakeIT/ProyectoAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map