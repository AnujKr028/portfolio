import { Link as ScrollLink } from "react-router-dom";
import TypingEffect from "./effects/TypingEffect";

const Home = () => {
  return (
    <>
      <header className="h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-r from-gray-700 to-gray-900">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-4">Hello, I'm Anuj </h2>
        <TypingEffect text="A Passionate Web/Ai-Ml Developer" />
        <ScrollLink to="home" smooth={true} duration={500}>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            View My Work
          </button>
        </ScrollLink>
      </header>
    </>
  );
};

export default Home;
