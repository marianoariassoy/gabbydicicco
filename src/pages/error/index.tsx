import { useEffect } from 'react'
import Layout from '../../layout/Layout'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco'
  }, [])

  return (
    <Layout>
      <div className='w-full max-w-7xl m-auto px-6 text-xl pt-12'>No se encontro la página solicitada.</div>
    </Layout>
  )
}

export default Index
