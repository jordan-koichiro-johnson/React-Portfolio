import Navbar from './components/navbar'
import Homepage from './components/home';
import Footer from './components/footer';
import Projects from './components/project';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  function renderNavChoice() {
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Home') {

      return <Homepage />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderNavChoice()}
      <Footer />
    </div>
  );
}

export default App;
