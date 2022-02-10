
import "./contactme.css";

export default function Contact({children}){
     return(
          <div ref={children} id="contactdiv"><br />
               <h1>contact me</h1>
            <div id="mail">
            <form action="mailto:gorantlasivanandam@gmail.com" method="post" enctype="text/plain">
               <table>
                    <tbody>
                         <tr>
                              <td> Name: </td><td><input className="input" type="text" /></td>
                         </tr>
                         <tr>
                              <td>Subject: </td><td><input className="input" type="text" /></td>
                         </tr>
                         <tr>
                         <td></td><td></td>
                         </tr>
                    </tbody>
               </table>
      <input id="submitbtn" type="submit" value="Send" /></form>
          </div>
               <div id="techstack-icon">
                        <a href="https://github.com/SivanandamG" target="_blank" rel="noreferrer"> <i  style={{fontSize:"30px", color: 'black' }}  className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/sivanandam-gorantla-878a511b7/" target="_blank" rel="noreferrer"> <i style={{fontSize:"30px", color: 'black'}} className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/Sivanan17585739" target="_blank" rel="noreferrer"> <i style={{fontSize:"30px", color: 'black' }}  className="fab fa-twitter"></i></a>
               </div>
               <p>Location: Guntur,Andhra Pradesh</p>
               <p>Mobile: +91 8106251562</p>
          </div>
     )
}