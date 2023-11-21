import { Injectable } from '@angular/core';
import { Firestore, doc } from '@angular/fire/firestore';
import { collection, getDoc } from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fs: Firestore, private auth: Auth) {}

  getAllUsers() {
    const userRef = doc(this.fs, 'users');
    getDoc(userRef);
  }

  // getOneUser(user) {
  //   const userRef = doc(this.fs, 'users');
  //   const allUsers = getDoc(userRef);
  //   allUsers.map(user => {
  //     user.uid === user.uid
  //   });
  // }
}
