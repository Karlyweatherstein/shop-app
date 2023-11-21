import { Injectable, OnDestroy } from '@angular/core';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  UserCredential,
} from 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { collection, addDoc, setDoc } from 'firebase/firestore';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Auth, User, user, authState } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  provider = new GoogleAuthProvider();
  getAuth = getAuth();
  user$ = user(this.getAuth);
  userSubscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private fs: Firestore
  ) {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(aUser);
    });
  }
  login() {
    const returnUrl =
      this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);
    signInWithPopup(this.getAuth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
        }
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        this.saveUser(user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  logout() {
    signOut(this.getAuth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  saveUser(user: any) {
    let data = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
    const userRef = doc(this.fs, 'users', user.uid);

    return setDoc(userRef, data, { merge: true });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
