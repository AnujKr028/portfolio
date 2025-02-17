
const About = () => {
  return (
    <div> 

    <section className = 'container mx-auto mt-10 p-8 text-left text-large'> 
        <h2 className="text-4xl font-semibold mb-10 text-blue-400">About Me : </h2> 
        <p className="text-gray-300 leading-relaxed w-1/2 font-[font-roboto] text-xl ">I am a web developer specialising in frontend tech stacks. I have experience in building
            responsive and user-friendly web applications.Currently learning and making frontend based projects with integration of ai and machine learning ♥️.
        </p> 

        <div className="mt-10 mb-10"> 
          <h3 className="text-3xl font-semibold mt-8 mb-6 text-purple-500 underline underline-offset-4">Skills</h3>
          <label htmlFor="techstacks" className="">Front-End TechStacks: </label>
          <p className="text-gray-300 mt-1 mb-4 leading-relaxed tracking-wider font-[font-roboto]">HTML, TailWind CSS, JavaScript, React </p> 

          <label htmlFor="languages">Programming Languages: </label>
          <p className="text-gray-300 mt-1 mb-4 leading-relaxed tracking-wider font-[font-roboto]">Python, C, C++, Java</p>

          <label htmlFor="libraries">Libraries: </label> 
          <p className="text-gray-300 mt-1 mb-4 leading-relaxed tracking-wider font-[font-roboto]">Numpy, Pandas</p>
        </div>
    </section>

    </div>
  )
}



export default About ; 
