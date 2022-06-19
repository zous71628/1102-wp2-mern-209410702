import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Dashboard_02,
  Landing_02,
  Register_02,
  Error_02,
  ProtectedRoute_02,
  TestFetchUserCors_02,
  TestFetchUserProxy_02,
} from './pages';
import {
  AddJob_02,
  AllJobs_02,
  Profile_02,
  Stats_02,
  SharedLayout_02,
} from "./pages/dashboard";
import styled from 'styled-components';

function App_02() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <ProtectedRoute_02>
              <SharedLayout_02 />
            </ProtectedRoute_02>
          }
        >
          <Route index element={<Stats_02 />} />
          <Route path="profile" element={<Profile_02 />} />
          <Route path="add-job" element={<AddJob_02 />} />
          <Route path="all-jobs" element={<AllJobs_02 />} />
        </Route>
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
