import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/config/configStore';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import QueryClientSetup from './QueryClientSetup';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientSetup>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer autoClose={1800} limit={1} closeOnClick />
      <App />  
    </QueryClientSetup>
  </Provider>
  // </React.StrictMode>,
)
