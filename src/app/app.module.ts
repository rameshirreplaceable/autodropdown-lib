import { AutodropdownLibModule } from './../../projects/autodropdown-lib/src/lib/autodropdown-lib.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AutodropdownLibModule } from 'autodropdown-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AutodropdownLibModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
