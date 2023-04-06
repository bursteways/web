import ReactMarkdown from 'react-markdown'

const markdown = `
Terminology:
  - **Manage Studio**: The app you're currently using to edit content.
  - **Sanity.io**: The service provider that powers the studio.
  - **SEO**: Search Engine Optimization. The process of optimizing your website to be found by search engines.
  
  # Guide

  Given you're accessing this guide, you're already started! 🎉
  
  `

export const Guide = () => (
  <div style={{padding: '20px'}}>
    <ReactMarkdown children={markdown} />
  </div>
)
