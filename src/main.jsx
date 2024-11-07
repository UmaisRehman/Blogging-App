import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "singleUser",
        element: <SingleUser />,
      },
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
