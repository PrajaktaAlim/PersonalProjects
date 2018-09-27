import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { IQuotes } from '../Quotes';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit 
{
  quotes: Array<IQuotes>; //quotes=[];
  constructor(private quotesService: QuotesService) { }

  ngOnInit() 
  {
    this.quotesService.GetQuotes().subscribe(data=>this.quotes=data); 
  }

  viewPic(q:any)
  {
    this.quotesService.setQuoteToDisplay(q);
  }
}
