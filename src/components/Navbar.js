import React from 'react';
import { Link } from 'react-router-dom';
import { FuriaLogo } from '../assets/icons';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-[#00ff00]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={FuriaLogo} alt="FURIA" className="h-8 w-auto" />
            </Link>
            <div className="ml-10 flex space-x-8">
              <Link to="/matches" className="text-white hover:text-[#00ff00]">
                Matches
              </Link>
              <Link to="/team" className="text-white hover:text-[#00ff00]">
                Team
              </Link>
              <Link to="/chat" className="text-white hover:text-[#00ff00]">
                Fan Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;