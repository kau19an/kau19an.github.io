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
      <header className="flex gap-2 justify-between items-center p-2 pr-4 bg-slate-600/10 dark:bg-stone-800/50 lg:dark:bg-stone-800/30 rounded-b-2xl m-auto lg:w-2/4 w-4/5">
        <a href="/"> 
          <img src={logo} className="w-12 m-1 hover:brightness-90 dark:hover:brightness-75 transition-discrete duration-400" alt="Logotipo do site" title="Logotipo" draggable="false"/>
        </a>
        <nav className="flex gap-2 lg:gap-4 items-center">
          <ul className="flex gap-4 uppercase text-md font-medium transition-colors duration-300">
            <li className="border rounded-full pl-2 pr-2 text-black hover:bg-stone-900 active:bg-stone-900 dark:hover:bg-gray-50 dark:text-white dark:active:text-black hover:text-gray-50 active:text-gray-50 dark:hover:text-stone-900 dark:active:bg-gray-50 transition-colors duration-400"><a href="#">Sobre mim</a></li>
            <li className="border rounded-full pl-2 pr-2 text-black hover:bg-stone-900 active:bg-stone-900 dark:hover:bg-gray-50 dark:text-white dark:active:text-black hover:text-gray-50 active:text-gray-50 dark:hover:text-stone-900 dark:active:bg-gray-50 hidden lg:block transition-colors duration-400"><a href="#">Portfólio</a></li>
            <li className="border rounded-full pl-2 pr-2 text-black hover:bg-stone-900 active:bg-stone-900 dark:hover:bg-gray-50 dark:text-white dark:active:text-black hover:text-gray-50 active:text-gray-50 dark:hover:text-stone-900 dark:active:bg-gray-50 hidden lg:block transition-colors duration-400"><a href="#">Blog</a></li>
          </ul>
          <div className="flex items-center lg:hidden rounded-full">
            <FontAwesomeIcon icon={icons.down} className="cursor-pointer border rounded-full p-1 pl-2 pr-2 text-black hover:bg-stone-900 active:bg-stone-900 dark:hover:bg-gray-50 dark:text-white dark:active:text-black hover:text-gray-50 active:text-gray-50 dark:hover:text-stone-900 dark:active:bg-gray-50 transition-colors duration-400" />
          </div>
        </nav>
        <div className="flex gap-2 items-center">
          <a href="https://github.com/kau19an/kau19an.github.io" target="_blank">
            <FontAwesomeIcon icon={icons.gh} className="dark:text-gray-50 dark:hover:text-gray-400 hover:opacity-75 text-xl xl:mt-1 transition-colors duration-400" title="Repositório no GitHub" />
          </a>
          <button onClick={toggleTheme} title={setTitle()} className="cursor-pointer dark:text-gray-50 dark:hover:text-gray-400 hover:opacity-75 text-xl transition-colors duration-400">
            <FontAwesomeIcon icon={isDarkMode ? icons.sun : icons.moon} />
          </button>
        </div>
      </header>
      <main className="dark:text-white text-black">
        <h1 className="p-2 mt-5 text-xl text-center">Olá, mundo!</h1>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;