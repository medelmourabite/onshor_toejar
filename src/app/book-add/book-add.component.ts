import { ActivatedRoute } from "@angular/router";
import { BookService } from "./../book.service";
import { Book } from "./../model/Book";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-book-add",
  templateUrl: "./book-add.component.html",
  styleUrls: ["./book-add.component.css"]
})
export class BookAddComponent implements OnInit {
  book = {
    title: "",
    summary: "",
    createdAt: new Date(),
    rating: 0,
    author: "1111111"
  };

  id = "";

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getBook(this.id);
  }

  getBook(id) {
    console.log("ID", id);

    if (id) {
      this.bookService.findOne(id).subscribe(ret => {
        this.book = ret["result"];
        console.log("GET", ret);
      });
    }
  }

  save() {
    console.log(this.book);
    if (this.id) {
      delete this.book["_id"];
      this.bookService
        .update(this.id, this.book)
        .subscribe(ret => console.log(ret));
    } else {
      this.bookService.create(this.book).subscribe(ret => console.log(ret));
    }
  }
}
