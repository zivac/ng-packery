export interface WidgetSize {
    x: number;
    y: number;
}

export class Widget {

    // draggabilly object (for drag and drop)
    draggie: any;

    // element size in grid(e.g. 2 x 2)
    size: WidgetSize;
    tempSize: WidgetSize;

    // document element id
    id: string;

    // open/close size selector
    private openSizeSelect = false;

    // for reordering
    index = 0;
    column = 0;

    constructor(size?: WidgetSize) {
        this.size = size ? size : {x: 1, y: 1};
        this.tempSize = {x: this.size.x, y: this.size.y};
    }

    // add implementation in extended classes if needed
    setSize(width: number, height: number): void { }

    // called when value is selected in size selector
    updateSize(): void {
        this.size.x = this.tempSize.x;
        this.size.y = this.tempSize.y;
        this.openSizeSelect = false;
    }

}
