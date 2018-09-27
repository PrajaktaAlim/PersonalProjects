import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../quotes.service';
import { IQuotes } from '../../Quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit 
{
  public quoteCategory;
  filteredQuotes: Array<IQuotes>; //filteredQuotes=[];
  
  constructor(private quotesService: QuotesService) { }

  ngOnInit() 
  {
    this.quoteCategory = this.quotesService.GetQuoteCategory();

    this.quotesService.GetQuotes().subscribe((quotes)=> 
		{
      this.filteredQuotes = [];
      quotes.forEach(quote => 
			{
        if(quote.category.includes(this.quoteCategory)) 
				{
          this.filteredQuotes.push(quote);
        } 
      })
    }); 
  }

  viewPic(q:IQuotes)
  {
    this.quotesService.setQuoteToDisplay(q);
  }
}
