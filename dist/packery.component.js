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
            templateUrl: './packery.component.html',
            styleUrls: ['./packery.component.css']
        })
    ], PackeryComponent);
    return PackeryComponent;
}());
exports.PackeryComponent = PackeryComponent;
