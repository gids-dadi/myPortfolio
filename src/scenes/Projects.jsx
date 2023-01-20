/* eslint-disable */
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import project1 from "../assets/project_1.png";
import project2 from "../assets/project_2.png";
import project3 from "../assets/project_3.png";
import project4 from "../assets/project_4.png";
import SocialMediaIcons from "../components/SocialMediaIcons";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-gray-400 z-30 flex flex-col justify-center items-center text-center p-16 text-blue-900`;

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col  mt-12">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl justify-start">
            <span className="text-pink-800">PRO</span>JECTS
          </p>
        </div>

        <p className="mt-4 mb-10">
          Here are some of the projects I've worked on
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center gap-8 md:h-[500px]">
        <motion.div
          className="sm:grid sm:grid-cols-2 w-3/4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue-900
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div> */}

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h6 className="font-playfair">
                TiA Summit
              </h6>

              <p className="mt-[-5px] md:w-auto w-[248px]">
                The project is a webpage designed for a non-real
                summit tagged the Tech in Africa (TiA) hosted to highlight the
                achievementsof young African tech community 
              </p>
              

              
              <ul className="flex gap-2">
                <li className= "p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">HTML</li>
                <li className="p-[4px]  md:p-2 bg-blue-900 text-white  text-[8px] md:text-[16px]">CSS</li>
              </ul>

              <div className="my-2">
              <a
                className="bg-blue-900 text-white text-[8px] m-2 md:mr-8 p-[4px]  md:p-2 md:text-[16px]"
                href="https://gids-dadi.github.io/Spiral-Tech-Project"
                target="_blank"
                rel="noreferrer"
              >
               Go Live
              </a>

              <a
                className="bg-blue-900 text-white text-[8px] mt-4 p-[4px]  md:p-2 md:text-[16px]"
                href="https://github.com/gids-dadi/Spiral-Tech-Project"
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
              </div>

            </div>
            <img
              src={project1}
              alt="projectTitle"
              className="w-auto h-full py-10"
            />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h6 className="font-playfair">Space-Travelers-Hub</h6>

              <p className="w-[246px]">
                The Space-Travelers-Hub is a project that requires using an API
                to get the Rockets and the missions of the rockets.. The user
                can also book a number of rockets for some missions and this
                will be displayed in the profile.
              </p>
              <ul className="flex mx-2 gap-2">
                <li className="p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">REACT</li>
                <li className="p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">REDUX</li>
                <li className="p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">CSS</li>
              </ul>
              <div className="flex gap-4">
              <a
                className="bg-blue-900 text-white text-[8px] m-2 md:mr-8 px-[14px]  md:p-2 md:text-[16px]"
                href="https://space-travelers-hub-c.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Go Live
              </a>

               <a
                className= "bg-blue-900 text-white text-[8px] m-2 md:mr-8 px-[14px]  md:p-2 md:text-[16px]"
                href="https://github.com/camilevahviraki/Space-Travelers-Hub"
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
              </div>

            </div>
            <img
              src={project2}
              alt="projectTitle"
              className="w-auto h-full py-10"
            />
          </motion.div>

          {/* ROW 2 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h4 className="text-2xl font-playfair">Math-Magician</h4>

              <p className="mt-2 w-[246px]">
                This is a web app to carry out basic Math utilities including an impeded calculator and a page for random quotes about Math for fun. 

              </p>
              <ul className="flex mx-2 gap-4">
                <li className="p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">HTML</li>
                <li className="p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">REACT</li>
                <li className="p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">JAVACSRIPT</li>
                <li className="p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">CSS</li>
              </ul>
              <div className="flex gap-4">
              <a
                className="bg-blue-900 text-white text-[8px] m-4 md:mr-8 px-[14px] md:p-2 md:text-[16px]"
                href="https://gids-math-magician.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
              Go Live
              </a>


              <a
                className="bg-blue-900 text-white text-[8px] m-4 px-[14px]  md:p-2 md:text-[16px]"
                href="https://github.com/gids-dadi/math-magician"
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
              </div>

            </div>
            <img
              src={project3}
              alt="projectTitle"
              className="w-auto h-full py-16"
            />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h4 className="text-2xl font-playfair">Awesome Books</h4>

              <p className="mt-2 w-[250px]">
               Awesome Book Project using ES6 Syntax - A list of books project with form input to add the title and author of user's personal awesome books.
              </p>
              <ul className="flex mx-2 gap-4">
                <li className= "p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">HTML</li>
                <li className= "p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">JAVACSRIPT</li>
                <li className= "p-[4px] md:p-2 bg-blue-900  text-white text-[8px] md:text-[16px]">CSS</li>
              </ul>
              <div className="flex gap-4">
              <a
                className="bg-blue-900 text-white text-[8px] m-4 md:mr-8 px-[14px]  md:p-2 md:text-[16px]"
                href="https://gids-dadi.github.io/ES6_Awesome_Books/"
                target="_blank"
                rel="noreferrer"
              >
                Go Live
              </a>

                 <a
                className="bg-blue-900 text-white text-[8px] m-4 px-[14px]  md:p-2 md:text-[16px]"
                href="https://github.com/gids-dadi/ES6_Awesome_Books"
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
              </div>
            </div>
            <img
              src={project4}
              alt="projectTitle"
              className="w-auto h-full py-16"
            />
          </motion.div>
        </motion.div>

      </div>


      <motion.div variants={projectVariant}>
        <div className="mt-32 md:mt-56  text-center">
         Check me out on: <SocialMediaIcons />
        
        Want to Reach out?
              <AnchorLink
            className="bg-gradient-rainblue text-blue-900 rounded-sm py-3 mr-5 px-7 font-semibold hover:bg-blue-900 hover:text-white transition duration-500 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          </div>
        
      </motion.div>

      
   
    </section>
  );
};

export default Projects;
