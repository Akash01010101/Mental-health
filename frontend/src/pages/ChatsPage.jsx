import { useState, useEffect, useRef } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
let user = localStorage.getItem("user");
if (user == null) {
  user = Date.now();
  localStorage.setItem("user", user);
}
const ChatsPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.trim() !== "") {
      try {
        await addDoc(collection(db, "messages"), {
          message: newMessage,
          createdAt: new Date(),
          sender: user,
        });
        setNewMessage("");
      } catch (error) {
        console.error("Error adding message:", error);
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.sender == user ? "user-message" : "bot-message"
            }`}
          >
            <p>{message.message}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="cf">
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatsPage;
