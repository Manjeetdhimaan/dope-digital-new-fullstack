import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DirectivesModule } from "src/app/directives/directives-module";
import { AllServicesComponent } from "./all-services.component";
import { CoresModule } from "src/app/modules/core/core-module";
import { AllServicesRoutingModule } from "./all-services.routing.module";
import { UIComponentsModule } from "src/app/UI-components/UI-components.module";
import { ComponentsModule } from "src/app/modules/components-module";


@NgModule({
    declarations: [
        AllServicesComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        DirectivesModule,
        ComponentsModule,
        CoresModule,
        UIComponentsModule,
        AllServicesRoutingModule
    ],
    exports: [
        AllServicesComponent
    ],
    providers: []
})

export class AllServicesModule { }