import { Component } from '@angular/core';
import appData from "../../data/arts";
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	constructor() { }
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


	searchForm = new FormGroup({
		search: new FormControl(''),
		priceRange: new FormControl(''), 
	})

	onSubmit() {
		console.log(this.searchForm.value);
	}

	formatPriceRange(range: { id: Number, min: Number, max?: Number}) {
		return range.max ? `R$: ${range.min} - R$: ${range.max}` : `R$: ${range.min}`;
	}
 
    handleButtonClick() {
      
    } 
}
