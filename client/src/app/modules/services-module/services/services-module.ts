import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ServicesComponent } from "./services.component";
import { DirectivesModule } from "src/app/directives/directives-module";
import { ComponentsModule } from "../../components-module";
import { CoresModule } from "../../core/core-module";
import { UIComponentsModule } from "src/app/UI-components/UI-components.module";
import { ServicesRoutingModule } from "../services-routing.module";


@NgModule({
    declarations: [
        ServicesComponent,
    ],

    imports: [
        CommonModule,
        RouterModule,
        DirectivesModule,
        ComponentsModule,
        CoresModule,
        UIComponentsModule,
        ServicesRoutingModule
    ],
    exports: [
        ServicesComponent,
    ],
    providers: []
})

export class ServicesModule { }