import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from "../components/layout/MainLayout.tsx";
import Home from '../pages/Home/Home.tsx';
import RegisterProperty from '../pages/RegisterProperty/RegisterProperty.tsx';
import PropertyInspection from '../pages/PropertyInspection/PropertyInspection.tsx';
import ContactUs from '../pages/ContactUs/ContactUs.tsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/register-property',
        element: <RegisterProperty />
      },
      {
        path: '/property-inspection',
        element: <PropertyInspection />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '*',
        element: <h1>صفحه پیدا نشد!</h1>
      }
    ]
  }
]);

export default router;
