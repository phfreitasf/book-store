import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "../product-list/model/Book"
import { Observable } from "rxjs";

@Injectable()

export class BookService {
    private apiUrl = "https://localhost:5001/api/bookstore"

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    constructor(private httpClient: HttpClient) { }

    getBook(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.apiUrl)
    }
}