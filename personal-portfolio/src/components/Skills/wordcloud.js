import React, { useEffect, useState } from 'react'

import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    // Salesforce core
    'Salesforce',
    'Sales Cloud',
    'Service Cloud',
    'Salesforce Flow',
    'Process Builder',
    'Approval Processes',
    'Validation Rules',
    'Apex',
    'Triggers',
    'SOQL',
    'Visualforce',
    'Custom Controllers',
    'Lightning',
    'Reports',
    'Dashboards',
    'Custom Objects',
    'Record Types',
    'Page Layouts',
    'Permission Sets',
    'Profiles',
    'Roles',
    // Data operations
    'Data Loader',
    'Workbench',
    'Data Cleansing',
    'Deduplication',
    'Bulk Updates',
    'Imports & Exports',
    // Integrations
    'DocuSign',
    'Zoho Sign',
    'Zoho Contracts',
    'Google Sheets',
    'Property Finder',
    'Bayut',
    // Release & DevOps
    'Change Sets',
    'GitHub',
    'Sandboxes',
    'QA',
    'UAT',
    'Regression Testing',
    // Business domain
    'Real Estate CRM',
    'Lead Management',
    'Opportunity Management',
    'KYC',
    'Payment Plans',
    'Receivables',
    'Agreements',
    'Work Orders',
    'Document Generation',
    // Supporting technical skills
    'SQL',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Git',
    
  ]
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud