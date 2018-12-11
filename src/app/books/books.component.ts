import { BookService } from "./../book.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.find().subscribe(data => {
      console.log(data);
      this.books = data["result"];
    });
  }
}
