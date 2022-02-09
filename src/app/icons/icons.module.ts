import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Search, Menu } from 'angular-feather/icons';


const icons = {
  Search,
  Menu,
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
