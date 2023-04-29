import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { formatearfecha } from '@/utils/helpers'
import styles from '@/styles/blog.module.css'

const Post = ({ post }) => {

  const { titulo, contenido, imagen, url, publishedAt } = post

  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen blog ${titulo}`}/>
      <div className={ styles.contenido }>
        <h3>{ titulo }</h3>
        <p className={ styles.fecha }>{ formatearfecha(publishedAt) }</p>
        <p className={styles.resumen}>{ contenido }</p>
        <Link href={`/blog/${ url }`} className={ styles.enlace }>Leer más</Link>
      </div>
    </article>
  )
}

export default Post