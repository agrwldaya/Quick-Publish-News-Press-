import { v2 as cloudinary } from 'cloudinary'

export const cloudinaryconnect = () => {
    try {
        cloudinary.config(process.env.CLOUDINARY_URL);
    // console.log("cloudinary connected successfully!")
    } catch (error) {
        console.log(error)
    }    
};   