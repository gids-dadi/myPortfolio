/* eslint-disable */
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="pt-30 pb-16">
    {/* HEADING */}
    <motion.div
      className="md:w-1/3 text-justify md:text-left"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <p className="font-playfair font-semibold text-4xl mb-4">ABOUT <span className="text-red-400">ME</span></p>
      <p>
        I am a Full-stack Web developer, proficient in both Front-end and
        Back-end, I&#39;m based in Abuja Nigeria&#39;s capital city.
      </p>
<br/>
         <p>   I&#39;ve spent much time completely immersed in remote development,
            building everything from landing pages to using APIs. I am convinced
            of the formula for doing work way before, not on time.
            I am a young and ambitious graduate of Electrical and Electroics
            Engineering (B. Eng. Electrical Engineering)
            I am passionate about opportunity for continous learning and growth.
            I am passionate about taking challenging projects that spur me to be
            better.
            </p>
          
    </motion.div>
    </section>
  );

export default About;
