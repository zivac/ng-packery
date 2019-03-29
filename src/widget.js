"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Widget = /** @class */ (function () {
    function Widget(size) {
        // open/close size selector
        this.openSizeSelect = false;
        // for reordering
        this.index = 0;
        this.column = 0;
        this.size = size ? size : { x: 1, y: 1 };
        this.tempSize = { x: this.size.x, y: this.size.y };
    }
    // add implementation in extended classes if needed
    Widget.prototype.setSize = function (width, height) { };
    // called when value is selected in size selector
    Widget.prototype.updateSize = function () {
        this.size.x = this.tempSize.x;
        this.size.y = this.tempSize.y;
        this.openSizeSelect = false;
    };
    return Widget;
}());
exports.Widget = Widget;
