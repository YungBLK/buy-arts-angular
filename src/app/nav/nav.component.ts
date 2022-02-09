import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent {
	isMobileSize = false;
	buttonContent = 'Register';
	callToActionClasses = {
		"primary-call-to-action": true,
		"secondary-call-to-action": false,
	};
	
	constructor(private router: Router) {}
	
	handleButtonClick() {
		this.router.navigateByUrl('/register')
	} 
	handleMobileStyle() {
		this.isMobileSize = !this.isMobileSize;
	}
 }
