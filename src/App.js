import Navbar from './components/navbar'
import Homepage from './components/home';
import Footer from './components/footer';
import Projects from './components/projectpage';
import './App.css';
import React, { useState } from 'react';
import Contact from './components/contact';
import Resume from './components/resume';
import './styles/style.css'

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  function renderNavChoice() {
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Home') {

      return <Homepage />;
    }
    if (currentPage === 'Contact') {

      return <Contact />;
    }
    if (currentPage === 'Resume') {

      return <Resume />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className={'bigdiv'}>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderNavChoice()}
      <Footer />
    </div>
  );
}

export default App;
