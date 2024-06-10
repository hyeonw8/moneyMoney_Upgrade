import { RouterProvider } from 'react-router-dom';
import Globalstyle from './shared/Globalstyle';
import Router from './router/Router';

function App() {

  return (
    <>
      <Globalstyle />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
