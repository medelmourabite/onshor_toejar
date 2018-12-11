import { AuthService } from "./../auth.service";
import { AuthorService } from "./../author.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  user;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser(user => {
      this.user = user;
      console.log("user ", user);
    });
  }

  logOut() {
    this.authService.signOut().then(() => {
      console.log("Loged out");
    });
  }
}
