// Images.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Images = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  const fetchImages = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.get(``, {
        params: {
          page,
          limit: 5,
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(); // Initial fetch
  }, []);
  useEffect(() => {
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        fetchImages();
      }
    };

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(callback, options);
    const lastImage = document.querySelector(".image-container:last-child");
    if (lastImage) {
      observer.current.observe(lastImage);
    }

    // Cleanup observer
    return () => {
      if (lastImage) {
        observer.current.unobserve(lastImage);
      }
    };
  }, [images]);

  return (
    <div>
      <h1 id="img-h">Infinite Scroll with Lorem Picsum</h1>
      <div className="image-grid">
        {images.map((image) => (
          <div className="image-container" key={Math.random() * 100}>
            <img
              src={`https://picsum.photos/id/${image.id}/300/200`}
              alt={image.author}
              className="imgs"
            />
          </div>
        ))}
      </div>
      {loading && <p>Loading more images...</p>}
    </div>
  );
};

export default Images;
