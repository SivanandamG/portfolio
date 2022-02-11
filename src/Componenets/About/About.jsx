import "./About.css"

 export default function About(){
      return(
<div className="parent">
<div className="box-one">
  <h3>
    Hi,<br />
    I’m  
    <span className="color-secondary"> Sivanandam Gorantla 
    </span>
    <br />
    Hello and thanks for visiting my profile. I am a full stack web developer and mostly I am inspired on web coding. I’m quite expert in using coding and markup languages like: Hypertext markup language (HTML) Cascading Style Sheet, Javascript, Reactjs, Nodejs, npm, Mongodb,..    
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