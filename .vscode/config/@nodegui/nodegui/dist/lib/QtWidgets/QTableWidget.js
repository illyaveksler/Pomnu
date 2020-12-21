"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTableWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QtEnums_1 = require("../QtEnums");
const QAbstractScrollArea_1 = require("./QAbstractScrollArea");
/**
 
> Creates and item-based table view.

* **This class is a JS wrapper around Qt's [QTableWidget class](https://doc.qt.io/qt-5/qtablewidget.html)**

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
class QTableWidget extends QAbstractScrollArea_1.QAbstractScrollArea {
    constructor(rows, columns, parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QTableWidget(rows, columns, parent.native);
        }
        else {
            native = new addon_1.default.QTableWidget(rows, columns);
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
        this.items = new Set();
    }
    selectedRanges() {
        return this.native.selectedRanges();
    }
    closePersistentEditor(item) {
        this.native.closePersistentEditor(item.native);
    }
    editItem(item) {
        this.native.editItem(item.native);
    }
    setCellWidget(row, column, widget) {
        this.native.setCellWidget(row, column, widget.native);
        this.items.add(widget);
    }
    setItem(row, column, item) {
        this.native.setItem(row, column, item.native);
        this.items.add(item);
    }
    setHorizontalHeaderItem(column, item) {
        this.native.setHorizontalHeaderItem(column, item.native);
        this.items.add(item);
    }
    setHorizontalHeaderLabels(labels) {
        this.native.setHorizontalHeaderLabels(labels);
    }
    setVerticalHeaderItem(row, item) {
        this.native.setVerticalHeaderItem(row, item.native);
        this.items.add(item);
    }
    setVerticalHeaderLabels(labels) {
        this.native.setVerticalHeaderLabels(labels);
    }
    clear() {
        this.native.clear();
        this.items.clear();
    }
    clearContents() {
        this.native.clearContents();
        this.items.clear();
    }
    insertColumn(column) {
        this.native.insertColumn(column);
    }
    removeColumn(column) {
        this.native.removeColumn(column);
    }
    insertRow(row) {
        this.native.insertRow(row);
    }
    removeRow(row) {
        this.native.removeRow(row);
    }
    scrollToItem(item, hint = QtEnums_1.ScrollHint.EnsureVisible) {
        this.native.scrollToItem(item.native, hint);
    }
    // FROM TABLEVIEW
    hideColumn(column) {
        this.native.hideColumn(column);
    }
    hideRow(row) {
        this.native.hideRow(row);
    }
    resizeColumnToContents(column) {
        this.native.resizeColumnToContents(column);
    }
    resizeColumnsToContents() {
        this.native.resizeColumnsToContents();
    }
    resizeRowToContents(row) {
        this.native.resizeRowToContents(row);
    }
    resizeRowsToContents() {
        this.native.resizeRowsToContents();
    }
    selectColumn(column) {
        this.native.selectColumn(column);
    }
    selectRow(row) {
        this.native.selectRow(row);
    }
    setShowGrid(show) {
        this.native.setShowGrid(show);
    }
    showGrid() {
        return this.native.showGrid();
    }
    showColumn(column) {
        this.native.showColumn(column);
    }
    showRow(row) {
        this.native.showRow(row);
    }
    sortByColumn(column, order) {
        this.native.sortByColumn(column, order);
    }
    setColumnWidth(column, width) {
        this.native.setColumnWidth(column, width);
    }
    setRowHeight(row, height) {
        this.native.setRowHeight(row, height);
    }
    columnCount() {
        return this.native.columnCount();
    }
    rowCount() {
        return this.native.rowCount();
    }
    setColumnCount(count) {
        this.native.setColumnCount(count);
    }
    setRowCount(count) {
        this.native.setRowCount(count);
    }
    setSortingEnabled(enable) {
        this.native.setSortingEnabled(enable);
    }
    isSortingEnabled() {
        return this.native.isSortingEnabled();
    }
}
exports.QTableWidget = QTableWidget;
