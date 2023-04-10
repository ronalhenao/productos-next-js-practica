import React from 'react'
import Layout from "components/layout";
import ListadoProductos from 'components/listadoProductos';

const Tienda = () => {
  return (
    <Layout
      title={'Tienda virtual'}
      description={'Tienda, productos, tienda de productos'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>

        <ListadoProductos 
        
        />
      </main>
    </Layout>
  )
}

export default Tienda