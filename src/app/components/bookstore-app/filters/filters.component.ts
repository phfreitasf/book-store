import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  
  @Output() range = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendPriceRange(de: string, ate: string) {
    this.range.emit(`${de}-${ate}`)
  }
}
