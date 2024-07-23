import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routesList } from './routes';

function App() {

  return (
    <>
      <RouterProvider router={routesList} />
    </>
  );
}

export default App;
