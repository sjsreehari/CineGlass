import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <p className="text-sm">Made with ❤️ by Sreehari</p>
        <a
          href="https://www.linkedin.com/in/sreeharisj/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:text-indigo-200 transition-colors duration-300"
        >
          My LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
