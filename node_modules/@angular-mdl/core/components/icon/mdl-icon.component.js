import { Component, NgModule, ViewEncapsulation } from '@angular/core';
var MdlIconComponent = (function () {
    function MdlIconComponent() {
    }
    return MdlIconComponent;
}());
export { MdlIconComponent };
MdlIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-icon',
                host: {
                    '[class.material-icons]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdlIconComponent.ctorParameters = function () { return []; };
var MDL_ICON_DIRECTIVES = [MdlIconComponent];
var MdlIconModule = (function () {
    function MdlIconModule() {
    }
    MdlIconModule.forRoot = function () {
        return {
            ngModule: MdlIconModule,
            providers: []
        };
    };
    return MdlIconModule;
}());
export { MdlIconModule };
MdlIconModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: MDL_ICON_DIRECTIVES,
                declarations: MDL_ICON_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlIconModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-icon.component.js.map