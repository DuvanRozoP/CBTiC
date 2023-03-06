// ~ HOOKS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// * PAGES
import Teacher from './Pages/Teacher/Teacher';
import Landing from './Pages/Landing/Landing';
import Nabvar from './Pages/Nabvar/Nabvar';
// & COMPONENTS
// import Loading from './Components/Loading/Loading';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nabvar />,
      children: [
        {
          path: 'home',
          element: <Landing />,
        },
        {
          path: 'subjects',
          element: <Teacher />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
