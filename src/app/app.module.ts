import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { WishListComponent } from './wish-list/wish-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishListComponent,
    UserRegisterComponent,
    UsersListComponent,
    UserEditComponent,
    ConfirmationDialogComponent,
    CurrencyComponent,
    CurrencyConverterComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'wish-list', component: WishListComponent },
      { path: 'register', component: UserRegisterComponent },
      { path: 'users', component: UsersListComponent },
      { path: 'users/edit/:userId', component: UserEditComponent },
      { path: 'currency', component: CurrencyComponent },
      { path: 'currency-converter', component: CurrencyConverterComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/news', component: NewsComponent },
      { path: 'dashboard/news/:articleId', component: ArticleComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: 'error' }
    ]),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
