import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { QuotesComponent } from './categories/quotes/quotes.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorQuotesComponent } from './authors/author-quotes/author-quotes.component';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent},
  { path: 'quotes', component: QuotesComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'author-quotes', component: AuthorQuotesComponent},
  { path: 'quote-of-the-day', component: QuoteOfTheDayComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'show-quote', component: ShowQuoteComponent },
  { path: 'home', component: HomeComponent },
  //Default component
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //wildcard component
  { path: '**', component: InvalidPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
