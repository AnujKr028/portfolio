import { Link as ScrollLink } from "react-router-dom";
import TypingEffect from "./effects/TypingEffect";
import { jsPDF } from "jspdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {

  const handleDownloadPDF = ()=>{
  const pdf = new jsPDF(); 
  const img = new Image() ; 
  img.src = "/cv-working.jpg"; 
  img.onload=()=>{ 
    pdf.addImage(img,"JPEG",10,10,180,150) ; 
    pdf.save("Anuj_CV2.pdf");
  }
  }


  return (
    <>
      <header className="h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-r from-gray-700 to-gray-900">
      
        <ScrollLink to="home" smooth={true} duration={500}>
        <h2 className="text-5xl font-extrabold text-blue-400 mb-4">Hello, I'm Anuj </h2>
        <TypingEffect text="A Passionate Web/Ai-Ml Developer" />
        </ScrollLink>

        <button id="pdf-content" 
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 " 
          onClick={handleDownloadPDF}
          href='/cv-working.jpg' download="Anuj_CV2.jpg"
          >
            Download Cv <FontAwesomeIcon icon={faDownload}/>
          </button>
      </header>
    </>
  );
};

export default Home;
