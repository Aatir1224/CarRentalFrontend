import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ViewpageComponent, ReceiptComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
