import { ViewContainerRef, Renderer2, AfterViewInit } from '@angular/core';
export declare class AppendViewContainerRefDirective implements AfterViewInit {
    private viewRef;
    private renderer;
    viewContainerRefToAppend: ViewContainerRef;
    constructor(viewRef: ViewContainerRef, renderer: Renderer2);
    ngAfterViewInit(): void;
}
