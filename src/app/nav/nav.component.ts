import { Component } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent {
	ButtonContent = 'Register';
	callToActionClasses = {
		"primary-call-to-action": true,
		"secondary-call-to-action": false,
	};


	constructor() {}
}
