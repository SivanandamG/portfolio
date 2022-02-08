import "./About.css"

 export default function About(){
      return(
<div className="parent">
<div className="box-one">
  <h1>
    Hi,<br />
    I’m  
    <span className="color-secondary"> SIvanandam Gorantla
    </span>
    <br />
    I Trained as a <span className="color-secondary">Full Stack Web Developer</span>, at 
    <a className="color-secondary"href="https://www.masaischool.com/"> Masai School</a> 
  </h1>
  <div style={{marginTop:"50px"}}>
  <a className="contact-link" href="https://drive.google.com/file/d/16f_3KhL_4jAbHKkjHfVhuQaHEMWZLIyf/view?usp=sharing"> Contact Me</a> </div>
</div>
<div className="box-two">
  <div className="image" >
  <img src="https://avatars.githubusercontent.com/u/93380641?v=4" alt="sivanandam"/>
  </div>
</div>
</div>
)
}