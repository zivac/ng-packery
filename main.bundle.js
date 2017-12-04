webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ng-packery [widgets]=\"widgets\"></ng-packery>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packery_widget__ = __webpack_require__("../../../../../src/app/packery/widget.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ng-packery demo';
    }
    AppComponent.prototype.ngOnInit = function () {
        var sizes = [[2, 2], [2, 1], [1, 1], [1, 1], [3, 3], [1, 1], [1, 2]];
        this.widgets = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](sizes.map(function (size) { return new __WEBPACK_IMPORTED_MODULE_2__packery_widget__["a" /* Widget */]({ x: size[0], y: size[1] }); }));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__packery_packery_component__ = __webpack_require__("../../../../../src/app/packery/packery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__packery_packery_component__["a" /* PackeryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/packery/packery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackeryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packery__ = __webpack_require__("../../../../packery/js/packery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_packery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draggabilly__ = __webpack_require__("../../../../draggabilly/draggabilly.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draggabilly___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_draggabilly__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackeryComponent = (function () {
    function PackeryComponent() {
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSetSize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onReposition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.sizes = [1, 2, 3, 4];
    }
    PackeryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.packery = new __WEBPACK_IMPORTED_MODULE_2_packery__('.widget-grid', {
                itemSelector: '.widget',
                columnWidth: '.grid-sizer',
                rowHeight: '.grid-sizer',
                gutter: 0,
                percentPosition: true,
            });
            //this.packery.layout();
            _this.packery.getItemElements().forEach(function (itemElem, index) {
                //itemElem.style.height = itemElem.clientWidth + 'px';
                var draggie = new __WEBPACK_IMPORTED_MODULE_3_draggabilly__(itemElem);
                _this.widgets.getValue()[index].draggie = draggie;
                _this.packery.bindDraggabillyEvents(draggie);
            });
            //window.dispatchEvent(new Event('resize'));
            _this.packery.on('dragItemPositioned', function (item) {
                var positions = _this.widgets.getValue().map(function (widget) {
                    var item = _this.packery.items.find(function (item) { return item.element == document.getElementById('graph-' + _this.widgets.getValue().indexOf(widget)); });
                    return {
                        id: widget.id ? widget.id : widget,
                        widget: {
                            size: widget.size,
                            index: _this.packery.items.indexOf(item),
                            column: item ? Math.round(item.position.x * 4 / _this.packery.packer.width) : 0
                        }
                    };
                });
                _this.onReposition.emit(positions);
                //console.log(Math.round(item.position.x*100/this.packery.packer.width)/100);
                //console.log(this.packery.items)
            });
        });
        this._widgetsListener = this.widgets.subscribe(function (widgets) {
            if (!_this.packery)
                return;
            setTimeout(function () {
                var widgetElements = document.getElementsByClassName('widget');
                var _loop_1 = function (i) {
                    var itemElem = widgetElements[i];
                    if (!_this.packery.items.find(function (item) { return item.element == itemElem; })) {
                        setTimeout(function () {
                            _this.packery.appended(itemElem);
                            var item = _this.packery.items.find(function (item) { return item.element == itemElem; });
                            var widget = _this.widgets.getValue()[i];
                            widget.column = Math.round(item.position.x * 4 / _this.packery.packer.width);
                            var draggie = new __WEBPACK_IMPORTED_MODULE_3_draggabilly__(itemElem);
                            widget.draggie = draggie;
                            _this.packery.bindDraggabillyEvents(draggie);
                        });
                    }
                };
                for (var i = 0; i < widgetElements.length; i++) {
                    _loop_1(i);
                }
                _this.packery.shiftLayout();
            });
        });
    };
    PackeryComponent.prototype.setWidgetSize = function (widget) {
        var _this = this;
        widget.updateSize();
        setTimeout(function () {
            var widgetEl = document.getElementById('widget-' + _this.widgets.getValue().indexOf(widget));
            var item = _this.packery.items.find(function (item) { return item.element == widgetEl; });
            widget.column = Math.round(item.position.x * 4 / _this.packery.packer.width);
            widget.index = _this.packery.items.indexOf(item);
            _this.onSetSize.emit(widget);
            setTimeout(function () {
                _this.packery.fit(widgetEl);
            });
            //this.packery.shiftLayout();
        });
    };
    PackeryComponent.prototype.deleteWidget = function (widget) {
        this.onDelete.emit(widget);
    };
    PackeryComponent.prototype.ngOnDestroy = function () {
        this._widgetsListener.unsubscribe();
    };
    return PackeryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]) === "function" && _a || Object)
], PackeryComponent.prototype, "widgets", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], PackeryComponent.prototype, "onDelete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _c || Object)
], PackeryComponent.prototype, "onSetSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _d || Object)
], PackeryComponent.prototype, "onReposition", void 0);
PackeryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ng-packery',
        template: __webpack_require__("../../../../../src/app/packery/packery.html"),
        styles: [__webpack_require__("../../../../../src/app/packery/packery.css")]
    }),
    __metadata("design:paramtypes", [])
], PackeryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=packery.component.js.map

/***/ }),

