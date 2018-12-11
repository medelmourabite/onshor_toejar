import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import AuthProvider = firebase.auth.AuthProvider;
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  getUser(cb) {
    this.afAuth.authState.subscribe(user => {
      cb(user);
    });
  }

  signInWithEmail(credentials) {
    console.log("Sign in with email");
    return this.afAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  signUp(credantials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      credantials.email,
      credantials.password
    );
  }

  get authenticated(): Observable<any> {
    return of(this.user !== null);
  }

  getUid() {
    return this.user && this.user.uid;
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  signInWithGoogle() {
    console.log("Sign in with google");
    // return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  signInWithFacebook() {
    console.log("Sign in with fb");
    return this.oauthSignIn(new firebase.auth.FacebookAuthProvider());
  }

  private oauthSignIn(provider: AuthProvider) {
    if (!(<any>window).cordova) {
      console.log("POPUP");
      return this.afAuth.auth.signInWithPopup(provider);
    } else {
      console.log("REDIRECT");
      return this.afAuth.auth.signInWithRedirect(provider).then(() => {
        console.log("SIGN IN WITH REDIRECT");
        return this.afAuth.auth
          .getRedirectResult()
          .then(result => {
            let user = result.user;
            this.user = user;
            console.log("REDIRECT", "SIGNED IN", user);
          })
          .catch(function(error) {
            console.log("REDIRECT", "FAILED", error.message);
          });
      });
    }
  }
}
