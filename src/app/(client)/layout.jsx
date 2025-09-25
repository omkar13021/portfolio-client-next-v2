"use client"

import { Provider } from 'react-redux'
import Header from './_lib/components/Header.jsx'
import './_lib/styles/globals.css'
import store from '../redux/store'


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>Omkar Panchal | Full Stack Developer</title>
          <meta name="description" content="Welcome to Omkar Panchal’s personal website. Explore my portfolio, projects, and blogs to learn more about my work and achievements." />
          <link rel="icon" href="/favicon.png" />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Omkar Panchal",
              "url": "https://omkarcodes.online",
              "sameAs": [
                "https://www.linkedin.com/in/omkarpanchalcse", 
                "https://github.com/omkar755292", 
                "https://twitter.com/omkar15183788",
                "https://www.instagram.com/onkaar._/"
              ],
              "jobTitle": "Freelance MERN Stack Web Developer", 
              "worksFor": {
                "@type": "Organization",
                "name": "Freelancer" 
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Singad Institute, Pune"
              },
              "knowsAbout": ["Web Development", "Cloud Hosting", "AWS Services", "MERN Stack", "AWS"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pimpri-Chinchwad, Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              }
            }),
          }}
        />
        </head>
        <body>
          <Header />
          {children}
        </body>

      </html>
    </Provider>
  )
}
