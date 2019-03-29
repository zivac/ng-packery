export declare class Widget {
    draggie: any;
    size: [number, number];
    tempSize: [number, number];
    id: string;
    private openSizeSelect;
    index: number;
    column: number;
    constructor(size?: [number, number]);
    setSize(width: number, height: number): void;
    updateSize(): void;
}
