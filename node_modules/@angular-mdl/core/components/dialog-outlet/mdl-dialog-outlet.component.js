import { Component, ViewContainerRef, forwardRef, Inject } from '@angular/core';
import { MdlDialogOutletService } from './mdl-dialog-outlet.service';
// the componnet is used outside the app-root. injecting MdlDialogService would not work
// this component is not exported - needs to be instanciated by
//    let x = this.appRef.bootstrap(MdlDialogOutletComponent);
var MdlDialogOutletComponent = (function () {
    function MdlDialogOutletComponent(vCRef) {
        this.vCRef = vCRef;
    }
    Object.defineProperty(MdlDialogOutletComponent.prototype, "viewContainerRef", {
        get: function () {
            return this.vCRef;
        },
        enumerable: true,
        configurable: true
    });
    return MdlDialogOutletComponent;
}());
export { MdlDialogOutletComponent };
MdlDialogOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'dialog-outlet',
                template: ''
            },] },
];
/** @nocollapse */
MdlDialogOutletComponent.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
// the component is used inside the app-root. this is possible because this component
// is exported from the module
var MdlDialogInnerOutletComponent = (function () {
    function MdlDialogInnerOutletComponent(vCRef, service) {
        this.vCRef = vCRef;
        service.setDefaultViewContainerRef(vCRef);
    }
    return MdlDialogInnerOutletComponent;
}());
export { MdlDialogInnerOutletComponent };
MdlDialogInnerOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'dialog-outlet',
                template: ''
            },] },
];
/** @nocollapse */
MdlDialogInnerOutletComponent.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: MdlDialogOutletService, decorators: [{ type: Inject, args: [forwardRef(function () { return MdlDialogOutletService; }),] },] },
]; };
//# sourceMappingURL=mdl-dialog-outlet.component.js.map