import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Item from './Item'
import Top from '../../components/Top'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Index = () => {
  const { data, loading } = useFetch(`/prensa`)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Gabby De Cicco - Prensa'
  }, [])

  return (
    <Layout>
      <Top />
      {loading ? (
        <Loader />
      ) : (
        <div className='w-full max-w-7xl m-auto [&>a:last-child]:border-0 '>
          {data.map(item => (
            <Item
              key={item.id}
              data={item}
            />
          ))}
        </div>
      )}
    </Layout>
  )
}

export default Index
