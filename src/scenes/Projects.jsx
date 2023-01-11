import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project_1 from "../assets/project_1.png";
import project_2 from "../assets/project_2.png";
import project_3 from "../assets/project_3.png";
import project_4 from "../assets/project_4.png";

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

// const Project = ({ title }) => {
// const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-gray-400 z-30 flex flex-col justify-center items-center text-center p-16 text-blue-900`;
// const projectTitle = title.split(" ").join("_").toLowerCase();

// return (

// <motion.div variants={projectVariant} className="relative">
//   <div className={overlayStyles}>
//     <p className="text-2xl font-playfair">{title}</p>
//     <p className="mt-7">
//       Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
//       porttitor accumsan tincidunt.
//     </p>
//   </div>
//   <img src={`${projectTitle}.jpeg`} alt={projectTitle} />
// </motion.div>
// );
// };

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-gray-400 z-30 flex flex-col justify-center items-center text-center p-16 text-blue-900`;
// const projectTitle = title.split(" ").join("_").toLowerCase();

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 mt-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center h-[500px]">
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
              src={project_1}
              s
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
              src={project_2}
              s
              alt="projectTitle"
              className="w-full h-[350px]"
            />
          </motion.div>

          {/* ROW 2 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <h4 className="text-2xl font-playfair">Math-Magician</h4>

              <p className="mt-2 w-[350px]">
                A web App to carryout basic math utilities.
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
              src={project_3}
              s
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
              src={project_4}
              alt="projectTitle"
              className="w-full h-[350px]"
            />
          </motion.div>

          <div className="flex justify-center text-center items-center p-10 bg-blue-400 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
