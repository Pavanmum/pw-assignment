import { Link } from "react-router-dom";
import Routess from "./routes/Routess";

function App() {
  return (
    <div className="App">
  <h1 id="heading">
  <Link to="/">Gallery</Link>
  </h1>
  
     <Routess/>
    </div>
  );
}

export default App;
