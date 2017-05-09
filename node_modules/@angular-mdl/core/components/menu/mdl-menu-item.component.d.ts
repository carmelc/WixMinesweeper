import { ElementRef, Renderer2 } from '@angular/core';
import { MdlMenuComponent } from './mdl-menu.component';
export declare class MdlMenuItemComponent {
    private elementRef;
    private renderer;
    private mdlMenu;
    private _disabled;
    disabled: boolean;
    element: HTMLElement;
    constructor(elementRef: ElementRef, renderer: Renderer2, mdlMenu: MdlMenuComponent);
    onClick($event: any): void;
    onTouch($event: any): void;
}
