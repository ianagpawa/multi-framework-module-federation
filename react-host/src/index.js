import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";

function Component() {
  // TODO: Actually implement a navigation bar
  return <h1 class='hello'>Hello from React Host!</h1>;
}

const domNode = document.getElementById('component');
const root = createRoot(domNode);
root.render(<Component />);