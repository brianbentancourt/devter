import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCURuFysprzLZJ23G1eqogkbumqri6eoH0",
    authDomain: "devteruy.firebaseapp.com",
    projectId: "devteruy",
    storageBucket: "devteruy.appspot.com",
    messagingSenderId: "1010418949589",
    appId: "1:1010418949589:web:ffc20943f21bf7a788f15c"
}

if (!firebase.apps || !firebase.apps.length)
    firebase.initializeApp(firebaseConfig)

export const loginWithGitHub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
}