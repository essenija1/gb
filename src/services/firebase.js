// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signUserWithEmailAndPassword, 
    signOut, 
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwX0m1WAX0OtVM3l_PBQ32patsEfBUCbw",
  authDomain: "gb2302-ec3f9.firebaseapp.com",
  projectId: "gb2302-ec3f9",
  storageBucket: "gb2302-ec3f9.appspot.com",
  messagingSenderId: "757197644887",
  appId: "1:757197644887:web:701349be3288f23304ef12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) => 
       createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) => 
       signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth); 

export const db = getDatabase(app);
export const profileRef = ref(db, 'profile');
export const getProfileNameRef = (userId) = ref(db, `profile/${userId}name`);
export const profileShowNameRef = ref(db, 'profile/showName');
export const chatsRef = ref(db, 'chats');
export const getChatsRefById = (chatId) => ref(db, `chats/${chatId}`);

export const messagesRef = ref(db, 'message');
export const getMessageListRefByChatId = (chatId) => 
     ref(db, `messages/${chatId}/messageList`);
export const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getMessageRefById = (chatId, msgId) => 
    ref(db, `messages/${chatId}/messageList/${msgId}`);