import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBGcNDlsXOo_GMZdKRW_aYdxLgAtfGq9CU",
	authDomain: "story-telling-app-54912.firebaseapp.com",
	projectId: "story-telling-app-54912",
	storageBucket: "story-telling-app-54912.appspot.com",
	messagingSenderId: "940385195675",
	appId: "1:940385195675:web:4164ae8b9ae1a352a0983e",
	measurementId: "G-5LZ5RT7HQH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
