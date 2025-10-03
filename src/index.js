import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContext from './AppContext';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';
// import App from './App';
// import AppEffect from './AppEffect';
// import AppFetch from './AppFetch';
// import App2 from './App2';
// import AppRender from './AppRender';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <AppRender /> */}
    {/* <AppEffect /> */}
    {/* <AppFetch /> */}
    <AdminFlagProvider>
      <AppContext />
    </AdminFlagProvider>
  </React.StrictMode>
);

