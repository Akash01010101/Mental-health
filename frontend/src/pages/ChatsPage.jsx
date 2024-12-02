import { auth } from './firebase';   
import { useState, useEffect } from 'react';   
import { GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth';  
import Chat from '../components/Chat';  

const provider = new GoogleAuthProvider();  

const ChatsPage = () => {  
    const [user, setUser] = useState(null);  

    useEffect(() => {  
        const setAuthPersistence = async () => {  
            try {  
                await setPersistence(auth, browserLocalPersistence);    
            } catch (error) {  
                console.error('Error setting persistence:', error);  
            }  
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
            {user ? <Chat user={user} /> :   
                <div className='chatsp'>  
                    <button className='books-but' onClick={handleLogin}>Continue with Google</button>  
                </div>  
            }  
        </div>  
    );  
};  

export default ChatsPage;