
import "./Techstack.css"
export default function Techstack({children}){
     return(
          <div ref={children} id="techstack">
               
               <h1>Tech Stack</h1>
               <div className="techstack">
                    <i style={{ color: '#e44d26' }}  className="fab fa-html5"></i>
                    <i style={{ color: '#156aa6'}} className="fab fa-css3"></i>
                    <i style={{ color: 'yellow',background:"black" }}  className="fab fa-js"></i>
                    <i style={{ color: '#61dafb' }}  className="fab fa-react"></i>
                    <i style={{  }} className="fab fa-node"></i>
                    <i style={{ color: '#ff0000' }} className="fab fa-npm"></i>
                    <img  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="_blank"/>
                    <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="_blank"/>
               </div>
               <div className="class-tech"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>react</span><span>nodejs</span><span>npm</span><span>mongodb</span><span>python</span></div>

               <h1>Proficiency</h1>
               <div className="proficiency">
                    <i style={{ color: '#e44d26' }}  className="fab fa-html5"></i>
                    <img src="https://img.icons8.com/ios-filled/50/000000/database.png" alt="_blank"/>
                    <img src="https://img.icons8.com/external-color-outline-adri-ansyah/64/000000/external-connect-social-media-interface-color-outline-adri-ansyah.png" alt="_blank"/>
               </div>
               
               <div className="class"><span>Frontend</span><span>Backend</span><span>DataStructures</span></div>

          </div>
     )
}