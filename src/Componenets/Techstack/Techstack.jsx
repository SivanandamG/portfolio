
import "./Techstack.css"
export default function Techstack({children}){
     return(
          <div ref={children} id="techstack">
               
               <h1>Tech Stack</h1>

               <div className="techstack">
                    <i style={{ color: '#000000' }}  className="fab fa-html5"></i>
                    <i style={{ color: '#000000'}} className="fab fa-css3"></i>
                    <i style={{ color: '#C1A3A3',background:"black" }}  className="fab fa-js"></i>
                    <i style={{ color: '#000000' }}  className="fab fa-react"></i>
                    <i style={{  }} className="fab fa-node"></i>
                    <i style={{ color: '#000000' }} className="fab fa-npm"></i>
                    <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="_blank"/>                   
                    <i style={{ color: '#000000' }} className="fab fa-python"></i>
               </div>
               
               <div className="class-tech"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>react</span><span>nodejs</span><span>npm</span><span>mongodb</span><span>python</span></div>

               <h1>Proficiency</h1>
               <div className="proficiency">
                    <i style={{ color: '#000000' }}  className="fab fa-html5"></i>
                    <img src="https://img.icons8.com/ios-filled/50/000000/database.png" alt="_blank"/>
                    <img src="https://cdn-icons.flaticon.com/png/512/4699/premium/4699844.png?token=exp=1644563731~hmac=ce2ed41f40174c3800992bbc9a217ec0" alt="_blank"/>
               </div>
               
               <div className="class"><span>Frontend</span><span>Backend</span><span>DataStructures</span></div>
               {/* <span>DataStructures</span> */}

          </div>
     )
}