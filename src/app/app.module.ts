import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pagination.component';
import { DisplayListComponent } from './components/display-list.component';
import { GameService } from './GameService';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    DisplayListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
