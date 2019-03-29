export class Widget {

    // draggabilly object (for drag and drop)
    draggie: any;

    // element size in grid(e.g. 2 x 2)
    size: [number, number];
    tempSize: [number, number];;

    // document element id
    id: string;

    // open/close size selector
    private openSizeSelect = false;

    // for reordering
    index = 0;
    column = 0;

    constructor(size?: [number, number]) {
        this.size = size ? size : [1, 1];
        this.tempSize = [this.size[0], this.size[1]];
    }

    // add implementation in extended classes if needed
    setSize(width: number, height: number): void { }

    // called when value is selected in size selector
    updateSize(): void {
        this.size[0] = this.tempSize[0];
        this.size[1] = this.tempSize[1];
        this.openSizeSelect = false;
    }

}
