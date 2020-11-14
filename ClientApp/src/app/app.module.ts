import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import icons from '../assets/svg/svg-icons';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PrateleiraSectionComponent } from './prateleira-section/prateleira-section.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HeaderMenuComponent,
    PrateleiraSectionComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    SvgIconsModule.forRoot({
      icons
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
