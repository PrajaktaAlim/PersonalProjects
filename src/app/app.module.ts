import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesService } from './quotes.service';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { QuotesComponent } from './categories/quotes/quotes.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorQuotesComponent } from './authors/author-quotes/author-quotes.component';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InvalidPageComponent,
    CategoriesComponent,
    QuotesComponent,
    AuthorsComponent,
    AuthorQuotesComponent,
    QuoteOfTheDayComponent,
    PicturesComponent,
    ShowQuoteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
