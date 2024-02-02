import React from 'react';
import { Outlet } from 'react-router-dom';
export default function Contact() {
  return (
    <body>
      <div>
        <h3>Contact</h3>
        <Outlet />
      </div>
    </body>
  );
}
