import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            Salesforce Administrator and Developer with 2+ years of hands-on experience across the full CRM lifecycle — administration, declarative and programmatic automation, reporting, data operations, integrations, release management, and production support.

Administration: Managed ~100 users across profiles, roles, permission sets, and access controls; configured custom objects, fields, page layouts, record types, and validation rules.

Automation & Development: Built and maintained 50+ automations using Salesforce Flow, Process Builder, Validation Rules, and Approval Processes. Experience with Apex, Triggers, SOQL, Visualforce, and custom controllers for document generation and PDF/email workflows.



          </p>
          <p>
            Reporting & Data: Created reports and dashboards for sales, finance, operations, and management, including financial-year logic and receivables tracking. Performed data cleansing, deduplication, bulk updates, and imports/exports using Data Loader and Workbench.

Integrations: Supported workflows involving DocuSign, Zoho Sign, Zoho Contracts, Google Sheets, Property Finder, and Bayut across UAE real-estate client environments.

Release & Support: Supported sandboxes, QA, UAT, regression testing, Change Sets, GitHub deployments, and post-release troubleshooting. Diagnosed automation failures, data issues, and configuration problems, and supported stakeholders through requirements gathering, training, and SOPs.

          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
