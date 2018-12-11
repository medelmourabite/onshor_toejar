import { BookAddComponent } from "./book-add/book-add.component";
import { ChapterEditComponent } from "./chapter-edit/chapter-edit.component";
import { ChapterComponent } from "./chapter/chapter.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { RegisterComponent } from "./register/register.component";
import { BooksComponent } from "./books/books.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "books", component: BooksComponent },
  { path: "books/:id", component: BookDetailComponent },
  { path: "books/:id/edit", component: BookAddComponent },
  { path: "books_new", component: BookAddComponent },
  { path: "chapters/:id", component: ChapterComponent },
  { path: "chapters_new/:book_id", component: ChapterEditComponent },
  { path: "chapters/:id/edit", component: ChapterEditComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "*", redirectTo: "login", pathMatch: "full" } 
  // { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  // { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  // { path: "user", component: UserComponent, resolve: { data: UserResolver } }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRootingModule {}
