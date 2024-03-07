import React from 'react'

import { data } from './servicesData'
import SectionHeader from '../components/section-header/SectionHeader'

import styles from "./services.module.css"
import Card from '../components/card/Card'
const Page = () => {
  return (
    <section>
      <SectionHeader title="Services" subtitle="The services I offer"/>
      <div className={`container ${styles.container}`}>
         {data.map(({id, title, description, icon}) =>
          <Card key={id} className={styles.service}>

            <span>{icon}</span>
            <h5>{title}</h5>
            <p>{description}</p>


         </Card>)}
      </div>
    </section>
  )
}

export default Page



