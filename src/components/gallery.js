import React, { useState } from 'react';

const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/400',
        'https://via.placeholder.com/500',
        'https://via.placeholder.com/600',
    ];

    const nextImage = () => {
        console.log('next image ', (currentImage + 1) % images.length);
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const previousImage = () => {
        console.log('previous image ', (currentImage - 1 + images.length) % images.length);
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div>
                <button onClick={previousImage}>Previous</button>
                <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
                <button onClick={nextImage}>Next</button>
            </div>
            <p>Image {currentImage + 1} of {images.length}</p>
        </div>
    );
};

export default ImageGallery;
