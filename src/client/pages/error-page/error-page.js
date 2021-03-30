import React from 'react';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import { buildHomeLink } from './helpers';

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <h3>Page not found</h3>
      <h1>404</h1>
      <Link to={buildHomeLink}>
        <Button title="Go back to home" textColor="red" />
      </Link>
    </div>
  );
};
