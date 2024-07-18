import React from 'react';
import CursosOnline from './components/CursosOnline';
import './App.css';

const App = () => {
  return (
    <body>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <h2>Meus Cursos</h2>
          </div>
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="app">
          <CursosOnline />
        </div>
      </main>
    </body>
  );
};

export default App;


