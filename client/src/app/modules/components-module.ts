import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { CoresModule } from "./core/core-module";
import { ClientsService } from "../services/clients.service";
import { DirectivesModule } from "../directives/directives-module";
import { UIComponentsModule } from "../UI-components/UI-components.module";
import { BlogsModule } from "./blogs/blogs-module";


@NgModule({
    declarations: [
        ContactComponent,
        PagenotfoundComponent,
    ],

    imports: [
        CommonModule,
        RouterModule,
        CoresModule,
        DirectivesModule,
        UIComponentsModule,
    ],

    exports: [
        ContactComponent,
        PagenotfoundComponent,
    ],
    providers: [ClientsService]
})

export class ComponentsModule { }