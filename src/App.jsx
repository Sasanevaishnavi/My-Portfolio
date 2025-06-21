
import styles from"./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero"; 
import { About } from "./components/About/About";
import { Project } from "./components/Project/project";
import { Contact } from "./components/Contact/Contact";
import { Skill } from "./components/Skill/Skill";
import { Education } from "./components/Education/Education";


function App() {
  
  return (
    <>
    <div className={styles.App}>
      <Navbar/>
       <Hero />
       <About/>
       <Education/>
       <Skill/>
       <Project/>
       <Contact/>
      </div>
    
    </>
  )
}

export default App;
