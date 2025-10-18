import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 text-center text-gensyn-light-gray/50 z-20">
      <p>
        made with ❤️ by{' '}
        <a 
          href="https://x.com/kaizoku_ap" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gensyn-light-gray/80 hover:text-gensyn-warm-pink transition-colors duration-300"
        >
          kaizoku
        </a>
      </p>
    </footer>
  );
};

export default Footer;