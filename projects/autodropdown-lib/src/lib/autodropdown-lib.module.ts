import { NgModule } from '@angular/core';
// Angular Animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AutodropdownLibComponent } from './autodropdown-lib.component';
import { FilterValue } from './autodropdown-lib.pipe';



@NgModule({
  declarations: [
    AutodropdownLibComponent,
    FilterValue
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [AutodropdownLibComponent]
})
export class AutodropdownLibModule { }
