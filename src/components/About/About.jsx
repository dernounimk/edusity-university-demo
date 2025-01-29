import theVideo from './video.mp4'
import "./About.css"

function About() {
  return (
    <div className='about container' id='about'>
      <div className="video">
        <video loop controls src={theVideo}></video>
      </div>
      <div className="info">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
            Embak on a transformative educational journey with our university's comprehensive education programs.
            Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experinces
            needed to excel in the dynamic field of education.
        </p>
        <p>
            With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring 
            educator to make meaningful impact in classrooms, schools and communities.
        </p>
        <p>
            Whether you aspire th become a teacher, administirator, counselor, or educational leader,our diverse of programs offers
            the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  )
}

export default About
