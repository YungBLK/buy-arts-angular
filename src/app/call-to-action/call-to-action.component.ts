import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InterfaceCallToActionButton } from './call-to-action.interface';
@Component({
	selector: 'app-call-to-action',
	templateUrl: './call-to-action.component.html',
	styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent {
  @Output() buttonAction = new EventEmitter();
  
  @Input() content = '';

  @Input() callToActionClasses: InterfaceCallToActionButton = {
    "primary-call-to-action": true,
    "secondary-call-to-action": false,
  };

  buttonOnClick() {
    this.buttonAction.emit()
  }

  constructor() {}

}
