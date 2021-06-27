import { BrowserModule, HAMMER_LOADER } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AddressTabComponent } from './pages/user/tabs/address-tab/address-tab.component';
import { RatingTabComponent } from './pages/user/tabs/rating-tab/rating-tab.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app.routing';
import { FooterComponent } from './components/footer/footer.component';
import { SubCategoryComponent } from './pages/subcategory/subcategory-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CartComponent } from './pages/cart/cart.component';


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
    OrderTabItemComponent,
    FavoritesComponent,
    AddressTabComponent,
    RatingTabComponent,
    RatingStarsComponent,
    FooterComponent,
    SubCategoryComponent,
    SearchBarComponent,
    CartComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'Client-App' }),
    HttpClientModule,
    FormsModule,
    SvgIconsModule.forRoot({
      icons
    }),
    BrowserAnimationsModule,
    MatTabsModule,
    AuthModule.forRoot({
      domain:'marketplace-sa.us.auth0.com',
      clientId:'KQIw0ZfvnLW1GYD47Kn0eLk6MtsshXzA',
    }),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HAMMER_LOADER,
      useValue: async () => {
        return import('hammerjs/hammer');
      },
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
