import React from 'react'
import './Home.css'
import { prmsuVision, collegeGoals, collegeGoalsPrograms } from '../../constants';


function Home() {
  return (
    <div className='home'>
      <div>
        <p>The IT and Computer Science program offers students a solid foundation in both theoretical and practical aspects of computing. With courses ranging from programming and data structures to cybersecurity and cloud computing, students gain hands-on experience with the latest technologies. The program also emphasizes problem-solving, critical thinking, and collaboration skills essential for thriving in today’s fast-paced tech industry. Graduates are well-prepared for careers in software development, systems analysis, IT support, and more</p>
      </div>

      <div className='prmsu__vision'>
        {prmsuVision.map((item, index) => (
          <div className='prmsu__vision-container'>
            <img 
              src={item.img} 
              className='vision__img'
              alt="icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="college__goals">
          {collegeGoals.map((item, index) =>(
        <div className="collge__goals-container-1">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Home