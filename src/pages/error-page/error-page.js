import React from 'react';
import { Button } from '../../components';

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <h3>Page not found</h3>
      <h1>404</h1>
      <Button onClick={() => {}} title="Go back to home" textColor="red" />
    </div>
  );
};
