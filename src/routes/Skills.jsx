import React from 'react'
import '../skills.css'
import { SkillCard } from '../../components/SkillCard'
import { Header } from '../../components/Header'

export const Skills = () => {
  return (
    <>
        <Header />
        <div className='container'>
          <div className='skills-wrapper'>
            <p id='skills-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, aperiam.</p>
            <SkillCard 
              title="Responsive Web Design"
              skillsDesc="FreeCodeCamp"
              certificateLink="#"
            />
            <SkillCard 
              title="JavaScript Algorithms and Data Structures"
              skillsDesc="FreeCodeCamp"
              certificateLink="#"
            />
          </div>
        </div>
    </>
  )
}
