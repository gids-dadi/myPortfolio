/* eslint-disable */
import { motion } from "framer-motion";
import profilePic from "../assets/pic1.png";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return(
  

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
       <p className="font-playfair font-semibold text-4xl mb-4">ABOUT <span className="text-pink-800">ME</span></p>
    </motion.div>

<div className="flex flex-col md:flex-row md:justify-between mt-8">

  {/* IMAGE */}
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
      <div className="md:order-2 flex justify-center basis-full z-10 mt-10 md:mt-30">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 mt-10 before:absolute before:-top-20 before:-left-20  before:w-full  before:max-w-[400px] before:h-full before:border-2 before:border-blue-400 before:z-[-1] ">
            <img
              src={profilePic}
              alt="Profle"
              className="hover:filter hover:saturate-200 transition duration-400 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src={profilePic}
            alt="Profle"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-auto h-full text-center mb-8"
          />
        )}
      </div> 
  </motion.div>

{/* WRITE UP */}
  <motion.div
      className="md:w-3/5 w-6/7 text-justify md:text-left"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
       <p>
        I'm a Full-Stack Web Developer, proficient in both Front-end and Back-end, I&#39;m based in Abuja, Nigeria.
       </p>
<br/>
<br/>
         <p className="text-justify">
          I have a degree in Engineering (B. Eng. Electrical Engineering), I am  young, ambitious and I see successes and failures as the stepping stone to get better. I have spent much time completely immersed in remote development, building web solutions from landing pages to using APIs and building full-stack apps. I know why and how to effectively utilize web technologies to enhnce growth in business.
      </p>  
      <br/>
      <br/> 
      <p className="text-justify">
            I am convinced of the formula for doing work successfully -  growth mindset, excellence and out doing my previous.
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
