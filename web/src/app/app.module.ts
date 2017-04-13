import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {AppComponent}   from './components/main-component/app.component';
import {HttpModule}     from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";
import {NavigationComponent} from "./components/navigation/nav.component";
import {SignUpComponent} from "./components/registration/sign-up.component";
import {SignInComponent} from "./components/login/sign-in.component";
import {NotAuthGuard} from "./services/not-auth-guard.service";
import {UserService} from "./services/user.service";
import {CustomObservable} from "./services/custom-observable.service";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {SellersListComponent} from "./components/sellers-list/sellers-list.component";
import {SellersCardComponent} from "./components/seller-card/seller-card.component";
import {SellerService} from "./services/seller.service";
import {GameInfoService} from "./services/game-info.service";
import {GameInfoComponent} from "./components/game-info/game-info.component";
import {PayPageComponent} from "./components/pay-page/pay-page.component";
import {BuyService} from "./services/buy.service";
import {BuyGuard} from "./services/buy-guard.service";
import {AuthService} from "./services/auth.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    SignUpComponent,
    SignInComponent,
    MainPageComponent,
    SellersListComponent,
    SellersCardComponent,
    GameInfoComponent,
    PayPageComponent
  ],
  providers: [
    NotAuthGuard,
    UserService,
    CustomObservable,
    SellerService,
    GameInfoService,
    BuyService,
    BuyGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
