/* eslint-disable */
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsPic from "../assets/skills-image.png";

const Myskills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className=" md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red-400">SKILLS</span>
          </p>
          <p className="mt-10 mb-7">
            I am skilled in both front-end and back-end using various languages,
            framework and tools.
          </p>
        </motion.div>
          </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* LANGUAGES  */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <h4 className="font-playfair font-semibold text-3xl mt-3">
                LANGUAGES
              </h4>
            </div>
            <div className="w-1/2 md:w-3/4 h-2 bg-blue-400 absolute right-0 z-[-1] "></div>
          </div>

          <ul className="mt-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Ruby</li>
          </ul>
        </motion.div>

        {/* FRAMEWORK  */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <h4 className="font-playfair font-semibold text-3xl mt-3">
                FRAMEWORK
              </h4>
            </div>
            <div className="w-1/2 md:w-3/4 h-2 bg-blue-400 absolute right-0 z-[-1] "></div>
          </div>
          <ul className="mt-5">
            <li>Bootstrap</li>
            <li>Ruby on Rails</li>
            <li>ExpressJs</li>
            <li>TailwindCss</li>
            <li>RSpec</li>
          </ul>
        </motion.div>

        {/*TOOLS  */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">TOOLS</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-2 bg-blue-400 absolute right-0 z-[-1] "></div>
          </div>
          <ul className="mt-5">
            <li>Gitlab</li>
            <li>Github</li>
            <li>CodeKit</li>
            <li>Code</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Myskills;
