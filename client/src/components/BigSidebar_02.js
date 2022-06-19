import React from 'react';
import { useAppContext } from '../context/appContext_02';
import NavLinks from './NavLinks_02';
import Logo from './Logo_02';
import Wrapper from '../assets/wrappers/BigSidebar_02';

const BigSidebar_02 = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_02;
