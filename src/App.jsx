import './App.css';
import logo from '../assets/logo-500.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './utils/icons.jsx';

function App() {
  return (
    <div className="dark:bg-stone-950 transition-colors duration-300">
      <header className="flex gap-2 items-center p-2 bg-linear-to-bl from-stone-900 to-stone-950">
        <a href="/" target="_self">
          <img src={logo} className="w-12 m-1 hover:opacity-75" alt="Logotipo do site" title="Logotipo" draggable="false"/>
        </a>
        <a href="https://github.com/kau19an/kau19an.github.io" target="_blank">
          <FontAwesomeIcon icon={icons.gh} className="text-gray-300 hover:text-gray-400 text-lg" title="Repositório no GitHub" />
        </a>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;