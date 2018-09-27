import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { IQuotes } from '../Quotes';

@Component({
  selector: 'app-quote-of-the-day',
  templateUrl: './quote-of-the-day.component.html',
  styleUrls: ['./quote-of-the-day.component.css']
})
export class QuoteOfTheDayComponent implements OnInit 
{
  public d;
  public x;
  filteredQuotes: Array<IQuotes>; //filteredQuotes=[];

  constructor(private quotesService: QuotesService) { }

  ngOnInit() 
  {
    this.d=new Date();
    this.x=this.d.getDate();

    this.quotesService.GetQuotes().subscribe((quotes)=> 
		{
      this.filteredQuotes = [];
      quotes.forEach(quote => 
			{
        this.filteredQuotes.push(quote); 
      })
    }); 
  }

}
