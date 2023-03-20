import { Express, Router } from 'express';

interface RoutesType {
  path: string,
  router: Router
}

// * ALL COMPONENTS
import Auth from './Components/Auth/Auth.network';

// * MANAMENG COMPONENTS
const routes: RoutesType[] = [{ path: '/auth', router: Auth }];

function router(server: Express) {
  routes.forEach((router: RoutesType) => {
    server.use(router.path, router.router);
  });
}

export default router;
