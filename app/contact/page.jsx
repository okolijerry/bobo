import React from 'react'

import SectionHeader from '../components/section-header/SectionHeader'
import { MdOutlineEmail } from 'react-icons/md'
import {BsWhatsapp} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri" 

import styles from "./contact.module.css"
const Contact = () => {
  return (
 <section>
  <SectionHeader title="Get In Touch" subtitle="Contact me via any of the list below" />

  <div className={`container ${styles.container}`}>

    <a href="mailto:okolijerryneche@gmail.com" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <MdOutlineEmail className={styles.contactIcon}/>
    </a>

    <a href="https://twitter.com/jerryNeche/" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <RiMessengerLine className={styles.contactIcon}/>
    </a>

    <a href="https://wa.me/+2349025579441" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <BsWhatsapp className={styles.contactIcon}/>
    </a>

  </div>
 </section>
  )
}

export default Contact


