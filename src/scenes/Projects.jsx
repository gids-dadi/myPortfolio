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
    <section id="projects" className="flex flex-col pt-48 mt-12">
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red-500">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5"></div>
        </div>

        <p className="mt-10 mb-10">
          Here, I have got a few projects, check them out and see my expertise.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex  justify-center h-[500px]">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red-500
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h4 className="text-2xl font-playfair">
                Tech in Africa (TiA Summit)
              </h4>

              <p className="mt-2 w-[350px]">
                The project is a webpage. It has been designed for a non-real
                summit tagged the Tech in Africa (TiA) hosted to highlight the
                achievemnts and growth of young African tech community through
                innovation.
              </p>
              <ul className="flex mx-2">
                <li className=" p-2 bg-blue-900 mr-2 text-white">HTML</li>
                <li className="p-2 bg-blue-900 text-white">CSS</li>
              </ul>
              <a
                className="bg-blue-900 text-white mt-4 p-2"
                href="https://gids-dadi.github.io/Spiral-Tech-Project"
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
            </div>
            <img
              src={project1}
              alt="projectTitle"
              className="w-full h-[350px]"
            />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h4 className="text-2xl font-playfair">Space-Travelers-Hub</h4>

              <p className="mt-2 w-[350px]">
                The Space-Travelers-Hub is a project that requires using an API
                to get the Rockets and the missions of the rockets.. The user
                can also book a number of rockets for some missions and this
                will be displayed in the profile.
              </p>
              <ul className="flex mx-2">
                <li className=" p-2 bg-blue-900 mr-2 text-white">REACT</li>
                <li className=" p-2 bg-blue-900 mr-2 text-white">REDUX</li>
                <li className="p-2 bg-blue-900 text-white">CSS</li>
              </ul>
              <a
                className="bg-blue-900 text-white mt-4 p-2"
                href="https://space-travelers-hub-c.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
            </div>
            <img
              src={project2}
              alt="projectTitle"
              className="w-full h-[350px]"
            />
          </motion.div>

          {/* ROW 2 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h4 className="text-2xl font-playfair">Math-Magician</h4>

              <p className="mt-2 w-[350px]">
                This is a web app to carry out basic Math utilities including an impeded calculator and a page for random quotes about Math for fun. 

              </p>
              <ul className="flex mx-2">
                <li className=" p-2 bg-blue-900 mr-2 text-white">HTML</li>
                <li className=" p-2 bg-blue-900 mr-2 text-white">REACT</li>
                <li className=" p-2 bg-blue-900 mr-2 text-white">JAVACSRIPT</li>
                <li className="p-2 bg-blue-900 text-white">CSS</li>
              </ul>
              <a
                className="bg-blue-900 text-white mt-4 p-2"
                href="https://gids-math-magician.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
            </div>
            <img
              src={project3}
              alt="projectTitle"
              className="w-full h-[350px]"
            />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h4 className="text-2xl font-playfair">Vehicle App</h4>

              <p className="mt-2 w-[350px]">
                A web App to access information based on given parameters.
              </p>
              <ul className="flex mx-2">
                <li className=" p-2 bg-blue-900 mr-2 text-white">HTML</li>
                <li className=" p-2 bg-blue-900 mr-2 text-white">REACT</li>
                <li className=" p-2 bg-blue-900 mr-2 text-white">JAVACSRIPT</li>
                <li className="p-2 bg-blue-900 text-white">CSS</li>
              </ul>
              <a
                className="bg-blue-900 text-white mt-4 p-2"
                href="https://astounding-cajeta-62b531.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                See Project
              </a>
            </div>
            <img
              src={project4}
              alt="projectTitle"
              className="w-full h-[350px]"
            />
          </motion.div>

          <div className="flex justify-center text-center items-center p-10 bg-blue-400 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>

      </div>


      <motion.div variants={projectVariant} className="relative ">
        <div className="mt-52 text-center">
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
