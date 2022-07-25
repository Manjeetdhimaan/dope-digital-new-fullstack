import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsDescriptionComponent } from './blogs-description/blogs-description.component';
import { BlogsHeadlineComponent } from './blogs-headline/blogs-headline.component';

const routes: Routes = [
    { path: '', component: BlogsHeadlineComponent},
    { path: ':blog', component: BlogsDescriptionComponent, data: { isBlog: 'BLOGS - Dope Digital' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule {}