import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.compenent';
import { ProductsDetailComponent } from './products/products-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductsDetailComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
