import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { IQuotes } from '../Quotes';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit 
{
  quoteToShow:IQuotes;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() 
  {
    this.quoteToShow = this.quotesService.getQuoteToDisplay()
  }

}
