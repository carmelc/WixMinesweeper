import { NgModule } from '@angular/core';
import { MdlTooltipComponent, MdlSimpleTooltipComponent } from './mdl-tooltip.component';
import { MdlTooltipDirective, MdlTooltipLargeDirective } from './mdl-tooltip.directive';
var MDL_TOOLTIP_DIRECTIVES = [
    MdlTooltipComponent,
    MdlTooltipLargeDirective,
    MdlTooltipDirective
];
export * from './mdl-tooltip.component';
export * from './mdl-tooltip.directive';
var MdlTooltipModule = (function () {
    function MdlTooltipModule() {
    }
    MdlTooltipModule.forRoot = function () {
        return {
            ngModule: MdlTooltipModule,
            providers: []
        };
    };
    return MdlTooltipModule;
}());
export { MdlTooltipModule };
MdlTooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: MDL_TOOLTIP_DIRECTIVES,
                declarations: MDL_TOOLTIP_DIRECTIVES.concat([MdlSimpleTooltipComponent]),
                entryComponents: [MdlSimpleTooltipComponent]
            },] },
];
/** @nocollapse */
MdlTooltipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map