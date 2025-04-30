import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ 추가
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ 라우터 컨텍스트 추가 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
