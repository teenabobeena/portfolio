import React from 'react'
import './skillCard.css'

export const SkillCard = (props) => {
  const { title, skillsDesc, certificateLink } = props;

  return (
    <>
        <h2>{title}</h2>
        <p className='skills-desc'>{skillsDesc} / <a href={certificateLink}>certificate</a></p>
    </>
  )
}
