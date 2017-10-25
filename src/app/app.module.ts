import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegEditComponent } from './keg-edit/keg-edit.component';
import { KegAddComponent } from './keg-add/keg-add.component';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    KegEditComponent,
    KegAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
