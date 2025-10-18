import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 sm:p-6 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="https://gensyn.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
          <img 
            src="https://cdn.prod.website-files.com/66bc6da8fe284e4693088ff7/66bc6da8fe284e4693088ffe_Gensyn-Symbol.svg" 
            alt="Gensyn Logo" 
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
          />
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Gensyn AI Quiz</h1>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-gensyn-light-gray">
          <a href="https://gensyn.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 transform hover:-translate-y-0.5">Home</a>
          <a href="https://docs.gensyn.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 transform hover:-translate-y-0.5">Docs</a>
          <a href="https://blog.gensyn.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 transform hover:-translate-y-0.5">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;