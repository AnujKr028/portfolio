import { Link as ScrollLink } from "react-scroll"; // Import react-scroll Link
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">My Portfolio</h1>
          <ul className="flex space-x-6 text-large">
            <li>
              <ScrollLink to="home" smooth={true} duration={500} className="hover:text-blue-400 transition duration-300 cursor-pointer">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} className="hover:text-blue-400 transition duration-300 cursor-pointer">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-blue-400 transition duration-300 cursor-pointer">
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-blue-400 transition duration-300 cursor-pointer">
                Contact
              </ScrollLink>

              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
