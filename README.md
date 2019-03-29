# Angular Packery Grid Builder

Angular grid builder component

## Requirements

* angular 2+
* packery
* draggabilly

## Demo

[https://stackblitz.com/edit/ng-packery](https://stackblitz.com/edit/ng-packery)

## Installation

Using npm:

```console
npm install @zivac/ng-packery
```

## Usage example

In module:

```javascript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PackeryModule } from '@zivac/ng-packery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PackeryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In component:

```javascript
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Widget } from '@zivac/ng-packery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  widgets: BehaviorSubject<Chart[]>;

  ngOnInit() {
    const sizes = [[2, 2], [2, 1], [1, 1]];
    this.widgets = new BehaviorSubject(sizes.map(size => new Widget([size[0], size[1]]));
  }

}

```

In html:

```html
<ng-packery [widgetTpl]="widgetTpl" [widgets]="widgets"></ng-packery>
<ng-template let-widget #widgetTpl>
  <p>Widget content</p>
</ng-template>
```

## Options

| option          | type                      | description                  | default |
|-----------------|---------------------------|------------------------------|---------|
| widgets         | BehaviorSubject<Widget[]> | List of widgets              | null    |
| widgetTpl       | TemplateRef               | Single widget template       | null    |
| backgroundColor | string                    | Widget background color      | #364450 |
| showSize        | boolean                   | Show size select button      | true    |
| showControls    | boolean                   | Show edit and delete buttons | true    |

## Events

| event      | return type | description                               |
|------------|-------------|-------------------------------------------|
| edit       | Widget      | Triggered when edit button is pressed     |
| delete     | Widget      | Triggered when delete button is pressed   |
| setSize    | Widget      | Triggered when widget size is changed     |
| reposition | Array       | Triggered when widget position is changed |
