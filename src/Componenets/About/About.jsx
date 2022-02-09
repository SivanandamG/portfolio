import "./About.css"

 export default function About(){
      return(
<div className="parent">
<div className="box-one">
  <h3>
    Hi,<br />
    I’m  
    <span className="color-secondary"> SIvanandam Gorantla 
    </span>
    <br />
    I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for various domains. <span className="color-secondary">Full Stack Web Developer</span>, at 
    <a className="color-secondary"href="https://www.masaischool.com/"> Masai School</a> 
  </h3>
  <div style={{marginTop:"50px"}}>
  <a className="contact-link" href="https://drive.google.com/file/d/16f_3KhL_4jAbHKkjHfVhuQaHEMWZLIyf/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a> </div>
</div>
<div className="box-two">
  <div className="image" >
  <img src="https://avatars.githubusercontent.com/u/93380641?v=4" alt="sivanandam"/>
  </div>
</div>
</div>
)
}