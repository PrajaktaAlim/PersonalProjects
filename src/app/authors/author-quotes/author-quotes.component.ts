import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../quotes.service';
import { IQuotes } from '../../Quotes';

@Component({
  selector: 'app-author-quotes',
  templateUrl: './author-quotes.component.html',
  styleUrls: ['./author-quotes.component.css']
})
export class AuthorQuotesComponent implements OnInit 
{
  public quoteAuthor;
  filteredQuotes: Array<IQuotes>; //filteredQuotes=[];
  
  constructor(private quotesService: QuotesService) { }

  ngOnInit() 
  {
    this.quoteAuthor = this.quotesService.GetQuoteAuthor();

    this.quotesService.GetQuotes().subscribe((quotes)=> 
		{
      this.filteredQuotes = [];
      quotes.forEach(quote => 
			{
        if(quote.author.includes(this.quoteAuthor)) 
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
