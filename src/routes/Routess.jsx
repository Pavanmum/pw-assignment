import { Routes, Route } from 'react-router-dom';
import PhotoDetails from '../PhotoDetails/PhotoDetails'
import PhotoList from "../photoList/PhotoList";

 function Routess() {
    return (
        <>
        <Routes>
            <Route path="/" element={ <PhotoList />} />
            <Route path='/photo/:id' element={<PhotoDetails />} />
        </Routes>
        </>
    )
}

export default Routess;