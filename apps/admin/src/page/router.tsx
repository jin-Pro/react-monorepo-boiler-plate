import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import App from '../App';

const Mainpage = lazy(() => import('./Mainpage'));

export const router: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <App.Error />,
    children: [
      {
        path: '/',
        element: <Outlet />,
        children: [
          {
            path: '/',
            element: (
              <Suspense fallback={<>...loading</>}>
                <Mainpage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];
