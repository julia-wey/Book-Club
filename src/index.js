import React from 'react';
import ReactDOM from 'react-dom/client';
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
//import Home from './components/Home';
//import BooksContainer from './components/BooksContainer';


// const routes = [
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true, 
//         element: <Home />
//       },
//       {
//         path: "/books",
//         element: <BooksContainer />,
//         children: [
//           {
//             path: "/:id",
//             element: <BookDetails />
//             //make this component 
//           }
//         ]
//       },
//       {
//         path: "/new",
//         element: <NewBookForm />
//         //make this component
//       }
//     ]
//   }
// ]

// const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>
);
