import {Link} from 'react-router-dom'
const Projects = () => {
  return (
   
    <section className="container mx-auto p-8 text-center">

        <h2 className="text-4xl font-semibold mt-5 mb-10 text-blue-400 text-left">Projects : </h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold text-blue-300">Project 1</h3> 
                <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, voluptatum vel repellendus molestias, voluptatem in cum autem nemo, non impedit consequuntur vero aliquid ex molestiae amet illo reprehenderit eum commodi.</p>
                <a href="https://github.com/AnujKr028" target="_blank" rel="noopener noreferrer">
                <button className="bg-teal-900 p-3 border-2-teal rounded-xl mt-4">
                    GitHub Link
                </button>
                </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold text-blue-300">Project 2</h3> 
                <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias molestias, explicabo ipsum reprehenderit eligendi quis quaerat magni illo rerum quae amet, recusandae rem omnis expedita eaque veritatis sed assumenda.</p>
           
                <a href="https://github.com/AnujKr028" target="_blank" rel="noopener noreferrer">
                <button className="bg-teal-900 p-3 border-2-teal rounded-xl mt-4">
                    GitHub Link
                </button>
                </a>

              
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold text-blue-300">Project 3</h3> 
                <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo rerum vero in sunt aliquid quidem repellendus? Maxime corporis eum voluptatum cupiditate cumque, unde doloremque iusto laudantium accusantium non veritatis!</p>
                <a href="https://github.com/AnujKr028" target="_blank" rel="noopener noreferrer">
                <button className="bg-teal-900 p-3 border-2-teal rounded-xl mt-4">
                    GitHub Link
                </button>
                </a>
            </div>
        </div>
     </section>

  )
}


export default Projects ; 