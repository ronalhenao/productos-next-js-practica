import React from 'react'
import Layout from "components/layout";
import Link from 'next/link';

const Pagina404 = () => {
  return (
    <Layout
      title={`Página no encontrada`}
    >
      <p className='error'>Página No encontrada</p>
      <Link href='/' className='error-enlace'>
        Ir a Inicio
      </Link>
    </Layout>
  )
}

export default Pagina404