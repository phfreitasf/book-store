import { Component, Input, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: Array<Book> = []
  filter: Array<Book> = []
  @Input() priceFilter: any = []
  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this.bookService.getBook().subscribe(result => this.livros = result)
  }

  filterPrice(deAte: string) {
    this.priceFilter = deAte.split('-')
    if ((this.priceFilter[0] == 0 && this.priceFilter[1] == 0) || (!this.priceFilter[0] || !this.priceFilter[1])) {
      this.getBooks()
      return
    }

    if (this.priceFilter[0] > this.priceFilter[1]) {
      let temp = this.priceFilter[1]
      this.priceFilter[1] = this.priceFilter[0]
      this.priceFilter[1] = temp
    }
    this.livros = this.filter.filter(value => value.price >= this.priceFilter[0] && value.price <= this.priceFilter[1])
  }

  filteredBooks() {
    this.bookService.getBook().subscribe(result => this.filter = result)
  }
}
