import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/productos.module.css'

const Producto = ({ producto }) => {

  const { descripcion, imagen, nombre, precio, url } = producto;

  return (
    <div className={ styles.producto }>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen producto ${nombre}`}/>
      <div className={ styles.contenido }>
        <h3>{ nombre }</h3>
        <p className={ styles.descripcion }>{ descripcion }</p>
        <p className={ styles.precio }>${ precio }</p>
        <Link href={`/productos/${url}`} className={ styles.enlace }>
            Ver producto
        </Link>
      </div>
    </div>
  )
}

export default Producto