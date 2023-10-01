import { Link } from 'react-router-dom';
import './Photo.css'
 
 function Photo ({images , id})  {
    return (
    <> 
    <div  className="image-wrapper">
      <Link to={`photo/${id}`}>
    <div> <img className='image' src={images} /></div>
      </Link>
    </div>
    </>
    )
 }

 export default Photo;