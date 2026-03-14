import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Posts, { loader as postsLoader } from './routes/Posts.jsx';
import NewPost from './routes/NewPost.jsx';
import RouteLayout from './routes/RouteLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <RouteLayout />, 
    children: [
      {
        path: '/', element: <Posts />,
        loader: postsLoader,
        children: [{ path: 'create-post', element: <NewPost />}]
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
