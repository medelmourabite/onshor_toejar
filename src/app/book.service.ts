import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Service } from "./service";

@Injectable({
  providedIn: "root"
})
export class BookService extends Service {
  //  url = "http://localhost:3000/api";
  // url = "https://answerbucket.herokuapp.com/api";
  entity = "books";

  constructor(http: HttpClient) {
    super("books", http);
  }

  // newBook(book) {
  //   console.log("new", book);
  //   return this.http.post(this.url + "/books", { item: book, query: {} });
  // }

  // updateBook(id, book) {
  //   console.log("update", book);
  //   return this.http.put(this.url + "/books/" + id, { item: book });
  // }

  // getBooks() {
  //   return this.http.get(this.url + "/books");
  // }

  // getBook(id) {
  //   return this.http.get(this.url + "/books/" + id);
  // }

  // deleteBook(id) {
  //   return this.http.delete(this.url + "/books/" + id);
  // }

  getBooksByAuthor(author) {
    return this.findByQuery({ author });
  }
}
