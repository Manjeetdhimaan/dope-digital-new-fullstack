import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { HomeComponent } from './home-module/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}