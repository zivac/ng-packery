import { Component, Input, EventEmitter, Output, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import * as Packery from 'packery';
import * as Draggabilly from 'draggabilly';
import { Widget } from './widget';

@Component({
    selector: 'ng-packery',
    templateUrl: 'packery.component.html',
    styleUrls: ['packery.component.css']
})
export class PackeryComponent implements OnInit, OnDestroy {

    @Input() widgets: BehaviorSubject<Widget[]>;
    @Input() widgetTpl: TemplateRef<any>;
    @Input() backgroundColor = '#364450';
    @Input() showSize = true;
    @Input() showControls = true;

    @Output() edit: EventEmitter<Widget> = new EventEmitter();
    @Output() delete: EventEmitter<Widget> = new EventEmitter();
    @Output() setSize: EventEmitter<Widget> = new EventEmitter();
    @Output() reposition: EventEmitter<any> = new EventEmitter();

    sizes = [1, 2, 3, 4];
    packery: Packery;
    private widgetsListener: Subscription;

    constructor() { }

    ngOnInit() {

        setTimeout(() => {
            this.packery = new Packery('.widget-grid', {
                itemSelector: '.widget',
                columnWidth: '.grid-sizer',
                rowHeight: '.grid-sizer',
                gutter: 0,
                percentPosition: true,
                // initLayout: false
            });
            // this.packery.layout();
            this.packery.getItemElements().forEach((itemElem: any, index: number) => {
                // itemElem.style.height = itemElem.clientWidth + 'px';
                const draggie = new Draggabilly(itemElem);
                this.widgets.getValue()[index].draggie = draggie;
                this.packery.bindDraggabillyEvents(draggie);
            });
            // window.dispatchEvent(new Event('resize'));
            this.packery.on('dragItemPositioned', (item: any) => {
                const positions = this.widgets.getValue().map(widget => {
                    const movedItem: any = this.packery.items.find((packeryItem: any) =>
                        item.element === document.getElementById('graph-' + this.widgets.getValue().indexOf(widget)));
                    return {
                        id: widget.id ? widget.id : widget,
                        widget: {
                            size: widget.size,
                            index: this.packery.items.indexOf(item),
                            column: item ? Math.round(item.position.x * 4 / this.packery.packer.width) : 0
                        }
                    };
                });
                this.reposition.emit(positions);
                // console.log(Math.round(item.position.x*100/this.packery.packer.width)/100);
                // console.log(this.packery.items)
            });

        });

        this.widgetsListener = this.widgets.subscribe(widgets => {
            if (!this.packery) {
                return;
            }
            setTimeout(() => {
                const widgetElements: HTMLCollectionOf<Element> = document.getElementsByClassName('widget');
                for (let i = 0; i < widgetElements.length; i++) {
                    const itemElem = widgetElements[i];
                    if (!this.packery.items.find((packeryItem: any) => packeryItem.element === itemElem)) {
                        setTimeout(() => {
                            this.packery.appended(itemElem);
                            const item = this.packery.items.find((packeryItem: any) => packeryItem.element === itemElem);
                            const widget = this.widgets.getValue()[i];
                            widget.column = Math.round(item.position.x * 4 / this.packery.packer.width);
                            const draggie = new Draggabilly(itemElem);
                            widget.draggie = draggie;
                            this.packery.bindDraggabillyEvents(draggie);
                        });
                    }
                }
                this.packery.shiftLayout();
            });
        });

    }

    setWidgetSize(widget: Widget) {

        widget.updateSize();

        setTimeout(() => {
            const widgetEl: HTMLElement = document.getElementById('widget-' + this.widgets.getValue().indexOf(widget));
            const item: any = this.packery.items.find((i: any) => i.element === widgetEl);
            widget.column = Math.round(item.position.x * 4 / this.packery.packer.width);
            widget.index = this.packery.items.indexOf(item);
            this.setSize.emit(widget);
            setTimeout(() => {
                this.packery.fit(widgetEl);
            });
            // this.packery.shiftLayout();
        });
    }

    deleteWidget(widget: Widget): void {
        this.delete.emit(widget);
    }

    editWidget(widget: Widget): void {
        this.edit.emit(widget);
    }

    ngOnDestroy(): void {
        this.widgetsListener.unsubscribe();
    }

}
