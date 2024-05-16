import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Item from './Item'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Talleres'
    const body = document.querySelector('body')
    body?.classList.add('bg-primary')
    return () => body?.classList.remove('bg-primary')
  }, [])

  return (
    <Layout>
      <section>
        <Item />
      </section>
    </Layout>
  )
}

export default Index
