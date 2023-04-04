//const inter = Inter({ subsets: ['latin'] })
import Link from "next/link";
import Layout from "components/layout";

export default function Home() {
  return (
    <>
      <Layout
        title={ 'Inicio' }
        description={ 'Blog de productos, venta de productos y más' }
      >
      </Layout>

    </>
  )
}
