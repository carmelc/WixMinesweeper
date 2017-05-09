import { ElementRef, ModuleWithProviders, Renderer2 } from '@angular/core';
import { MdlCheckboxComponent } from '../checkbox/mdl-checkbox.component';
export declare class MdlIconToggleComponent extends MdlCheckboxComponent {
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
export declare class MdlIconToggleModule {
    static forRoot(): ModuleWithProviders;
}
