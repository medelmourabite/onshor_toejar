import { BookService } from "./../book.service";
import { ChapterService } from "./../chapter.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-chapter",
  templateUrl: "./chapter.component.html",
  styleUrls: ["./chapter.component.css"]
})
export class ChapterComponent implements OnInit {
  id;
  book = {};
  chapter = {};
  user;
  comment;
  comments = [];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private bookService: BookService,
    private chapterService: ChapterService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.getBook(this.id);
      this.getChapter(this.id);
      this.getComments(this.id);
    }
  }

  getComments(chapter_id) {
    this.comments = [];
  }

  getBook(id) {
    console.log("Book_ID", id);
    if (id) {
      this.bookService.findOne(id).subscribe(ret => {
        this.book = ret["result"];
      });
    }
  }

  getChapter(id) {
    console.log("ID", id);
    if (id) {
      this.chapterService.findOne(id).subscribe(ret => {
        this.chapter = ret["result"];
      });
    }
  }

  delete(id) {
    this.chapterService
      .delete(id)
      .subscribe(ret => console.log("DEleted", ret));
  }

  saveComment() {}
}
