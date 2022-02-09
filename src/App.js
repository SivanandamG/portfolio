import { useRef } from 'react';
import './App.css';
import About from './Componenets/About/About';
import Contact from './Componenets/Contact/Contactme';
import Introduction from './Componenets/Head/Introduction';
import Projects from './Componenets/Projects/projects';
import Techstack from './Componenets/Techstack/Techstack';

function App() {
  const projects = useRef();
  const skills = useRef();
  const contact = useRef();
  return (
    <div className="portfolio">
     <Introduction projects={projects} skills={skills} contact={contact} />
     <About />
     <Techstack>{skills}</Techstack>
     <Projects>{projects}</Projects>
     <Contact>{contact}</Contact>
  </div>
  );
}

export default App;
