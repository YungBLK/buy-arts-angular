import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	firstButtonContent = 'Explore Artworks';
  secondButtonContent = 'Start Seling';

	firstButtonCallToActionClasses = {
		"primary-call-to-action": false,
		"secondary-call-to-action": true,
	};
	secondButtonCallToActionClasses = {
		"primary-call-to-action": true,
		"secondary-call-to-action": false,
	};
  
  constructor(private router: Router) { }
  
    handleButtonClick() {
      this.router.navigateByUrl('/register')
    } 
}
