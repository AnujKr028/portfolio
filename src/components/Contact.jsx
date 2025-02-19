import { faEnvelope, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithubSquare, faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <> 
    
   <section className="container mx-auto p-8 text-center">
        <h2 className="text-4xl font-semi-bold mt-5 mb-10 text-blue-400 text-left">Contact : </h2> 
        <p className="text-gray-400 mb-4 text-left text-xl">Feel free to reach out via email or social media.</p>  

        <div className="text-left">
        <a href="mailto:xyz@gmail.com" className="inline-flex items-center gap-4 px-4 py-2 border text-white rounded-lg shadow-lg hover:bg-transparent transition duration-300"> 
        Email Me 
           <FontAwesomeIcon icon = {faEnvelope} className="w-4 h-4" />           
         </a> 
 
       
        </div>
        

        {/* social medias */} 
        <div className="text-left mt-5 flex gap-4"> 

         <a href="https://x.com/AnujKr028" target="_blank" >
         <FontAwesomeIcon icon={faSquareXTwitter} className="w-8 h-8"/>
         </a> 
 
        <a href="https://www.linkedin.com/in/anuj-kumar-48b4a1295/" target="_blank"> 
          <FontAwesomeIcon icon={faLinkedin}  className="w-8 h-8"/>
        </a> 

        <a href="https://github.com/" target="_blank"> 
          <FontAwesomeIcon icon={faGithubSquare} className="w-8 h-8"/>
        </a>


        </div>
 

      <div className="text-left mt-5"> 
      <Link to="/collaborate" className="inline-flex items-center gap-3 px-4 py-2 border text-white rounded-lg shadow-lg hover:bg-transparent transition duration-300">
            Let's Collaborate
            <FontAwesomeIcon icon={faHandshake} />
          </Link>
       

      </div>
     </section> 


    

    
    </>
  )
}


export default Contact ; 