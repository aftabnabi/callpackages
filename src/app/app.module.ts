import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/frontpage/header/header.component';
import { AdComponent } from './components/pages/frontpage/ad/ad.component';
import { SeparatorComponent } from './components/pages/frontpage/separator/separator.component';
import { CreditcardsComponent } from './components/pages/frontpage/creditcards/creditcards.component';
import { FooterComponent } from './components/pages/frontpage/footer/footer.component';
import { FrontpageComponent } from './components/pages/frontpage/frontpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdComponent,
    SeparatorComponent,
    CreditcardsComponent,
    FooterComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
