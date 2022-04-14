import React from 'react';
import { useAppContext } from '../context/appContext_02';
const Alert_02 = () => {
  const { alertText, alertType } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert_02;
