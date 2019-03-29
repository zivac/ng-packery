import { Component, Input, EventEmitter, Output, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import * as Packery from 'packery';
import * as Draggabilly from 'draggabilly';
import { Widget } from './widget';

@Component({
    selector: 'ng-packery',
    template: `<div class="widget-grid">
    <div class="grid-sizer"></div>
    <div class="gutter-sizer"></div>
    <ng-container *ngFor="let widget of (widgets | async);let i = index">
      <div class="widget width-{{widget.size[0]}} height-{{widget.size[1]}}" [ngStyle]="{'background-color': backgroundColor}" id="widget-{{i}}">
        <div class="widget-title">
          {{widget.title}}
        </div>
        <div class="widget-content">
          <!--add content here-->
          <ng-container *ngTemplateOutlet="widgetTpl; context: {$implicit: widget}"></ng-container>
        </div>
        <span class="widget-size-trigger" *ngIf="showSize">
          <a (click)="widget.openSizeSelect=true">⇲</a>
        </span>
        <!--uncomment to add edit and delete triggers-->
        <span class="widget-edit-trigger" *ngIf="showControls">
          <a (click)="editWidget(widget)">✎</a>
        </span>
        <span class="widget-delete-trigger" *ngIf="showControls">
          <a (click)="deleteWidget(widget)">×</a>
        </span>
        <div class="widget-size-select" *ngIf="widget.openSizeSelect">
          <div *ngFor="let y of sizes" class="widget-size-row">
            <div *ngFor="let x of sizes" class="widget-size-option"
              [class.active]="widget.tempSize[0] >= x && widget.tempSize[1] >= y"
              [class.inactive]="widget.size[0] < x || widget.size[1] < y" (mouseenter)="widget.tempSize = [x, y]"
              (click)="setWidgetSize(widget)"></div>
          </div>
        </div>
      </div>
    </ng-container>
  </div>`,
    styles: [`.widget {
        margin: 1%;
        position: relative;
      }
      
      .width-1 {
        width: 23%;
      }
      
      .width-2 {
        width: 48%;
      }
      
      .width-3 {
        width: 73%;
      }
      
      .width-4 {
        width: 98%;
      }
      
      .height-1 {
        padding-top: 23%;
      }
      
      .height-2 {
        padding-top: 48%;
      }
      
      .height-3 {
        padding-top: 73%;
      }
      
      .height-4 {
        padding-top: 98%;
      }
      
      .widget-grid {
        margin: 0 -1%;
      }
      
      .grid-sizer {
        width: 25%;
      }
      
      .gutter-sizer {
        width: 0;
      }
      
      .packery-drop-placeholder {
        border: 3px dotted #333;
        background: hsla(0, 0%, 0%, 0.3);
      }
      
      .widget-size-trigger,
      .widget-delete-trigger,
      .widget-edit-trigger {
        opacity: 0;
        position: absolute;
        font-size: 20px;
        top: 5px;
        cursor: pointer;
        transition: opacity 300ms ease;
      }
      
      .widget:hover .widget-delete-trigger,
      .widget:hover .widget-size-trigger,
      .widget:hover .widget-edit-trigger {
        opacity: 0.7;
      }
      
      .widget-size-trigger {
        left: 5px;
      }
      
      .widget-delete-trigger {
        right: 5px;
      }
      
      .widget-edit-trigger {
        right: 25px;
      }
      
      .widget-size-select {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 120px;
        height: 120px;
        padding: 5px;
        background-color: white;
        z-index: 999;
      }
      
      .widget-size-row {
        height: 25%;
      }
      
      .widget-size-option {
        width: 23%;
        padding-top: 23%;
        margin: 1%;
        background-color: #364450;
        display: inline-block;
        cursor: pointer;
      }
      
      .widget-size-option.inactive {
        background-color: gray;
      }
      
      .widget-size-option.active {
        background-color: #48BDCA;
      }
      
      .widget-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      `]
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
