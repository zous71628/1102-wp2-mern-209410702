import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar_02';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext_02';

import Logo_51 from './Logo_02';
import NavLinks_51 from './NavLinks_02';

const SmallSidebar_02 = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo_51 />
          </header>
          <NavLinks_51 toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_02;
