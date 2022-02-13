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
		"primary-call-to-action": false,
		"secondary-call-to-action": true,
	};
	
	constructor(private router: Router) {}
	
	handleButtonClick() {
		this.router.navigateByUrl('/register')
	} 
	handleMobileStyle() {
		this.isMobileSize = !this.isMobileSize;
	}
 }
