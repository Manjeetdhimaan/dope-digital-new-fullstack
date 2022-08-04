import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DirectivesModule } from "src/app/directives/directives-module";
import { AboutUsComponent } from "./about-us/about-us.component";
import { NewAboutComponent } from "./new-about/new-about.component";
import { AboutRoutingModule } from "./about-routing.module";
import { ComponentsModule } from "../components-module";
import { CoresModule } from "../core/core-module";


@NgModule({
    declarations: [
        AboutUsComponent,
        NewAboutComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        DirectivesModule,
        AboutRoutingModule,
        ComponentsModule,
        CoresModule
    ],
    exports: [
        AboutUsComponent,
        NewAboutComponent
    ],
    providers: []
})

export class AboutModule { }