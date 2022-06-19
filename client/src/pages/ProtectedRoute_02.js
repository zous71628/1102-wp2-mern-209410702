import React from 'react';
import { useAppContext } from '../context/appContext_02';
import { Navigate } from 'react-router-dom';

const ProtectedRoute_02 = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute_02;
