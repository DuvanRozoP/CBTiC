import { Navigate, Outlet } from 'react-router-dom';

interface PropsPrivateRouter {
  isAuthentication: boolean;
  children: React.ReactNode;
}

function PrivateRouter({ isAuthentication, children }: PropsPrivateRouter) {
  if (!isAuthentication) return <Navigate to='/login' />;
  return children ?? <Outlet />;
}

export default PrivateRouter;
