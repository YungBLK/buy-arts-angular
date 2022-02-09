import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  searchForm = new FormGroup({
    appSearchControl: new FormControl(''),
  })

  onSubmit() {
    console.log("submitado", this.searchForm.value);
  }

  constructor() { 
  }
}
