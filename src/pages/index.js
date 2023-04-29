//const inter = Inter({ subsets: ['latin'] })
import Layout from "components/layout";
import Producto from 'components/producto';
import Post from 'components/post';
import Curso from "components/curso";
import styles from '@/styles/grid.module.css'

export default function Home({ productos, posts, curso }) {

  return (
    <>
      <Layout
        title={ 'Inicio' }
        description={ 'Blog de productos, venta de productos y más' }
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <div className={styles.grid}>
          { productos?.map(producto => (
            <Producto
              key={ producto.id }
              producto={ producto.attributes }
            />
          ))}
        </div>
        </main>

        <Curso 
          curso={ curso.attributes }
        />

        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={ styles.grid }>
          { posts?.map(post => (
            <Post
              key={ post.id }
              post={ post.attributes }
            />
          ))}
        </div>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps = async() => {
  const urlProductos = `${process.env.API_URL}/guitarras/?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts/?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso/?populate=imagen`

  const [ resProductos, resPosts, resCurso] = await Promise.all([
    fetch(urlProductos),
    fetch(urlPosts),
    fetch(urlCurso)
  ])

  const [{data: productos}, {data: posts}, {data: curso}] = await Promise.all([
    resProductos.json(),
    resPosts.json(),
    resCurso.json()
  ])
  console.log(curso)

  return{
    props:{
      productos,
      posts,
      curso
    }
  }
}
