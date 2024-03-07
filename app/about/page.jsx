import React from 'react'
import Image from "next/image";
import AboutImage from "../assets/about.jpg";
import styles from "./about.module.css"
import SectionHeader from '@/app/components/section-header/SectionHeader'
const Page = () => {
  return (
    <section >
    <SectionHeader title="About Me" subtitle="Who I am and what I do" />
    <div className={`container ${styles.container}`}>
      <article className={styles.image}>

        <Image src={AboutImage}  alt='About Image'/>

      </article>

      <article className={styles.aboutContent}>

        <h4>My name is Jerry, and I&apos;m a developer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus eum pariatur quibusdam mollitia aliquam? Iure, soluta molestiae. Animi, voluptatem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at voluptates ea laudantium omnis ipsum id recusandae? Impedit dolorum voluptas soluta quaerat praesentium dicta porro?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt omnis, voluptatem quae illo magni est iusto dolores id dolorum ullam ad rerum vero assumenda obcaecati esse quis, laudantium porro iste neque nisi fugiat maiores amet aperiam! Eius, expedita velit!</p>
        <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`} download rel='noopener noreferrer'>Download CV</a>

      </article>

    </div>
    </section>
  )
}

export default Page
