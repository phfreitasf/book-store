import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {

  @ViewChild(ProductListComponent) child!: ProductListComponent

  deAte: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  getRange(deAte: string) {
    this.deAte = deAte
    this.child.filteredBooks()
    setTimeout(() => {
      this.child.filterPrice(deAte)
    }, 1000)
  }
}
