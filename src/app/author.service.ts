import { HttpClient } from "@angular/common/http";
import { Service } from "./service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthorService extends Service {
  constructor(http: HttpClient) {
    super("authors", http);
  }
}
