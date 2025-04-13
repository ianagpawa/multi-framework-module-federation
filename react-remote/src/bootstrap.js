import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import App from './App';

const domNode = document.getElementById('react-remote-app');
const root = createRoot(domNode);
root.render(<App />);
