"use client"

import React, {useState} from 'react'

import SectionHeader from '../components/section-header/SectionHeader'
import { data } from './portfolioData'

import "./portfolio.module.css"
import CategoryButtons from './CategoryButtons'
import Projects from './Projects'
const Page = () => {
  const [projects, setProjects] = useState(data)

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)]


  const filterProjectsHandler = (category) => {
 if(category === "all"){
  setProjects(data);
  return;
 }

 const filteredProjects = data.filter(project => project.category === category);

 setProjects(filteredProjects)
  }

  console.log(uniqueCategories)
  return (
   <section>
    <SectionHeader title="My Projects" subtitle="Most Recent Project. Filter With The Buttons" />

    <div className="container">
      <CategoryButtons categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>

      <Projects projects={projects}/>
    </div>
   </section>
  )
}

export default Page
