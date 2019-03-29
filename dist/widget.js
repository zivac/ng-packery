"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Widget = /** @class */ (function () {
    function Widget(size) {
        // open/close size selector
        this.openSizeSelect = false;
        // for reordering
        this.index = 0;
        this.column = 0;
        this.size = size ? size : [1, 1];
        this.tempSize = [this.size[0], this.size[1]];
    }
    ;
    // add implementation in extended classes if needed
    Widget.prototype.setSize = function (width, height) { };
    // called when value is selected in size selector
    Widget.prototype.updateSize = function () {
        this.size[0] = this.tempSize[0];
        this.size[1] = this.tempSize[1];
        this.openSizeSelect = false;
    };
    return Widget;
}());
exports.Widget = Widget;
