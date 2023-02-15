import React from 'react'
import { useState, useEffect } from "react";
import { getGifs } from '../Helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
        const newImages = await getGifs(category);
        // console.log(newImages);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return ({
        images: images,
        isLoading: isLoading
    });
}
