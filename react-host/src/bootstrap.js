import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import HostComponent from './components/HostComponent'


const domNode = document.getElementById('hostcomponent');
const root = createRoot(domNode);
root.render(<HostComponent />);