import { FroalaViewModule } from "angular-froala-wysiwyg";
import { FroalaEditorModule } from "angular-froala-wysiwyg";
import { BookService } from "./book.service";
import { BookAddComponent } from "./book-add/book-add.component";
import { ChapterEditComponent } from "./chapter-edit/chapter-edit.component";
import { ChapterComponent } from "./chapter/chapter.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BooksComponent } from "./books/books.component";
import { LoginComponent } from "./login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRootingModule } from "./app-rooting.module";
import { RegisterComponent } from "./register/register.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "../../node_modules/@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { config } from "../environments/config";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    BookDetailComponent,
    BookAddComponent,
    ChapterComponent,
    ChapterEditComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRootingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
