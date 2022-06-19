import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/ShareLayout';

import { Navbar_02, BigSidebar_02, SmallSidebar_02 } from '../../components';

const SharedLayout_02 = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar_02 />
        <BigSidebar_02 />
        <div>
          <Navbar_02 />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_02;

/*
const SharedLayout_02 = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
