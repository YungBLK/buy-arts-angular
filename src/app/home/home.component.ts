import { Component } from '@angular/core';
import appData from "../../data/arts";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	appData = appData;
	
	firstButtonContent = 'Explore Artworks';
 	secondButtonContent = 'Start Seling';
	searchButtonContent = 'Search';
	expandContentButton = 'View All';
	expandTextButton = 'Continue reading';
	joinUsButtonContent = 'Join Us';

	firstButtonCallToActionClasses = {
		"primary-call-to-action": true,
		"secondary-call-to-action": false,
	};
	secondButtonCallToActionClasses = {
		"primary-call-to-action": false,
		"secondary-call-to-action": true,
	};
  
  constructor() { }
  
    handleButtonClick() {
      
    } 
}
