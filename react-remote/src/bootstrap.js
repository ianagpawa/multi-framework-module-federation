import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import Component from './Component';

const domNode = document.getElementById('component');
const root = createRoot(domNode);
root.render(<Component />);
