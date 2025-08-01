
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes';
import "./assets/css/font.css";
// import "./App.css";

function App() {
    return <RouterProvider router={router} />;
}

export default App;