import { EventEmitter, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Packery from 'packery';
import { Widget } from './widget';
export declare class PackeryComponent implements OnInit, OnDestroy {
    widgets: BehaviorSubject<Widget[]>;
    widgetTpl: TemplateRef<any>;
    backgroundColor: string;
    showSize: boolean;
    showControls: boolean;
    edit: EventEmitter<Widget>;
    delete: EventEmitter<Widget>;
    setSize: EventEmitter<Widget>;
    reposition: EventEmitter<any>;
    sizes: number[];
    packery: Packery;
    private widgetsListener;
    constructor();
    ngOnInit(): void;
    setWidgetSize(widget: Widget): void;
    deleteWidget(widget: Widget): void;
    editWidget(widget: Widget): void;
    ngOnDestroy(): void;
}
