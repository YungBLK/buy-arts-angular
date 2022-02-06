import { Component, Input, OnInit } from '@angular/core';
import { InterfaceCallToActionButton } from './button.interface';
@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() content = '';
  @Input() callToActionClasses: InterfaceCallToActionButton = {
    "primary-call-to-action": true,
    "secondary-call-to-action": false,
  };

  constructor() {}

}
