
import { useRoutes } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';


import { APP_ROUTES } from './routes';

import { ErrorBoundaryComponent } from './common';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {

  const pages = useRoutes(APP_ROUTES);


  return (
    <div>
      <ErrorBoundary FallbackComponent={({ error }) => <ErrorBoundaryComponent error={error} />}>
        {pages}
      </ErrorBoundary>
      <ToastContainer />
    </div>
  );
}