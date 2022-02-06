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

@NgModule({
	declarations: [AppComponent, NavComponent, ButtonComponent, SearchInputComponent],
	imports: [BrowserModule, AppRoutingModule, IconsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
