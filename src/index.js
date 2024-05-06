import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import BooksContainer from './components/BooksContainer';
import NewBookForm from './components/NewBookForm';
import BookDetails from './components/BookDetails'


const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/books",
    element: <BooksContainer />,
  },
  {
    path: "/book/:id",
    element: <BookDetails />,
  },
  {
    path: "/new",
    element: <NewBookForm />,
  }
]
  
const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
