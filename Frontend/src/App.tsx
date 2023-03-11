// ~ HOOKS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// * PAGES
import Teacher from './Pages/Teacher/Teacher';
import Landing from './Pages/Landing/Landing';
import Nabvar from './Pages/Nabvar/Nabvar';
import DetailSubjets from './Pages/DetailSubjets/DetailSubjets';
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
        {
          path: 'detailsubjets',
          element: <DetailSubjets />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
