import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageServicesComponent } from './components/page-services/page-services.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContacComponent } from './components/contac/contac.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/barberia',
    pathMatch:"full"
  },
  {
    path:'barberia',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'servicios',
    component:PageServicesComponent
  },
  {
    path:'galeria',
    component:GalleryComponent
  },
  {
    path:'contacto',
    component:ContacComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
