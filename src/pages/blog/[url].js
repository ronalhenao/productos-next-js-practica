import React from 'react'
import Layout from "components/layout";
import Image from 'next/image'
import { formatearfecha } from '@/utils/helpers'
import styles from '@/styles/blog.module.css'

const Post = ({ post }) => {

  const { titulo, contenido, imagen, publishedAt } = post[0].attributes

  return (
    <Layout
      title={titulo}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
      <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`Imagen blog ${titulo}`}/>
      <div className={ styles.contenido }>
        <h3>{ titulo }</h3>
        <p className={ styles.fecha }>{ formatearfecha(publishedAt) }</p>
        <p className={ styles.texto }>{ contenido }</p>
      </div>
    </article>
    </Layout>
  )
}

export const getServerSideProps = async ({query: {url}}) => {
  const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${ url }&populate=imagen`)
  const {data: post} = await response.json()

  console.log(post)

  return{
    props:{
      post
    }
  }
}

export default Post