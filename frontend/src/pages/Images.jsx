import { useState, useEffect, useRef } from 'react';  
import axios from 'axios';  
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;   

const Images = () => {  
  const [photos, setPhotos] = useState([]);  
  const [page, setPage] = useState(1);  
  const [loading, setLoading] = useState(false);  
  const observerRef = useRef();  

  // Update fetchPhotos to search for "hopecore"  
  const fetchPhotos = async (page) => {  
    setLoading(true);  
    try {  
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=hope&client_id=${UNSPLASH_ACCESS_KEY}`);  
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);  // Note the change here  
      console.log(response);  
    } catch (error) {  
      console.error('Error fetching images:', error);  
    } finally {  
      setLoading(false);   
    }  
  };  

  useEffect(() => {  
    fetchPhotos(page);  
  }, [page]);  

  const lastPhotoRef = useRef();  
  useEffect(() => {  
    const observer = new IntersectionObserver((entries) => {  
      if (entries[0].isIntersecting && !loading) {  
        setPage((prevPage) => prevPage + 1);  
      }  
    });  
    
    if (lastPhotoRef.current) {  
      observer.observe(lastPhotoRef.current);  
    }  
    return () => {  
      if (lastPhotoRef.current) {  
        observer.unobserve(lastPhotoRef.current);  
      }  
    };  
  }, [loading, photos]);  

  return (  
    <div className="image-gallery">  
      <h1>Unsplash Infinite scroll</h1>  
      <div className="photo-container">  
        {photos.map((photo, index) => {  
          const isLastPhoto = photos.length === index + 1;  
          return (  
            <div ref={isLastPhoto ? lastPhotoRef : null} key={Math.random()*100}> 
              <img src={photo.urls.small} alt={photo.description} />  
              <p>{photo.alt_description}</p><p>Likes: {photo.likes}</p>  
            </div>  
          );  
        })}  
      </div>  
      {loading && <p>Loading...</p>}  
    </div>  
  );  
};  

export default Images;