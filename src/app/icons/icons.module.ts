import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Search } from 'angular-feather/icons';


const icons = {
  Search,
}

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
