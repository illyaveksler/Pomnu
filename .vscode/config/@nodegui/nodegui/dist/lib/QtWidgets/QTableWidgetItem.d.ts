import { NativeElement, Component } from '../core/Component';
import { AlignmentFlag } from '../QtEnums';
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
export declare class QTableWidgetItem extends Component {
    native: NativeElement;
    constructor();
    constructor(text: string);
    setText(text: string): void;
    setToolTip(text: string): void;
    setTextAlignment(alignment: AlignmentFlag): void;
    textAlignment(): AlignmentFlag;
    text(): string;
    toolTip(): string;
}
