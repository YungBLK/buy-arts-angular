import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// view

// components
import { NavComponent } from './nav/nav.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HomeComponent } from './home/home.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { ArtistsComponent } from './artists/artists.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [AppComponent, NavComponent, CallToActionComponent, SearchInputComponent, HomeComponent, ArtworksComponent, ArtistsComponent, MyOrdersComponent, SignInComponent, RegisterComponent],
	imports: [BrowserModule, AppRoutingModule, IconsModule, FormsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
