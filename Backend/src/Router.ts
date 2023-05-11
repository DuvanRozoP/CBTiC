import { Express, Router } from 'express';

// * ALL COMPONENTS
import Auth from './Components/Auth/Auth.network';
import Cv from './Components/cv/Cv.network';
import User from './Components/User/User.network'

interface RoutesType {
  path: string;
  router: Router;
}

// * MANAMENG COMPONENTS
const routes: RoutesType[] = [
  { path: '/auth', router: Auth   },
  { path: '/cv', router: Cv       },
  { path: '/detail', router: User }
];

function router(server: Express) {
  routes.forEach((routerElement: RoutesType) => {
    server.use(routerElement.path, routerElement.router);
  });
}

export default router;
