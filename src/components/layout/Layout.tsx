import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import Navigation from './Navigation';



export default function Layout() {
  return (
    <div className="w-full h-full flex">
      <BrowserRouter>
        <Navigation />
        <Main />
      </BrowserRouter>
    </div>
  );
}
