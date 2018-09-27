import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuotes } from './Quotes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService 
{
  quoteCategory: string;
  quoteAuthor: string;
  quoteToDisplay: IQuotes;
  private _url:string = "/assets/data/Amazing Quotes.json";

  constructor(private http:HttpClient) { }

  GetQuotes():Observable<IQuotes[]>
  {
    return this.http.get<IQuotes[]>(this._url);
  }

  SetQuoteCategory(selectedQuoteCategory: string)
  {
    this.quoteCategory=selectedQuoteCategory;
  }

  GetQuoteCategory()
  {
    return this.quoteCategory;
  }

  SetQuoteAuthor(selectedQuoteAuthor: string)
  {
    this.quoteAuthor=selectedQuoteAuthor;
  }

  GetQuoteAuthor()
  {
    return this.quoteAuthor;
  }

  setQuoteToDisplay(quote:IQuotes)
  {
    this.quoteToDisplay=quote;
  }

  getQuoteToDisplay():IQuotes
  {
    return this.quoteToDisplay;
  }
}
