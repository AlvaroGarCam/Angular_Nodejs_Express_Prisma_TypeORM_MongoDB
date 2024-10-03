import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

import { ShowAuthedDirective } from '../app/shared/show-authed.directive';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent, HeaderComponent } from './shared/layout/index';
import { SharedModule } from './shared//shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    AuthModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }