import './App.css';
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-500.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './utils/icons.jsx';

function App() {
  // Dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const setTitle = () => {
    return isDarkMode ? 'Alterar para o modo claro' : 'Alterar para o modo escuro';
  };

  return (
    <div>
      <header className="flex gap-2 items-center p-2 bg-slate-300/25 dark:bg-stone-900/30">
        <a href="/" target="_self"> 
          <img src={logo} className="w-12 m-1 hover:brightness-90 dark:hover:brightness-75" alt="Logotipo do site" title="Logotipo" draggable="false"/>
        </a>
        <a href="https://github.com/kau19an/kau19an.github.io" target="_blank">
          <FontAwesomeIcon icon={icons.gh} className="dark:text-gray-300 dark:hover:text-gray-400 hover:opacity-75 text-lg" title="Repositório no GitHub" />
        </a>
        <button onClick={toggleTheme} title={setTitle()} className="cursor-pointer dark:text-gray-300 dark:hover:text-gray-400 hover:opacity-75 text-lg">
          <FontAwesomeIcon icon={isDarkMode ? icons.sun : icons.moon} />
        </button>
      </header>
      <main className="dark:text-white text-black">
        <h1 className="p-2 text-xl">Olá, mundo!</h1>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;