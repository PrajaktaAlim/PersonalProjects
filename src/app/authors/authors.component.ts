import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit 
{
  public selectedAuthor;
  authors_set=new Set();

  constructor(private quotesService: QuotesService) { }

  ngOnInit() 
  {
    this.quotesService.GetQuotes().subscribe((quotes)=> 
		{
      quotes.forEach(quote => 
			{
          this.authors_set.add(quote.author);
      })
    });
  }

  selectAuthor(author: string)
  {
    this.selectedAuthor = author;
  }

  ngOnDestroy()
  {
    this.quotesService.SetQuoteAuthor(this.selectedAuthor);
  }
}
