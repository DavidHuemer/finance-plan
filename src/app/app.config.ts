import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({
    "projectId": "finance-plan-4ab2f",
    "appId": "1:94895274537:web:ae5bfcb81e2a4de7f07a38",
    "storageBucket": "finance-plan-4ab2f.appspot.com",
    "apiKey": "AIzaSyA_-rvUT3oZ-J5UJsoQeX_hbrSJsVGmtzI",
    "authDomain": "finance-plan-4ab2f.firebaseapp.com",
    "messagingSenderId": "94895274537",
    "measurementId": "G-VLBKNL3GB4"
  }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
