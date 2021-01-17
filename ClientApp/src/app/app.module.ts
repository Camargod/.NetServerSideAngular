import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import icons from '../assets/svg/svg-icons';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { PrateleiraSectionComponent } from './components/prateleira-section/prateleira-section.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './pages/user/user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OrderTabComponent } from './pages/user/tabs/order-tab/order-tab.component';
import { OrderTabItemComponent } from './pages/user/tabs/order-tab/order-tab-item/order-tab-item.component';


@NgModule({
  declarations: [	
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HeaderMenuComponent,
    PrateleiraSectionComponent,
    LoginComponent,
    ProductCardComponent,
    CategoryPageComponent,
    UserComponent,
    OrderTabComponent,
    OrderTabItemComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path:'login',component: LoginComponent},
      { path:'category/:categoryName', component: CategoryPageComponent},
      { path:'my_profile', component: UserComponent}
    ]),
    SvgIconsModule.forRoot({
      icons
    }),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
