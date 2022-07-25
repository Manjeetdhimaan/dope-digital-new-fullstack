import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { DirectivesModule } from "src/app/directives/directives-module";
import { UIComponentsModule } from "src/app/UI-components/UI-components.module";

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
    ],
    
imports:[
    CommonModule,
    RouterModule,
    DirectivesModule,
    UIComponentsModule  
],
exports: [
    HeaderComponent,
    FooterComponent,
],
providers: []
})

export class CoresModule{}