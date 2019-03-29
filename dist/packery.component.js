"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Packery = require("packery");
var Draggabilly = require("draggabilly");
var PackeryComponent = /** @class */ (function () {
    function PackeryComponent() {
        this.backgroundColor = '#364450';
        this.showSize = true;
        this.showControls = true;
        this.edit = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.setSize = new core_1.EventEmitter();
        this.reposition = new core_1.EventEmitter();
        this.sizes = [1, 2, 3, 4];
    }
    PackeryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.packery = new Packery('.widget-grid', {
                itemSelector: '.widget',
                columnWidth: '.grid-sizer',
                rowHeight: '.grid-sizer',
                gutter: 0,
                percentPosition: true,
            });
            // this.packery.layout();
            _this.packery.getItemElements().forEach(function (itemElem, index) {
                // itemElem.style.height = itemElem.clientWidth + 'px';
                var draggie = new Draggabilly(itemElem);
                _this.widgets.getValue()[index].draggie = draggie;
                _this.packery.bindDraggabillyEvents(draggie);
            });
            // window.dispatchEvent(new Event('resize'));
            _this.packery.on('dragItemPositioned', function (item) {
                var positions = _this.widgets.getValue().map(function (widget) {
                    var movedItem = _this.packery.items.find(function (packeryItem) {
                        return item.element === document.getElementById('graph-' + _this.widgets.getValue().indexOf(widget));
                    });
                    return {
                        id: widget.id ? widget.id : widget,
                        widget: {
                            size: widget.size,
                            index: _this.packery.items.indexOf(item),
                            column: item ? Math.round(item.position.x * 4 / _this.packery.packer.width) : 0
                        }
                    };
                });
                _this.reposition.emit(positions);
                // console.log(Math.round(item.position.x*100/this.packery.packer.width)/100);
                // console.log(this.packery.items)
            });
        });
        this.widgetsListener = this.widgets.subscribe(function (widgets) {
            if (!_this.packery) {
                return;
            }
            setTimeout(function () {
                var widgetElements = document.getElementsByClassName('widget');
                var _loop_1 = function (i) {
                    var itemElem = widgetElements[i];
                    if (!_this.packery.items.find(function (packeryItem) { return packeryItem.element === itemElem; })) {
                        setTimeout(function () {
                            _this.packery.appended(itemElem);
                            var item = _this.packery.items.find(function (packeryItem) { return packeryItem.element === itemElem; });
                            var widget = _this.widgets.getValue()[i];
                            widget.column = Math.round(item.position.x * 4 / _this.packery.packer.width);
                            var draggie = new Draggabilly(itemElem);
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
            var item = _this.packery.items.find(function (i) { return i.element === widgetEl; });
            widget.column = Math.round(item.position.x * 4 / _this.packery.packer.width);
            widget.index = _this.packery.items.indexOf(item);
            _this.setSize.emit(widget);
            setTimeout(function () {
                _this.packery.fit(widgetEl);
            });
            // this.packery.shiftLayout();
        });
    };
    PackeryComponent.prototype.deleteWidget = function (widget) {
        this.delete.emit(widget);
    };
    PackeryComponent.prototype.editWidget = function (widget) {
        this.edit.emit(widget);
    };
    PackeryComponent.prototype.ngOnDestroy = function () {
        this.widgetsListener.unsubscribe();
    };
    __decorate([
        core_1.Input()
    ], PackeryComponent.prototype, "widgets", void 0);
    __decorate([
        core_1.Input()
    ], PackeryComponent.prototype, "widgetTpl", void 0);
    __decorate([
        core_1.Input()
    ], PackeryComponent.prototype, "backgroundColor", void 0);
    __decorate([
        core_1.Input()
    ], PackeryComponent.prototype, "showSize", void 0);
    __decorate([
        core_1.Input()
    ], PackeryComponent.prototype, "showControls", void 0);
    __decorate([
        core_1.Output()
    ], PackeryComponent.prototype, "edit", void 0);
    __decorate([
        core_1.Output()
    ], PackeryComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output()
    ], PackeryComponent.prototype, "setSize", void 0);
    __decorate([
        core_1.Output()
    ], PackeryComponent.prototype, "reposition", void 0);
    PackeryComponent = __decorate([
        core_1.Component({
            selector: 'ng-packery',
            template: "<div class=\"widget-grid\">\n    <div class=\"grid-sizer\"></div>\n    <div class=\"gutter-sizer\"></div>\n    <ng-container *ngFor=\"let widget of (widgets | async);let i = index\">\n      <div class=\"widget width-{{widget.size[0]}} height-{{widget.size[1]}}\" [ngStyle]=\"{'background-color': backgroundColor}\" id=\"widget-{{i}}\">\n        <div class=\"widget-title\">\n          {{widget.title}}\n        </div>\n        <div class=\"widget-content\">\n          <!--add content here-->\n          <ng-container *ngTemplateOutlet=\"widgetTpl; context: {$implicit: widget}\"></ng-container>\n        </div>\n        <span class=\"widget-size-trigger\" *ngIf=\"showSize\">\n          <a (click)=\"widget.openSizeSelect=true\">\u21F2</a>\n        </span>\n        <!--uncomment to add edit and delete triggers-->\n        <span class=\"widget-edit-trigger\" *ngIf=\"showControls\">\n          <a (click)=\"editWidget(widget)\">\u270E</a>\n        </span>\n        <span class=\"widget-delete-trigger\" *ngIf=\"showControls\">\n          <a (click)=\"deleteWidget(widget)\">\u00D7</a>\n        </span>\n        <div class=\"widget-size-select\" *ngIf=\"widget.openSizeSelect\">\n          <div *ngFor=\"let y of sizes\" class=\"widget-size-row\">\n            <div *ngFor=\"let x of sizes\" class=\"widget-size-option\"\n              [class.active]=\"widget.tempSize[0] >= x && widget.tempSize[1] >= y\"\n              [class.inactive]=\"widget.size[0] < x || widget.size[1] < y\" (mouseenter)=\"widget.tempSize = [x, y]\"\n              (click)=\"setWidgetSize(widget)\"></div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>",
            styles: [".widget {\n        margin: 1%;\n        position: relative;\n      }\n      \n      .width-1 {\n        width: 23%;\n      }\n      \n      .width-2 {\n        width: 48%;\n      }\n      \n      .width-3 {\n        width: 73%;\n      }\n      \n      .width-4 {\n        width: 98%;\n      }\n      \n      .height-1 {\n        padding-top: 23%;\n      }\n      \n      .height-2 {\n        padding-top: 48%;\n      }\n      \n      .height-3 {\n        padding-top: 73%;\n      }\n      \n      .height-4 {\n        padding-top: 98%;\n      }\n      \n      .widget-grid {\n        margin: 0 -1%;\n      }\n      \n      .grid-sizer {\n        width: 25%;\n      }\n      \n      .gutter-sizer {\n        width: 0;\n      }\n      \n      .packery-drop-placeholder {\n        border: 3px dotted #333;\n        background: hsla(0, 0%, 0%, 0.3);\n      }\n      \n      .widget-size-trigger,\n      .widget-delete-trigger,\n      .widget-edit-trigger {\n        opacity: 0;\n        position: absolute;\n        font-size: 20px;\n        top: 5px;\n        cursor: pointer;\n        transition: opacity 300ms ease;\n      }\n      \n      .widget:hover .widget-delete-trigger,\n      .widget:hover .widget-size-trigger,\n      .widget:hover .widget-edit-trigger {\n        opacity: 0.7;\n      }\n      \n      .widget-size-trigger {\n        left: 5px;\n      }\n      \n      .widget-delete-trigger {\n        right: 5px;\n      }\n      \n      .widget-edit-trigger {\n        right: 25px;\n      }\n      \n      .widget-size-select {\n        position: absolute;\n        top: 5px;\n        left: 5px;\n        width: 120px;\n        height: 120px;\n        padding: 5px;\n        background-color: white;\n        z-index: 999;\n      }\n      \n      .widget-size-row {\n        height: 25%;\n      }\n      \n      .widget-size-option {\n        width: 23%;\n        padding-top: 23%;\n        margin: 1%;\n        background-color: #364450;\n        display: inline-block;\n        cursor: pointer;\n      }\n      \n      .widget-size-option.inactive {\n        background-color: gray;\n      }\n      \n      .widget-size-option.active {\n        background-color: #48BDCA;\n      }\n      \n      .widget-content {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n      }\n      "]
        })
    ], PackeryComponent);
    return PackeryComponent;
}());
exports.PackeryComponent = PackeryComponent;
