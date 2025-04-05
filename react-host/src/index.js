import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import Component from './components/Component'


const domNode = document.getElementById('component');
const root = createRoot(domNode);
root.render(<Component />);