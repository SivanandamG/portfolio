
import "./projects.css";

export default function Projects({children}){
     return(
          <div ref={children} id="projectdiv"><br />
               <h1>Projects</h1>
               <br />
          <div id="projects">
               <div id="healthmug" className="projdiv">
                    <img width={"100%"} height={"200px"}  src="https://github.com/SivanandamG/portfolio/blob/f1b20063a24aed531a0a8ad9f21fc6ff5e4b3a83/healthmug.png?raw=true" alt="" />
                    <p>Healthmug is exclusive for medicines with different types allopathy ,Homeopathy and more</p>
                    <p>Tech Stack : HTML5, CSS3, Javascript</p>
                    <div className="healthmug-links">
                    <p><a href="https://github.com/Akshay-Kumar2000/HealthMug-Clone-Project-" target="_blank" rel="noreferrer"> github link</a></p>
                         <p><a href="https://github.com/Akshay-Kumar2000/HealthMug-Clone-Project-" target="_blank" rel="noreferrer">Demo link</a></p>
                    </div>
               </div>

               <div id="buywow" className="projdiv">
                    <img width={"100%"} height={"200px"} src="https://github.com/SivanandamG/portfolio/blob/550f1f9e2efcb42f12e590d4d4750584e333d19a/buywow.png?raw=true" alt="" />
                    <p>buywow website is one stop destination for all beuty and grooming needs</p>
                    <p>Tech Stack : HTML5, CSS3, Javascript</p>
                    <div className="buywow-links">
                         <p><a href="https://github.com/SivanandamG/buyWowProject" target="_blank" rel="noreferrer"> github link</a></p>
                         <p><a href="https://buywowclone-web13.netlify.app/" target="_blank" rel="noreferrer">Demo link</a></p>
                    </div>
               </div>
          </div>
          </div>
     )
}