import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ClientsService } from "../services/clients.service";
import { DirectivesModule } from "../directives/directives-module";
import { SingleServiceComponent } from "./single-service/single-service.component";
import { LoadingComponent } from './loading/loading.component';


@NgModule({
    declarations: [
        SingleServiceComponent,
        LoadingComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        DirectivesModule
    ],

    exports: [
        SingleServiceComponent,
        LoadingComponent
    ],
    providers: [ClientsService]
})

export class UIComponentsModule { }