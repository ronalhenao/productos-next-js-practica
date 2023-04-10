import React from 'react'
import Image from 'next/image'
import Layout from "components/layout";
import styles from '@/styles/nosotros.module.css'

const About = () => {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, productos, tienda de productos'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        <div className={ styles.contenido }>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros'/>
          <div>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimeng essentially unchanged. passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>the printing and typeseok a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroning essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About