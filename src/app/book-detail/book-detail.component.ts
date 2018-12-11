import { ChapterService } from "./../chapter.service";
import { BookService } from "./../book.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  id;
  book = {};
  chapters = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private chapterService: ChapterService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getBook(this.id);
  }

  getBook(id) {
    this.bookService.findOne(id).subscribe(ret => {
      this.book = ret["result"];
      this.getChapters(id);
    });
  }

  getChapters(book_id) {
    this.chapterService.getChapterByBook(book_id).subscribe(ret => {
      this.chapters = ret["result"];
    });
  }

  deleteBook(id) {
    console.log("Deleting", id);

    this.bookService.delete(id).subscribe(ret => console.log("DEleted", ret));
  }

  deleteChapter(chapter_id) {
    console.log("chapter to delete", chapter_id);

    this.chapterService
      .delete(chapter_id)
      .subscribe(ret => this.getChapters(this.book["_id"]));
  }
}
