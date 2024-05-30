import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Top from '../../components/Top'
import Form from './Form'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Contacto'
    const body = document.querySelector('body')
    body?.classList.add('bg-secondary')
    return () => body?.classList.remove('bg-secondary')
  }, [])

  return (
    <Layout>
      <Top />
      <section className='mt-9'>
        <div className='w-full max-w-7xl m-auto px-6 flex flex-col lg:flex-row'>
          <div className='lg:w-2/6'></div>
          <div className='lg:w-4/6 pt-12 lg:pt-32 fade-in'>
            <Form />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
