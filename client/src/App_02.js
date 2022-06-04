import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Dashboard_02,
  Landing_02,
  Register_02,
  Error_02,
  TestFetchUserCors_02,
  TestFetchUserProxy_02,
} from './pages';
import styled from 'styled-components';

function App_02() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard_02 />} />
        <Route path="/landing" element={<Landing_02 />} />
        <Route path="/register" element={<Register_02 />} />
        <Route path="/testcors" element={<TestFetchUserCors_02 />} />
        <Route path="/testproxy" element={<TestFetchUserProxy_02 />} />

        <Route path="*" element={<Error_02 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_02;
