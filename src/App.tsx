import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routesList } from './routes';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={routesList} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
