import { Express, Router } from 'express';

// * ALL COMPONENTS
import Auth from './Components/Auth/Auth.network';

interface RoutesType {
  path: string;
  router: Router;
}

// * MANAMENG COMPONENTS
const routes: RoutesType[] = [{ path: '/auth', router: Auth }];

function router(server: Express) {
  routes.forEach((routerElement: RoutesType) => {
    server.use(routerElement.path, routerElement.router);
  });
}

export default router;
