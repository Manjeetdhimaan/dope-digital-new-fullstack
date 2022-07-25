import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CoresModule } from "../core/core-module";
import { BlogsHeadlineComponent } from "./blogs-headline/blogs-headline.component";
import { BlogsDescriptionComponent } from "./blogs-description/blogs-description.component";
import { BlogsRoutingModule } from "./blogs-routing.module";
import { DirectivesModule } from "src/app/directives/directives-module";
import { ClientsService } from "src/app/services/clients.service";
import { BlogsService } from "src/app/modules/blogs/blogs.service";
import { UIComponentsModule } from "src/app/UI-components/UI-components.module";

@NgModule({
    declarations:[
        BlogsHeadlineComponent,
        BlogsDescriptionComponent
    ],
    
imports:[
    CommonModule,
    RouterModule,
    CoresModule,
    DirectivesModule,
    BlogsRoutingModule,
    UIComponentsModule
 ],
exports: [
    BlogsHeadlineComponent,
    BlogsDescriptionComponent
],
providers: [ClientsService]
})
export class BlogsModule{}