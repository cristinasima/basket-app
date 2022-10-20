import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemsDataService } from './services/items-data.service';
import { ProductsPageComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
    ItemsDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
