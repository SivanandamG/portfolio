
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
      </form><input id="submitbtn" type="submit" value="Send" />
          </div>
               <div id="techstack-icon">
                         <i style={{fontSize:"30px", color: 'black' }}  className="fab fa-github"></i>
                         <i style={{fontSize:"30px", color: 'black'}} className="fab fa-linkedin"></i>
                         <i style={{fontSize:"30px", color: 'black' }}  className="fab fa-twitter"></i>
               </div>
               <p>Location: Guntur,Andhra Pradesh</p>
               <p>Mobile: +91 8106251562</p>
          </div>
     )
}