import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import * as Packery from 'packery';
import * as Draggabilly from 'draggabilly';
import { Widget } from './widget';

declare const Modernizr: any;

@Component({
    selector: 'ng-packery',
    templateUrl: 'packery.html',
    styleUrls: ['packery.css']
})
export class PackeryComponent {

    @Input() widgets: BehaviorSubject<Widget[]>;

    @Output() onDelete: EventEmitter<Widget> = new EventEmitter();
    @Output() onSetSize: EventEmitter<Widget> = new EventEmitter();
    @Output() onReposition: EventEmitter<any> = new EventEmitter();

    sizes = [1, 2, 3, 4];
    packery: any;
    _widgetsListener: any;

    constructor() { }

    ngOnInit() {

        setTimeout(() => {
            this.packery = new Packery('.widget-grid', {
                itemSelector: '.widget',
                columnWidth: '.grid-sizer',
                rowHeight: '.grid-sizer',
                gutter: 0,
                percentPosition: true,
                //initLayout: false
            });
            //this.packery.layout();
            this.packery.getItemElements().forEach((itemElem, index) => {
                //itemElem.style.height = itemElem.clientWidth + 'px';
                let draggie = new Draggabilly(itemElem);
                this.widgets.getValue()[index].draggie = draggie;
                this.packery.bindDraggabillyEvents(draggie);
            });
            //window.dispatchEvent(new Event('resize'));
            this.packery.on('dragItemPositioned', (item) => {
                let positions = this.widgets.getValue().map(widget => {
                    let item = this.packery.items.find(item => item.element == document.getElementById('graph-' + this.widgets.getValue().indexOf(widget)));
                    return {
                        id: widget.id ? widget.id : widget,
                        widget: {
                            size: widget.size,
                            index: this.packery.items.indexOf(item),
                            column: item ? Math.round(item.position.x * 4 / this.packery.packer.width) : 0
                        }
                    }
                })
                this.onReposition.emit(positions);
                //console.log(Math.round(item.position.x*100/this.packery.packer.width)/100);
                //console.log(this.packery.items)
            })

        })

        this._widgetsListener = this.widgets.subscribe(widgets => {
            if (!this.packery) return;
            setTimeout(() => {
                let widgetElements = document.getElementsByClassName('widget');
                for (let i = 0; i < widgetElements.length; i++) {
                    let itemElem = widgetElements[i];
                    if (!this.packery.items.find(item => item.element == itemElem)) {
                        setTimeout(() => {
                            this.packery.appended(itemElem);
                            let item = this.packery.items.find(item => item.element == itemElem);
                            let widget = this.widgets.getValue()[i];
                            widget.column = Math.round(item.position.x * 4 / this.packery.packer.width);
                            let draggie = new Draggabilly(itemElem);
                            widget.draggie = draggie;
                            this.packery.bindDraggabillyEvents(draggie);
                        })
                    }
                }
                this.packery.shiftLayout();
            })
        })

    }

    setWidgetSize(widget: Widget) {

        widget.updateSize();

        setTimeout(() => {
            let widgetEl = document.getElementById('widget-' + this.widgets.getValue().indexOf(widget));
            let item = this.packery.items.find(item => item.element == widgetEl);
            widget.column = Math.round(item.position.x * 4 / this.packery.packer.width);
            widget.index = this.packery.items.indexOf(item);
            this.onSetSize.emit(widget);
            setTimeout(() => {
                this.packery.fit(widgetEl);
            })
            //this.packery.shiftLayout();
        })
    }

    deleteWidget(widget: Widget) {
        this.onDelete.emit(widget);
    }

    ngOnDestroy() {
        this._widgetsListener.unsubscribe();
    }

}