
import "./Introduction.css"

export default function Introduction({skills,projects,contact}){

return(
     <nav id="navbar">
          <header className="header">
               <h1 className="logo">Sivanandam Gorantla</h1>
                     <ul className="main-nav">
                         <li >About</li>
                         <li onClick={()=>{skills.current.scrollIntoView()}}>skills</li>
                         <li onClick={()=>{projects.current.scrollIntoView()}}>Projects</li>
                         <li onClick={()=>{contact.current.scrollIntoView()}}>Contact</li>
                    </ul>
	     </header>
     </nav>
)
}