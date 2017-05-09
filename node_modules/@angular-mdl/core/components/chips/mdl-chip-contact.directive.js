import { Directive, Optional, forwardRef, Inject } from '@angular/core';
import { MdlChipComponent } from './mdl-chip.component';
import { MdlStructureError } from '../common/mdl-error';
var MdlChipContactDirective = (function () {
    function MdlChipContactDirective(mdlChipComponent) {
        this.mdlChipComponent = mdlChipComponent;
    }
    MdlChipContactDirective.prototype.ngOnInit = function () {
        if (!this.mdlChipComponent) {
            throw new MdlStructureError('mdl-chip-contact', 'mdl-chip');
        }
    };
    return MdlChipContactDirective;
}());
export { MdlChipContactDirective };
MdlChipContactDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdl-chip-contact]',
                host: {
                    '[class.mdl-chip__contact]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlChipContactDirective.ctorParameters = function () { return [
    { type: MdlChipComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return MdlChipComponent; }),] },] },
]; };
//# sourceMappingURL=mdl-chip-contact.directive.js.map