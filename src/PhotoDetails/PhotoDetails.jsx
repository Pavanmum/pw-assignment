import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./PhotoDetails.css"
const PhotoDetails = () => {
  const {id} = useParams();
  const [photos, setPhotos] = useState({});
 
  async function downloadImage() {
    const res = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
    console.log(res.data.photo)
    setPhotos({
      images : res.data.photo.url,
      title : res.data.photo.title,
      description : res.data.photo.description
    })
    }

    useEffect (() => {
      downloadImage();
}, []);


  return (
    <div className='photo-wrappers'>
      <div className='image'> {<img className='images' src={photos.images} />}</div>
      <div className='td'>
     <div className='title'>Title : {photos.title}</div>
      <div className='desc'>Description : {photos.description} </div>
      </div>
    </div>
  )
}

export default PhotoDetails