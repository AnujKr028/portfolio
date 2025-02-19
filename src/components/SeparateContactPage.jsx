import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import addNotification from "react-push-notification";
import { useState } from "react";
import {Notifications} from "react-push-notification";

const SeparateContactPage = () => { 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");

<<<<<<< HEAD
  // Warning Notification
  const WarningNotification = () => { 
    addNotification({ 
      title: "Warning",
      subtitle: "Please fill in all the info!",
      message: "Enter the required details",
      theme: "red",
      closeButton: "X",
     
    }); 
  };
=======
const SeparateContactPage = () => {
    return (
      <>
        <div className="separate-contact-page  text-gray-900 min-h-screen p-8 flex items-start space-x-20">
          {/* Left Column: Paragraph */}
          <div className="flex-1">
            <h1 className="title-tex-color text-7xl font-bold text-blue-400 mb-4">Let's Collaborate</h1>
            <p className="page-para text-xl leading-8 text-left w-80 mt-20 text-gray">
              We always excited to connect with like-minded creators and innovators. Let’s work together to bring your vision to life. 
              If you have an idea or a project, or anything in mind that could use some collaboration, don't hesitate to reach out.
            </p>
          </div>
  
          {/* Right Column: Form */}
          <div className="flex-1">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
              {/* First Name */}
              <div className="mb-6">
                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your first name"
                />
              </div>
  
              {/* Last Name */}
              <div className="mb-6">
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your last name"
                />
              </div>
  
              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
  
              {/* Project Goals */}
              <div className="mb-6">
                <label htmlFor="goals" className="block text-gray-700 font-medium mb-2">Tell us more about your project goals:</label>
                <textarea
                  id="goals"
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
>>>>>>> a0823d625f5d88eb85e9547ea16ce2d0bfe5e69c

  const handleSubmitBtn = (e) => {
    e.preventDefault();  

    // Validating required fields (using trim to remove extra spaces)
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !goals.trim()) { 
      WarningNotification(); 
      return;
    } 

    // Show success notification
    addNotification({  
      title: "Success",
      subtitle: "Form Submitted!",
      message: "Your details have been received",
      theme: "light",
      style: { backgroundColor: '#4CAF50', color: 'green' },
    
      closeButton: "X",
      
    }); 

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setGoals("");
  };

  return (
    <>
      <div className="separate-contact-page bg-white text-gray-900 min-h-screen p-8 flex flex-col md:flex-row items-center md:items-start md:space-x-20">
       <Notifications/>
        {/* Left Column: Paragraph */}
        <div className="flex-1 w-full text-center md:text-left">
          <h1 className="title-tex-color text-6xl md:text-5xl lg:text-7xl font-bold text-blue-400 mb-4">
            Let's Collaborate
          </h1>
          <p className="page-para text-xl leading-8 text-left w-80 mt-18 text-gray">
            We are always excited to connect with like-minded creators and innovators. Let’s work together to bring your vision to life. 
            If you have an idea or a project, or anything in mind that could use some collaboration, don't hesitate to reach out.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 w-full flex justify-center mt-5">
          <form onSubmit={handleSubmitBtn} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            {/* First Name */}
            <div className="mb-6">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
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
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
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
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
              <label htmlFor="goals" className="block text-gray-700 font-medium mb-2">
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
          "I enjoy translating your thoughts to our diversely skilled team for the best results"
        </p>
        <a
          href="mailto:xyz@gmail.com"
          className="mt-4 mb-4 inline-flex items-center gap-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-transparent hover:border transition duration-300"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 5.5A2.5 2.5 0 014.5 3h11A2.5 2.5 0 0118 5.5v9A2.5 2.5 0 0115.5 17h-11A2.5 2.5 0 012 14.5v-9zM4.5 4a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-11z"
              clipRule="evenodd"
            />
          </svg>
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

export default SeparateContactPage;
 



<<<<<<< HEAD
=======
      </>
    );
  };
  
  export default SeparateContactPage;
  
>>>>>>> a0823d625f5d88eb85e9547ea16ce2d0bfe5e69c
