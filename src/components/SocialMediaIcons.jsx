import linkedIn_image from "../assets/linkedin.png";
import twitter_image from "../assets/twitter.png";
import github_image from "../assets/github.png";
import medium_image from "../assets/medium.png";
import angellist_image from "../assets/angellist.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:jusify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/gideon-akamisoko-dadi/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Linkedin-link" src={linkedIn_image} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/Dadi_AG/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter" src={twitter_image} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 w-8 h-8"
        href="https://github.com/gids-dadi/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Github-link" src={github_image} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 w-8 h-8"
        href="https://medium.com/@gideons564/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Github-link" src={medium_image} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 w-8 h-8"
        href="https://angel.co/profile/edit/overview"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Github-link" src={angellist_image} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
