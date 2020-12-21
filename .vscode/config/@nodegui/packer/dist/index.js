"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
exports.getPacker = (platformName) => {
    switch (platformName) {
        case 'darwin': {
            return require('./darwin');
        }
        case 'win32': {
            return require('./win32');
        }
        case 'linux': {
            return require('./linux');
        }
        default: {
            throw new Error(`Unsupported platform ${process_1.default.platform}`);
        }
    }
};
//# sourceMappingURL=index.js.map