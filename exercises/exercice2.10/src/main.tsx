import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/Pages/HomePage.tsx';
import CinemaPage from './components/Pages/CinemaPage.tsx';
import MovieListPage from './components/Pages/MovieListPage.tsx';



    

const router= createBrowserRouter( [
  {
    path: "/",
    element:<App/>,
    children:[
      {
      path: "",
      element:<HomePage/>
      },
      {
        path:"cinema",
        element:<CinemaPage />

      },
      {
        path:"movie",
        element:<MovieListPage/>
      }
      
    ]
    }
  ]
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)


