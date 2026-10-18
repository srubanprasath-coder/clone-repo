import { useEffect, useState } from 'react'

import { faCode, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// Experience data - company-wise responsibility inventory
const experiences = [
  {
    id: 1,
    title: 'Salesforce Administrator',
    company: 'Dotts Tech Information Technology Private Limited',
    description:
      'Working structure for Salesforce administration, automation, and stakeholder support. Detailed company-specific activities are still being separated from prior experience.',
    technologies: ['Salesforce', 'Flow', 'Reports', 'Dashboards', 'User Management', 'Configuration'],
    category: 'Salesforce Administration',
    status: 'Current',
    year: '2025',
    location: 'Coimbatore, India',
    period: 'December 2025 – Present',
    features: [
      'Manage Salesforce user access, profiles, roles, permission sets, and configuration.',
      'Maintain data quality and support day-to-day CRM operations.',
      'Maintain business-process automation and investigate failures.',
      'Create or maintain reports and dashboards for operational visibility.',
      'Support stakeholders with requirements, testing, and process improvements.'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true,
    note: 'Provisional categories — not every task independently confirmed for this role.'
  },
  {
    id: 2,
    title: 'Salesforce Admin/Developer',
    company: 'Box Tech Information Solutions Private Limited',
    description:
      'Functional and technical support across 13+ UAE real-estate clients, covering development, automation, integrations, releases, and documentation.',
    technologies: ['Salesforce', 'Flow', 'Apex', 'SOQL', 'Change Sets', 'GitHub', 'Property Finder', 'Bayut'],
    category: 'Salesforce Development',
    status: 'Completed',
    year: 'TBC',
    location: 'UAE Real-Estate Client Portfolio',
    period: 'Employment dates to be confirmed',
    features: [
      'Served as functional and technical support contact for 13+ UAE real-estate clients.',
      'Developed and maintained Salesforce automation using Flow, Apex, triggers, and SOQL.',
      'Supported integration workflows involving Property Finder and Bayut.',
      'Supported changes across QA, UAT, and production environments.',
      'Worked with Change Sets and GitHub as part of development and release activities.',
      'Collaborated with QA, business analysts, project managers, developers, and client stakeholders.',
      'Participated in requirements gathering, testing, code review, and solution documentation.'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 3,
    title: 'Salesforce Administrator',
    company: 'Aparajitha Corporate Services Private Limited',
    description:
      'Managed ~100 users and 50+ automations across real-estate operations, reporting, data integrity, integrations, and production support.',
    technologies: ['Salesforce', 'Flow', 'Process Builder', 'Validation Rules', 'Approval Processes', 'Data Loader', 'Workbench', 'DocuSign', 'Zoho Sign', 'Zoho Contracts', 'Google Sheets'],
    category: 'Salesforce Administration & Development',
    status: 'Completed',
    year: '2023',
    location: 'Chennai, India',
    period: 'December 2023 – December 2025',
    features: [
      'Managed approximately 100 users across onboarding, offboarding, licences, profiles, roles, permission sets, and access controls.',
      'Configured custom objects, fields, page layouts, record types, validation rules, and other CRM settings.',
      'Built and maintained 50+ automations using Salesforce Flow, Process Builder, Validation Rules, and Approval Processes.',
      'Automated business processes spanning bookings, buyer information, payment plans, work orders, agreements, and renewals.',
      'Troubleshot automation conflicts, failures, and unexpected record updates.',
      'Created reports and dashboards for sales, finance, operations, and management.',
      'Developed reporting logic for financial-year comparisons, activity monitoring, due-date categories, and numeric-range analysis.',
      'Performed data cleansing, deduplication, auditing, bulk updates, imports, and exports.',
      'Used Data Loader and Workbench for data operations and troubleshooting.',
      'Supported Lead and Opportunity management, bookings, units, buyer details, and KYC data.',
      'Worked on payment plans, payment transactions, agreements, renewals, work orders, and document-generation processes.',
      'Supported document and signature workflows involving DocuSign, Zoho Contracts, and Zoho Sign.',
      'Worked with Google Sheets-connected processes and related data workflows.',
      'Supported sandbox refreshes, QA, UAT, regression testing, and production releases.',
      'Investigated Flow, Apex, SOQL, data, validation, and configuration errors.',
      'Supported change implementation, deployment validation, user training, SOPs, and post-release troubleshooting.'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  },
  {
    id: 4,
    title: 'Salesforce Administration Trainee',
    company: 'AJSD Academy',
    description:
      'Built foundational Salesforce administration skills through hands-on practice in configuration, automation, reporting, and data management.',
    technologies: ['Salesforce', 'Flow', 'Reports', 'Dashboards', 'Validation Rules', 'Data Management'],
    category: 'Salesforce Training',
    status: 'Completed',
    year: '2023',
    location: 'Chennai, India',
    period: 'August 2023 – December 2023',
    features: [
      'Practised CRM configuration, objects, fields, page layouts, and user access.',
      'Developed foundational skills in reports, dashboards, validation rules, and Flow automation.',
      'Learned data management, testing, documentation, and Salesforce administration practices.'
    ],
    images: [],
    githubUrl: null,
    liveUrl: null,
    isPrivate: true
  }
]

const Projects = () => {
  const projectsArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Get unique categories for filtering
  const categories = ['All', ...new Set(experiences.map(exp => exp.category))]

  // Filter experiences based on selected category
  const filteredExperiences = filter === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === filter)

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
            A company-wise inventory of my Salesforce career — capturing administration,
            development, automation, integrations, reporting, data operations, release
            management, and stakeholder support across each role.
          </p>

          {/* Category Filter */}
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {filteredExperiences.map((exp, index) => (
              <div key={exp.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Project Images Section - with provision for multiple images */}
                {exp.images && exp.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {exp.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`${exp.company} ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{exp.category}</span>
                      <span className="year">{exp.year}</span>
                      <span className={`status ${exp.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {exp.status}
                      </span>
                    </div>
                    <h3 className="project-title">{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="company">{exp.location} · {exp.period}</p>
                  </div>

                  <p className="project-description">{exp.description}</p>

                  <div className="project-features">
                    <h4>Responsibilities:</h4>
                    <ul>
                      {exp.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {exp.note && (
                    <p className="project-description" style={{ fontStyle: 'italic', opacity: 0.8 }}>
                      Note: {exp.note}
                    </p>
                  )}

                  <div className="project-links">
                    {exp.githubUrl && (
                      <a href={exp.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span>Code</span>
                      </a>
                    )}
                    {exp.liveUrl && (
                      <a href={exp.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {exp.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private / Confidential Work</span>
                      </span>
                    )}
                  </div>
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

export default Projects