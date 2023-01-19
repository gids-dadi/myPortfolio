/* eslint-disable */
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full py-6 mt-12"
    >
   
      {/* MAIN SECTION */}
      <div className="z-30  mt-10 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-2xl font-playfair text-blue-900 text-center md:text-left">Hey there!  My name is</p>
          <p className="text-8xl font-playfair z-10 text-center md:text-start xs:font-semibold md:font-bold">
           Gideon{" "}
            <span className="xs:relative xs:text-blue-900 xs:font-semibold z-20">
              Dadi
            </span>
          </p>
          <p className=" text:2xl md:text-4xl font-playfair z-10  md:text-start font-bold">I build web solutions to enhance businesses</p>

          <p className="mt-6 mb-8  ext-base md:w-[70%] text-center md:text-start">
         I’m a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
          </p>
          
        </motion.div>

        {/*  CALL TO ACTION */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-blue-900 p-2 hover:text-red-500 transition duration-500 w-full h-full flex items-center justify-center font-playfair ox-10">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
