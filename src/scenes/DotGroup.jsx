import AnchorLink from "react-anchor-link-smooth-scroll";
import propTypes from "prop-types";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = "relative bg-yellow-400 before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]";

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-6">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-gray-300"
        } w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-gray-300"
        } w-3 h-3 rounded-full`}
        href="#about"
        onClick={() => setSelectedPage("about")}
      />

      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-gray-300"
        } w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />

      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-gray-300"
        } w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-gray-300"
        } w-3 h-3 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

DotGroup.propTypes = {
  selectedPage: propTypes.bool.isRequired,
  setSelectedPage: propTypes.bool.isRequired,
};

export default DotGroup;
