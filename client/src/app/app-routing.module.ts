import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-module/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: { metaUrl:'', title: 'Dope Digital'}
  },
  { 
    path: '404notfound', component: PagenotfoundComponent, data: { title: 'Page not Found' } 
  },
  {
    path: 'about', loadChildren: () => import('./modules/about/about-module').then(m => m.AboutModule), data: {title: 'ABOUT - Dope Digital', metaUrl:'about'} 
  },
  {
    path: 'clients', loadChildren: () => import('./modules/clients-module/clients-module').then(m => m.ClientsModule), data: {title: 'CLIENTS - Dope Digital', metaUrl:'clients'}
  },
  {
    path: 'services', loadChildren: () => import('./modules/services-module/services/services-module').then(m => m.ServicesModule), data: {title: 'SERVICES - Dope Digital', metaUrl:'services'}
  },
  {
    path: 'blogs',
    loadChildren: () => import('./modules/blogs/blogs-module').then(m => m.BlogsModule),
    data: { title: 'BLOGS - Dope Digital', metaUrl:'blogs', isBlog: 'New' }
  },
  {
    path: 'contact', component: ContactComponent, data: {title: 'CONTACT - Dope Digital', metaUrl:'contact'}
  },
  
  {
    path: ':services',  loadChildren: () => import('./modules/services-module/services/all-services/all-services.module').then(m => m.AllServicesModule), data: {title: 'Services - Dope Digital', metaUrl:'services'}
  },
  
  {
    path: '**', pathMatch: 'full', redirectTo: '404notfound'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
