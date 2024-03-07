import React from 'react'

import {data} from "./faqsData"


import styles from "./faqs.module.css"
import FaqItem from './FaqItem'
const Faqs = () => {
  return (
   <section className={styles.section}>

    <h2>Frequently Asked Questions</h2>
    <p>Find answers to frequently asked questions below. Contact me if you have more questions.</p>
     <div className={`container ${styles.container}`}>
     {data.map(({id, description, title}) => 
    <FaqItem  key={id} title={title} description = {description}> </FaqItem >)}
     </div>
   </section>
  )
}

export default Faqs


