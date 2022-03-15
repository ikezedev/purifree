"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// The reason for having the Lift<F> type is so the return type looks better
__exportStar(require("./lift"), exports);
__exportStar(require("./lift2"), exports);
__exportStar(require("./lift2C"), exports);
__exportStar(require("./lift3"), exports);
__exportStar(require("./lift3C"), exports);
__exportStar(require("./lift4"), exports);
__exportStar(require("./lift4C"), exports);
