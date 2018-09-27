import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit 
{
  public selectedCategory;
  
  constructor(private quotesService: QuotesService) { }
  
  ngOnInit() 
  {  
  }

  selectCategory(category: string)
  {
    this.selectedCategory = category;
  }

  ngOnDestroy()
  {
    this.quotesService.SetQuoteCategory(this.selectedCategory);
  }
}
