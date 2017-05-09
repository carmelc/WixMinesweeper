export function callNative(el, method, arg) {
    if (arg === void 0) { arg = null; }
    /* istanbul ignore next */ // if this code runs in browser this is allways true!
    if (el[method]) {
        el[method](arg);
    }
}
//# sourceMappingURL=native-support.js.map