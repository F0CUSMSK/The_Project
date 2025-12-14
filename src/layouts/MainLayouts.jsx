import React from 'react';
import Navbar from '../core/Navbar';
import Footer from '../core/Footer';
import Chatbot from '../pages/Chatbot';

const MainLayout = ({ children }) => (
  <div className=" min-h-screen flex flex-col">
    <Navbar/>
    <div className="">
      <main>{children}</main>
    </div>
          <Chatbot />

    <Footer/>
  </div>
);

export default MainLayout;