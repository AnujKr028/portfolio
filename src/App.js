import Navbar from '../src/components/Navbar' ; 
import Home from '../src/components/Home' ;
import About from '../src/components/About' ;
import Contact from '../src/components/Contact' ;
import Footer from '../src/components/Footer' ;
import Projects from '../src/components/Projects'

import '../src/index.css' ;
import { Route , Routes} from 'react-router-dom';
import SeparateContactPage from '../src/components/SeparateContactPage';


function App() {
  return (
   <> 
  


  
   <Routes>
        <Route path="/" element={
          <>
           <Navbar/> 
            <div id="home"><Home /></div>
            <div id="about" className="pt-16"><About /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
          </>
        } />



       
      </Routes>

<Routes>
<Route path="/collaborate" element={<SeparateContactPage />}  />

</Routes>
 



</>
  );
}

export default App;
