import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCFqBqZ-7EVgo4u6BvZENv8RflasBi8rK0",
  authDomain: "destino-viajes.firebaseapp.com",
  projectId: "destino-viajes",
  storageBucket: "destino-viajes.appspot.com",
  messagingSenderId: "1075963432238",
  appId: "1:1075963432238:web:2a3e8bff9d482fa20ebebf",
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)
