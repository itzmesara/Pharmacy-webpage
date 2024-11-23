import Login from './LoginPage/Login';
import HomePage from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './RegisterPage/Register';

function App() {
  const route=createBrowserRouter(
    [
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/home',
        element:<HomePage/>
      }
    ]
  )
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
