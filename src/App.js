import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import About from './scenes/About';
import Contact from './scenes/Contact';
import SocialMediaIcons from './components/SocialMediaIcons';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-yellow-900">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}

        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <About />
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <Projects />
      </div>

      <div className="w-5/6 mx-auto  md:h-full">
        <Contact />
      </div>
      <div className="mt-34">
        <SocialMediaIcons />
      </div>
    </div>
  );
}

export default App;
