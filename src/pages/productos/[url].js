import { useState, React } from 'react'
import Layout from "components/layout";
import Image from 'next/image'
import styles from '../../styles/productos.module.css'

const ProductoItem = ({ producto, agregarCarrito }) => {

  const [cantidad, setCantidad] = useState(0)

  const { descripcion, imagen, nombre, precio } = producto[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault()

    if( cantidad < 1 ) {
      alert('cantidad no valida')
      return
    }

    // Construir objeto
    const productoSeleccionado = {
      id: producto[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    // Pasando la información
    agregarCarrito( productoSeleccionado )
  }

  return (
    <Layout
      title={`Producto ${nombre}`}
    >
      <div className={ styles.producto }>
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen producto ${nombre}`}/>
        <div className={ styles.contenido }>
          <h3>{ nombre }</h3>
          <p className={ styles.descripcion }>{ descripcion }</p>
          <p className={ styles.precio }>${ precio }</p>

          <form
            onSubmit={ handleSubmit }
            className={styles.formulario}
          >
            <label htmlFor='cantidad'>Cantidad:</label>
            <select 
              onChange={ e => setCantidad(Number(e.target.value)) }
              id='cantidad'
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input 
              type='submit'
              value='Agregar al carrito'
              className={styles.submit}
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await response.json()

  const paths = data.map(producto => ({
    params: {
      url: producto.attributes.url
    }
  }));

  console.log(paths)


  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params: {url}}) => {
  const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${ url }&populate=imagen`)
  const { data: producto } = await response.json()

  return{
    props:{
      producto
    }
  }
}

// export const getServerSideProps = async ({query: {url}}) => {
//   const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${ url }&populate=imagen`)
//   const {data: producto} = await response.json()

//   return{
//     props:{
//       producto
//     }
//   }
// }

export default ProductoItem