"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTableWidgetItem = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
/**
 
> Creates an item for QTableWidget.

* **This class is a JS wrapper around Qt's [QTableWidgetItem class](https://doc.qt.io/qt-5/qtablewidgetitem.html)**

### Example

```javascript
const { QTableWidget, QMainWindow, QTableWidgetItem } = require("@nodegui/nodegui");

const win = new QMainWindow();
const table = new QTableWidget(2, 3);
table.setHorizontalHeaderLabels(['first', 'second', 'third']);

const cell00 = new QTableWidgetItem('C00');
const cell01 = new QTableWidgetItem('C01');
const cell10 = new QTableWidgetItem('C10');
const cell11 = new QTableWidgetItem('C11');

table.setItem(0, 0, cell00);
table.setItem(0, 1, cell01);
table.setItem(1, 0, cell10);
table.setItem(1, 1, cell11);

win.setCentralWidget(table);
win.show();
(global as any).win = win;

```

 */
class QTableWidgetItem extends Component_1.Component {
    constructor(text) {
        let native;
        if (text) {
            native = new addon_1.default.QTableWidgetItem(text);
        }
        else {
            native = new addon_1.default.QTableWidgetItem();
        }
        super();
        this.native = native;
    }
    setText(text) {
        this.native.setText(text);
    }
    setToolTip(text) {
        this.native.setToolTip(text);
    }
    setTextAlignment(alignment) {
        this.native.setTextAlignment(alignment);
    }
    textAlignment() {
        return this.native.textAlignment();
    }
    text() {
        return this.native.text();
    }
    toolTip() {
        return this.native.toolTip();
    }
}
exports.QTableWidgetItem = QTableWidgetItem;
