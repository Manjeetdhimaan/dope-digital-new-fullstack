import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DirectivesModule } from "src/app/directives/directives-module";
import { ComponentsModule } from "../components-module";
import { CoresModule } from "../core/core-module";
import { ClientsComponent } from "./clients/clients.component";
import { ClientsRoutingModule } from "./clients-routing.module";
import { ClientsService } from "src/app/services/clients.service";
import { UIComponentsModule } from "src/app/UI-components/UI-components.module";


@NgModule({
    declarations: [
        ClientsComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        DirectivesModule,
        ComponentsModule,
        CoresModule,
        ClientsRoutingModule,
        UIComponentsModule
    ],
    exports: [
        ClientsComponent
    ],
    providers: [ClientsService]
})

export class ClientsModule { }