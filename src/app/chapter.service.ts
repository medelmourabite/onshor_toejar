import { Service } from "./service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChapterService extends Service {
  constructor(http: HttpClient) {
    super("chapters", http);
  }

  getChapterByBook(book) {
    return this.findByQuery({ book });
  }
}
