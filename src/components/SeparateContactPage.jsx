import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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

// const showWarningNotification = () => {
//   toast.warn("Warning! Something went wrong.", {
//     theme: "dark",
//     position: "top-right",
//     autoClose: 3000,
//   });
// };

const showFillDetailsWarning = () => {
  toast.warn("Please fill in all the details before submitting!", {
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !goals) {
      showFillDetailsWarning();
      return;
    }
    toast.success("Form submitted successfully!", {
      theme: "dark",
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="separate-contact-page bg-white text-gray-900 min-h-screen p-8 flex flex-col md:flex-row items-center md:items-start md:space-x-20">
        {/* Left Column: Paragraph */}
        <div className="flex-1 w-full text-center md:text-left">
          <h1 className="title-tex-color text-6xl md:text-5xl lg:text-7xl font-bold text-blue-400 mb-4">
            Let's Collaborate
          </h1>
          <p className="page-para text-xl leading-8 text-left w-80 mt-18 text-gray">
            We are always excited to connect with like-minded creators and
            innovators. Let’s work together to bring your vision to life. If you
            have an idea or a project, or anything in mind that could use some
            collaboration, don't hesitate to reach out.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 w-full flex justify-center mt-5">
          <form
            onSubmit={handleSubmitBtn}
            className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
          >
            {/* First Name */}
            <div className="mb-6">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium mb-2"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium mb-2"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your last name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Project Goals */}
            <div className="mb-6">
              <label
                htmlFor="goals"
                className="block text-gray-700 font-medium mb-2"
              >
                Tell us more about your project goals:
              </label>
              <textarea
                id="goals"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Describe your project goals..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 gap-2 flex items-center"
              >
                Send <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Admin Message */}
      <div className="ml-10">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-a4df9e91dcd1f12c00d554743ea7d8cf-lq"
          alt=""
          className="w-16 h-16 rounded-full"
        />
        <p className="font-bold text-2xl w-80 leading-8 text-left mt-5 text-gray">
          Hi, I’m Anuj! Let’s chat about your amazing ideas and projects.
        </p>
        <p className="w-80 mt-5 page-para">
          "I enjoy translating your thoughts to our diversely skilled team for
          the best results"
        </p>
        <a
          href="mailto:xyz@gmail.com"
          className="mt-4 mb-4 inline-flex items-center gap-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-transparent hover:border transition duration-300"
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>Email me directly</span>
        </a>
      </div>

      <footer className="text-center mt-10 text-sm font-sans text-gray-700 py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl">
        <p className="font-medium text-lg hover:text-blue-400 transition duration-300">
          Created with ❤️ by <span className="text-blue-400">Anuj</span>
        </p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/anuj-kumar-48b4a1295/"
            className="hover:text-blue-500 mx-3 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            className="hover:text-blue-500 mx-3 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:xyz@gmail.com"
            className="hover:text-blue-500 mx-3 transition duration-300"
          >
            Email
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
