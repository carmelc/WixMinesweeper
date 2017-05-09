import { Component, Input, NgModule, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { toBoolean } from '../common/boolean-property';
import { CommonModule } from '@angular/common';
var MdlProgressComponent = (function () {
    function MdlProgressComponent() {
        this.progress = 0;
        this.buffer = 100;
        this.aux = 0;
        this._indeterminate = false;
    }
    Object.defineProperty(MdlProgressComponent.prototype, "indeterminate", {
        get: function () { return this._indeterminate; },
        set: function (value) { this._indeterminate = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes['buffer']) {
            this.setBuffer(changes['buffer'].currentValue);
        }
    };
    MdlProgressComponent.prototype.setBuffer = function (b) {
        this.aux = 100 - b;
    };
    return MdlProgressComponent;
}());
export { MdlProgressComponent };
MdlProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdl-progress',
                host: {
                    '[class.mdl-progress]': 'true',
                    '[class.mdl-progress__indeterminate]': 'indeterminate===true'
                },
                template: "\n    <div class=\"progressbar bar bar1\" [style.width]=\"progress + '%'\"></div>\n    <div class=\"bufferbar bar bar2\" [style.width]=\"buffer + '%'\"></div>\n    <div class=\"auxbar bar bar3\" [ngStyle]=\"{'width': aux+'%'}\"></div>\n  ",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
MdlProgressComponent.ctorParameters = function () { return []; };
MdlProgressComponent.propDecorators = {
    'progress': [{ type: Input },],
    'buffer': [{ type: Input },],
    'aux': [{ type: Input },],
    'indeterminate': [{ type: Input },],
};
var MDL_PROGRESS_DIRECTIVES = [MdlProgressComponent];
var MdlProgressModule = (function () {
    function MdlProgressModule() {
    }
    MdlProgressModule.forRoot = function () {
        return {
            ngModule: MdlProgressModule,
            providers: []
        };
    };
    return MdlProgressModule;
}());
export { MdlProgressModule };
MdlProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: MDL_PROGRESS_DIRECTIVES,
                declarations: MDL_PROGRESS_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlProgressModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-progress.component.js.map