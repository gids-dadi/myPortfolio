import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import profilePic from "../assets/pic1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full  py-6"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-full z-10 mt-10 md:mt-30">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 mt-10 before:absolute before:-top-20 before:-left-20  before:w-full  before:max-w-[400px] before:h-full before:border-2 before:border-blue-400 before:z-[-1]">
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
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30  mt-12 md:mt-32  px-2">
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
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Hey there! I'm Gideon{" "}
            <span className="xs:relative xs:text-blue-900 xs:font-semibold z-20 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Dadi
            </span>
          </p>

          <p className="mt-10 mb-7 text-base text-center md:text-start">
            I’m a software developer! I can help you build a product , feature
            or website Look through some of my work and experience! If you like
            what you see and have a project you need coded, don’t hestiate to
            contact me.
          </p>
        </motion.div>

        {/*  CALL TO ACTION */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-blue-900 rounded-sm py-3 mr-5 px-7 font-semibold hover:bg-blue-900 hover:text-white transition duration-500 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>

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
