import { BookService } from "./../book.service";
import { ChapterService } from "./../chapter.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-chapter-edit",
  templateUrl: "./chapter-edit.component.html",
  styleUrls: ["./chapter-edit.component.css"]
})
export class ChapterEditComponent implements OnInit {
  chapter = {
    // _id: "",
    title: "",
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 0,
    book: ""
  };
  book;
  book_id;
  id;

  public options: Object = {
    placeholderText: "Once upon a time",
    height: 600
    // languages: "ar"
    // toolbarButtons: ["lang"]
  };
  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.book_id = this.route.snapshot.paramMap.get("book_id");
    this.id = this.route.snapshot.paramMap.get("id");
    this.getBook(this.book_id);
    this.getChapter(this.id);

    // $.FroalaEditor.DefineIcon("Ar", { NAME: "Ar" });
    // $.FroalaEditor.RegisterCommand("lang", {
    //   title: "Hello",
    //   focus: false,
    //   undo: false,
    //   refreshAfterCallback: false,

    //   callback: () => {
    //     alert("Hello!", this);
    //   }
    // });
  }

  getBook(id) {
    console.log("Book_ID", id);
    if (id) {
      this.bookService.findOne(id).subscribe(ret => {
        this.book = ret["result"];
        console.log("GET", ret);
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

  save() {
    console.log(this.book);
    if (this.id) {
      delete this.chapter["_id"];
      this.chapterService
        .update(this.id, this.chapter)
        .subscribe(ret => console.log(ret));
    } else {
      this.chapter["book"] = this.book_id;
      this.chapterService
        .create(this.chapter)
        .subscribe(ret => console.log(ret));
    }
  }

  delete(id) {
    this.chapterService
      .delete(id)
      .subscribe(ret => console.log("DEleted", ret));
  }
}
