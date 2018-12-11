import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { AuthorService } from "../author.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    // this.connectWithGoogle();
  }

  connectWithGoogle() {
    console.log("connection essay");
    this.auth.signInWithGoogle().then(res => this.addAuthor(res.user));
  }

  addAuthor(author) {
    if (!author) return;
    const uid = author.uid;
    this.authorService.findByQuery({ uid }).subscribe(ret => {
      const users = ret["resultat"];
      if (!users || users.length == 0) {
        this.authorService.create(author).subscribe(() => {
          console.log("author added ", author.displayName);
        });
      }
    });
    console.log(author);
  }
}
