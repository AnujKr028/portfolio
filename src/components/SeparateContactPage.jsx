import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const showSuccessNotification = () => {
  toast.success("Success! Your CV is downloading...", {
    theme: "dark",
    position: "top-right",
    autoClose: 3000,
  });
};

const showWarningNotification = () => {
  toast.warn("Warning! Something went wrong.", {
    theme: "dark",
    position: "top-right",
    autoClose: 3000,
  });
};

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv-working.jpg"; // Ensure this file is in the public folder
  link.download = "Anuj_CV.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showSuccessNotification();
};

const Home = () => {
  return (
    <>
      <ToastContainer />
      <header className="h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-r from-gray-700 to-gray-900">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-4">Hello, I'm Anuj</h2>
        <p className="text-lg text-white">A Passionate Web/AI-ML Developer</p>

        <button
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          onClick={handleDownloadCV}
        >
          Download CV <FontAwesomeIcon icon={faDownload} />
        </button>

        <button
          className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          onClick={showWarningNotification}
        >
          Show Warning
        </button>
      </header>
    </>
  );
};

export default Home;
