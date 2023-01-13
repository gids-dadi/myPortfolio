/* eslint-disable */
import linkedInImage from '../assets/linkedin.png';
import twitterImage from '../assets/twitter.png';
import githubImage from '../assets/github.png';
import mediumImage from '../assets/medium.png';
import angellistImage from '../assets/angellist.png';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:jusify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/gideon-akamisoko-dadi/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='Linkedin-link' src={linkedInImage} />
      </a>

      <a
        className='hover:opacity-50 transition duration-500'
        href='https://twitter.com/Dadi_AG/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='twitter' src={twitterImage} />
      </a>

      <a
        className='hover:opacity-50 transition duration-500 w-8 h-8'
        href='https://github.com/gids-dadi/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='Github-link' src={githubImage} />
      </a>

      <a
        className='hover:opacity-50 transition duration-500 w-8 h-8'
        href='https://medium.com/@gideons564/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='Github-link' src={mediumImage} />
      </a>

      <a
        className='hover:opacity-50 transition duration-500 w-8 h-8'
        href='https://angel.co/profile/edit/overview'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='Github-link' src={angellistImage} />
      </a>
    </div>
  );
  };

export default SocialMediaIcons;
