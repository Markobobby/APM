import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { registerLocaleData } from '@angular/common'
import localeFr from '@angular/common/locales/fr'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.compenent';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID , useValue: 'fr-FR' }
  ]
})
export class AppModule { }
