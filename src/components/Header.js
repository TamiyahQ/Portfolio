import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white bg-gradient-to-r from-cyan-200 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
           <img src="./images/logo.png" alt="Logo" className="h-14 w-14" />
           
        </div>


        <button 
          className="sm:hidden text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <nav className="hidden sm:flex space-x-10 text-sm">
          <ul className="flex space-x-10">
            <li><a href="#about" className="list">About</a></li>
            <li><a href="#skills" className="list">Skills</a></li>
            <li><a href="#projects" className="list">Projects</a></li>
            <li><a href="#experience" className="list">Experience</a></li>
            <li><a href="#contact" className="list">Contact</a></li>
            <li><a href="#resume" className="list">Resume</a></li>
          </ul>
        </nav>

        {isOpen && (
          <nav className="sm:hidden absolute top-16 left-0 w-full bg-white text-black">
            <ul className="flex flex-col items-center space-y-4 p-5">
              <li><a href="#about" className="list">About</a></li>
              <li><a href="#skills" className="list">Skills</a></li>
              <li><a href="#projects" className="list">Projects</a></li>
              <li><a href="#experience" className="list">Experience</a></li>
              <li><a href="#contact" className="list">Contact</a></li>
              <li><a href="#resume" className="list">Resume</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
