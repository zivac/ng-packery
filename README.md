# Angular Packery Grid Builder

Angular grid builder component

## Requirements

* angular 2+
* packery
* draggabilly

## Example

```javascript
let sizes = [[2, 2], [2, 1], [1, 1], [1, 1], [3, 3], [1, 1], [1, 2]];
this.widgets = new BehaviorSubject(sizes.map(size => new Widget({x: size[0], y: size[1]})));
```

```html
<ng-packery [widgets]="widgets"></ng-packery>
```