/***/ "../../../../../src/app/packery/packery.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget {\r\n  background-color: #364450;\r\n  margin: 1%;\r\n  position: relative;\r\n}\r\n\r\n.width-1 {\r\n  width: 23%;\r\n}\r\n\r\n.width-2 {\r\n  width: 48%;\r\n}\r\n\r\n.width-3 {\r\n  width: 73%;\r\n}\r\n\r\n.width-4 {\r\n  width: 98%;\r\n}\r\n\r\n.height-1 {\r\n  padding-top: 23%;\r\n}\r\n\r\n.height-2 {\r\n  padding-top: 48%;\r\n}\r\n\r\n.height-3 {\r\n  padding-top: 73%;\r\n}\r\n\r\n.height-4 {\r\n  padding-top: 98%;\r\n}\r\n\r\n.widget-grid {\r\n  margin: 0 -1%;\r\n}\r\n\r\n.grid-sizer {\r\n  width: 25%;\r\n}\r\n\r\n.gutter-sizer {\r\n  width: 0;\r\n}\r\n\r\n.packery-drop-placeholder {\r\n  border: 3px dotted #333;\r\n  background: hsla(0, 0%, 0%, 0.3);\r\n}\r\n\r\n.widget-size-trigger,\r\n.widget-delete-trigger,\r\n.widget-edit-trigger {\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 5px;\r\n  cursor: pointer;\r\n  transition: opacity 300ms ease;\r\n}\r\n\r\n.widget:hover .widget-delete-trigger,\r\n.widget:hover .widget-size-trigger,\r\n.widget:hover .widget-edit-trigger {\r\n  opacity: 0.7;\r\n}\r\n\r\n.widget-size-trigger {\r\n  left: 5px;\r\n  color: white;\r\n}\r\n\r\n.widget-delete-trigger {\r\n  right: 5px;\r\n}\r\n\r\n.widget-edit-trigger {\r\n  right: 35px;\r\n}\r\n\r\n.widget-size-select {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  width: 120px;\r\n  height: 120px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  z-index: 999;\r\n}\r\n\r\n.widget-size-row {\r\n  height: 25%;\r\n}\r\n\r\n.widget-size-option {\r\n  width: 23%;\r\n  padding-top: 23%;\r\n  margin: 1%;\r\n  background-color: #364450;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.widget-size-option.inactive {\r\n  background-color: gray;\r\n}\r\n\r\n.widget-size-option.active {\r\n  background-color: #48BDCA;\r\n}\r\n\r\n.widget-content {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: calc(100% - 40px);\r\n  margin-top: 40px;\r\n}\r\n\r\n.widget:hover .widget-title {\r\n  padding-left: 15px;\r\n}\r\n\r\n.widget-title {\r\n  position: absolute;\r\n  font-weight: bold;\r\n  top: 10px;\r\n  left: 20px;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  width: calc(100% - 40px);\r\n  font-size: 1.8rem;\r\n  transition: all .2s ease;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/packery/packery.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-grid\">\r\n  <div class=\"grid-sizer\"></div>\r\n  <div class=\"gutter-sizer\"></div>\r\n  <div *ngFor=\"let widget of (widgets | async);let i = index\" class=\"widget width-{{widget.size.x}} height-{{widget.size.y}}\" id=\"widget-{{i}}\">\r\n    <div class=\"widget-title\">\r\n      {{widget.title}}\r\n    </div>\r\n    <div class=\"widget-content\">\r\n      <!--add content here-->\r\n    </div>\r\n    <span class=\"widget-size-trigger\">\r\n      <i class=\"material-icons\" (click)=\"widget.openSizeSelect=true\">size</i>\r\n    </span>\r\n    <!--uncomment to add edit and delete triggers-->\r\n    <!--<span class=\"widget-edit-trigger\">\r\n      <i class=\"material-icons\" (click)=\"editWidget($event, widget)\">edit</i>\r\n    </span>\r\n    <span class=\"widget-delete-trigger\">\r\n      <i class=\"material-icons\" (click)=\"deleteWidget(widget)\">delete</i>\r\n    </span>-->\r\n    <div class=\"widget-size-select\" *ngIf=\"widget.openSizeSelect\">\r\n      <div *ngFor=\"let y of sizes\" class=\"widget-size-row\">\r\n        <div *ngFor=\"let x of sizes\" class=\"widget-size-option\" [class.active]=\"widget.tempSize.x >= x && widget.tempSize.y >= y\" [class.inactive]=\"widget.size.x < x || widget.size.y < y\"\r\n          (mouseenter)=\"widget.tempSize = {x: x, y: y}\" (click)=\"setWidgetSize(widget, x, y)\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/packery/widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(size) {
        //open/close size selector
        this.openSizeSelect = false;
        //for reordering
        this.index = 0;
        this.column = 0;
        this.size = size ? size : { x: 1, y: 1 };
        this.tempSize = { x: this.size.x, y: this.size.y };
    }
    //add implementation in extended classes if needed
    Widget.prototype.setSize = function (width, height) { };
    //called when value is selected in size selector
    Widget.prototype.updateSize = function () {
        this.size.x = this.tempSize.x;
        this.size.y = this.tempSize.y;
        this.openSizeSelect = false;
    };
    return Widget;
}());

//# sourceMappingURL=widget.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map