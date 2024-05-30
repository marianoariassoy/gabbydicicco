import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Item from './Item'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/talleres`)

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
        {loading ? (
          <div className='h-screen'>
            <Loader />
          </div>
        ) : (
          data.map(item => (
            <Item
              key={item.id}
              data={item}
            />
          ))
        )}
      </section>
    </Layout>
  )
}

export default Index
