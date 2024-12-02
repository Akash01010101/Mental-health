import { useState, useEffect, useRef } from 'react';
import { db } from '../pages/firebase'; // Import your Firebase configuration
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
const Chats = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const user = props.user
  useEffect(() => {
    const messagesRef = collection(db, 'messages'); // Replace 'messages' with your collection name
    const q = query(messagesRef, orderBy('createdAt', 'asc')); // Order messages by timestamp

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.trim() !== '') {
      try {
        await addDoc(collection(db, 'messages'), {
          message: newMessage,
          createdAt: new Date(),
          sender: user, 
        });
        setNewMessage('');
      } catch (error) {
        console.error('Error adding message:', error);
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender == user ? 'user-message' : 'bot-message'}`}>
           <h3 className='username-c'>{message.sender}</h3> <p>{message.message}</p>
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

export default Chats;
