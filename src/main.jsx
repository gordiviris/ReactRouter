import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseEffectDemo from './components/UseEffectDemo';
import { UseStateDemo } from './components/UseStateDemo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<UseStateDemo />}/>
          <Route path="state-demo"  element={<UseStateDemo />} />
          <Route path="effect-demo"  element={<UseEffectDemo />} >
            <Route path=":startingCount" element={<UseEffectDemo />}/>
          </Route>
          <Route path="*" element={<div>Route Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
