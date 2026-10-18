import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const workExperience = [
  {
    id: 1,
    company: "Dotts Tech Information Technology Private Limited",
    position: "Salesforce Administrator",
    duration: "December 2025 – Present",
    location: "Coimbatore, India",
    achievements: [
      "Manage Salesforce administration, user access, permissions, and data integrity to ensure a reliable CRM environment for business operations.",
      "Develop and maintain reports, dashboards, and workflow automations to improve process efficiency and provide actionable business insights.",
      "Troubleshoot production issues, maintain existing configurations, and collaborate with stakeholders to deliver solutions aligned with business requirements."
    ]
  },
  
  {
    id: 2,
    company: "Aparajitha Corporate Services Private Limited",
    position: "Salesforce Administrator",
    duration: "December 2023 – December 2025",
    location: "Chennai, India",
    achievements: [
      "Designed and maintained 50+ Salesforce automations using Flow, Process Builder, validation rules, and approval processes to reduce manual work and streamline business operations.",
      "Created 1,000+ reports and 50 dashboards for sales, finance, and operations teams, enabling better visibility into performance, transactions, and business KPIs.",
      "Managed user access, data cleansing, duplicate resolution, testing, and production support while supporting real estate processes such as bookings, payment plans, buyer KYC, agreements, and renewals."
    ]
  },
  {
    id: 3,
    company: "AJSD Academy",
    position: "Salesforce Administration Trainee",
    duration: "August 2023 – December 2023",
    location: "Chennai, India",
    achievements: [
      "Developed foundational Salesforce administration skills through hands-on practice with CRM configuration, standard and custom objects, fields, and page layouts.",
      "Practiced creating reports, dashboards, validation rules, and workflow automations to support common business requirements.",
      "Built practical knowledge of Salesforce data management, user access configuration, and CRM support processes."
    ]
  }
];


const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            My professional journey spans across various industries and technologies,
            from defense systems to trading platforms and social media applications.
            Each role has contributed to my growth as a versatile software engineer.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
