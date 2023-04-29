import React from 'react'
import Layout from "components/layout";
import Producto from 'components/producto';
import styles from '@/styles/grid.module.css'

const Tienda = ({ productos }) => {

  return (
    <Layout
      title={'Tienda virtual'}
      description={'Tienda, productos, tienda de productos'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>

        <div className={styles.grid}>
          { productos?.map(producto => (
            <Producto
              key={ producto.id }
              producto={ producto.attributes }
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

// export const getStaticProps = async () => {
//   const response = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`)
//   const {data: productos} = await response.json()

//   return{
//     props:{
//       productos
//     }
//   }
// }

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`)
  const {data: productos} = await response.json()

  return{
    props:{
      productos
    }
  }
}

export default Tienda
