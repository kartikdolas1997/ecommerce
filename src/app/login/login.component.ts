import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase/app';
// import { AngularFireAuthModule } from 'angularfire2/auth';

// import auth from 'firebase/app';
// import { auth } from 'firebase/app';

// import {auth} from 'angularfire2/auth'

// import { AngularFirestore } from '@angular/fire/firestore';
// import firebase from "firebase/app";
// import "firebase/auth";

// import * as firebase from 'firebase';
// import firebase from 'firebase/app';

// import { firebase } from '@firebase/app'
// import '@firebase/auth'

// stackOv
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authserv: AuthService) // private afs: AngularFirestore
  {
    firebase.database;
  }

  Login() {
    this.authserv.login();
  }
}
