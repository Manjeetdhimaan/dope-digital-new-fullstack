import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { AnimateDirective } from '../directives/animation.directive';

@NgModule({
    declarations: [
        AnimateDirective,
    ],
    exports: [
        AnimateDirective,
    ],

    imports: [
        CommonModule
    ],
    providers: [],
    bootstrap: []
})

export class DirectivesModule {
}
