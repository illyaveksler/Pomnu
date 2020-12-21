"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWithActivateUvLoop = exports.checkIfNapiExternal = exports.checkIfNativeElement = void 0;
const addon_1 = __importDefault(require("./addon"));
function checkIfNativeElement(arg) {
    const nativeArg = arg;
    return typeof nativeArg === 'object' && nativeArg.type === 'native';
}
exports.checkIfNativeElement = checkIfNativeElement;
function checkIfNapiExternal(arg) {
    return addon_1.default.NUtils.isNapiExternal(arg);
}
exports.checkIfNapiExternal = checkIfNapiExternal;
function noop() {
    return;
}
function wrapWithActivateUvLoop(func) {
    const fn = (...args) => {
        const activateUvLoop = process.activateUvLoop || noop;
        activateUvLoop();
        return func(...args);
    };
    return fn;
}
exports.wrapWithActivateUvLoop = wrapWithActivateUvLoop;
