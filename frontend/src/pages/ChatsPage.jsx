import { auth } from "./firebase";
import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import Chat from "../components/Chat";
const provider = new GoogleAuthProvider();
const ChatsPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const setAuthPersistence = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (error) {
        console.error("Error setting persistence:", error);
      }
      setTimeout(() => {
        document.getElementById("chatbase-bubble-button").style.display =
          "none";
        document.getElementById("ai-fix").style.display = "none";
      }, 1000);
    };
    setAuthPersistence();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.displayName);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User signed out.");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user.displayName);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <button onClick={handleLogout}>Signout</button> <Chat user={user} />
        </>
      ) : (
        <div className="chatsp">
          <button className="books-but" onClick={handleLogin}>
            Continue with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatsPage;
