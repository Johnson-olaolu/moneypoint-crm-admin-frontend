// import * as firebase from "firebase"
import  firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/messaging";
import "firebase/compat/database";
import store from "../store";
import { loadTickets } from "../store/ticketStore";
import { getMessages } from "../store/messageStore";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig)

const db = firebase.database()


const listenForTickets =() => {
  const ticketRef = db.ref("ticket")
  ticketRef.on("value", snapshot => {
    const allTickets :any[] = []
    snapshot.forEach( childSnapshot => {
      allTickets.push(childSnapshot.val())
    })
    store.dispatch(loadTickets(allTickets))
  });
};

const listenForMessages = (ticketRef : string) => {
  const ticketMessageRef = db.ref(`ticket/${ticketRef}/messages`)
  ticketMessageRef.on("value", snapshot => {
    const allMessages : any[] = []
    snapshot.forEach(childSnapshot => {
      allMessages.push(childSnapshot.val())
    })
    store.dispatch(getMessages(allMessages))
  })
}

export const firebaseService = {
  listenForTickets,
  listenForMessages
};
