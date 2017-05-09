import { QueryList } from '@angular/core';
import { MdlDialogReference } from './mdl-dialog.service';
import { IMdlDialogAction, IMdlSimpleDialogConfiguration } from './mdl-dialog-configuration';
import { MdlButtonComponent } from '../button/mdl-button.component';
export declare class MdlSimpleDialogComponent {
    dialogConfiguration: IMdlSimpleDialogConfiguration;
    dialog: MdlDialogReference;
    buttons: QueryList<MdlButtonComponent>;
    constructor(dialogConfiguration: IMdlSimpleDialogConfiguration, dialog: MdlDialogReference);
    actionClicked(action: IMdlDialogAction): void;
    onEsc(): void;
}
