import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared Components
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { PokeListComponent } from './poke-list/poke-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchBoxComponent,
    PokeListComponent
  ],
  exports: [
    HeaderComponent,
    SearchBoxComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
