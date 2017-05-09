import { NgModule } from '@angular/core';
import { MdlMenuComponent, MdlMenuRegisty } from './mdl-menu.component';
import { MdlMenuItemComponent } from './mdl-menu-item.component';
import { MdlMenuItemFullBleedDeviderComponent } from './mdl-menu-item.directive';
import { CommonModule } from '@angular/common';
import { MdlToggleMenuDirective } from './mdl-toggle-menu.directive';
var MDL_MENU_DIRECTIVES = [
    MdlMenuComponent,
    MdlMenuItemComponent,
    MdlMenuItemFullBleedDeviderComponent,
    MdlToggleMenuDirective
];
export * from './mdl-menu.component';
export * from './mdl-menu-item.component';
export * from './mdl-menu-item.directive';
var MdlMenuModule = (function () {
    function MdlMenuModule() {
    }
    MdlMenuModule.forRoot = function () {
        return {
            ngModule: MdlMenuModule,
            providers: [MdlMenuRegisty]
        };
    };
    return MdlMenuModule;
}());
export { MdlMenuModule };
MdlMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: MDL_MENU_DIRECTIVES,
                declarations: MDL_MENU_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlMenuModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map