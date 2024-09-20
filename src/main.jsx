import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import './assets/css/reset.css'이제 안할거임
// import './index.css'; 테일윈드

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
