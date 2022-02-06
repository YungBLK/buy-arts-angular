import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { ArtistsComponent } from './artists/artists.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'artworks', component:  ArtworksComponent },
	{ path: 'artists', component: ArtistsComponent },
	{ path: 'myorders', component: MyOrdersComponent },
	{ path: 'singin', component: SignInComponent },
	{ path: 'register', component: RegisterComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
