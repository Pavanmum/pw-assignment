import axios from 'axios';
import  { useEffect, useState } from 'react'
import Photo from './Photo'
import './PhotoList.css'


function PhotoList() {
  
  const photoX = "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"

    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function downloadImage() {
      const  response = await axios.get(photoX);
      // console.log(photoarrarylist)
      const photoarrarylist =  response.data.photos;
      // const photoPromise = photoarrarylist.map((photo) => axios.get(photo.url))
      
      // const photoData = await axios.all(photoPromise);
      const res = photoarrarylist.map((photodata) => {
        
        return { description: photodata.description , title : photodata.title, images : photodata.url, id : photodata.id }
      })
      setImage(res)
      setIsLoading(false);
      
    }
    

    useEffect (() => {
       downloadImage();
}, [photoX]);

  return (
<div>
  
        <div className='photo-wrapper'>
            {(isLoading) ? 'Loading...' : 
           
            (
              image.map((photos) => (
                <Photo  description={photos.description} title = {photos.title} images = {photos.images} key={photos.id} id={photos.id}/>
              ))
            )}
    </div>
    </div>
  )
}

export default PhotoList  