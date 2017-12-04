interface Size {
    x: number,
    y: number
}

export class Widget {

    //draggabilly object (for drag and drop)
    draggie: any

    //element size in grid(e.g. 2 x 2)
    size: Size
    tempSize: Size

    //document element id
    id: string

    //open/close size selector
    openSizeSelect: boolean = false

    //for reordering
    index: number = 0
    column: number = 0

    constructor(size?: Size) {
        this.size = size ? size : {x: 1, y: 1};
        this.tempSize = {x: this.size.x, y: this.size.y}
    }

    //add implementation in extended classes if needed
    setSize(width, height) { }

    //called when value is selected in size selector
    updateSize() {
        this.size.x = this.tempSize.x;
        this.size.y = this.tempSize.y;
        this.openSizeSelect = false;
    }

}