import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageServicesComponent } from './components/page-services/page-services.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContacComponent } from './components/contac/contac.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageServicesComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    GalleryComponent,
    ContacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
