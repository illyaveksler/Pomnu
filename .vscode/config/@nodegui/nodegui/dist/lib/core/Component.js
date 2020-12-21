"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
/**

> Abstract class that is root most base class for all widgets and layouts in the NodeGui World.

**This class is used to add core properties to all widgets, layouts etc in NodeGui world.
 Currently it helps us maintain references to the native C++ instance of the widget or layout.
 It also helps in preventing gc of child elements of a layout or widget**

`Component` is an abstract class and hence no instances of the same should be created.
It exists so that we can add core functionalities to all widgets and layouts easily. This is an internal class.

Its the root base class in NodeGui world.

*/
class Component {
    constructor() {
        this.nodeChildren = new Set();
    }
    setNodeParent(parent) {
        this.nodeParent = parent;
        parent === null || parent === void 0 ? void 0 : parent.nodeChildren.add(this);
    }
}
exports.Component = Component;
