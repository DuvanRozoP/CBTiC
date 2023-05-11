// ~ HOOKS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// * PAGES
import Teacher from './Pages/Teacher/Teacher';
import Landing from './Pages/Landing/Landing';
import Nabvar from './Pages/Nabvar/Nabvar';
import DetailSubjets from './Pages/DetailSubjets/DetailSubjets';
import Teachers from './Pages/Teachers/Teachers';
import Login from './Pages/Login/Login';
import LeyDeFaraday from './Components/LeyDeFaraday/LeyDeFaraday';
// & COMPONENTS
// import Loading from './Components/Loading/Loading';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nabvar />,
      children: [
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'Inicio',
          element: <Landing />,
        },
        {
          path: 'Asignaturas',
          element: <Teacher />,
        },
        {
          path: 'detailsubjets/:subjectId',
          element: <DetailSubjets />
        },
        {
          path: 'Profesores',
          element: <Teachers />
        },
        {
          path: 'Noticias',
          element: <>Noticias</>
        },
        {
          path: '/interacion/leydefaraday',
          element: <LeyDeFaraday/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
