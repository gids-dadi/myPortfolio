import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import person1 from "../assets/person-1.jpeg";
import person2 from "../assets/person-2.jpeg";
import person3 from "../assets/person-3.jpeg";

const About = () => {
  return (
    <section id="about" className="pt-30 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl  text-red-400">
          ABOUT ME
        </p>
        <p>
          I am a Full-stack Web developer, proficient in both Front-end and
          Back-end, I'm based in Abuja Nigeria's capital city.
        </p>
      </motion.div>

      {/* ABOUT */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative  max-w-[400px] h-[] flex flex-col justify-end  p-16 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* <img src={person1} alt="Person 1" /> */}
          <h3 className="font-playfair text-4xl"> Training</h3>
          <p className="text-center text-sm">
            I've spent much time completely immersed in remote development,
            building everything from landing pages to using APIs. I am convinced
            of the formula for doing work way before, not on time.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative max-w-[400px] h-[] flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* <img src={person2} alt="Person 2" /> */}
          <p className="font-playfair text-4xl"> Eduction</p>
          <p className="text-center text-sm">
            I am a young and ambitious graduate of Electrical and Electroics
            Engineering (B. Eng. Electrical Engineering)
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative  max-w-[400px] h-[] flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* <img src={person3} alt="Person 3" /> */}
          <p className="font-playfair text-4xl"> Passion </p>
          <p className="text-center text-sm">
            I am passionate about opportunity for continous learning and growth.
            I am passionate about taking challenging projects that spur me to be
            better.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
