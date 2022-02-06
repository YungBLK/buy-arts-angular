import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// view

// components
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HomeComponent } from './home/home.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { ArtistsComponent } from './artists/artists.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [AppComponent, NavComponent, ButtonComponent, SearchInputComponent, HomeComponent, ArtworksComponent, ArtistsComponent, MyOrdersComponent, SignInComponent, RegisterComponent],
	imports: [BrowserModule, AppRoutingModule, IconsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
